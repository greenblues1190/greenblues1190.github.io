---
title: "코드스피츠 85 - 거침없는 자바스크립트 정리"
date: "2021-07-08 14:25:00"
tags:
  - Javascript
---

[코드스피츠 85 거침없는 자바스크립트](https://www.youtube.com/playlist?list=PLBNdLLaRx_rImvbuZnfO-Ecv9OpuCNoCl)

---

## 자바스크립트 개괄

### ES6에서 일어난 일

- Class, Object Literal이 새롭게 정의됨
- Arrow 함수: 기존 함수가 클래스로 대체하는 기능까지 갖고 있어서 무거웠던 것에 비해 Arrow 함수는 순수한 함수만 지향하기 때문에 순수한 함수를 만들 수 있음.
- Iterator, Generator, For of
- const, let
- destructuring, rest, spread, 에 더하여 undefined의 재정의
- Template string
- Symbol, Promise, Map, Set, WeakMap, WeakSet, Proxy, Reflect 내장객체 추가

### ES7~10, Stage 3

- 7 - 중첩된 rest 해체 *(const [a, ...[b, ...c] = [1. 2, 3, 4] (a = 1, b = 2, c = [3, 4])*
- 8 - **async/await**, **shared memory**, **atomics** (shared memory는 2018년 스펙터 오류로 인해 셧다운되었다가 패치 이후 정상 동작한다.)
- 9 - object 해체, **asynchronous iterators**
- 10 - optional catch
Stage 3 (11) - BigInt, globalThis, **top level await**, class field, private field/method, optional chaining(?.), nullish coalescing(??), WeakReference

## Program

### Program & Timing, 그리고 자바스크립트

Timing|Javascript
---|---
Language code|ES2020, TypeScript...
Machine language|Transpiler
File|File & Deploy
Load|Browser load, Broswer parsing
Run|Run (Browser load, Browser parsing, Run 반복)
Terminate|Browser close

### Runtime Details

- essintial definition loading
- vtable mapping
- run
- runtime definition loading
- run
- (runtime definition loading, run 반복...)

### 자바스크립트 Runtime Details

자바스크립트에도 runtime과declare time을 나눌 수 있는 기준이 존재함.

- declare base functions, classes...
- declare extended functions, classes... *(declare time)*
- client code execute *(runtime)*
- (declare extended functions, classess..., client code execute 반복)

## State Control
