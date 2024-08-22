<template>
    <div class="container">
        <h1>账号激活</h1>
        <form action="/user/active" method="post">
            <div>
                <label for="active-code">您好，请输入激活码进行激活。</label>
                <input type="text" id="active-code" name="code" placeholder="请输入激活码" required>>
            </div>
            <input type="submit" value="激活">
        </form>
    </div>
</template>

<script>
export default {
    mounted() {
        import('../../assets/css/czw/activePage.css');
    }
}
</script>