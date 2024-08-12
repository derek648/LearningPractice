# DOM节点

## 1.获取元素的两种方式

### 1.1利用DOM提供的方法获取元素

```javascript
document.getElementById()
document.getElementsByTagName()
document.querSelector
```



### 1.2利用节点层级关系获取元素

利用父子兄弟节点关系获取元素

## 2.节点的概述

网页中所有的内容都是节点（标签、属性、文本、注释等），在DOM中，节点使用node来表示。HTML DOM树中的所有节点均可通过JavaScript进行访问，所有HTML元素（节点）均可被修改、创建或删除。

![image-20240809095240559](C:\Users\31066\AppData\Roaming\Typora\typora-user-images\image-20240809095240559.png)

一般的，节点至少拥有nodeType（节点类型）、nodeName（节点名称）和nodeValue（节点值）这三个基本属性

- 元素节点 nodeType为1
- 属性节点nodeType为2
- 文本节点nodeType为3（文本节点包含文字、空格、换行等）

## 3.节点层级

### 3.1父级节点

利用DOM树可以把节点划分为不同的层级关系，常见的是父子兄层级关系

```javascript
node.parentNode
```

- parentNode属性可返回某节点的父节点，注意是最近的一个父节点
- 如果指定的节点没有父节点则返回null

### 3.2父子节点

```javascript
parentNode.childNodes(标准)
```

parentNode.childNodes返回包括指定节点的子节点的集合，该集合为即时更新的集合

注意：返回值里面包括了所有的子节点，包括元素节点，文本节点等。

如果想到获得里面的元素节点，则需要专门处理，所以我们一般不提倡使用childNodes

```javascript
var ul = document.querySelector('ul');
for(var i = 0; i < ul.childNodes.lenth; i++) {
		if(ul.childNodes[i].nodeType == 1) {
		//ul.childNodes[i] 是元素节点
		console.log(ul.childNodes[i]);
		}
	}
```



```javascript
parentNodes.children(非标准)
```

parentNodes.children是一个只读属性，返回所有的子元素节点，它只返回子元素节点,其余节点不返回（重点掌握）

虽然children是一个非标准，但是已经得到了各个浏览器的支持，因此放心使用

```javascript
parentNode.firstChild
```

firstChild返回第一个子节点，找不到就返回null，同样，也是包含所有的节点

```javascript
parentNode.lastChild
```

lastChild返回最后一个子节点吗，找不到则返回null，同样，也是包含所有的节点

```javascript
parentNode.firstElementChild
```

firstElementChild返回第一个子元素节点，找不到则返回null

```javascript
parentNode.lastElementChild
```

lastElementChild返回最后一个子元素节点，找不到则返回null

```javascript
// 1.firstChild 第一个子节点 不管是文本节点还是元素节点
console.log(ol.firstChild);
console.log(ol.lastChild);
    
// 2.firstelementChild 返回第一个元素节点
console.log(ol.firstElementChild);
console.log(ol.lastElementChild);
```

实际开发的写法 既没有兼容性问题还能返回第一个子元素

```javascript
console.log(ol.children[0]);  
console.log(ol.children[ol.children.length-1]);
```

### 3.3兄弟节点

所有节点

```javascript
node.nextSibling
```

nextSibling返回当前元素的下一个兄弟节点，找不到则返回null，同样，也是包括所有节点

```javascript
node.previousSibling
```

previousSiblin返回当前元素的上一个兄弟节点，找不到则返回null，同样，也是包括所有节点

特质元素节点

```javascript
node.nextElementSibling
```

nextElementSibling返回当前元素下一个兄弟元素节点，找不到则返回null

```javascript
node.previousElementSibling
```

previousElementSibling返回当前元素上一个兄弟节点找不到就返回null

注意：这两个方法有兼容性问题，IE9以上才支持

## 4.创建节点

```javascript
document.createElement(‘tagName’);
```

document.createElement()方法创建由tagName指定的HTML元素。因为这些元素原先不存在是根据我们的需求动态生成的，所有我们也称为动态创建元素节点。

```javascript
node.appendChild(child);
```

