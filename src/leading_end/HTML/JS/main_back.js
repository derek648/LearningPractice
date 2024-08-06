// 设置Enter按钮来控制屏幕组件的可视化
let hidden_lgc = document.getElementById("jumpButton_lgc")
let text_container = document.getElementById("text_container_lgc");
hidden_lgc.addEventListener("click", function (){
    text_container.textContent= ""
})
