---
title: "코드스피츠 85 - 거침없는 자바스크립트 정리"
date: "2021-07-08 14:25:00"
tags:
  - Javascript
---

[코드스피츠 85 거침없는 자바스크립트](https://www.youtube.com/playlist?list=PLBNdLLaRx_rImvbuZnfO-Ecv9OpuCNoCl)

---

## 1강

### 자바스크립트 개괄

**ES6에서 일어난 일**

- Class, Object Literal이 새롭게 정의됨
- Arrow 함수: 기존 함수가 클래스로 대체하는 기능까지 갖고 있어서 무거웠던 것에 비해 Arrow 함수는 순수한 함수만 지향하기 때문에 순수한 함수를 만들 수 있음
- Iterator, Generator, For of
- const, let
- destructuring, rest, spread, 에 더하여 undefined의 재정의
- Template string
- Symbol, Promise, Map, Set, WeakMap, WeakSet, Proxy, Reflect 내장객체 추가

**ES7~10, Stage 3**

- 7: 중첩된 rest 해체 *(const [a, ...[b, ...c] = [1. 2, 3, 4] (a = 1, b = 2, c = [3, 4])*
- 8: **async/await**, **shared memory**[^1], **atomics**
- 9: object 해체, **asynchronous iterators**
- 10: optional catch
- Stage 3 (11): BigInt, globalThis, **top level await**, class field, private field/method, optional chaining *(?.)*, nullish coalescing *(??)*, WeakReference

### Program

**Program & Timing, 그리고 자바스크립트**

Timing|Javascript
---|---
Language code|ES2020, TypeScript...
Machine language|Transpiler
File|File & Deploy
Load|Browser load, Broswer parsing
Run|Run (Browser load, Browser parsing, Run 반복...)
Terminate|Browser close

**Runtime Details**

- Essintial definition loading
- Vtable mapping
- Run
- Runtime definition loading
- Run
- (Runtime definition loading, Run 반복...)

**자바스크립트 Runtime Details**

자바스크립트에도 runtime과 declare time을 나눌 수 있는 기준이 존재한다.

- Declare base functions, classes...
- Declare extended functions, classes... *(declare time)*
- Client code execute *(runtime)*
- (Declare extended functions, classess...; Client code execute 반복)

### State Control

**직접 참조 vs 간접 참조**

직접 참조 시 의존성이 생기므로 데이터가 변경되면 에러가 발생할 위험이 있다.

```c:title=directive_reference
a = "TEST"
b = &a
c = &b
// b == c
...
d = "ABC"
b = &d
// b != c // highlight-line
```

간접 참조 시 참조의 공개 안정성이 확보되어 데이터가 변경되어도 싱크가 깨지지 않는다.

```c:title=indirective_reference
a = "TEST"
b = { target = &a }
c = &b
// b == c
...
d = "ABC"
b.target = &d
// b == c // highlight-line
```

런타임에 추가적인 메모리 연산을 함으로써 참조 간의 컨텍스트가 깨지지 않게 만들 수 있다. 즉, 변화에 더 강하다. 이 원리를 응용하여 연결 리스트, 디자인 패턴, 그리고 객체지향의 인터페이스 및 추상클래스를 만든다.

### Flow Control

**Sync flow control**

Sync Flow: 메모리에 적재된 명령이 순차적으로 실행됨.

Sync Flow Control: Goto를 통해 명령의 위치를 이동함.

Sub Flow: 함수 등을 통해 별도의 명령셋을 여러번 실행함.

DIP과 IOC [참고](https://justhackem.wordpress.com/2016/05/13/dependency-inversion-terms/)

**Blocking**

Sync Flow가 실행되는 동안 다른 일을 할 수 없는 현상

노이만 머신의 메모리에 적재된 명령은 모두 Blocking 코드. Non-blocking 코드는 원래 존재하지 않음.

**Blocking을 줄이기 위해서는...**

- ~~Sync Flow를 짧게 하기~~
- **다른 스레드에 Sync Flow 떠넘기기 (메인 스레드의 Sync Flow를 최대한 줄이기)**

멀티스레딩을 사용하면 *concurrency 이슈*가 생김. 동기화 명령 사이에 이벤트 루프가 작동하여 다른 스레드의 작업을 기다림.

Non-blocking: Sync Flow가 납득할만한 시간 내에 종료되는 것. Non-blocking을 추구하는 것은 메인스레드를 최소화하는 것과 동일하다.

### Async

**Sync & Async**

Sync: 서브루틴이 즉시 값을 반환함

Async: 서브루틴이 **다른 수단**[^2]으로 값을 반환함

예를들어 함수가 Promise 객체를 즉시 반환하면 원하는 값이 아닌 Promise 객체를 반환했으므로 Async 함수이다.

다른 수단?

**Async 단점**

- 호출결과가 즉시 반환되지 않으므로 현재의 Sync Flow가 종료됨
- 그 결과 현재의 어휘공간[^3] 내의 상태를 결과시점에 사용할 수 없음
- 요청 시의 상태를 별도로 결과시점에 전달할 부가장치 필요

**Sync의 장점 + Async의 장점**

인간이 Sync 로직으로 사고하는 것이 일반적이기 때문에 Sync 로직으로 Async를 사용할 수 있게 함. 하지만 Sync Flow가 어긋나므로 이전 Sync Flow의 상태를 기억하여 이어줄 장치가 필요하다. 상태를 기억하고 이어주는 장치를 Continuation이라 하고 이를 활용하는 프로그래밍 스타일이 **C**ontinuation **P**assing **S**tyle이다.

어렵다... 어려워...

[^1]: shared memory는 2018년 스펙터 오류로 인해 셧다운되었다가 패치 이후 정상 동작한다.

[^2]: Promise, Callback function, Iterations *(Async iterator)*

[^3]: 검색해보니 어휘적 환경과 동일한 용어인 것 같은데 어떤 것인지 공부 필요