# javaScript常用数组方法

![image-20240806163753344](C:\Users\31066\AppData\Roaming\Typora\typora-user-images\image-20240806163753344.png)

# 方法详解

## 1.push();

功能: 在数组最后一位添加一个或多个元素,并返回新数组的长度,改变原数组.(添加多个元素用逗号隔开)

```javascript
 var arr = [1, 2, "c"];
    var rel = arr.push("A", "B");
    console.log(arr); // [1, 2, "c", "A", "B"]
    console.log(rel); //  5  (数组长度)

```

## 2.unshift();

功能: 在数组第一位添加一个或多个元素，并返回新数组的长度，改变原数组。(添加多个元素用逗号隔开)

```javascript
 var arr = [1, 2, "c"];
    var rel = arr.unshift("A", "B");
    console.log(arr); // [ "A", "B",1, 2, "c"]
    console.log(rel); //  5  (数组长度)

```

## 3.pop();

功能：删除数组的最后一位，并且返回删除的数据，会改变原来的数组。(该方法不接受参数,且每次只能删除最后一个)

 

```javascript
var arr = [1, 2, "c"];
    var rel = arr.pop();
    console.log(arr); // [1, 2]
    console.log(rel); // c
```



## 4.shift();

功能：删除数组的第一位数据，并且返回被删除的数据，会改变原来的数组。(该方法同pop()；一样不接受参数,且每次只能删除数组第一个)

```javascript
var arr = ["a","b", "c"];
var rel = arr.shift();
console.log(arr); // ['b', "c"]
console.log(rel); // a
```
## 5.reverse();

功能：将数组的数据进行反转，并且返回反转后的数组，会改变原数组

 

```javascript
 var arr = [1, 2, 3, "a", "b", "c"];
    var rel = arr.reverse();
    console.log(arr); //    ["c", "b", "a", 3, 2, 1]
    console.log(rel); //    ["c", "b", "a", 3, 2, 1]
```



## 6.sort();

sort() 方法是最强大的数组方法之一。
sort(); 方法用于对数组的元素进行排序,并返回数组。默认排序顺序是根据字符串Unicode码点。
例1：

 

```javascript
 var arr1 = [10, 1, 5, 2, 3];
    arr1.sort();
    console.log(arr1);
```


结果并不是我们想要的排序结果，因为它是根据unicode编码来排序的,这也显示了其不稳定性。

语法： arr.sort(function(a,b))
参数： function可选。用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的诸个字符的Unicode位点进行排序。
具体用法：

如果 function(a, b) {return: a - b;} ，=> a - b > 0 那么 a 会被排列到 b 之前; (从小到大排序)
如果 function(a, b) {return: b - a;} ，=> b - a > 0 那么b会被排列到 a 之前； (从大到小排序)
那么我们就可以运用以上所说的function(a,b)去完成对数字的排序:

    var arr = [10, 1, 5, 2, 3];
    arr.sort(function (a, b) {
      return a - b;
    });
    console.log(arr);

元素为对象时（可按其中某个属性来排序）：

 

```javascript
var arr1 = [
      { name: "老八", age: "38" },
      { name: "赵日天", age: "28" },
      { name: "龙傲天", age: "48" },
    ];
    arr1.sort(function (a, b) {
      console.log(a, b);
      return b.age - a.age;
    });
    console.log(arr1);
```



## 7.splice();

功能：向数组中添加，或从数组删除，或替换数组中的元素，然后返回被删除/替换的元素所组成的数组。可以实现数组的增删改；
　
　 语法： arrayObject.splice(index,howmany,item1,…,itemX)
　 参数：

参数	描述
index	必需。整数，规定添加/删除项目的位置（元素下标），使用负数可从数组结尾处规定位置。
howmany	必需。要删除的项目数量。如果设置为 0，则不会删除项目。
item1, …, itemX	可选。向数组添加的新项目。
例，删除arr()中第三个元素并添加 ”add1“ "add2"元素

```javascript
 var arr = ["a", "b", "c", 2, 3, 6];
    var rel = arr.splice(2, 1, "add1", "add2");
    console.log(arr);   //原数组
    console.log(rel);	//新数组 
```



