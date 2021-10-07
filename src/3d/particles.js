var settings = require('../core/settings');
var THREE = require('three');
var shaderParse = require('../helpers/shaderParse');
var motionBlur = require('./postprocessing/motionBlur/motionBlur');
var glslify = require('glslify');
var simulator = require('./simulator');
var quickLoader = require('quick-loader');

var undef;

var mesh = exports.mesh = undef;
exports.init = init;
exports.resize = resize;
exports.preRender = preRender;
exports.update = update;


var _depthRenderTarget ;

var _camera;
var _renderer;
var _particleGeometry;

var _quadScene;
var _quadCamera;

var _particles;
var _particlesMaterial;
var _particlesScene;
var _additiveRenderTarget;

var _blurHMaterial;
var _blurVMaterial;
var _blurRenderTarget;

var _resolution;
var _width;
var _height;
var _baseInset;

var sphereTextures = {};

var TEXTURE_WIDTH;
var TEXTURE_HEIGHT;
var AMOUNT;

function init(renderer, camera) {

    TEXTURE_WIDTH = settings.simulatorTextureWidth;
    TEXTURE_HEIGHT = settings.simulatorTextureHeight;
    AMOUNT = TEXTURE_WIDTH * TEXTURE_HEIGHT;

    _baseInset = settings.inset;

    _quadCamera = new THREE.Camera();
    _quadCamera.position.z = 1;
    _particlesScene = new THREE.Scene();
    _quadScene = new THREE.Scene();
    _camera = camera;
    _renderer = renderer;
    _resolution = new THREE.Vector2();

    _initGeometry();
    _initDepthRenderTarget();
    _initAdditiveRenderTarget();
    _initBlurRenderTarget();

    _particles = new THREE.Points(_particleGeometry, _additiveRenderTarget.material);
    _particles.frustumCulled = false;
    _particlesScene.add(_particles);

    _addSphereTexture('default', quickLoader.add('images/matcap.jpg', {onLoad: _onSphereMapLoad.bind('default')}).content);
    _addSphereTexture('metal', settings.sphereMap);
    _addSphereTexture('plastic', quickLoader.add('images/matcap_plastic.jpg', {onLoad: _onSphereMapLoad.bind('plastic')}).content);
    sphereTextures.metal.needsUpdate = true;

    quickLoader.start();

    var geomtry =  new THREE.PlaneBufferGeometry( 2, 2 );
    _particlesMaterial = new THREE.ShaderMaterial({
        uniforms: {
            uDepth : {type: 't', value: _depthRenderTarget},
            uInset: {type: 'f', value: 0},
            uWashout: {type: 'f', value: 0},
            uAdditive : {type: 't', value: _additiveRenderTarget},
            uSphereMap : {type: 't', value: sphereTextures.default},
            uResolution : {type: 'v2', value: _resolution},
            uFogColor: {type: 'c', value: new THREE.Color()}
        },
        transparent: true,
        depthWrite: false,
        vertexShader: shaderParse(glslify('../glsl/particles.vert')),
        fragmentShader: shaderParse(glslify('../glsl/particles.frag'))
    });
    mesh = exports.mesh = new THREE.Mesh(geomtry, _particlesMaterial);
    _quadScene.add(mesh);
}

function _addSphereTexture(id, img) {
    var texture = sphereTextures[id] = new THREE.Texture(img);
    texture.anisotropy = _renderer.getMaxAnisotropy();
    texture.flipY = false;
    return texture;
}

function _onSphereMapLoad() {
    sphereTextures[this].needsUpdate = true;
}

function _initGeometry() {

    var position = new Float32Array(AMOUNT * 3);
    var i3;
    for(var i = 0; i < AMOUNT; i++ ) {
        i3 = i * 3;
        position[i3 + 0] = ((i % TEXTURE_WIDTH) + 0.5) / TEXTURE_WIDTH;
        position[i3 + 1] = ((~~(i / TEXTURE_WIDTH)) + 0.5) / TEXTURE_HEIGHT;
        position[i3 + 2] = 400 + Math.pow(Math.random(), 5) * 750; // size
    }
    _particleGeometry = new THREE.BufferGeometry();
    _particleGeometry.addAttribute( 'position', new THREE.BufferAttribute( position, 3 ));

}

