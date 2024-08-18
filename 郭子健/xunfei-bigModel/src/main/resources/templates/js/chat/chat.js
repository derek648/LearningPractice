// 發送文本框内容給後端服務器
function send() {
	// 獲取文本框中的值
	let enquiry = $('#enquiry').val()
	$('#enquiry').val("")
	// 獲取用戶信息
	let uid = 123
	console.log(enquiry)
	// 發送文本框的内容到後臺並取出
	$.ajax({
		url: "http://11c68238.r11.vip.cpolar.cn/xfModel/test",
		type: "get",
		data: {
			uid: uid,
			text: enquiry
		},
		dataType: "json",
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		success: function(response) {
			// 判斷是否頁面覆蓋了
			if ($('.flag').length == 0) {
				OverwritePage(enquiry, response.data)
			} else {
				appendPage(enquiry, response.data)
			}
			console.log("取到數據啦")
		},
		error: function(xhr, status, error) { // 请求失败时的回调函数
			console.log("request fault");
			console.log("status:" + status);
			console.log("error info:" + error);
		}
	})
}

//點擊發送
$('#send').click(() => {
	send()
})


// 給文本框增加發送事件
$('#enquiry').focus(function() {
	let enquiry;
	$('#enquiry').change(function(){
		enquiry = $('#enquiry').val()
	})
	if (enquiry != "") {
		$('#enquiry').keypress(function(event) {
			// 如果按下enter鍵，則發送
			if (event.which == "13") {
				event.preventDefault();
				send();
			}
		})
	}
});

//創建對話框
function OverwritePage(request, response) {
	// 設置flag類選擇器，來判斷是否存在
	let chatElement = `
		<div class="position-relative flag">
			<div class="position-absolute top-50 start-50 translate-middle chatContainer" style=" display: block">
				<div class="d-flex align-items-top mt-2">
					<i class="bi bi-person-square"></i>
					<div class="containerChat">
						<textarea class="ms-2 answerAndEnquiry auto-height-textarea" rows="1" id="answerAndEnquiry" readonly>${request}</textarea>
					</div>
				</div>
				<div class="d-flex align-items-top mt-2">
					<img src="picture/gzj/leftMiddleBar/文心一言.png" alt="Logo" width="25" height="25"
						class="d-inline-block align-text-top chatPic">
					<div class="containerChat"> 
						<textarea class="ms-2 answerAndEnquiry auto-height-textarea" rows="1" id="answerAndEnquiry" readonly>${response}</textarea>
					</div>
				</div>
			</div>
		</div>
	`
	$(".right").html(chatElement);
}

// 向對話框添加數據
function appendPage(request, response) {
	let chatElement = `
		<div class="d-flex align-items-top mt-2">
			<i class="bi bi-person-square"></i>
			<div class="containerChat">
				<textarea class="ms-2 answerAndEnquiry auto-height-textarea" rows="1" id="answerAndEnquiry" readonly>${request}</textarea>
			</div>
		</div>
		<div class="d-flex align-items-top mt-2">
			<img src="picture/gzj/leftMiddleBar/文心一言.png" alt="Logo" width="25" height="25"
				class="d-inline-block align-text-top chatPic">
			<div class="containerChat">
				<textarea class="ms-2 answerAndEnquiry auto-height-textarea" rows="1" id="answerAndEnquiry" readonly>${response}</textarea>
			</div>
		</div>
	`
	$(".chatContainer").append(chatElement);
	console.log('OverwritePage被調用')
}


// 根據文本内容自適應高度
function adjustTextareaHeight(textarea) {
	textarea.style.height = 'auto';
	textarea.style.height = textarea.scrollHeight + 'px';
}
// 页面加载完成后调整高度  
window.onload = function() {
	let textarea = document.querySelector('.auto-height-textarea');
	adjustTextareaHeight(textarea);

	// 监听输入事件以动态调整高度  
	textarea.addEventListener('input', function() {
		adjustTextareaHeight(this);
	});
};