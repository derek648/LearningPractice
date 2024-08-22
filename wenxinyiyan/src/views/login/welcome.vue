<template>
    <div>
        <div class="welcome-container">
            <h1>登录成功</h1>
            <p>欢迎</p>
            <a href="https://3c827cba.r1.cpolar.top/user/conversation" class="action-button">前往会话页面</a>
            <a href="https://3c827cba.r1.cpolar.top/user/alipay" class="action-button">购买</a>
            <a href="https://3c827cba.r1.cpolar.top/user/userhome" class="action-button">账户</a>
        </div>
    </div>
</template>

<script>
export default{
    mounted(){
        import('../../assets/css/czw/welcome.css');
    }
}
</script>