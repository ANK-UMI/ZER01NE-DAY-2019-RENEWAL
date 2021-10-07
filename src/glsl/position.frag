uniform vec2 resolution;
uniform sampler2D texturePosition;
uniform sampler2D textureDefaultPosition;
uniform float time;
uniform float speed;
uniform float dieSpeed;
uniform float radius;
uniform float attraction;
uniform float initAnimation;
uniform float deltaDistance;
uniform float curlSize;
uniform vec3 mouse3d;

#pragma glslify: curl = require(./helpers/curl4)

const float DEFAULT_Y = 1000.0;

void main() {

    vec2 uv = gl_FragCoord.xy / resolution.xy;

    vec4 positionInfo = texture2D( texturePosition, uv );
    vec3 position = mix(vec3(0.0, DEFAULT_Y, 0.0), positionInfo.xyz, smoothstep(0.0, 0.3, initAnimation));
    float life = positionInfo.a - dieSpeed;
    vec3 followPosition = mix(vec3(0.0, (1.0 - initAnimation) * DEFAULT_Y, 0.0), mouse3d, smoothstep(0.2, 0.7, initAnimation));

    if(life < 0.0) {
        positionInfo = texture2D( textureDefaultPosition, uv );
        position = positionInfo.xyz * (1.0 + sin(time * 15.0) * 0.2) * 0.4 * radius;
        position.y += (1.0 - smoothstep(0.0, 0.7, initAnimation)) * DEFAULT_Y;
        position += mouse3d;
        life = 0.5 + fract(positionInfo.w * 21.4131 + time);
        // position.z -= 8192.9 * (step(-0.001, -deltaDistance) + step(-positionInfo.w, -deltaDistance * 3.5));
    } else {
        vec3 delta = followPosition - position;
        float deltaLength = length(delta);
        position += delta * (0.005 + life * 0.01) * attraction * (1.0 - smoothstep(100.0, 500.0, deltaLength));
        position += curl(position * curlSize, time * 0.2, 0.2) * speed;

    }

    gl_FragColor = vec4(position, life);

}
