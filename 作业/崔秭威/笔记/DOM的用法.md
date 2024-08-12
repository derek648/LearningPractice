# forEach的用法

forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。

## 语法

array.forEach(callbackFn(currentValue, index, arr), thisValue)

## 参数

![image-20240808095410519](C:\Users\31066\AppData\Roaming\Typora\typora-user-images\image-20240808095410519.png)

## 其他形式的语法格式

```javascript
// 箭头函数
forEach((element) => { /* … */ })
forEach((element, index) => { /* … */ })
forEach((element, index, array) => { /* … */ })

// 回调函数
forEach(callbackFn)
forEach(callbackFn, thisArg)

// 内联回调函数
forEach(function(element) { /* … */ })
forEach(function(element, index) { /* … */ })
forEach(function(element, index, array){ /* … */ })
forEach(function(element, index, array) { /* … */ }, thisArg)
```

# DOM

## DOM获取

### 1、通过id选取元素（getElementById）

使用方法：document.getElementById(“domId”)

```html
    <div id="box">我是通过ID选择器选择的</div>
    <script>
        var divid = document.getElementById("box");
        console.log(divid);
    </script>
```

### 2、通过名称name选取元素（getElementsByName）

使用方法：document.getElementsByName(“domName”)
其中，domName为要选取元素的name属性值

```html
    <input type="text" name="input" id="input">
    <input type="text" name="input">
    <input type="text" name="input">
    <script>
        var input = document.getElementsByName("input");
        console.log(input);
        // 获取单个可以用下标获取你想要的哪个
        var input1 = document.getElementsByName("input")[0];
        console.log(input1);
    </script>
```

### 3、通过标签名选取元素（getElementsByTagName）

使用方法：element.getElementsByTagName(“tagName”)
其中，element是有效的DOM元素（包括document）
tagName是DOM元素的标签名

```html
<div></div>
<div></div>
<div></div>
<a href=""></a>
<a href=""></a>
<a href=""></a>
<script>
    var tags = document.getElementsByTagName("*");
    var divs = document.getElementsByTagName("div");
    var as = document.getElementsByTagName("a");
    console.log(tags);
    console.log(divs);
    console.log(as);
</script>
```



### 4、通过class类选取元素（getElementsByClassName）

使用方法：element.getElementsByClassName(“classNames”)
其中，element是有效的DOM元素（包括document）
classNames是CSS类名称的组合（多个类名之间用空格，可以是多个空格隔开），
如element.getElementsByClassName(“class2 class1”)将选取elements后代元素中同时应用了class1和class2样式的元素（样式名称不区分先后顺序）

```html
    <div class="box">我是第一个div</div>
    <div class="box div2">我是第二个div</div>
    <div class="box"></div>
    <script>
        var divs = document.getElementsByClassName("box");
        var div1 = document.getElementsByClassName("box")[0];
        var div2 = document.getElementsByClassName("box div2")[0];
        console.log(divs);
        console.log(div1);
        console.log(div2);
    </script>
```



### 5、通过css选择器选取元素

使用方法：document.querySelectorAll(“selector”)
其中，selector为合法的CSS选择器

```html
<div class="box">
    <ul>
        <li>
            <span>我是span元素</span>
            <a href="">我是第一个a元素</a>
            <a href="">我是第二个a元素</a>
        </li>
    </ul>
</div>
<script>
    var as = document.querySelectorAll(".box ul li a");
    var a = document.querySelector(".box a");
    var input = document.querySelector(".box input");
    console.log(as);
    console.log(a);
    console.log(input);
</script>
```

## 事件绑定方法

### 1.在DOM元素中直接绑定

这里的DOM元素，可以理解为HTML标签。JavaScript支持在标签中直接绑定事件，语法为：
     onXXX="JavaScript Code"

其中：
onXXX 为事件名称。例如，鼠标单击事件 onclick ，鼠标双击事件 ondouble，鼠标移入事件 onmouseover，鼠标移出事件 onmouseout 等。
JavaScript Code 为处理事件的JavaScript代码，一般是函数。

```html
     <input  onclick="alert('谢谢支持')"  type="button"  value="点击我，弹出警告框" />
```