function _initDepthRenderTarget() {
    var material = new THREE.ShaderMaterial({
        uniforms: {
            uParticleSize : {type: 'f', value: settings.particleSize},
            uTexturePosition: {type: 't', value: undef},
            uTexturePrevPosition: {type: 't', value: undef},
            uCameraPosition: {type: 'v3', value: _camera.position},
            uPrevModelViewMatrix: {type: 'm4', value: new THREE.Matrix4()},
            uMotionMultiplier: {type: 'f', value: 1}
        },
        vertexShader: shaderParse(glslify('../glsl/particlesDepth.vert')),
        fragmentShader: shaderParse(glslify('../glsl/particlesDepth.frag')),
        blending: THREE.NoBlending
    });

    _depthRenderTarget = new THREE.WebGLRenderTarget(1, 1, {
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat,
        type: THREE.FloatType,
        stencilBuffer: false
    });
    _depthRenderTarget.material = material;
    settings.distanceMap = _depthRenderTarget;
}

function _initAdditiveRenderTarget() {
    var material = new THREE.ShaderMaterial({
        uniforms: {
            uParticleSize : {type: 'f', value: settings.particleSize},
            uTexturePosition: {type: 't', value: undef},
            uDepth: {type: 't', value: _depthRenderTarget},
            uInset: {type: 'f', value: 0},
            uResolution: {type: 'v2', value: _resolution},
            uCameraPosition: {type: 'v3', value: _camera.position}
        },
        vertexShader: shaderParse(glslify('../glsl/particlesAdditive.vert')),
        fragmentShader: shaderParse(glslify('../glsl/particlesAdditive.frag')),

        blending : THREE.CustomBlending,
        blendEquation : THREE.AddEquation,
        blendSrc : THREE.OneFactor,
        blendDst : THREE.OneFactor ,
        blendEquationAlpha : THREE.AddEquation,
        blendSrcAlpha : THREE.OneFactor,
        blendDstAlpha : THREE.OneFactor,
        transparent: true
    });

    _additiveRenderTarget = new THREE.WebGLRenderTarget(1, 1, {
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat,
        type: THREE.FloatType,
        depthWrite: false,
        depthBuffer: false,
        stencilBuffer: false
    });
    _additiveRenderTarget.material = material;
}

function _initBlurRenderTarget() {

    _blurHMaterial = new THREE.ShaderMaterial({
        uniforms: {
            tDiffuse : {type: 't', value: _additiveRenderTarget},
            uResolution : {type: 'v2', value: _resolution},
            uOffset : {type: 'f', value: 0},
            uBlurZ : {type: 'f', value: 0}
        },
        vertexShader: shaderParse(glslify('../glsl/particles.vert')),
        fragmentShader: shaderParse(glslify('../glsl/blurH.frag')),
        transparent: true,
        blending: THREE.NoBlending
    });

    _blurRenderTarget = new THREE.WebGLRenderTarget(1, 1, {
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat,
        type: THREE.FloatType,
        stencilBuffer: false
    });

    _blurVMaterial = new THREE.ShaderMaterial({
        uniforms: {
            tDiffuse : {type: 't', value: _blurRenderTarget},
            uResolution : {type: 'v2', value: _resolution},
            uOffset : {type: 'f', value: 0},
            uBlurZ : {type: 'f', value: 0}
        },
        vertexShader: shaderParse(glslify('../glsl/particles.vert')),
        fragmentShader: shaderParse(glslify('../glsl/blurV.frag')),
        transparent: true,
        blending: THREE.NoBlending
    });
}

