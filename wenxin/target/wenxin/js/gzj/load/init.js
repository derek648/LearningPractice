window.onload = function () {
    //将gzj的html页面模块,css,js发送到主页面
    getPageInfo("html/gzj/leftMiddleBar.html","leftMiddleBar_gzj");
    loadCSS("css/gzj/leftMiddlePage/hoverStyle.css")
    loadCSS("css/gzj/leftMiddlePage/leftMiddlePage.css")
    loadScript("js/gzj/leftMiddleBar/historicalDialog_gzj.js")

    //将gyt的html页面模块,css,js发送到主页面
    getPageInfo("html/gyt/chatArea.html","dialogBox_gyt");
    loadCSS("css/gyt/Style.css")

    //将lgc的html页面模块,css,js发送到主页面
    getPageInfo("html/lgc/main_back.html","mainBack_lgc");
    loadCSS("css/lgc/main_back/main_back.css")

    //将czw的html页面模块,css,js发送到主页面
    getPageInfo("html/czw/index.html","leftBar_czw");
    loadCSS("css/czw/index.css")
}