## 8.concat();

功能： 数组的拼接(将多个数组或元素拼接形成一个新的数组),不改变原数组
如果拼接的是数组 则将数组展开,之后将数组中的每一个元素放到新数组中.
如果是其他类型, 直接放到新数组中
另外，如果不给该方法任何参数，将返回一个和原数组一样的数组（复制数组）

```javascript
var arr1 = [1, 2, 3];
var arr2 = ["a", "b", "c"];
var arr3 = ["A", "B", "C"];
var rel = arr1.concat(arr2, arr3);
console.log(arr1); //原数组
console.log(rel); //新数组
```

可以看到原数组 arr1() 并没有被改变，该方法不改变原数组，后续不改变原数组方法将不再打印原数组

## 9.join();

功能：用特定的字符,将数组拼接形成字符串 (默认",")

 

```js
var list = ["a", "b", "c", "d"]; // "a-b-c-d"
    var result = list.join("-");     //"a-b-c-d"
    var result = list.join("/");     //"a/b/c/d"
    var result = list.join("");      //"abcd"
    var result = list.join();        //  a,b,c,d
    console.log(result);
```

## 10.slice();

功能： 裁切指定位置的数组，返回值为被裁切的元素形成的新数组 ，不改变原数组
同concat() 方法 slice() 如果不传参数,会使用默认值,得到一个与原数组元素相同的新数组 (复制数组)

语法： arr[].slice(startIndex,endIndex)
参数

参数	描述
startIndex	起始下标 默认值 0
endIndex	终止下标 默认值 length,可以接收负数,(倒着数)
注意！起始下标和终止下标的区间是 左闭右开 [ a ，b) 能取到起始，取不到终止	

```js
 var list = ["a", "b", "c", "d"];
    var result = list.slice(1, 3);
    console.log(result);  // ["b", "c"]
```



## 11.toString();

功能: 直接将数组转换为字符串,并且返回转换后的新数组,不改变原数组,与join();方法不添加任何参数 相同.

```js
 var list = ["a", "b", "c", "d"];
    var rel = list.toString();
    console.log(rel);   // a,b,c,d   (字符串类型)
```



## 12.valueOf();

功能: 返回数组的原始值（一般情况下其实就是数组自身）

 

```js
var list = [1, 2, 3, 4];
    var rel = list.valueOf();
    console.log(list); // [1, 2, 3, 4]
    console.log(rel); // [1, 2, 3, 4]
```

## 13.indexOf();

功能: 查询某个元素在数组中第一次出现的位置 存在该元素,返回下标,不存在 返回 -1 (可以通过返回值 变相的判断是否存在该元素)

 

```js
var list = [1, 2, 3, 4];
    var index = list.indexOf(4); //3
    var index = list.indexOf("4"); //-1
    console.log(index);
```

## 14.lastIndexOf();

功能: 查询某个元素在数组中最后一次出现的位置 (或者理解为反向查询第一次出现的位置) 存在该元素,返回下标,不存在 返回 -1 (可以通过返回值 变相的判断是否存在该元素)

```js
var list = [1, 2, 3, 4];
var index = list.lastIndexOf(4); //3
var index = list.lastIndexOf("4"); //-1
console.log(index);
```
## 15.forEach();

功能: 遍历数组,每次循环中执行传入的回调函数 。(注意: forEach() 对于空数组是不会执行回调函数的。) 没有返回值,或理解为返回值为undefined,不改变原数组.
语法:

arr[].forEach(function(value,index,array){
　 　//do something
})

参数: item:每次循环的当前元素, index:当前项的索引, array:原始数组；

数组中有几项，那么传递进去的匿名回调函数就需要执行几次；

实例1.:

 

```js
var list = [32, 93, 77, 53, 38, 87];
    var res = list.forEach(function (item, index, array) {
      console.log(item, index, array);
    });
    console.log(res);
```

实例2: 数组中元素的和

```js
var list = [32, 93, 77, 53, 38, 87];
var sum = 0;
list.forEach(function (item) {
  console.log(item);
  sum += item;
});
console.log(sum);
```


## 16.map();

