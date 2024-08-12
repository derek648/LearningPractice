var ScreenWidth = {
    documentWidth: 500,
    containerWidth: 400, // 容器默认宽度
    cellWidth: 20  // 单元格宽度
}
if (document.documentElement.clientWidth < 500) {
    ScreenWidth.documentWidth = document.documentElement.clientWidth;
    ScreenWidth.containerWidth = ScreenWidth.documentWidth * 0.8;
    ScreenWidth.cellWidth = ScreenWidth.containerWidth * 0.05;
}
//常量
var reg = /\d{1,2}/g;
var white = []; // 放白子
var black = []; // 放黑子
var tempKey = false; // 判断是走黑子还是白子
var notOver = true; // 判断游戏是否结束
var tips = "白棋走"; // 提示走棋
var count = 0;//相连的个数
var bv = false; // 黑棋胜利
var wv = false; // 白棋胜利
var yCanWin = [];// 同一竖元素存放的数组
var xCanWin = [];// 同一横元素存放的数组
var xyCanWin = [];// 同一正斜存放的数组
var yxCanWin = [];// 同一反斜存放的数组
// 用计时器监听是否胜利
var time = setInterval(function () {
    if (bv) {
        tips = "黑棋胜利";
        document.getElementsByTagName("span")[0].innerText = tips;
        for (var i = 0; i < document.getElementsByClassName("pieceBox").length; i++) {
            document.getElementsByClassName("pieceBox")[i].onclick = null;
        }
        clearInterval(time);
    }
    if (wv) {
        tips = "白棋胜利";
        document.getElementsByTagName("span")[0].innerText = tips;
        for (var i = 0; i < document.getElementsByClassName("pieceBox").length; i++) {
            document.getElementsByClassName("pieceBox")[i].onclick = null;
        }
        clearInterval(time);
    }
}, 100);
newGame();// 开始游戏
function newGame() {
    if (document.getElementsByTagName("table").length) {
        for (var i = 0; i < document.getElementsByTagName("table").length; i++) {
            document.getElementsByTagName("table")[i].remove();
        }
    }
    // 初始化以下内容
    bgInit();
    pieceInit();
    spanFn();
    white = [];
    black = [];
    tempKey = false;
    notOver = true;
    tips = "白棋走";
    count = 0;
    bv = false;
    xCanWin = [];
    yCanWin = [];
    xyCanWin = [];
    yxCanWin = [];
}

function spanFn() {
    var span = document.createElement("span");
    document.body.insertBefore(span, document.getElementsByTagName("script")[0]);
    span.innerText = tips;
}
// 棋盘初始化
function bgInit() {
    var table = document.createElement("table");
    table.className = "box"
    for (var y = 0; y < 20; y++) {
        var tr = document.createElement("tr");
        for (var x = 0; x < 20; x++) {
            var td = "<td class='box-" + y + "-" + x + "' style='width: " + ScreenWidth.cellWidth + "px; height: " + ScreenWidth.cellWidth + "px;border:1px solid #9c9c9c'></td>";
            tr.innerHTML += td;
        }
        table.appendChild(tr);
    }
    document.body.insertBefore(table, document.getElementsByTagName("script")[0]);
}

// 棋子初始化
function pieceInit() {
    var table = document.createElement("table");
    table.className = "piece"
    table.style = "position: absolute; top: 0; left:50%; margin-left:-" + (ScreenWidth.containerWidth + 42) / 2 + "px";
    for (var y = 0; y < 20; y++) {
        var tr = document.createElement("tr");
        for (var x = 0; x < 20; x++) {
            var td = "<td class='piece-" + y + "-" + x + " pieceBox' style='width: " + ScreenWidth.cellWidth + "px; height: " + ScreenWidth.cellWidth + "px;border:1px solid transparent;border-radius: 50%;'></td>";
            tr.innerHTML += td;
        }
        table.appendChild(tr);
    }
    document.body.insertBefore(table, document.getElementsByTagName("script")[0]);
}

