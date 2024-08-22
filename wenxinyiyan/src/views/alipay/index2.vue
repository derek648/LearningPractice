<template>
    <form action="https://3c827cba.r1.cpolar.top/create" method="post">
        <!-- 弹窗 -->
        <div id="membershipModal" class="modal">
            <div class="modal-content">
                <div class="plan" id="plan1">
                    <h2>月度会员</h2>
                    <p>￥30/月</p>
                    <button class="select-plan" data-plan-name="月度会员" data-plan-price="30" vip-day="30">选择</button>
                    <label class="day" hidden="hidden" id="30"></label>
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
                <div class="payment-info">
                    <h2>支付信息</h2>
                    <p>请选择支付方式并完成支付</p>
                    <button type="submit" id="pay-button" disabled>立即支付</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    mounted() {
        import('../../assets/css/lgc/index2.css');
        import('../../assets/js/lgc/index2.js');
    }
}
</script>