功能: 遍历数组, 每次循环时执行传入的回调函数,根据回调函数的返回值,生成一个新的数组 ,
同forEach() 方法,但是map()方法有返回值,可以return出来;
语法:

arr[].map(function(item,index,array){
　　//do something
　　return XXX
})

参数： item:每次循环的当前元素, index:当前项的索引, array:原始数组；

示例:

```js
var list = [32, 93, 77, 53, 38, 87];
var res = list.map(function (item, index, array) {
  return item + 5 * 2;
});
console.log("原数组", list);
console.log("新数组", res);
```
## 17.filter();

功能: 遍历数组, 每次循环时执行传入的回调函数,回调函数返回一个条件,把满足条件的元素筛选出来放到新数组中.
语法:

arr[].filter(function(item,index,array){
　　//do something
　　return XXX //条件
})

参数： item:每次循环的当前元素, index:当前项的索引, array:原始数组；
示例:

 

```js
 var list = [32, 93, 77, 53, 38, 87];
    var resList = list.filter(function (item, index, array) {
      return item >= 60; // true || false
    });
    console.log(resList);
```



## 18.every();

功能: 遍历数组, 每次循环时执行传入的回调函数,回调函数返回一个条件,全都满足返回true 只要有一个不满足 返回false => 判断数组中所有的元素是否满足某个条件

 

```js
var list = [32, 93, 77, 53, 38, 87];
    var result = list.every(function (item, index, array) {
      console.log(item, index, array);
      return item >= 50;
    });
    console.log(result);
```



## 19.some();

功能: 遍历数组, 每次循环时执行传入的回调函数,回调函数返回一个条件,只要有一个元素满足条件就返回true,都不满足返回false => 判断数组中是否存在,满足某个条件的元素
示例:

```js
var list = [32, 93, 77, 53, 38, 87];
var result = list.some(function (item, index, array) {
  return item >= 50;
});
console.log(result);
```
## 20.reduce();

功能: 遍历数组, 每次循环时执行传入的回调函数,回调函数会返回一个值,将该值作为初始值prev,传入到下一次函数中, 返回最终操作的结果;
语法: arr.reduce( function(prev,item,index,array){} , initVal)
参数:
reduce()方法里边，有两部分，第一是个回调函数，第二个参数是设置的初始值。
回调函数中可以有四个参数，
prev 回调初始值 (类似求和是 sum=0) 可以设置初始值( 参数),如果不设置初始值默认是数组中的第一个元素,遍历时从第二个元素开始遍历
item 每次循环的当前元素
index 每次循环的当前下标
array 原数组,

initVal初始值

实例1: 更多实例跳转
不设置初始值的累加

```js
var arr = [2, 3, 4, 5];
var sum = arr.reduce(function (prev, item, index, array) {
  console.log(prev, item, index, array);
  return prev + item;
});
console.log(arr, sum);
```
解析:
第一次循环: prev = 2 ; item(当前循环元素) = 3 ; index(当前循环元素下标) = 1;原数组 =array;
因为没有给prev设置初始值,所以prev 的值为数组中第一个元素,遍历从第二个元素开始
第二次循环:prev = 5; item(当前循环元素) = 4 ; index(当前循环元素下标) = 2;原数组 =array;
prev = 2+3(上次循环的元素) = 5 ;
…
最终prev = 14 ; arr中有四个元素 共循环三次;(因为没设置初始值跳过第一次循环prev默认等于第一个值)

实例2 设置初始值的累加

```js
var arr = [2, 3, 4, 5];
var sum = arr.reduce(function (prev, item, index, array) {
  console.log(prev, item, index, array);
  return prev + item;
}, 0);
console.log(arr, sum);
```
解析: 可以看到与上一次设置初始值相比,最终的结果相同,但是多循环的一次,因为设置了prev的初始值为0,所以循环遍历从第一个元素开始,而不设置初始值,循环从第一个元素开始.

## 21.reduceRight();

功能: 用法同reduce,只不过是从右向左

## 22.includes();

功能: 用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。
实例

```js
let site = ['runoob', 'google', 'taobao'];

site.includes('runoob'); 
// true 

site.includes('baidu'); 
// false
```