node.appendChild() 方法将一个节点添加到指定父节点的子节点列表末尾。类似于css里面的after伪元素。

```javascript
// 2.添加节点 node.appendChild(child)  node 父级  child子级
// 后面追加元素，类似数组中的push
var ul = document.querySelector('ul');
ul.appendChild(li);

// 3.添加节点  node.insertBefore(child,指定元素);
var lili = document.createElement('li');
ul.insertBefore(lili,ul.children[0]);
```



## 5.删除节点

```javascript
node.removeChild(child)
```

node.removeChild() 方法从DOM中删除一个子节点，返回删除的节点。

```javascript
// 1.获取元素
var ul = document.querySelector('ul');
// 2.删除元素  node.removeChild(child);
ul.removeChild(ul.children[0]);
```

## 6.复制节点

```javascript
node.cloneNode()
```

node.cloneNode() 方法返回调用该方法的节点的一个副本。也称为克隆节点/拷贝节点

注意：

- 如果括号参数为空或者为false，则是浅拷贝，即只是克隆复制节点本身，不克隆里面的子节点

- 如果括号参数为true，则是深度拷贝，会复制节点本身以及里面所有的子节点

  ```javascript
  node.cloneNode(); //浅拷贝，不复制内容，只复制标签
   node.cloneNode(true); //深拷贝，复制内容、复制标签
  ```

  

## 7.三种创建元素的区别

- document.write()

- element.innerHTML

- document.createElement()

  

document.write是直接将内容写在页面的内容流，但是文档流执行完毕，则它会导致页面全部重绘。

# 事件

## 事件流机制

事件流就是，事件传播的过程。

DOM中完整的事件流包括了三个阶段：事件捕获阶段、目标阶段和事件冒泡阶段

事件通过捕获到达目标元素，这个时候就是目标阶段，从目标节点元素将事件上传到根节点的构成阶段，冒泡阶段

## 事件监听

在JavaScript中，事件监听是管理事件和响应事件的一种方式。通过事件监听器（或称为事件处理器），你可以告诉浏览器在特定事件发生时执行特定的函数。以下是如何在JavaScript中添加和移除事件监听器的方法。

### 使用 addEventListener() 方法添加事件监听器

addEventListener() 方法允许你在单个元素上添加多个事件监听器，而不会覆盖已存在的事件监听器。

```javascript
element.addEventListener(event, function, useCapture);
```

- event：事件的类型，例如"click"、"mousedown"、"keydown"等。

- function：当事件发生时，所要调用的函数。

  - useCapture（可选）：一个布尔值，指定事件是否在捕获或冒泡阶段执行。默认值为false（冒泡阶段）。

  ```javascript
  document.getElementById("myButton").addEventListener("click", function() {
    alert("按钮被点击了！");
  });
  
  ```

  

### 使用 removeEventListener() 方法移除事件监听器

如果需要移除事件监听器，可以使用 removeEventListener() 方法。需要注意的是，移除事件监听器时必须使用与添加时相同的函数引用。

```javascript
element.removeEventListener(event, function, useCapture);
```

event：事件的类型。

function：要移除的事件处理函数。

useCapture：与添加监听器时使用的相同值。

```javascript
// 定义事件处理函数
function alertClick() {
  alert("按钮被点击了！");
}

// 添加事件监听器
document.getElementById("myButton").addEventListener("click", alertClick);

// 之后，如果需要移除事件监听器
document.getElementById("myButton").removeEventListener("click", alertClick);

```

- 如果使用匿名函数作为事件监听器，则无法移除，因为每次创建的匿名函数都是不同的函数实例。
- 使用 addEventListener() 添加的事件监听器默认是在事件冒泡阶段触发的，如果你需要在捕获阶段触发，可以将 useCapture 参数设置为 true。
- addEventListener() 和 removeEventListener() 是现代浏览器支持的标准方法。在旧版本的IE浏览器（IE8及以下）中，需要使用 attachEvent() 和 detachEvent() 方法来添加和移除事件监听器。

## 事件解绑

在JavaScript中，事件解绑指的是移除之前绑定到元素上的事件监听器。这通常通过removeEventListener方法完成。下面是如何使用removeEventListener来解绑事件的步骤和注意事项。

