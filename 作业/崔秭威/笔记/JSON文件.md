# JSON文件

JSON（JavaScript Object Notation）是一种轻量级的数据交换格式，易于人阅读和编写，同时也易于机器解析和生成。它基于JavaScript编程语言的一个子集，但独立于语言，许多编程语言都支持JSON。

## JSON的格式特点

1.数据结构：JSON支持以下数据结构：

- 对象（Object）：一个无序的“‘名称/值’对”集合。一个对象以“{”开始，并以“}”结束。每个“名称”后跟一个“:”，“‘名称/值’对”之间用“,”分隔。
- 数组（Array）：值的有序集合。一个数组以“[”开始，并以“]”结束。值之间用“,”分隔。

2.值：可以是以下几种类型：

- 字符串（String）：必须用双引号包围，例如 "Hello World"。
- 数字（Number）：整数或浮点数，例如 123 或 3.14。
- 布尔值（Boolean）：true 或 false。
  null：表示空值或者不存在的对象。
- 对象（Object）或数组（Array）：可以嵌套使用。

3.注释：JSON标准不包含注释，所有的注释都会被解析器忽略。

## JSON示例

一个简单的JSON对象

```json
{
  "name": "张三",
  "age": 30,
  "isStudent": false
}
```

一个包含数组的JSON对象

```json
{
  "name": "李四",
  "age": 25,
  "hobbies": ["reading", "swimming", "cycling"]
}
```

一个包含嵌套对象的JSON数组

```json
[
  {
    "name": "王五",
    "age": 22,
    "address": {
      "city": "北京",
      "street": "长安街"
    }
  },
  {
    "name": "赵六",
    "age": 28,
    "address": {
      "city": "上海",
      "street": "南京路"
    }
  }
]
```

## JSON在JavaScript中的使用

解析JSON：将JSON字符串转换为JavaScript对象或数组。

```javascript
let obj = JSON.parse('{ "name": "张三", "age": 30 }');
```

序列化JSON：将JavaScript对象或数组转换为JSON字符串。

```javascript
let str = JSON.stringify({ "name": "张三", "age": 30 });
```

