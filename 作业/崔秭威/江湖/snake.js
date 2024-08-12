var arrayBox = new Array(); // 存放单元格
var arraySnake = new Array(); // 存放蛇
var food; // 食物
var key = true; // 判断页面是否需要初始化
var timekey; // 运动定时器常量

function newGame() {
    bgInit();
    arrayBoxInit();
    initSnake();
    randomFood();
}

newGame();
document.onclick = function () {
    if (key) {
        gameStart(arraySnake);
        key = false;
    }
}



// 记录的单元格数组初始化
function arrayBoxInit() {
    for (var y = 0; y < 20; y++) {
        arrayBox[y] = new Array();
        for (var x = 0; x < 20; x++) {
            arrayBox[y][x] = 0;
        }
    }
}

// 背景初始化
function bgInit() {
    var table = document.createElement("table");
    table.style = "border-spacing:0px; border:1px solid #3c3c3c;margin:10% auto";
    for (var y = 0; y < 20; y++) {
        var tr = document.createElement("tr");
        for (var x = 0; x < 20; x++) {
            var td = "<td class='box-" + y + "-" + x + "' style='width: 20px; height: 20px;'></td>";
            tr.innerHTML += td;
        }
        table.appendChild(tr);
    }
    document.body.insertBefore(table, document.getElementsByTagName("script")[0]);
}

// 初始化蛇
function initSnake() {
    var x = Math.floor(Math.random() * 20);
    var y = Math.floor(Math.random() * 20);
    var initA = document.getElementsByClassName("box-" + y + "-" + x)[0];
    var b = initBFn(x, y);
    var initB = document.getElementsByClassName(b)[0];
    arraySnake.push(initB);
    arraySnake.push(initA);
    initA.style.backgroundColor = "#9c9c9c";
    initB.style.backgroundColor = "#9c9c9c";
    arrayBox[y][x] = 1;
    arrayBox[b.split("-")[1]][b.split("-")[2]] = 1;
}

// 初始化蛇身
function initBFn(x, y) {
    if (x != 19 && x != 0) {
        if (y != 19 && y != 0) {
            if (Math.random() > 0.5) {
                if (Math.random() > 0.5) {
                    return "box-" + y + "-" + (x + 1);
                } else {
                    return "box-" + y + "-" + (x - 1);
                }
            } else {
                if (Math.random() > 0.5) {
                    return "box-" + (y + 1) + "-" + x;
                } else {
                    return "box-" + (y - 1) + "-" + x;
                }
            }
        } else if (y == 0) {
            if (Math.random() > 0.5) {
                return "box-0-" + (x + 1);
            } else {
                return "box-0-" + (x - 1);
            }
        } else if (y == 19) {
            if (Math.random() > 0.5) {
                return "box-19-" + (x + 1);
            } else {
                return "box-19-" + (x - 1);
            }
        }
    } else if (x == 0) {
        if (y != 19 && y != 0) {
            if (Math.random() > 0.5) {
                return "box-" + (y + 1) + "-0";
            } else {
                return "box-" + (y - 1) + "-0";
            }
        } else if (y == 0) {
            if (Math.random() > 0.5) {
                return "box-1-0";
            } else {
                return "box-0-1";
            }
        } else if (y == 19) {
            if (Math.random() > 0.5) {
                return "box-18-0";
            } else {
                return "box-19-1";
            }
        }
    } else if (x == 19) {
        if (y != 19 && y != 0) {
            if (Math.random() > 0.5) {
                return "box-" + (y + 1) + "-19";

            } else {
                return "box-" + (y - 1) + "-19";
            }
        } else if (y == 0) {
            if (Math.random() > 0.5) {
                return "box-1-19";
            } else {
                return "box-0-18";
            }
        } else if (y == 19) {
            if (Math.random() > 0.5) {
                return "box-18-19";
            } else {
                return "box-19-18";
            }
        }
    }
}

// 随机产生食物食物
function randomFood() {
    var x = Math.floor(Math.random() * 20);
    var y = Math.floor(Math.random() * 20);
    if (!arrayBox[y][x]) {
        document.getElementsByClassName("box-" + y + "-" + x)[0].style = "background-color:#9c9c9c;border-radius:50%";
        arrayBox[y][x] = 1;
        food = document.getElementsByClassName("box-" + y + "-" + x)[0];
    } else {
        eatFood();
    }
}

// 开始游戏
function gameStart(arraySnake) {
    var Ax = arraySnake[1].className.split("-")[2];
    var Ay = arraySnake[1].className.split("-")[1];
    var Bx = arraySnake[0].className.split("-")[2];
    var By = arraySnake[0].className.split("-")[1];
    if (Ay == By) {
        if (Ax > Bx) {
            moveRight();
        } else {
            moveLeft()
        }
    } else {
        if (Ay > By) {
            moveDown()
        } else {
            moveUp()
        }
    }
}