### 2.在JavaScript代码中绑定

在JavaScript代码中绑定事件的语法为：
elementObject.onXXX=function(){
    // 事件处理代码
}

其中：
elementObject 为DOM对象，即DOM元素。
onXXX 为事件名称。

```html
     <input  id="demo"  type="button"  value="点击我，显示 type 属性" /><script type="text/javascript">document.getElementById("demo").onclick=function(){    alert(this.getAttribute("type"));  //  this 指当前发生事件的HTML元素，这里是<div>标签}</script>
```

### 3.绑定事件监听函数

![image-20240808102122664](C:\Users\31066\AppData\Roaming\Typora\typora-user-images\image-20240808102122664.png)

![image-20240808102142004](C:\Users\31066\AppData\Roaming\Typora\typora-user-images\image-20240808102142004.png)

```javascript
 
     
     function addEvent(obj,type,handle){    try{  // Chrome、FireFox、Opera、Safari、IE9.0及其以上版本        obj.addEventListener(type,handle,false);    }catch(e){        try{  // IE8.0及其以下版本            obj.attachEvent('on' + type,handle);        }catch(e){  // 早期浏览器            obj['on' + type] = handle;        }    }}
```



```html
<input  id="demo"  type="button"  value="点击我，显示 type 属性" /><script type="text/javascript">document.getElementById("demo").onclick=function(){    alert(this.getAttribute("type"));  //  this 指当前发生事件的HTML元素，这里是<div>标签}</script
```

## 鼠标事件

```javascript
        var div = document.getElementById("box")
 
        // 1、单击事件 onclick
        div.onclick = function(){
            console.log("单击")
        }
        // 2、双击事件 ondblclick
        div.ondblclick = function(){
            console.log("双击")
        }
        // 3、鼠标按下  onmousedown
        div.onmousedown = function(){
            console.log('鼠标按下')
        }
        // 4、鼠标抬起  onmouseup
        div.onmouseup = function(){
            console.log('鼠标抬起')
        }
        // 5、鼠标移动  onmousemove
        div.onmousemove = function(){
            console.log("鼠标在这个div内部正在移动ing")
        }
        // 6、右键菜单  oncontextmenu
        div.oncontextmenu = function(){
            console.log("调出右键菜单")
        }
        // 7、滑轮滚动  onwheel
        div.onwheel = function(){
            console.log("滑轮滚动")
        }
        // 8、鼠标移入移出mouseenter/mouseleave  不继承,
        //    鼠标在子标签上不会触发事件;
        //    简单来说就是鼠标进入div区域会显示移入，出div就会显示移出；
        div.onmouseenter = function(){
            console.log("鼠标移入")
        }
        // 9、
        div.onmouseleave = function(){
            console.log("鼠标移出")
        }
 
        // 10、鼠标悬停离开mouseover/mouseout 会继承,
        //     鼠标在子标签上也会触发事件，
        //     而悬停离开的话，就是鼠标进入div区域会提示悬停，
        //     然后鼠标进入p标签区域会先显示;
        //     离开 再悬停，最后移出显示离开；
        div.onmouseover = function(){
            console.log("鼠标移入")
        }
        // 11、
        div.onmouseout = function(){
            console.log("鼠标移出")
        }
```

## 键盘事件

JavaScript提供了一种处理键盘事件的方式，可以让你捕捉用户在网页上按下、释放和持续按住键盘上的键的动作。这些键盘事件通常与JavaScript的事件监听器一起使用。以下是一些常见的键盘事件：

### keydown事件

当用户按下键盘上的任何键时触发。你可以使用event.keyCode或event.key来获取按下的键的信息。


### keyup

```javascript
document.addEventListener('keydown', function(event) {
  console.log('键按下：', event.key);
});
```

### 事件

当用户释放键盘上的键时触发。同样，你可以使用event.keyCode或event.key来获取释放的键的信息。

```javascript
document.addEventListener('keyup', function(event) {
  console.log('键释放：', event.key);
});
```



### keypress事件（已过时）

这个事件在用户按下字符键时触发，不包括功能键和修饰键。但需要注意的是，keypress事件已被废弃，通常推荐使用keydown事件来替代。

