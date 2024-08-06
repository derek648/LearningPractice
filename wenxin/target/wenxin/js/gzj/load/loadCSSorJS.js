// 获取css文件
// 方法详细介绍：使用此方法用js将css文件动态加载到需要的html页面中
// 方法调用格式:	load(css文件的位置，绝对路径相对路径皆可）
// 日期：8/5
function loadCSS(url) {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
}

// 获取js文件
// 方法详细介绍：使用此方法用js将js文件动态加载到需要的html页面中
// 方法调用格式:	load(js文件的位置，绝对路径相对路径皆可）
// 日期：8/5
function loadScript(getURL) {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = getURL;
    document.head.appendChild(script);
}

//调用jquery的ajax获取页面信息
function getPageInfo(getURL, divID) {
    $.ajax({
        url: getURL,
        type: "GET",
        dataType: "html",
        success: function (data) {
            var parser = new DOMParser();
            var doc = parser.parseFromString(data, "text/html");
            var bodyContent = doc.querySelector('body').innerHTML;
            document.getElementById(divID).innerHTML = bodyContent;
        },
        error: function (xhr, status, error) { // 请求失败时的回调函数
            console.log("请求失败");
            console.log("状态：" + status);
            console.log("错误信息：" + error);
        }
    });
}