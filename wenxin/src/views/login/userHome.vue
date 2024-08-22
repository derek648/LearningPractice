<template>
    <div class="user-profile">
        <img src="https://ts1.cn.mm.bing.net/th/id/R-C.c723725e03aea506040fdc41659447f8?rik=KKB0D8ryLw1Z2g&riu=http%3a%2f%2fwww.gx8899.com%2fuploads%2fallimg%2f150324%2f10310151W-5.jpg&ehk=%2fWE%2f4he9HYPYjbcCqAjI4XhKFkFkN4hh11Z5xIofokY%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
            alt="用户头像">
        <div>
            <div>
                账户名称：<h1 id="userName"></h1>
            </div>
            <div>
                邮箱：<p id="userEmail"></p>
            </div>
            <div>
                激活状态：<p id="userStatus"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        import('../../assets/js/czw/userHome.js');
        import('../../assets/css/czw/userHome.css');
    }
}
</script>