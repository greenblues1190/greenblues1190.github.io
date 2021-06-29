---
title: "MERN Stack Boilerplate"
date: "2020-12-02 18:09:00"
tags:
  - MERN
---

[github.com/greenblues1190/MERN-stack-boilerplate](https://github.com/greenblues1190/MERN-stack-boilerplate)

---

## 사용법

1. `/server/config/dev.js` 추가

2. `npm run dev` 으로 서버와 클라이언트 실행

Landing Page -> http://localhost:3000/

Login Page -> http://localhost:3000/login

Register Page -> http://localhost:3000/register

---

## MERN Stack이란?

- MongoDB : 데이터베이스

- Express : 서버

- React : 프론트

- Node.js : 네트워크

패키지 설치 : `npm install <package-name> --save`\[footnote\]--save : dependencies에 추가하는 옵션, npm5부터 붙이지 않아도 디폴트로 설정되어 있음\[/footnote\]

## 기타 Dependencies

- 백엔드

  - mongoose : MongoDB를 활용하기 위한 모듈

  - nodemon\[footnote\]`npm install nodemon --save-dev` (--save-dev : devDependencies에 추가)\[/footnote\] : js 파일의 내용이 변경되면 이를 감지하고 서버를 재시작

  - bcrypt : 비밀번호 암호화

  - jsonwebtoken : Node.js에서 JWT를 생성하기 위한 모듈

  - body-parser\[footnote\]express에 빌트인되어 따로 임포트할 필요없음. 출처[Express Docs](https://expressjs.com/en/4x/api.html#express-json-middleware)\[/footnote\] : POST req의 파라미터를 쉽게 읽기 위한 parser

  - cookie-parser : 요청된 쿠키를 쉽게 읽기 위한 parser

  - concurretly : 다수의 커맨드를 동시에 실행할 수 있도록 하는 라이브러리, 서버와 클라이언트를 같이 실행시키기 위함

- 프론트엔드

  - create-react-app (npx create-react-app.)

  - babel\[footnote\]create-react-app에 포함되어 있음\[/footnote\] : ES6 이상의 최신 문법으로 작성한 자바스크립트 코드를 최신 문법을 지원하지 않는 실행 환경에서 동작하도록 하는 transpiler

  - webpack\[footnote\]create-react-app에 포함되어 있음\[/footnote\]

  - react-router-dom

  - axios : node.js와 브라우저를 위한 http통신 라이브러리

  - ant-design : React UI 라이브러리

  - redux : state 관리 라이브러리

  - react-redux (version > 7.1)

  - redux-promise : redux store가 promise를 accept할 수 있게 하기 위한 middleware

  - redux-thunk : redux store가 function를 accept할 수 있게 하기 위한 middleware

---

## 에러 로그

### 2020.12.07 깃 푸시 에러

```shell
user$ git push -u origin master
react-blog abc$ git push origin master
error: src refspec master does not match any.
error: failed to push some refs to 'https://github.com/greenblues1190/react-blog.git'
```

`git show-ref`으로 refs를 확인하니 최근 깃허브 기본 생성 브랜치 이름이 master에서 main으로 바뀜에 따라 ref이 `refs/heads/main`으로 되어있었다. `git push -u origin main`을 쓰니 에러없이 푸시되었다.