```javascript
document.addEventListener('keypress', function(event) {
  console.log('字符键按下：', event.key);
});
```

### input事件

当用户在输入字段中输入文本时，此事件会在文本更改时触发。虽然不是键盘事件，但通常与键盘输入相关的文本更改也可以通过此事件捕捉。

```javascript
var inputElement = document.getElementById('myInput');
inputElement.addEventListener('input', function(event) {
  console.log('输入改变：', inputElement.value);
});
```

这只是一些基本的键盘事件示例，你可以根据需要使用这些事件来实现各种键盘交互。请注意，不同的浏览器可能会在事件对象上提供略有不同的属性，因此你可能需要进行一些浏览器兼容性处理。此外，你还可以阻止默认的键盘行为，例如阻止按键的默认滚动、放大缩小页面等。

## 表单事件

### input输入事件

```javascript
var textInput = document.getElementById("myInput")
var radios = document.getElementsByName("sex")
textInput.oninput = function(){
            console.log("input", this.value)
        }
```

### change更新事件

```javascript
textInput.onchange = function(){
            console.log("change", this.value)
        }
```

### focus 获取焦点事件

```javascript
textInput.onfocus = function(){
            console.log("focus", this.value)
        }
```

### blur失去焦点事件

```javascript
textInput.onblur= function(){
            console.log("blur", this.value)
        }
```

### reset重置事件

```javascript
var form = document.querySelector("form")
form.onreset = function(e){
            // alert("即将重置")
            // var msg = prompt("请说明你要重置的原因?")
            var bool = confirm("确定要重置表单吗?")
            if(!bool){
                e.preventDefault()
            }
        }  
```

### submit事件 表单提交事件

```javascript
        form.onsubmit = function(e){
            // 阻止表单自动提交
            e.preventDefault()
        }
```

### 总结

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>表单事件</title>
</head>
<body>
    <form action="">
        <!-- 回顾: input的type类型值有checkbox, text, radio, file, image, submit, button, number, password, email, reset, range, prgress, color, time, date等等-->
        <label for="myInput">账号:</label>
        <input type="text" id="myInput">
        <input type="radio" name="sex">
        <input type="radio" name="sex">
        <input type="reset">
        <input type="submit"> <button>提交</button>
        <input type="color" id="color">
    </form>
 
    <script>
        var textInput = document.getElementById("myInput")
        var radios = document.getElementsByName("sex")
        // 1, input输入事件 关注输入过程
        textInput.oninput = function(){
            console.log("input", this.value)
        }
        // 2, change更新事件  关注输入结果
        textInput.onchange = function(){
            console.log("change", this.value)
        }
        // 3, focus 获取焦点事件 
        textInput.onfocus = function(){
            console.log("focus", this.value)
        }
        // 4, blur 失去焦点事件 
        textInput.onblur= function(){
            console.log("blur", this.value)
        }
        // 5, select 选择事件
        textInput.onselect= function(e){
            console.log("select", e.select) // ? 
        }   
        var form = document.querySelector("form")
        // 6, reset 重置事件  事件目标是form
        form.onreset = function(e){
            // alert("即将重置")
            // var msg = prompt("请说明你要重置的原因?")
            var bool = confirm("确定要重置表单吗?")
            if(!bool){
                e.preventDefault()
            }
        }
        
        // 7, submit 表单提交事件  事件目标是form
        form.onsubmit = function(e){
            // 阻止表单自动提交
            e.preventDefault()
        }
 
        // 单选框, 可以绑定click, input, change事件, 建议使用change
        radios[0].onchange = function(){
            // radio的value值不管有没有选中, 都是on
            console.log(this.value, radios[1].value)
            // 单选或多选框通过checked属性获取选中状态
            console.log(this.checked, radios[1].checked)
        }
 
        // 总结: 常用的表单事件有
        // input, change, focus, blur, reset, submit, select
 
 
        color.onchange= function(){
            console.log(this.value)
        }
    
    </script>
