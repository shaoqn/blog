# 闭包

闭包：函数嵌套函数，内部函数就是闭包

正常情况下，函数执行完成，内部变量会销毁(即释放内存空间)

闭包中，内部函数没有执行，外部函数中的变量不会被销毁，所以闭包中可以拿到外部函数中的变量。
```
function outerFun() {
   let a = 10;
   return function innerFun() {
       console.log(a);
   }
}

let fn = outerFun();
fn(); // 10
```

应用： 利用闭包实现模块化
```
let a = 10;
let b = 20;
function add() {
	return a+b;
}
function sub() {
	return a -b;
}
let result1 = add();
let result2 = sub();
console.log(result1); // 30
console.log(result2); // -10
```
模块化后：
```
let module = (function() {
	let a = 10;
	let b = 20;
	function add() {
		return a+b;
	}
	function sub() {
		return a -b;
	}

	return {
		add: add,
		sub: sub,
	}
})();
let result1 = module.add();
let result2 = module.sub();
console.log(result1); // 30
console.log(result2); // -10
```