// 初始化运动，（方向：右左上下）
function moveRight() {
    timekey = setInterval(function () {
        var nextBox = document.getElementsByClassName("box-" + arraySnake[arraySnake.length - 1].className.split("-")[1] + "-" + (parseInt(arraySnake[arraySnake.length - 1].className.split("-")[2]) + 1))[0];
        if (nextBox) {
            arrayBox[arraySnake[arraySnake.length - 1].className.split("-")[1]][(parseInt(arraySnake[arraySnake.length - 1].className.split("-")[2]) + 1)] = 1;
            nextBox.style.backgroundColor = "#9c9c9c";
            arraySnake.push(nextBox);
            arrayBox[arraySnake[0].className.split("-")[1]][arraySnake[0].className.split("-")[2]] = 0;
            arraySnake[0].style.backgroundColor = "#fff";
            arraySnake.shift();
            eatFood();
        }
    }, 200);
}

function moveLeft() {
    timekey = setInterval(function () {
        var nextBox = document.getElementsByClassName("box-" + arraySnake[arraySnake.length - 1].className.split("-")[1] + "-" + (parseInt(arraySnake[arraySnake.length - 1].className.split("-")[2]) - 1))[0];
        if (nextBox) {
            arrayBox[arraySnake[arraySnake.length - 1].className.split("-")[1]][(parseInt(arraySnake[arraySnake.length - 1].className.split("-")[2]) - 1)] = 1;
            nextBox.style.backgroundColor = "#9c9c9c";
            arraySnake.push(nextBox);
            arrayBox[arraySnake[0].className.split("-")[1]][arraySnake[0].className.split("-")[2]] = 0;
            arraySnake[0].style.backgroundColor = "#fff";
            arraySnake.shift();
            eatFood();
        }
    }, 200);
}

function moveUp() {
    timekey = setInterval(function () {
        var nextBox = document.getElementsByClassName("box-" + (parseInt(arraySnake[arraySnake.length - 1].className.split("-")[1]) - 1) + "-" + arraySnake[arraySnake.length - 1].className.split("-")[2])[0];
        if (nextBox) {
            arrayBox[(parseInt(arraySnake[arraySnake.length - 1].className.split("-")[1]) - 1)][arraySnake[arraySnake.length - 1].className.split("-")[2]] = 1;
            nextBox.style.backgroundColor = "#9c9c9c";
            arraySnake.push(nextBox);
            arrayBox[arraySnake[0].className.split("-")[1]][arraySnake[0].className.split("-")[2]] = 0;
            arraySnake[0].style.backgroundColor = "#fff";
            arraySnake.shift();
            eatFood();
        }
    }, 200);
}

function moveDown() {
    timekey = setInterval(function () {
        var nextBox = document.getElementsByClassName("box-" + (parseInt(arraySnake[arraySnake.length - 1].className.split("-")[1]) + 1) + "-" + arraySnake[arraySnake.length - 1].className.split("-")[2])[0];
        if (nextBox) {
            arrayBox[(parseInt(arraySnake[arraySnake.length - 1].className.split("-")[1]) + 1)][arraySnake[arraySnake.length - 1].className.split("-")[2]] = 1;
            nextBox.style.backgroundColor = "#9c9c9c";
            arraySnake.push(nextBox);
            arrayBox[arraySnake[0].className.split("-")[1]][arraySnake[0].className.split("-")[2]] = 0;
            arraySnake[0].style.backgroundColor = "#fff";
            arraySnake.shift();
            eatFood();
        }
    }, 200);
}

// 键盘操作拐弯
document.addEventListener("keydown", function (e) {
    if (e.code == "ArrowDown") {
        turnDown();
    } else if (e.code == "ArrowUp") {
        turnUp();
    } else if (e.code == "ArrowLeft") {
        turnLeft();
    } else if (e.code == "ArrowRight") {
        turnRight();
    }
}, false);

// 下拐
function turnDown() {
    if (arraySnake[arraySnake.length - 1].className.split("-")[1] == arraySnake[arraySnake.length - 2].className.split("-")[1]) {
        clearInterval(timekey);
        moveDown();
    }
}
// 下拐
function turnUp() {
    if (arraySnake[arraySnake.length - 1].className.split("-")[1] == arraySnake[arraySnake.length - 2].className.split("-")[1]) {
        clearInterval(timekey);
        moveUp();
    }
}
// 左拐
function turnLeft() {
    if (arraySnake[arraySnake.length - 1].className.split("-")[2] == arraySnake[arraySnake.length - 2].className.split("-")[2]) {
        clearInterval(timekey);
        moveLeft();
    }
}
// 右拐
function turnRight() {
    if (arraySnake[arraySnake.length - 1].className.split("-")[2] == arraySnake[arraySnake.length - 2].className.split("-")[2]) {
        clearInterval(timekey);
        moveRight();
    }
}
// 蛇吃食物
function eatFood() {
    var temp = food;
    if (arrayBox[food.className.split("-")[1]][food.className.split("-")[2]] == 0) {
        randomFood();
        addSnakeLength(temp);
    }
}
// 增加长度在蛇尾
function addSnakeLength(temp) {
    arraySnake.unshift(temp);
}