### 使用 removeEventListener 解绑事件

```javascript
// 绑定事件监听器
let button = document.getElementById("myButton");
let handleClick = function() {
  console.log("Button clicked!");
};
button.addEventListener("click", handleClick);

// ...之后在某个时刻解绑事件监听器
button.removeEventListener("click", handleClick);

```

完整示例

```javascript
// 定义事件处理函数
function handleClick() {
  console.log("Button clicked!");
}

// 获取按钮元素并绑定事件监听器
var button = document.getElementById("myButton");
button.addEventListener("click", handleClick);

// 假设在某个条件下，我们需要解绑事件监听器
function removeClickListener() {
  button.removeEventListener("click", handleClick);
}

// 你可以调用 removeClickListener 函数来解绑事件
// 例如，在按钮点击一定次数后解绑
var clickCount = 0;
button.addEventListener("click", function() {
  clickCount++;
  if (clickCount >= 3) {
    removeClickListener();
    console.log("Event listener removed after 3 clicks.");
  }
});

```



## 事件冒泡

在JavaScript中，事件冒泡（Event Bubbling）是指当一个事件在DOM元素上触发后，会从触发事件的元素开始，逐级向上传播至文档的根元素（document）。在这个过程中，事件会经过每一个上级元素，并且触发那些元素上注册的相同类型的事件处理函数。

#### 事件冒泡的流程

假设有以下HTML结构：

```html
<div id="outer">
  <div id="inner">
    <button id="myButton">Click Me</button>
  </div>
</div>
```

如果我们在button、inner、outer上分别绑定了点击事件的处理函数，那么当用户点击按钮时，事件冒泡的流程如下：
1.点击事件首先在button元素上触发。
2.然后，事件会冒泡到inner元素，触发其上的点击事件处理函数。
3.接着，事件继续冒泡到outer元素，触发其上的点击事件处理函数。
4.最后，事件会继续冒泡到document元素。

#### 阻止事件冒泡

在某些情况下，你可能不希望事件继续向上冒泡。你可以使用event.stopPropagation()方法来阻止事件进一步冒泡。

以下是如何使用event,stopPropagation()的示例：

```javascript
document.getElementById("myButton").addEventListener("click", function(event) {
  console.log("Button clicked!");
  event.stopPropagation(); // 阻止事件冒泡
});

document.getElementById("inner").addEventListener("click", function() {
  console.log("Inner div clicked!");
});

document.getElementById("outer").addEventListener("click", function() {
  console.log("Outer div clicked!");
});

```

在上面的代码中，点击按钮只会输出"Button clicked!"，而"Inner div clicked!"和"Outer div clicked!"不会被输出，因为事件在button元素上被阻止了冒泡。

事件冒泡是DOM事件模型的一个重要特性，它允许我们在更高层次的元素上设置事件监听器来处理多个子元素的事件，从而简化代码。然而，不恰当地使用事件冒泡可能会导致意外的行为，因此理解事件冒泡并在必要时阻止它是很重要的。

## 事件委托

事件委托（Event Delegation）是一种利用事件冒泡原理来管理事件的技术。它允许你将事件监听器绑定到一个父元素上，而不是直接绑定到多个子元素上。当事件在子元素上触发并冒泡到父元素时，父元素的事件监听器可以捕获并处理这些事件。这种方法在处理动态内容（例如通过JavaScript动态添加的元素）时特别有用。

### 事件委托的优点

1.性能提升：只需要在父元素上绑定一个事件监听器，而不是在每个子元素上都绑定，减少了内存的使用，提高了性能。

2.简化代码：减少了需要编写和管理的代码量。

3.动态内容处理：对于动态添加到DOM中的元素，无需再次绑定事件监听器，因为父元素已经可以捕获并处理这些事件。

### 事件委托的实现

1.确定要委托事件的父元素。

2.在父元素上绑定事件监听器。

3.在事件处理函数中，使用event.target属性来确定实际触发事件的子元素。

4.根据需要处理事件

示例：

假设你有一个列表，并且想要在点击列表项时做一些操作