## 23.Array.from();

功能: 将一个类数组对象或者可遍历对象转换成一个真正的数组

注意 将一个类数组对象转换为一个真正的数组，必须具备以下条件：

1、该 伪数组 / 类数组 对象必须具有length属性，用于指定数组的长度。如果没有length属性，那么转换后的数组是一个空数组。
2、该 伪数组 / 类数组 对象的属性名必须为数值型或字符串型的数字

```js
var all = {
  0: "张飞",
  1: "28",
  2: "男",
  3: ["率土", "鸿图", "三战"],
  length: 4,
};
var list = Array.from(all);
console.log(all);
console.log(list, Array.isArray(list));
```
## 24.find();

功能: 遍历数组 每次循环 执行回调函数,回调函数接受一个条件 返回满足条件的第一个元素,不存在则返回undefined
参数
item:必须 , 循环当前元素
index:可选 , 循环当前下标
array:可选 , 当前元素所属的数组对象
实例:

```js
var list = [55, 66, 77, 88, 99, 100];
var res= list.find(function (item, index, array) {
  return item > 60;
});
console.log(res); //66
```

打印结果为66,每次循环判断当前元素是否满足条件,如果满足直接跳出循环,返回第一个满足条件的元素

----- 更新 2022年7月20日 15:17:34 ------
该方法可快速查找对象数组满足条件的项

```js
  let arr = [{ id: 1, name: 'coco' }, { id: 2, name: 'dudu' }]
  let res = arr.find(item => item.id == 1)
  console.log('res', res)  //res {id: 1, name: "coco"}
```
## 25.findIndex();

功能 遍历数组,执行回调函数,回调函数接受一个条件,返回满足条件的第一个元素下标,不存在则返回-1
参数
item:必须 , 循环当前元素
index:可选 , 循环当前下标
array:可选 , 当前元素所属的数组对象
注意
findIndex();和indexOf();不同 (刚接触时乍一看和indexOf()怎么一模一样,仔细看了下才发现大有不同)
indexOf是传入一个值.找到了也是返回索引,没有找到也是返回-1 ,属于ES5
findIndex是传入一个测试条件,也就是函数,找到了返回当前项索引,没有找到返回-1. 属于ES6
实例

```js
var list = [55, 66, 77, 88, 99, 100];
    var index = list.findIndex(function (item, index, array) {
      console.log(item, index, array);
      return item > 60;
    });
    console.log(index); // 1
```

打印结果为1, 循环步骤和find()方法一样,但是它返回的是下标,find()返回的是满足条件的元素

----- 更新 2022年7月20日 15:17:34 ------
该方法可快速查找对象数组满足条件的索引，indexOf不支持

```js
  let arr = [{ id: 1, name: 'coco' }, { id: 2, name: 'dudu' }]
  let res = arr.findIndex(item => item.id == 1)
  console.log('res', res)  //res 0
```
## 26.fill();

功能 用给定值填充一个数组
参数
value 必需。填充的值。
start 可选。开始填充位置。
end 可选。停止填充位置 (默认为 array.length)

实例

```js
 var result = ["a", "b", "c"].fill("填充", 1, 2);
```



## 27.flat();

功能 用于将嵌套的数组"拉平",变成一维的数组。该方法返回一个新数组，对原数据没有影响。

注意 默认拉平一次 如果想自定义拉平此处 需要手动传参 ,如果想全都拉平 传 Infinity

```js
var list = [1, 2, [3, 4, [5]]];
var arr = list.flat(); // 默认拉平一次
console.log("拉平一次", arr);

var arr = list.flat(2); // 拉平2次
console.log("拉平两次", arr);
```
## 28.flatMap();

功能 flat()和map()的组合版 , 先通过map()返回一个新数组,再将数组拉平( 只能拉平一次 )

```js
var list = [55, 66, 77, 88, 99, 100];
var newArr = list.map(function (item, index) {
  return [item, index];
});
console.log("Map方法:", newArr);

var newArr = list.flatMap(function (item, index) {
  return [item, index];
});
console.log("flatMap方法:", newArr);
```
