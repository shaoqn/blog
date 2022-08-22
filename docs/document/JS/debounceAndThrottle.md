# 防抖和节流

函数防抖和函数节流是优化高频率执行js代码的一种手段。

js中的一些事件如浏览器的resize、scroll，鼠标的mousemove、mouseover，input输入框的keypress等事件在触发时，会不断地调用绑定在事件上的回调函数，极大地浪费资源，降低前端性能。为了优化体验，需要对这类事件进行调用次数的限制。
## 防抖
用户触发事件过于频繁，只要最后一次事件的操作。
```
let input = document.querySelect("input");
let t = null;
input.oninput = function(){
	if (t!=null) {
		clearTimeout(t);
	}
	t = setTimeout(() => {
		console.log(this.value);
	}, 500);
}
```

优化代码：使用闭包解决
```
let input = document.querySelect("input");
input.oninput =debounce(function(){
	console.log(this.value);
}, 500);
function debounce(fn, delay) {
	let t = null;
	return function(){
		if (t!=null) {
			clearTimeout(t);
		}
		t = setTimeout(() => {
			console.log(this, "this");
			fn.call(this);
		}, delay);
	}
}
```

## 节流
控制高频事件执行次数。每隔一段时间，执行一次函数。
```
let flag = true;
window.onscroll = function() {
	if(flag) {
		setTimeout(()=> {
			console.log("hello world");
			flag = true;
		}, 500);
	}
	flag = false;
}
```
优化代码：使用闭包解决
```
window.onscroll = throttle(function(){
	console.log("hello world");
}, 500 )
function throttle(fn, delay) {
	let flag = true;
	return function() {
		if(flag) {
			setTimeout(()=> {
				fn.call(this)
				flag = true;
			}, delay);
		}
		flag = false;
	}
}
```

## 异同比较
**相同点**：
- 都可以通过使用 setTimeout 实现。
- 目的都是，降低回调执行频率。节省计算资源。

**不同点**：
- 函数防抖，在一段连续操作结束后，处理回调，利用clearTimeout 和 setTimeout实现。函数节流，在一段连续操作中，每一段时间只执行一次，频率较高的事件中使用来提高性能。
- 函数防抖关注一定时间连续触发的事件只在最后执行一次，而函数节流侧重于一段时间内只执行一次。

## 常见应用场景
**连续的事件，只需触发一次回调的场景有：**
- 搜索框搜索输入。只需用户最后一次输入完，再发送请求
- 手机号、邮箱验证输入检测
- 窗口大小Resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。
- 函数节流的应用场景:

**间隔一段时间执行一次回调的场景有：**
- 滚动加载，加载更多或滚到底部监听
- 谷歌搜索框，搜索联想功能
- 高频点击提交，表单重复提交
