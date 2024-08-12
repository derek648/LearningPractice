# ES6新增语法

## 模板字符串

模板字符串（Template Literals）是JavaScript ES6（ECMAScript 2015）中引入的一种特性，它提供了一种更加简洁、强大的方式来创建字符串。模板字符串使用反引号（ ）来定义，而不是单引号（’ '）或双引号（" "）。

### 基本用法

```javascript
let name = "张三";
let age = 30;
let info = `我的名字是${name}，我今年${age}岁。`;
console.log(info); // 输出：我的名字是张三，我今年30岁。
```

### 多行字符串

模板字符串允许创建多行字符串，不需要使用换行符（\n）。

```javascript
let multiline = `这是一个多行字符串。
这是第二行。`;
console.log(multiline);
```

### 嵌入表达式

可以在模板字符串中嵌入表达式，并进行运算：

```javascript
let x = 1;
let y = 2;
let result = `${x} +${y} = ${x + y}`;
console.log(result); // 输出：1 + 2 = 3
```

### 标签模板

模板字符串可以跟在一个函数名后面，这种称为“标签模板”功能，可以用来处理模板字符串。

```javascript
function tag(strings, ...values) {
  // strings 是一个数组，包含了模板字符串的字符串部分
  // values 是一个数组，包含了模板字符串的变量值
  return strings.reduce((prev, next, i) => prev + values[i - 1] + next, '');
}

let tableName = '员工表';
let id = 123;
let sql = tag`SELECT * FROM ${tableName} WHERE id =${id}`;
console.log(sql); // 输出：SELECT * FROM 员工表 WHERE id = 123
```

## 箭头函数

箭头函数（Arrow Functions）是JavaScript ES6（ECMAScript 2015）引入的一种编写函数表达式的新语法。箭头函数提供了一种更简洁的方式来书写函数，并且有一些不同的行为特性

### 基本语法

```javascript
(param1, param2, ..., paramN) => { 
  // 函数体
  return expression; 
}
```

如果函数体只包含一个表达式，可以省略大括号和return关键字：

```javascript
(param1, param2, ..., paramN) => expression
```

如果参数只有一个，可以省略小括号：

```javascript
param => expression
```

如果没有参数，则必须使用空括号：

```javascript
() => expression
```

### 示例

```javascript
// 一个参数，一个表达式
let square = x => x * x;
console.log(square(4)); // 输出：16

// 两个参数，一个表达式
let add = (a, b) => a + b;
console.log(add(3, 4)); // 输出：7

// 没有参数，一个表达式
let sayHello = () => 'Hello, World!';
console.log(sayHello()); // 输出：Hello, World!

// 多个表达式，需要大括号和return
let subtract = (a, b) => {
  let result = a - b;
  return result;
};
console.log(subtract(5, 2)); // 输出：3
```

### 特点

- **没有自己的`this`、`super`、`arguments`和`new.target`绑定**：箭头函数不会创建自己的`this`，它会捕获其所在上下文的`this`值，所以在箭头函数中`this`的值由其所在上下文决定。
- **不能用作构造函数**：箭头函数不能使用`new`关键字，因为它没有`[[Construct]]`方法。
- **没有`arguments`对象**：箭头函数不提供`arguments`对象，因此你必须使用剩余参数（…rest）来访问函数的参数。
- **不能有重复的命名参数**：箭头函数不允许有重复的命名参数，这与传统的函数不同

### 使用场景

由于箭头函数的this值由其上下文决定，它非常适合用于那些需要保留this上下文的场景，例如在对象方法中或者事件处理器中。

```javascript
function Counter() {
  this.num = 0;
  this.timer = setInterval(() => {
    this.num++; // 这里的this指向Counter实例
    console.log(this.num);
  }, 1000);
}

let myCounter = new Counter();
```

在上面的例子中，如果使用传统函数，this.num可能会指向全局对象而不是Counter实例，因为setInterval的回调函数是在全局上下文中执行的。但是使用箭头函数，this会正确地指向Counter实例。



