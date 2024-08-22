<template>
    <div>
        <div class="container">
            <!-- 注册表单 -->
            <div id="register-form">
                <h2>注册</h2>
                <form action="https://3c827cba.r1.cpolar.top/user/register" method="post">
                    <div>
                        <label for="register-username">用户名:</label>
                        <input type="text" id="register-username" name="username">
                    </div>
                    <div>
                        <label for="register-password">密码:</label>
                        <input type="password" id="register-password" name="password">
                    </div>
                    <div>
                        <label for="register-email">邮箱:</label>
                        <input type="email" id="register-email" name="email">
                    </div>
                    <input type="submit" value="注册">
                </form>
                <button id="switch-to-login1">切换到登录</button>
                <button id="switch-to-wechat1">切换到微信登录</button>
            </div>

            <!-- 登录表单 -->
            <div id="login-form" style="display: none;">
                <h2>登录</h2>
                <form action="https://3c827cba.r1.cpolar.top/user/login">
                    <div>
                        <label for="login-username">用户名:</label>
                        <input type="text" id="login-username" name="username">
                    </div>
                    <div>
                        <label for="login-password">密码:</label>
                        <input type="password" id="login-password" name="password">
                    </div>
                    <input type="submit" value="登录">
                </form>
                <button id="switch-to-register">切换到注册</button>
                <button id="switch-to-wechat2">切换到微信登录</button>
            </div>

            <!-- 微信登录表单 -->
            <div id="wechat-form" class="form-container" style="display: none;">
                <h2>微信登录</h2>
                <p>请使用微信扫描二维码登录</p>
                <!-- 假设有一个图片链接指向微信登录的二维码 -->
                <img src="../../../public/pictures/czw/icons/images/oC94m7YOaBjLt9IFpqqI8exz1yTM (3).jpg (3).jpg" alt="微信登录二维码">
                <button id="switch-to-login2">切换到登录</button>
                <button id="wechat-login">确认登录</button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    mounted() {
        import('../../assets/css/czw/index.css');
        import('../../assets/js/czw/index.js');
    }
}
</script>
