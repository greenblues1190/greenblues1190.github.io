---
title: "애플 실리콘 맥 Homebrew 설치 방법"
date: "2021-01-11 16:48:00"
tags:
    - M1 Mac
    - Homebrew
---

애플 실리콘 맥에서 native Homebrew와 rosetta 2를 이용한 intel Homebrew를 설치하는 방법을 정리한 글입니다. [soffes.blog/homebrew-on-apple-silicon](https://soffes.blog/homebrew-on-apple-silicon)를 참고하였습니다.

---

## apple silicon native homebrew 설치

터미널을 열고 `/opt/homebrew` 폴더를 만들어 native homebrew를 설치한다.

```shell
$ sudo mkdir -p /opt/homebrew
$ sudo chown -R$(whoami):staff /opt/homebrew
$ cd /opt
$ curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C homebrew
```

이제 `./zshrc`에 환경변수를 설정해야한다. 초기 상태의 맥에 `~/.zshrc`가 없기 때문에 생성한다.

```shell
touch ~/.zshrc
open ~/.zshrc
```

`.zshrc`를 열었으면 다음 내용을 작성 후 저장한다.

```shell
# brew path
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
```

## intel homebrew 설치

다음은 x86\_64 homebrew를 같이 쓰는 방법이다.

터미널을 열고 Rosseta 2를 이용해 설치한다.

```shell
arch -x86_64 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

`~/.zshrc`에 다음 내용을 작성 후 저장한다.

```shell
# intel brew alias
alias ibrew='arch -x86_64 /usr/local/bin/brew'
```

이제 brew로 native homebrew를, ibrew로 intel homebrew를 이용할 수 있다.