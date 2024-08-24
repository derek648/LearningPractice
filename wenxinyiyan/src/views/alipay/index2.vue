<template>
    <button class="show-button">开会员</button>
    <form action="https://www.baidu.com/" method="post">
        <!-- 弹窗 -->
        <div id="membershipModal" class="modal"> 
        <div class="modal-content">
            <div class="plan" id="plan1">
                <h2>月度会员</h2>
                <p>￥30/月</p>
                <button class="select-plan" data-plan-name="月度会员" data-plan-price="30" vip-day="30">选择</button>
            </div>
            <div class="plan" id="plan2">
                <h2>季度会员</h2>
                <p>¥80/季度</p>
                <button class="select-plan" data-plan-name="季度会员" data-plan-price="80" vip-day="120">选择</button>
            </div>
            <div class="plan" id="plan3">
                <h2>年度会员</h2>
                <p>¥288/年</p>
                <button class="select-plan" data-plan-name="年度会员" data-plan-price="288" vip-day="365">选择</button>
            </div>

            <!-- 权益说明部分 -->  
            <div class="benefits">  
                <h2>会员权益：</h2>  
                <ul>                        
                    <li><strong>优先创作支持：</strong>享受更快的AI响应速度和更优先的创作辅助，让您的创作过程更加流畅无阻。</li>  
                    <li><strong>无限次内容生成：</strong>作为会员，您将不再受限于每日或每月的内容生成次数，尽情发挥您的创造力。</li>  
                    <li><strong>高级模板与素材库：</strong>独家访问高级创意模板和海量精选素材库，助您轻松打造专业级内容。</li>  
                    <li><strong>个性化内容优化建议：</strong>根据您的创作历史和偏好，提供个性化的内容优化建议，让您的作品更加出色。</li>  
                    <li><strong>专属客服支持：</strong>享受一对一的专属客服服务，解答您在创作过程中遇到的任何问题。</li>                  
                </ul>  
            </div>


            <div class="payment-info">
                <h2>支付信息</h2>
                <p>请选择支付方式并完成支付</p>
                <img src="../../../public/pictures/lgc/支付宝支付.png" style="width: 45px; height: 45px;">
                <!-- <img src="../../../public/pictures/lgc/微信.png" style="width: 45px; height: 45px; "> -->
                <button  type="submit" id="pay-button"  disabled>立即支付</button>
                <button type="button" class="close-button">关闭</button>
            </div>
        </div>
        </div>
    </form>
</template>



<script>
// export default {
//     mounted() {
//         import('../../assets/css/lgc/index2.css');
//         import('../../assets/js/lgc/index2.js');
//     }
// }
//获取会员开始日期
function getstartday() {
    // 创建一个新的Date对象，它默认包含当前的日期和时间
    let now = new Date();
    let year = now.getFullYear();
    // 获取月份，由于月份是从0开始的，所以需要+1
    let month = now.getMonth() + 1;
    // 为了确保月份是两位数，可以使用padStart()方法（ES6+）
    month = month.toString().padStart(2, '0');
    // 获取日
    let day = now.getDate();
    // 同样，为了确保日是两位数，可以使用padStart()方法
    day = day.toString().padStart(2, '0');
    // 将年、月、日拼接成一个字符串
    let CurrentDate = year + '-' + month + '-' + day;
    return CurrentDate;
}
let StartDay = getstartday();


//生成会员结束时间
function getendday(startDate, days) {
    // 将天数转换为毫秒数
    let millisecondsToAdd = days * 24 * 60 * 60 * 1000;
    // 创建一个新的Date对象，其时间为startDate加上相应的毫秒数
    let endDate = new Date(startDate.getTime() + millisecondsToAdd);
    let endYear = endDate.getFullYear();
    let endMonth = endDate.getMonth() + 1; // 月份从0开始，所以+1
    let endDay = endDate.getDate();

    // 将月份和日期转换为两位数，并使用'-'作为日期分隔符
    endMonth = endMonth.toString().padStart(2, '0');
    endDay = endDay.toString().padStart(2, '0');

    // 返回格式化的日期字符串（YYYY-MM-DD）
    return `${endYear}-${endMonth}-${endDay}`;
}
// 示例：从当前日期开始，加上30天
let startDate = new Date();


