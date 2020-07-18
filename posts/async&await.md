---
title: '从Promise 快进到 async/await ' 
date: '2020-07-18'
kind: 'Tech'
---

# 从Promise 快进到 async/await 

> async 不用多说，代表这个函数有异步操作,关键是await如何理解


可以根据一个栗子引出思考

```js
async function async1(){
  await async2()
  console.log('async1 end')
}
async function async2(){} 
async1();
new Promise(function(resolve){
  resolve();
}).then(function(){
  console.log('promise2')
}).then(function() {
  console.log('promise3')
}).then(function() {
  console.log('promise4')
})
```
如果你是在chrome 70 上做测试，那么返回的顺序将会是：
```console
promise2
promise3
async1 end
promise4
```

如果你在chrome canary 73 或以上测试，那么返回的将会是：
```console
async1 end
promise2
promise3
promise4
```

两个测试结果的```async1 end``` 会不一样，一个在前一个在后？

## Promise的语法糖
其实这道题问的是

> await async2()怎么理解?

又因为 ```async```函数总是返回一个promise,所以其实就是在问

> await Promise 怎么理解?

```js
async function async1(){
  await async2()
  console.log('async1 end')
}
```

等价于

```js
async function async1() {
  return new Promise(resolve => {
    resolve(async2())
  }).then(() => {
    console.log('async1 end')
  })
}
```
```js
await === new Promise(resolve => { 
    resolve('跟在你await后面的函数') 
    }).then(()=>{'await下面的代码'})
```
但是这样又引申了一个问题

>  ```resolve(async2())``` 并不等于 ```Promise.resolve(async2())```
> 
**两种情况** : await后面跟的是```promise```还是```非promise```
>因为 ```async2()``` 返回一个 ```promise```, 是一个 ```thenable``` 对象，```resolve(thenable)``` 并不等于 ```Promise.resolve(thenable)``` ，而 ```resolve(non-thenable)``` 等价于 ```Promise.resolve(non-thenable)```

### 情况1 await [promise]
> ```resolve(thenable)``` 和 ```Promise.resolve(thenable)``` 的转换关系是这样的

```js
new Promise(resolve=>{
  resolve(thenable)
}).then(()=>{...})
```

会被转换成

```js
new Promise(resolve => {
  Promise.resolve().then(() => {
    thenable.then(resolve)
  })
})
```

>多了一层 ```Promise.resolve().then()``` 包裹住了？

```js
resolve(thenable) === Promise.resolve().then(() => {
    thenable.then(resolve)
  })
```

那么对于 ```resolve(async2())```，我们可以根据规范转换成：

```js
Promise.resolve().then(() => {
    async2().then(resolve)
})
```

所以 async1 就变成了这样：

```js
async function async1() {
  return new Promise(resolve => {
    Promise.resolve().then(() => {
      async2().then(resolve)
    })
  }).then(() => {
    console.log('async1 end')
  })
}
```