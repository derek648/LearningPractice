<template>
    <div class="success-container">
        <h1>注册成功！</h1>
        <p>感谢您注册我们的服务,请您前往邮箱查看激活码。</p>
        <a href="/user/activePage">激活</a>
    </div>
</template>

<script>
export default {
    mounted() {
        import('../../assets/css/czw/success.css');
        import('../../assets/js/czw/index.js');
    }
}
</script>