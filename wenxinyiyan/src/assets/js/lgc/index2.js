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
            selectButtons.forEach(btn => btn.disabled = true);

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
                const EndDay = getendday(startDate, selectedPlan.VipDays); // 假设你已经有这个函数

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

    // 为支付按钮添加点击事件监听器
    document.getElementById('pay-button').addEventListener('click', function () {
        if (!selectedPlan) {  
            alert('请先选择一个会员计划！');  
            return;  
        }  
    });
});