```html
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <!-- 可能会有更多列表项 -->
</ul>

```

```javascript
// 获取父元素
var list = document.getElementById("myList");

// 绑定事件监听器到父元素
list.addEventListener("click", function(event) {
  // 检查事件的目标元素是否是我们感兴趣的元素
  if (event.target.tagName === "LI") {
    // 执行需要的操作，例如：
    console.log("List item clicked:", event.target.textContent);
  }
});

```

在上面的代码中，无论何时点击`li`元素，事件都会冒泡到`ul`元素，然后由绑定在`ul`上的事件监听器处理。通过检查`event.target.tagName`，我们可以确定事件是否是由`li`元素触发的，并据此执行相应的操作。

## 默认行为

在JavaScript中，默认行为指的是元素在特定事件发生时，浏览器自动执行的行为。例如，点击一个链接会导航到该链接的URL，或者在表单中按回车键会提交表单。

### 常见的默认行为

- 链接 (<a>标签)：
  点击链接 (click事件)：导航到href属性指定的URL。
- 表单 (<form>标签)：
  提交表单 (submit事件)：将表单数据发送到服务器。
- 输入框 (<input>标签)：
  按下回车键 (keydown或keypress事件)：在表单中，这通常会导致表单提交。
- 文本区域 (<textarea>标签)：
  文本区域内容超出可视区域时，自动出现滚动条。
- 选择框 (<select>标签)：
  更改选项 (change事件)：更新表单数据。
- 右键点击 (contextmenu事件)：
  显示上下文菜单。

### 阻止默认行为

在某些情况下，可能想要阻止这些默认行为，以实现自定义的功能。

#### 使用 event.preventDefault() 方法

这是现代浏览器中阻止默认行为的标准方式。

```javascript
document.getElementById("myLink").addEventListener("click", function(event) {
  event.preventDefault(); // 阻止链接的默认导航行为
  console.log("Link clicked, but default action prevented.");
});
```

#### 设置 returnValue 属性

 在旧版IE浏览器中，你可以通过设置事件对象的returnValue属性为false来阻止默认行为。



```javascript
document.getElementById("myLink").attachEvent("onclick", function(event) {
  event.returnValue = false; // 阻止链接的默认导航行为（旧版IE）
  console.log("Link clicked, but default action prevented.");
});
```

#### 返回 false

在事件处理函数中简单地返回false也可以阻止默认行为，但这不是推荐的做法，因为它同时也会阻止事件冒泡。

```javascript
document.getElementById("myLink").addEventListener("click", function(event) {
  // 阻止默认行为和事件冒泡
  return false;
});
```

阻止默认行为是Web开发中实现自定义交互的重要技术，但应该谨慎使用，确保不会影响用户体验。

## 默认对象

### 1.window对象

在浏览器环境中，window对象是一个全局对象，它代表了浏览器窗口，并且是许多全局变量的宿主。当你不明确指定对象时，很多全局变量和函数其实是window对象的属性。

```javascript
console.log(window === this); // 在浏览器环境中通常为 true
let globalVar = "I'm a global variable";
console.log(window.globalVar); // 输出: "I'm a global variable"
```

### 2.document对象

document对象是window对象的一个属性，代表了整个HTML文档。在操作DOM时，document对象通常被用作默认对象。

```javascript
console.log(window.document === document);//输出：ture
```

### 3.默认的this值

在函数中，this关键字通常指向一个默认对象，这个对象取决于函数是如何被调用的。

在全局作用域中，this通常指向window对象。
在严格模式（‘use strict’）下，this将是undefined。
在对象的方法中，this指向调用方法的对象。

```javascript
function whatIsThis() {
    return this;
}

console.log(whatIsThis() === window);//非严格模式下输出：ture
```

### 4.默认参数对象

