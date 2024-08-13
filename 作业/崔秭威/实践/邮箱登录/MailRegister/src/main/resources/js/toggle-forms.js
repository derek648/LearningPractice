// 切换到注册表单
function switchToRegister() {
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
}

// 切换到登录表单
function switchToLogin() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

// 初始化函数，确保在页面加载完成后执行
function initFormToggler() {
    // 获取切换按钮
    var switchToRegisterBtn = document.getElementById('switch-to-register');
    var switchToLoginBtn = document.getElementById('switch-to-login');

    // 添加事件监听器
    if (switchToRegisterBtn) {
        switchToRegisterBtn.addEventListener('click', switchToRegister);
    }
    if (switchToLoginBtn) {
        switchToLoginBtn.addEventListener('click', switchToLogin);
    }

    // 默认显示登录表单
    switchToLogin();
}

// 当文档加载完毕时，调用初始化函数
document.addEventListener('DOMContentLoaded', initFormToggler);
