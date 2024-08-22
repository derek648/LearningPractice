let userid;
let url1 = 'http://localhost:8080/api/userinfo?id=' + userid;
let url2 = 'http://localhost:8080/api/getuserid';

function getUserId() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url2, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) { // 状态为4意味着请求已完成
            if (xhr.status === 200) { // 检查状态码
                // 解析JSON格式的响应体（在这个例子中，我们假设响应体是一个整型）
                let response = JSON.parse(xhr.responseText);
                let userId = response.id; // 提取整型字段
                console.log('User ID received:', userId);
                // 假设userId是一个整型，你可以根据需要更新UI
                userid = userId;
            } else {
                console.error('Failed to fetch data:', xhr.statusText);
            }
        }
    };
    // 发送请求
    xhr.send();
}

// 使用原生XMLHttpRequest发送GET请求
function getUserData() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url1, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                try {
                    let userData = JSON.parse(xhr.responseText);
                    displayUserInfo(userData);
                } catch (error) {
                    console.error('Failed to parse JSON:', error);
                    // 向用户显示错误消息
                    let errorElement = document.createElement('p');
                    errorElement.textContent = '无法获取用户信息，请检查网络连接或稍后再试。';
                    document.querySelector('.user-profile').appendChild(errorElement);
                }
            } else {
                console.error('Network response was not ok', xhr.statusText);
                // 向用户显示错误消息
                let errorElement = document.createElement('p');
                errorElement.textContent = '无法获取用户信息，请检查网络连接或稍后再试。';
                document.querySelector('.user-profile').appendChild(errorElement);
            }
        }
    };
    xhr.send();
}

// 显示用户信息的函数
function displayUserInfo(user) {
    document.getElementById('userName').innerText = user.username;
    document.getElementById('userEmail').innerText = user.email;
    document.getElementById('userStatus').innerText = user.activeStatus ? '已激活' : '未激活';
}

// 页面加载完毕后执行获取用户数据的操作
window.onload = function () {
    getUserId();
    getUserData();
};