在函数调用中，如果没有提供实参，则函数的形参将被赋予undefined。但是，可以为函数参数设置默认值。

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // 输出: Hello, Guest!
```

### 5.默认的上下文对象

在某些情况下，例如在使用事件监听器时，默认的上下文对象（`this`）可能不是你所期望的。因此，你可能需要显式地绑定上下文。

```javascript
document.getElementById('myButton').addEventListener('click', function() {
  console.log(this); // 这里的 `this` 指向绑定事件的元素
});
```

# 事件对象

## 事件对象获取

在JavaScript中，事件对象（通常命名为event）是一个包含了关于事件详细信息的对象，它在事件监听器函数中自动传递。

### 使用 addEventListener 方法

当使用 addEventListener 方法添加事件监听器时，事件对象会作为第一个参数自动传递给事件处理函数。

```javascript
element.addEventListener('type', function(event) {
  // 使用 event 对象
  console.log(event.type); // 输出事件的类型，例如 'click'
});
```

### 使用 HTML 属性

在HTML属性中指定事件处理函数时，事件对象通常以event命名。

```html
<button onclick="handleClick(event)">Click Me</button>

<script>
function handleClick(event) {
  console.log(event.type); // 输出 'click'
}
</script>
```

### 使用 DOM 元素属性

在较老的代码或旧版浏览器中，事件处理函数可能直接被赋值给DOM元素的属性。

```javascript
element.onclick = function(event) {
  // 使用 event 对象
  console.log(event.type); // 输出 'click'
};
```

## 按键码

在JavaScript中，按键码（Keyboard Codes）指的是键盘上每个按键对应的数字代码。这些代码通常用于检测用户按下了哪个键。

### 1.KeyCode属性（已废弃）

keyCode 属性是早期用来获取按键码的方式，但它在现代Web标准中已被废弃。尽管如此，它仍然在许多浏览器中得到了支持。

### 2.which属性（已废弃）

which 属性与 keyCode 类似，也是非标准属性，但在某些浏览器中得到支持。

### 3.code属性（标准）

现代浏览器推荐使用 code 属性来获取按键的代码。这个属性返回一个字符串，表示按下的物理按键，而不是字符编码。

```javascript
document.addEventListener("keydown", function(event) {
  console.log("Key code:", event.code); // 输出按键代码（例如 "KeyA", "ArrowRight"）
});
```

### 常见按键码示例

以下是一些常见的按键及其对应的 keyCode 值（注意，这些值可能因浏览器而异）：

- Enter: 13
- Escape: 27
- Space: 32
- ArrowLeft: 37
- ArrowUp: 38
- ArrowRight: 39
- ArrowDown: 40
- Digit0 - Digit9: 48 - 57
- KeyA - KeyZ: 65 - 90

### 检测按下的是哪个键

```javascript
document.addEventListener("keydown", function(event) {
  switch (event.code) {
    case "ArrowLeft":
      console.log("Left arrow key pressed");
      break;
    case "ArrowRight":
      console.log("Right arrow key pressed");
      break;
    case "KeyA":
      console.log("A key pressed");
      break;
    // 更多按键检测...
    default:
      console.log("Other key pressed");
  }
});
```

## 鼠标坐标点

在JavaScript中，可以通过事件对象获取鼠标事件的坐标点。

### 1. clientX 和 clientY

这两个属性提供了鼠标指针相对于浏览器窗口可视区域的水平（X）和垂直（Y）坐标。

```javascript
document.addEventListener("click", function(event) {
  console.log("Client X:", event.clientX, "Client Y:", event.clientY);
});
```

### 2. pageX 和 pageY

这两个属性提供了鼠标指针相对于整个页面的水平（X）和垂直（Y）坐标，包括滚动区域。

```javascript
document.addEventListener("click", function(event) {
  console.log("Page X:", event.pageX, "Page Y:", event.pageY);
});
```

### 3. screenX 和 screenY

这两个属性提供了鼠标指针相对于用户屏幕的水平和垂直坐标。

```javascript
document.addEventListener("click", function(event) {
  console.log("Screen X:", event.screenX, "Screen Y:", event.screenY);
});
```

### 示例

```html
<script>
    // offsetX/offsetY 以元素的左上角为圆点得到的坐标点
    $$('.box1').addEventListener('click',function(event){
        console.log(event.offsetX,event.offsetY)
    })
    // clientX/clientY 以浏览器的左上角为圆点得到的坐标点
    $$('.box2').addEventListener('click',function(event){
        console.log(event.clientX,event.clientY)
    })
    // pageX/pageY 以文档左上角为圆点计算的坐标点
    $$('.box3').addEventListener('click',function(event){
        console.log(event.pageX,event.pageY)
    })
