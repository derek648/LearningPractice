<template>
    <div class="error-container">
        <h1>用户不存在或未激活！</h1>
        <a href="/user/loginPage" class="login-link">登录</a>
    </div>
</template>

<script>
export default {
    mounted() {
        import('../../assets/css/czw/error.css');
    }
}
</script>
