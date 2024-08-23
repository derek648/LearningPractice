// 切换到登录表单1
document.getElementById('switch-to-login1').addEventListener('click', function () {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('wechat-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// 切换到登录表单2
document.getElementById('switch-to-login2').addEventListener('click', function () {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('wechat-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// 切换到注册表单
document.getElementById('switch-to-register').addEventListener('click', function () {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('wechat-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

// 切换到微信登录表单1
document.querySelectorAll('#switch-to-wechat1').forEach(function (button) {
    button.addEventListener('click', function () {
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('wechat-form').style.display = 'block';
    });
});

// 切换到微信登录表单2
document.querySelectorAll('#switch-to-wechat2').forEach(function (button) {
    button.addEventListener('click', function () {
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('wechat-form').style.display = 'block';
    });
});

// 页面加载完成后执行的函数
window.onload = function () {
    // 获取按钮元素
    let button = document.getElementById('wechat-login');

    // 绑定点击事件到按钮
    button.addEventListener('click', function () {
        // 调用AJAX请求函数来获取跳转URL
        getRedirectUrl(function (url) {
            // 执行页面跳转
            redirectToUrl(url);
        });
    });
};

// AJAX请求函数，与之前定义相同
function getRedirectUrl(callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://c3f1c2f.r5.cpolar.top/api/test', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.send();
}

// 页面跳转函数，与之前定义相同
function redirectToUrl(url) {
    if (url) {
        window.location.href = url;
    } else {
        console.error("无效的URL");
    }
}