</script>
```

### 拖拽效果

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>

<body>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: red;
            position: absolute;
            top: 0;
            left: 0
        }
    </style>
    <div></div>
</body>

</html>
<script src="../../common.js"></script>
<script>
    /*
        思路
            1、绑定鼠标的按下事件
            2、绑定鼠标移动事件(只有按下事件生效之后才可以使用)，移动过程中让div跟着走动(控制div标签的top 、left) 具体修改的值可以根据鼠标的坐标点来实现
            3、绑定鼠标的抬起事件(鼠标移动事件失效)
    */
    let div = $$('div');
    function handler(event) {
        // 需要保证坐标点在中间 就需要将取得的坐标点 在减宽高的一半
        // div元素在定位的时候 是以左上角进行定位
        let x = event.pageX - div.clientWidth / 2;
        let y = event.pageY - div.clientHeight / 2;
        div.style.top = y + 'px';
        div.style.left = x + 'px';
    }
    //绑定鼠标按下事件    
    div.addEventListener('mousedown', function () {
        // 鼠标移动事件
        div.addEventListener('mousemove', handler)
    })
    // 鼠标的抬起事件
    div.addEventListener('mouseup', function () {
        div.removeEventListener('mousemove', handler);
    })
</script>
```

### 打字游戏

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <p>得分：<b>0</b></p>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        body,
        html {
            height: 100%;
        }

        span {
            width: 40px;
            height: 40px;
            background-color: red;
            color: white;
            border-radius: 50%;
            display: block;
            text-align: center;
            line-height: 40px;
            font-size: 24px;
            font-weight: bold;
            position: absolute;
            top: 0;
            left: 0
        }
    </style>
</body>

</html>
<script>
    /*
        思路
        见到的是一直存在一个内容在向下掉落 掉落到底部 销毁，如果期间输入了正确的内容 销毁从新开始
        1、实现 一个内容向下掉
            1、创建span标签
            2、随机分配一个字符 可以列出可用的字符串 使用随机数挑选一个
            3、随机的控制 span标签的left值
            4、控制向下掉落
            5、如果掉落到底部了 销毁标签
            6、销毁完毕标签  在重新来一次就是将步骤1-5再次执行
        2、键盘按下 内容相同从新再来
    */
    let span;
    let score = 0;
    let timer;

    // 生成随机整数
    function makeRandom(min, max) {
        return parseInt(Math.random() * (max - min) + min);
    }
    //生成随机的字符    
    function makeRandomChar() {
        // 设置可用的字符
        let str = "qwertyuplkjgfdsazxcvbnm23456789";
        // let str = "23456789";
        // 获取随机下标
        let index = makeRandom(0, str.length);
        return str[index];
    }

    function createTag() {
        // 创建span标签
        span = document.createElement('span');
        span.innerHTML = makeRandomChar();
        // 将span标签加入到页面上 如果没有加入到页面上无法获取到尺寸
        document.body.appendChild(span);
        // 计算span标签 最大的left值
        let maxLeft = document.documentElement.clientWidth - span.clientWidth;
        // 计算随机的left值
        let left = makeRandom(0, maxLeft);
        span.style.left = left + 'px';
        // 使用定时器 反复修改top值
        timer = setInterval(function () {
            // 获取当前最大的top值
            let maxTop = document.documentElement.clientHeight - span.clientHeight;
            // 获取当前的top值
            let current = parseFloat(getComputedStyle(span).top);
            if (current < maxTop) {
                span.style.top = current + 1 + 'px';
                return;
            }
            clearInterval(timer);
            document.body.removeChild(span);
            createTag();

        })
    }
    createTag();

    // 绑定键盘按下事件
    window.addEventListener('keydown', function (event) {
    
        if (event.key == span.innerHTML) {
            
            score++;
            document.querySelector('b').innerHTML = score;
            clearInterval(timer);
            document.body.removeChild(span);
            createTag();
        }
    })
</script>
```