</body>
</html>
```

## 浏览器事件

### onload事件

onload是浏览器的载入事件，当页面上资源加载完毕之后才会自动触发的代码

```javascript
window.onload = function () {
    document.querySelector('button').onclick = function () {
        console.log('click')
    }
}
```

### onresize事件

onresize 事件会在窗口或框架被调整大小时发生。

```javascript
window.onresize = function(){
    console.log('页面尺寸改变了')
    // 获取页面的宽高
    console.log(window.innerWidth,window.innerHeight)
}
```

### onscroll事件

onscroll 事件是JavaScript中常用的事件之一，当用户滚动某个元素的滚动条时，会触发该事件。这个事件可以应用于整个文档窗口、独立的元素或者任何可以滚动的元素。

```javascript
window.onscroll = function() {
  // 当用户滚动时执行的代码
};

// 或者，如果你想要为一个特定的元素添加滚动事件监听
var element = document.querySelector('div');
element.onscroll = function() {
  // 当用户滚动该元素时执行的代码
};

// 使用addEventListener来添加滚动事件监听（推荐方式）
window.addEventListener('scroll', function() {
  // 当用户滚动时执行的代码
});

```

## DOM操作

### 元素内容操作

innerHtml标签可以获取标签内的html内容，用法为：document.getElementById(‘ xx ’).innerHTML
innerHtml标签也可以用来设置标签内的html内容，用法为：document.getElementById(‘ xx ’).innerHTML=’需要设置的内容’;

### 元素样式操作

#### 直接修改内联样式

您可以直接通过元素的style属性来修改其内联样式。


#### 使用类名

```javascript
// 假设有一个元素 <div id="myElement"></div>
var myElement = document.getElementById('myElement');

// 修改背景颜色
myElement.style.backgroundColor = 'blue';

// 修改字体大小
myElement.style.fontSize = '16px';
```

#### 切换样式

通过修改元素的className或classList属性，您可以切换元素的类，从而改变其样式。


#### 使用CSSStyl

```javascript
// 添加一个类
myElement.classList.add('new-style');

// 移除一个类
myElement.classList.remove('old-style');

// 切换类（如果存在则移除，如果不存在则添加）
myElement.classList.toggle('toggle-style');
```

#### eSheet对象

您可以通过document.styleSheets来访问和修改CSS样式表。

```javascript
// 假设有一个<style>元素 <style id="myStyleSheet"></style>
var myStyleSheet = document.getElementById('myStyleSheet').sheet;

// 添加一条新规则
myStyleSheet.insertRule('div.new-style { color: red; }', 0);
```

### 元素属性操作

在网页开发中，操作DOM元素的属性是一项基础技能，它允许你动态地修改元素的行为和外观。以下是一些常用的元素属性操作方法：

#### 获取属性值

可以使用 getAttribute 方法来获取元素的属性值。

```javascript
var element = document.getElementById('myElement');
var attrValue = element.getAttribute('attribute-name');
```



#### 设置属性值

可以使用 setAttribute 方法来设置元素的属性值。

```javascript
element.setAttribute('attribute-name', 'value');
```



#### 删除属性

可以使用 removeAttribute 方法来删除元素的某个属性。

```javascript
element.removeAttribute('attribute-name');
```



#### 常见的属性操作

以下是一些常见的属性操作示例：

##### href属性

```javascript
// 设置链接地址
element.setAttribute('href', 'http://www.example.com');

// 获取链接地址
var href = element.getAttribute('href');
```

##### src属性

```javascript
// 设置图片源地址
element.setAttribute('src', 'image.jpg');

// 获取图片源地址
var src = element.getAttribute('src');
```

##### class属性

由于 class 是JavaScript的保留字，所以操作 class 属性时，通常使用 className 属性或者 classList API。

```javascript
// 设置类名
element.className = 'new-class';

// 添加类名
element.classList.add('another-class');

// 移除类名
element.classList.remove('old-class');
```

##### disabled属性

```javascript
// 禁用元素
element.setAttribute('disabled', '');

// 启用元素
element.removeAttribute('disabled');

// 或者使用属性的直接布尔值操作
element.disabled = true;  // 禁用
element.disabled = false; // 启用
```



##### value属性

```javascript
// 设置输入框的值
element.setAttribute('value', 'Hello World');

// 获取输入框的值
var value = element.value;
```

### tab选项卡

