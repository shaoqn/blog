# call、apply、bind
思路：
1. 将方法挂在到对象上
2. 将挂载以后的方法调用
3. 将这个方法从对象上删除
```
let obj = {
	name: "小明",
	introduce: function(...args) {
		console.log("我的名字叫"+this.name+",今年"+args[0]+"岁，喜欢"+args[1]);
	}
}
obj.introduce(5, "绿色"); // 我的名字叫小明,今年5岁，喜欢绿色

Function.prototype.myCall = function(ctx, ...args) {
	let fn = Symbol(1);
	ctx[fn] = this;
	ctx[fn](...args);
	delete ctx[fn];
}
obj.introduce.myCall({name: "小红"}, 10, "红色"); // 我的名字叫小红,今年10岁，喜欢红色

Function.prototype.myApply = function(ctx, args = []) {
	if(args && !(args instanceof Array)) {
		throw('myApply 只接受数组作为参数')
	}
	let fn = Symbol(1);
	ctx[fn] = this;
	ctx[fn](...args);
	delete ctx[fn];
}
obj.introduce.myApply({name: "小红"}, [10, "红色"]); // 我的名字叫小红,今年10岁，喜欢红色

Function.prototype.myBind = function(ctx, ...args1) {
	return (...args2) => {
		let fn = Symbol(1);
		ctx[fn] = this;
		ctx[fn](...args1.concat(args2));
		delete ctx[fn];
	}
}
obj.introduce.myBind({name: "小红"}, 10, "红色")(); // 我的名字叫小红,今年10岁，喜欢红色
```