function resize(width, height) {
    _width = width;
    _height = height;
    _resolution.set(width, height);

    _depthRenderTarget.setSize(width, height);
    _additiveRenderTarget.setSize(width, height);
    _blurRenderTarget.setSize(width, height);
}

function preRender() {
    var autoClearColor = _renderer.autoClearColor;
    var clearColor = _renderer.getClearColor().getHex();
    var clearAlpha = _renderer.getClearAlpha();

    _renderer.setClearColor(0, 1);
    _renderer.clearTarget(_depthRenderTarget, true, true, true);
    _particles.material = _depthRenderTarget.material;
    _depthRenderTarget.material.uniforms.uTexturePrevPosition.value = simulator.prevPositionRenderTarget;
    _depthRenderTarget.material.uniforms.uTexturePosition.value = simulator.positionRenderTarget;
    _depthRenderTarget.material.uniforms.uParticleSize.value = settings.particleSize;
    _renderer.render( _particlesScene, _camera, _depthRenderTarget );
    // _renderer.render( _particlesScene, _camera );

    if(!motionBlur.skipMatrixUpdate) {
        _depthRenderTarget.material.uniforms.uPrevModelViewMatrix.value.copy(_particles.modelViewMatrix);
    }

    _baseInset += (settings.inset - _baseInset) * 0.05;

    _renderer.setClearColor(0, 0);
    _renderer.clearTarget(_additiveRenderTarget, true, true, true);
    _particles.material = _additiveRenderTarget.material;
    _additiveRenderTarget.material.uniforms.uInset.value = _baseInset + settings.insetExtra;
    _additiveRenderTarget.material.uniforms.uParticleSize.value = settings.particleSize;
    _additiveRenderTarget.material.uniforms.uTexturePosition.value = simulator.positionRenderTarget;
    _renderer.render( _particlesScene, _camera, _additiveRenderTarget );
    // _renderer.render( _particlesScene, _camera );

    var blurRadius = settings.blur;

    if(blurRadius) {
        var uniforms = _blurHMaterial.uniforms;
        uniforms.uOffset.value += (blurRadius / _width - uniforms.uOffset.value) * 0.05;
        uniforms.uBlurZ.value += (settings.blurZ - uniforms.uBlurZ.value) * 0.05;

        uniforms = _blurVMaterial.uniforms;
        uniforms.uOffset.value += (blurRadius / _height - uniforms.uOffset.value) * 0.05;
        uniforms.uBlurZ.value += (settings.blurZ - uniforms.uBlurZ.value) * 0.05;

        _renderer.clearTarget(_blurRenderTarget, true, true, true);
        mesh.material = _blurHMaterial;
        _renderer.render( _quadScene, _quadCamera, _blurRenderTarget );

        _renderer.clearTarget(_additiveRenderTarget, true, true, true);
        mesh.material = _blurVMaterial;
        _renderer.render( _quadScene, _quadCamera, _additiveRenderTarget );
        mesh.material = _particlesMaterial;
    }

    _renderer.setClearColor(clearColor, clearAlpha);
    _renderer.autoClearColor = autoClearColor;
    _renderer.setViewport(0, 0, _width, _height);

}

function update(renderTarget) {
    var autoClearColor = _renderer.autoClearColor;
    var clearColor = _renderer.getClearColor().getHex();
    var clearAlpha = _renderer.getClearAlpha();
    _renderer.autoClearColor = false;

    var uniforms = _particlesMaterial.uniforms;
    uniforms.uSphereMap.value = sphereTextures[settings.matcap];
    uniforms.uInset.value = _additiveRenderTarget.material.uniforms.uInset.value;
    uniforms.uWashout.value += (settings.washout - uniforms.uWashout.value) * 0.05;
    _renderer.render( _quadScene, _quadCamera, renderTarget );

    _renderer.setClearColor(clearColor, clearAlpha);
    _renderer.autoClearColor = autoClearColor;
}
