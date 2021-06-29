---
title: "Gatsby.js에서 구글 웹폰트 이용하기"
date: "2021-06-29 11:10:00"
tags:
  - Gatsby
---

## gatsby-plugin-google-fonts 설치

보통 웹폰트를 사용하기 위해서는 html의 head에 웹폰트 링크를 넣어 사용합니다. 하지만 Gatsby.js는 빌드할 때마다 index.html을 재컴파일하므로 index.html에 넣은 웹폰트 링크가 빌드 시 덮어쓰여지게 됩니다. 따라서 플러그인을 이용해 구글 웹폰트를 로드하도록 합니다. 아래 명령어를 사용해 [gatsby-plugin-google-fonts](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-fonts/)를 설치해주세요.

`npm install gatsby-plugin-google-fonts --save`

`Noto Sans KR` 폰트를 로드한다고 했을 때 `gatsby-config.js`를 아래와 같이 수정합니다.

```js:title="gatsby-config.js"
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto+Sans+KR\:100,300,400,500,700,900`
          ],
        display: "swap",
      },
    },
  ]
}
```

## CSS 적용

이제 font-family에 로드한 웹폰트를 넣어 사용할 수 있습니다.

```css:title="src/style.css"
body {
  ...
  font-family: "Noto Sans KR", ...;
  ...
}
```
