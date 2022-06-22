# NODE JS

## what is node ?

### JS runtime

that run's JS outside of browser .
with V8.

### V8

chrome's JS compile engine.

- ND change JS code to MachineCode with V8.
- ND add abilty to JS . wrote
  with C++

- JS is single threat
- so slower than C++
- so ND is very fast.

---

#### integrated terminal = ctrl + `

#### package.JSON = npm init -y

#### command pallet = ctrl + shift + p

### search = ctrl + p

---

## http

ND module for http

add

```js
const http = require("http");
```

### usages:

### create server

used to create a server with http protocol

- has reqListener FUNC inside

```js
http.createServer((req, res) => {
  console.log(req);
});
```

### server

```js
const server = http.createServer((req, res) => {
  console.log(req);
});
```

#### listen

```js
server.listen(3000);
```

server runs in port 3000

- in ND every JS file is a module
- in Vanilla JS every Func in file , is accessible everywhere by WINDOW global object
  - in ND we don't have WINDOW and DOCUMENT

---

## require

ND global obj
