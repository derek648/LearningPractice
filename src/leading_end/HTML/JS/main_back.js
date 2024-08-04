// 获取按钮元素
// let jumpButton = document.getElementById('jumpButton');
//
// // 为按钮添加点击事件监听器
// jumpButton.addEventListener('click', function() {
//     // 设置要跳转到的URL
//     // 使用JavaScript修改当前窗口的location.href属性以实现跳转
//     window.location.href = "https://yiyan.baidu.com/";
// });

let text_container = document.getElementById("jumpButton");
text_container.addEventListener("click", function (){
    text_container.textContent= ""
})