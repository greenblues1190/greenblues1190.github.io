---
title: "MERN Stack Boilerplate"
date: "2020-12-02 18:09:00"
tags:
  - MERN
---

John Ahn님의 기초 노드 리액트 강의를 들으며 따라 구현한 MERN 스택 Boilerplate이다. Node.js, 프론트엔드 프레임워크가 무엇인지, 프론트와 서버가 데이터를 주고 받는 로직 등 현재의 웹 개발 환경에 대해 기초적인 이해를 쌓을 수 있었다. 상태 관리를 위해 왜 redux를 쓰면 좋은지, webpack으로 번들링을 하는 이유가 무엇인지, cors가 필요한 이유가 무엇인지, 그리고 middleware, auth 등 새로운 개념들이 아직 어렵다.

https://github.com/greenblues1190/MERN-stack-boilerplate

---

## 로컬 실행 시 사용법

1. MongoDB api key 값을 `/server/config/dev.js`에 추가

2. `npm run dev`를 실행하여 서버와 클라이언트 시작. nodemon을 이용하여 소스가 수정될 때 자동으로 서버가 재시작된다.

Landing Page: http://localhost:3000/

Login Page: http://localhost:3000/login

Register Page: http://localhost:3000/register

---

## MERN Stack이란?

- **M**ongoDB: 데이터베이스

- **E**xpress: Node.js를 위한 웹 프레임워크

- **R**eact: 프론트엔드 프레임워크

- **N**ode.js: 자바스크립트 런타임 환경 (런타임이 무엇인지 검색 필요)

## 기타 Dependencies

Node.js 패키지 설치: `npm install <package-name> --save`[^1] 

### 백엔드

  - mongoose: MongoDB를 활용하기 위한 모듈

  - nodemon[^2]: js 파일의 내용이 변경되면 이를 감지하고 서버를 재시작

  - bcrypt: 비밀번호 암호화

  - jsonwebtoken: Node.js에서 JWT를 생성하기 위한 모듈

  - body-parser[^3]: POST req의 파라미터를 쉽게 읽기 위한 parser

  - cookie-parser: 요청된 쿠키를 쉽게 읽기 위한 parser

  - concurretly: 다수의 커맨드를 동시에 실행할 수 있도록 하는 라이브러리, 서버와 클라이언트를 같이 실행시키기 위함

### 프론트엔드

  - create-react-app: react boilerplate. `npx create-react-app .`

  - babel[^4]: ES6 이상의 최신 문법으로 작성한 자바스크립트 코드를 최신 문법을 지원하지 않는 실행 환경에서 동작하도록 바꿔주는 transpiler

  - webpack[^5]: 모듈 번들러 (어떤 일을 하는지 공부 필요)

  - react-router-dom: 라우팅 처리

  - axios: node.js와 브라우저를 위한 HTTP 통신 라이브러리

  - ant-design: React UI 라이브러리

  - redux: state 관리 라이브러리 (어떤 일을 하는지 공부 필요)

  - react-redux (version > 7.1) (왜 redux가 있는데 react-redux까지 설치해야하는지 궁금)

  - redux-promise: redux store가 promise를 accept할 수 있게 하기 위한 middleware (middleware가 무엇인지 공부 필요)

  - redux-thunk: redux store가 function를 accept할 수 있게 하기 위한 middleware

[^1]: `--save`: dependencies에 추가하는 옵션, npm5부터 붙이지 않아도 디폴트로 설정되어 있음

[^2]: `npm install nodemon --save-dev`

[^3]: [Express에 빌트인되어 있어 따로 임포트할 필요없음](https://expressjs.com/en/4x/api.html#express-json-middleware)

[^4]: create-react-app에 포함되어 있음

[^5]: create-react-app에 포함되어 있음