// 走棋
for (var i = 0; i < document.getElementsByClassName("pieceBox").length; i++) {
    document.getElementsByClassName("pieceBox")[i].onclick = function () {
        if (tempKey) {
            this.style.backgroundColor = "#000";// 黑子
            tempKey = false;
            black.push(this.className.match(reg));
            victory(black, 0);//判断黑棋胜利与否
            if (notOver) {
                tips = tipsGo(tempKey);
                document.getElementsByTagName("span")[0].innerText = tips;
            }
        } else {
            this.style.backgroundColor = "#fff";// 白子
            tempKey = true;
            white.push(this.className.match(reg));
            victory(white, 1);//判断白棋胜利与否
            if (notOver) {
                tips = tipsGo(tempKey);
                document.getElementsByTagName("span")[0].innerText = tips;
            }
        }
        this.onclick = null;// 点击之后取消点击事件
    }
}

// 提示走黑还是走白
function tipsGo(tempKey) {
    if (tempKey) {
        return "黑棋走";
    } else {
        return "白棋走";
    }
}

/**
 *判断各种赢的方式
 *x代表很坐标，y代表纵坐标
 *1.竖赢，就是x值相同，取y值排序后比较
 *2.横赢，就是y值相同，取x值排序后比较
 *3.正斜赢，x+y相同的值，取x或y排序后比较
 *4.反斜赢，x-y相同的值，取x或y排序后比较
 */
function victory(target, c) {
    if (target.length >= 5) {
        // 1.竖赢yCanWin
        for (var i = 0; i < target.length; i++) {
            for (var j = 0; j < target.length; j++) {
                if (target[j][1] == target[i][1]) {
                    yCanWin.push(target[j]);//把x相同的值放入数组yCanWin
                }
            }
            yWin(yCanWin, c);
            yCanWin = [];
        }
        // 2.横赢xCanWin
        for (var m = 0; m < target.length; m++) {
            for (var n = 0; n < target.length; n++) {
                if (target[n][0] == target[m][0]) {
                    xCanWin.push(target[n]);//把y相同的值放入数组xCanWin
                }
            }
            xWin(xCanWin, c);
            xCanWin = [];
        }
        // 3.正斜赢xyCanWin（左下到右上）
        for (var a = 0; a < target.length; a++) {
            for (var b = 0; b < target.length; b++) {
                if (parseInt(target[b][0]) + parseInt(target[b][1]) == parseInt(target[a][0]) + parseInt(target[a][1])) {
                    xyCanWin.push(target[b])
                }
            }
            yWin(xyCanWin, c);
            xyCanWin = [];
        }
        // 4.反斜赢yxCanWin（左上到右下）
        for (var v = 0; v < target.length; v++) {
            for (var w = 0; w < target.length; w++) {
                if (parseInt(target[w][0]) - parseInt(target[w][1]) == parseInt(target[v][0]) - parseInt(target[v][1])) {
                    yxCanWin.push(target[w])
                }
            }
            xWin(yxCanWin, c);
            yxCanWin = [];
        }
    }
}
// 棋的竖赢条件(棋的正斜赢条件)
function yWin(yCanWin, c) { // c = 0代表黑子 c = 1代表白子
    var sortArray = [];//排序数组
    for (var i = 0; i < yCanWin.length; i++) {
        sortArray.push(yCanWin[i][0]);
    }
    sortArray.sort(function (x, y) {
        return x - y;
    });
    // 数组排序后，前数和后数加一相比(注意数值类型的转换)
    for (var j = 0; j < sortArray.length; j++) {
        if (sortArray[j + 1]) {
            if (parseInt(sortArray[j]) + 1 == parseInt(sortArray[j + 1])) {
                count++; // 每有一个连续则加一，一次不连续就清零
                if (count == 4 && c == 0) {
                    bv = true;
                    notOver = false;// 游戏结束
                    return;
                } else if (count == 4 && c == 1) {
                    wv = true;
                    notOver = false;
                    return;
                }
            } else {
                count = 0;
            }
        }
    }
    count = 0;
}
// 棋的横赢条件(棋的反斜赢条件)
function xWin(xCanWin, c) {
    var sortArray = [];
    for (var i = 0; i < xCanWin.length; i++) {
        sortArray.push(xCanWin[i][1]);
    }
    sortArray.sort(function (x, y) {
        return x - y;
    });
    for (var j = 0; j < sortArray.length; j++) {
        if (sortArray[j + 1]) {
            if (parseInt(sortArray[j]) + 1 == parseInt(sortArray[j + 1])) {
                count++;
                if (count == 4 && c == 0) {
                    bv = true;
                    notOver = false;
                    return;
                } else if (count == 4 && c == 1) {
                    wv = true;
                    notOver = false;
                    return;
                }
            } else {
                count = 0;
            }
        }
    }
    count = 0;
}


