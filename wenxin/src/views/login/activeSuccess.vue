<template>
    <div class="activation-message">
        <div class="checkmark"></div>
        <h1>用户已激活！</h1>
        请<a href="/user/loginPage" class="login-link">登录</a>
    </div>
</template>

<script>
export default {
    mounted() {
        import('../../assets/css/czw/activeSuccess.css');
    }
}
</script>