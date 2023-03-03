# Web Renew of ZER01NE DAY 2019

'제로원데이 2019'를 대표하는 영상은 '제로원데이 2019'의 아이덴티티는 물론 전체적인 분위기와 인상을 결정하고 있다. <br>
해당 영상은 2019년 서울 곳곳에 다양한 형태로 전시되어 사람들의 시선을 사로잡았고 '제로원데이 2019'를 홍보하였다.<br>
오프라인 상에 전시된 인쇄물과 홍보물 등은 시각적으로 멋진 디자인을 보여주었다.<br>
다만, 온라인 상의 '제로원데이 2019' 웹 메인 화면의 영상은 화질이 심하게 깨지는 문제가 있었다.<br>
그 원인을 분석해본 결과 '제로원데이 2019' 웹사이트 영상은 웹 상에서 파일 크기를 줄여서 로딩시간과 데이터 등을 최적화하기 위해,<br>
블가피하게 원본 파일에 의도적으로 변형을 가해 영상의 품질이 다소 훼손된 것이었다는 것을 알게되었다.<br>
해당 영상은 기술적으로는 최적의 형태였지만 시각적으로는 좋은 인상을 주지 못했다.<br>
이 문제를 해결하기위해 웹 사이트 상에서 영상이 아름다우면서 최적의 형태로 존재할 수 있는 방법을 찾아보았다.<br>
그 결과 웹 상에서 고화질의 그래픽을 최적의 형태로 구현할 수 있는 기술을 알게되었다.<br>
(바로 WebGL이라는 기술인데, WebGL은 코드로 작성된 파일의 형태로 웹에 고화질의 그래픽과 영상을 구현할 수 있는 기술이다.<br>
코드로 작성된 파일의 형태는 일반적인 이미지 포멧이나 영상 포멧에 비해 크기가 작고 조작하기도 쉽다.<br>
코드로 작성되어 이미지와 영상을 표시할 수 있는 파일의 형태로는 대표적으로 glsl, gltf, js 등이 있다. )<br>
이 프로젝트에서는 이러한 기술을 활용하여 '제로원데이 2019' 웹 사이트 영상의 특징과 이미지는 살리면서 문제점은 해결하고자 하였다.<br>
<br>
## 리뉴얼 전 웹사이트
http://zer01neday.com/2019/<br>
![1](https://user-images.githubusercontent.com/54223902/221042240-7e0497b5-d37b-4a16-b79c-f163911e60d5.png)
![2](https://user-images.githubusercontent.com/54223902/221042282-6db02f78-92cd-47fc-a8c1-b9b6abdc8f88.png)
<br>
<br>
## 리뉴얼 후 웹사이트
마우스의 움직임에 따라 움직이는 고화질의 웹사이트 
![4](https://user-images.githubusercontent.com/54223902/221042448-8c3dbc19-6663-4b10-b292-2a008a0e7131.png)
![5](https://user-images.githubusercontent.com/54223902/221042470-1564615b-5e5f-4353-a4df-1d48ab32235f.png)
![6](https://user-images.githubusercontent.com/54223902/221042478-909f08bc-6f0b-41cc-b6e1-4558a45ae1f0.png)
<br>
<br>
# 참고했던 오픈소스 
## Icicle Bubbles

![](https://raw.githubusercontent.com/edankwan/Icicle-Bubbles/master/app/images/screenshot.jpg)

[Live demo](http://www.edankwan.com/experiments/icicle-bubbles/) | [Video](https://www.youtube.com/watch?v=EWe-3dbFkBY)

**Icicle Bubbles** is a WebGL experience by Edan Kwan. Unlike traditional 3D metaball effect, it only blends the depth. Which means there is no transparency support but in that case there is no need to deal with the blocked mesh. For the light scattering effect, it is faked by the depth blend and the depth blur with upside/downside rendering.

For more information about the cheap metaball technique, please check out my **[blog post](http://blog.edankwan.com/post/fake-and-cheap-3d-metaball)**.

## Development and deployment
- dev: `node dev`
- deploy: `node build`

## License
This experiment is under MIT License.