//获取当前时间点（精确到秒），作为订单号，数据库主键
function getCurrentDateTimeString() {
    // 创建一个新的Date对象，它会自动设置为当前日期和时间
    const now = new Date();

    // 获取各个时间部分的值，并确保月份、日期、小时、分钟和秒都是两位数（如果需要的话）
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 月份从0开始，所以要+1
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // 拼接成年月日时分秒格式
    const dateTimeString = `${year}${month}${day}${hours}${minutes}${seconds}`;

    // 返回结果
    return dateTimeString;
}
let vipId = getCurrentDateTimeString();

document.addEventListener('DOMContentLoaded', function() {
    let selectedPlan = null; // 用于存储选中的会员计划
    // 获取所有选择按钮
    const selectButtons = document.querySelectorAll('.select-plan');

    // 为每个选择按钮添加点击事件监听器
    selectButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 禁用所有选择按钮
            selectButtons.forEach(btn => {  
                btn.disabled = true;  
                btn.classList.add('disabled-button'); // 添加禁用样式类  
            }); 

            // 启用支付按钮
            const payButton = document.getElementById('pay-button');
            payButton.disabled = false;

            // 存储选中的会员计划信息
            selectedPlan = {
                VipType: this.getAttribute('data-plan-name'),
                Price: this.getAttribute('data-plan-price'),
                VipDays: parseInt(this.getAttribute('vip-day'), 10)
            };

            if (selectedPlan) {
                const startDate = new Date();
                const EndDay = getendday(startDate, selectedPlan.VipDays); 
                console.log(vipId+selectedPlan.VipType+selectedPlan.Price+startDate+EndDay)
                fetch('/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        // 注意：这里假设vipId是从其他地方获取的，或者你可以将其包含在selectedPlan中
                        vipid: vipId, // 这里应该是一个有效的vipid
                        viptype: selectedPlan.VipType,
                        price: selectedPlan.Price,
                        email: "123@123.com",
                        start: startDate.toISOString().split('T')[0],
                        end: EndDay,
                        status: "未支付"
                    })
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Success:', data);
                        // 处理成功情况
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        // 处理错误情况
                    });
            }
        });
    });



    // 获取弹窗按钮和弹窗元素  
    var showButton = document.querySelector('.show-button');  
    var modal = document.getElementById('membershipModal');  
  
    // 为弹窗按钮添加点击事件监听器  
    showButton.addEventListener('click', function() {  
    // 显示弹窗  
    modal.style.display = "block";  
    });  


    // 为关闭窗口按钮添加点击事件监听器  
    const closeButtons = document.querySelectorAll('.close-button');  
    closeButtons.forEach(button => {  
        button.addEventListener('click', function() {  
            // 隐藏弹窗  
            const modal = document.getElementById('membershipModal');  
            modal.style.display = "none";  
        });  
    });  

    

    // 为支付按钮添加点击事件监听器
    document.getElementById('pay-button').addEventListener('click', function () {
        if (!selectedPlan) {  
            alert('请先选择一个会员计划！');  
            return;  
        }  
    });
});
</script>



<style scoped>
/* 会员计划容器样式 */   
  
.plan {  
    display: inline-block; /* 或者继续使用flex子项的属性，因为外层已经是flex容器了 */  
    width: calc(33.333% - 20px); /* 假设你想让三个计划并排显示，减去一些间隔 */  
    margin: 0 10px 20px; /* 上下左右都添加一些间距 */  
    /* 其他样式保持不变 */  
}  

/* 弹窗的基础样式 */  
.modal {  
    display: none; 
    position: fixed;  
    z-index: 1000; /* 置于更高层级以确保显示在其他内容之上 */  
    left: 0;  
    top: 0;  
    width: 100%;  
    height: 100%;  
    overflow: auto;  
    background-color: rgba(0, 0, 0, 0.5); /* 更深的背景色以增强对比度 */  
}  
  
.modal-content {  
    background-color: #ffffff; /* 更纯净的白色背景 */  
    margin: 10% auto; /* 稍微调整顶部距离 */  
    padding: 30px; /* 增加内边距以增强可读性 */  
    border: 1px solid #cccccc; /* 更浅的边框颜色 */  
    width: 80%;  
    max-width: 600px;  
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加阴影以增强立体感 */  
    border-radius: 10px; /* 稍微增加边框圆角 */  

    max-width: 800px; /* 例如，将最大宽度增加到800px */  
    /* 或者直接设置宽度（如果不需要响应式宽度） */  
    /* width: 70%; */  
  
    /* 增加左右内边距 */  
    padding-left: 40px;  
    padding-right: 40px; 
}  
  
/* 会员计划样式 */  
.plan {  
    margin-bottom: 25px; /* 增加底部间距 */  
    padding: 20px; /* 增加内边距 */  
    border: 1px solid #cccccc; /* 边框颜色与modal-content一致 */  
    border-radius: 8px; /* 圆角与modal-content稍有不同以区分 */  
    transition: background-color 0.3s; /* 添加过渡效果以增强用户体验 */  
    cursor: pointer;  
}  
  
.plan:hover {  
    background-color: #f0f0f0; /* 浅灰色背景以增加视觉反馈 */  
}  
  
.plan h2 {  
    color: #333333; /* 标题颜色 */  
    font-size: 1.25em; /* 稍微增大标题字体大小 */  
    margin-bottom: 10px; /* 标题与价格之间的间距 */  
}  
  
.plan p {  
    color: #666666; /* 价格颜色 */  
    font-size: 1.1em; /* 稍微增大价格字体大小 */  
    font-weight: bold; /* 加粗价格 */  
}  
  
/* 选择按钮样式 */  
.select-plan {  
    display: inline-block; /* 使得按钮不会独占一行 */  
    padding: 10px 20px;  
    font-size: 1em;  
    color: #ffffff;  
    background-color: #007bff;  
    border: none;  
    border-radius: 5px;  
    cursor: pointer;  
    transition: background-color 0.3s; /* 过渡效果 */  
}  
  
.select-plan:hover {  
    background-color: #0056b3; /* 悬停时改变背景色 */  
}  

.select-plan.selected {  
    background-color: #28a745; /* 选中时的背景色 */  
}
  
/* 支付信息样式 */  
.payment-info h2 {  
    color: #333333;  
    font-size: 1.2em;  
    margin-bottom: 15px;  
}  
  
.payment-info p {  
    color: #666666;  
    font-size: 1em;  
}  
  
/* 支付按钮样式 */  
#pay-button {  
    padding: 12px 24px; /* 稍微增加内边距 */  
    font-size: 1.1em; /* 增大字体大小 */  
    cursor: pointer;  
    border: none;  
    background-color: #007bff;  
    color: white;  
    border-radius: 6px; /* 稍微增加圆角 */  
    transition: background-color 0.3s, opacity 0.3s; /* 添加透明度和背景色的过渡效果 */  
}  
  
/**选中后其他按钮样式 */
#pay-button:disabled {  
    background-color: #cccccc;  
    color: #666666; /* 禁用时改变文字颜色以增强可识别性 */  
    cursor: not-allowed;  
    opacity: 0.6; /* 禁用时稍微降低透明度 */  
}

/* 会员权益模块的样式 */  
.benefits {  
    margin-top: 20px; /* 在会员计划下方添加一些上边距 */  
    padding: 20px; /* 为权益说明添加内边距 */  
    border: 1px solid #ccc; /* 添加边框 */  
    border-radius: 8px; /* 边框圆角 */  
    background-color: #f9f9f9; /* 背景色 */  
    box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* 轻微的阴影效果 */  
}  
  
.benefits h2 {  
    margin-top: 0; /* 移除h2标签的上边距 */  
    color: #333; /* 标题颜色 */  
}  
  
.benefits ul {  
    list-style-type: none; /* 移除列表项前的默认标记 */  
    padding: 0; /* 移除默认的内边距 */  
}  
  
.benefits ul li {  
    margin-top: 8px; /* 列表项之间的间距 */  
    line-height: 1.6; /* 行高，使文本更易读 */  
    color: #666; /* 列表项文本颜色 */  
}

/* 假设这个样式表链接到了您的HTML文件中 */  
  
.close-button {  
    padding: 12px 24px; /* 稍微增加内边距 */  
    font-size: 1.1em; /* 增大字体大小 */  
    cursor: pointer;  
    /* 移除或修改border属性，如果您不需要边框 */  
    /* border: 10px solid #someColor; */  
    background-color: #097676;  
    color: white;  
    border-radius: 6px; /* 稍微增加圆角 */  
    transition: background-color 0.3s, opacity 0.3s; /* 注意：opacity在这里可能没有实际作用，除非您在其他地方设置了它 */  
    margin-left: 10px; /* 添加左边距以与旁边的按钮间隔 */  
}  
  
.close-button:hover {  
    background-color: #da190b; /* 鼠标悬停时的背景色 */  
}
</style>
