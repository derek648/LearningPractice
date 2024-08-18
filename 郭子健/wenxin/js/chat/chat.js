// 發送文本框内容給後端服務器
function send() {
	// 獲取文本框中的值
	let enquiry = $('#enquiry').val()
	$('#enquiry').val("")
	// 獲取用戶信息
	let uid = 123
	// 發送文本框的内容到後臺並取出
	// 檢測傳送的呢欸容是否爲空
	if (uid != "" && enquiry != "") {
		$.ajax({
			url: "https://11c68238.r11.vip.cpolar.cn/xfModel/test",
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
					OverwritePage(enquiry, response.data);
					adjustTextareaHeight();
				} else {
					appendPage(enquiry, response.data);
					adjustTextareaHeight();
				}
			},
			error: function(xhr, status, error) { // 请求失败时的回调函数
				console.log("request fault");
				console.log("status:" + status);
				console.log("error info:" + error);
			}
		})
	}
}

//點擊發送
$('#send').click(() => {
	send()
})


// 給文本框增加發送事件
$('#enquiry').focus(function() {
	let enquiry;
	$('#enquiry').change(function() {
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
		<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl charts flag">
			<div class="md:flex">
				<div class="md:shrink-0 w-full  chatContainer">
					<div class="d-flex align-items-top mt-2">
						<i class="bi bi-person-square"></i>
						<div class="containerChat">
							<textarea class="ms-2 answerAndEnquiry auto-height-textarea" rows="1" id="answerAndEnquiry"
								readonly>${request}</textarea>
						</div>
					</div>
		
					<div class="d-flex align-items-top mt-2">
						<img src="picture/gzj/leftMiddleBar/文心一言.png" alt="Logo" width="25" height="25"
							class="d-inline-block align-text-top chatPic">
						<div class="containerChat">
							<textarea class="ms-2 answerAndEnquiry auto-height-textarea" rows="1" id="answerAndEnquiry"
								readonly>${response}</textarea>
						</div>
					</div>
					<hr/>
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
				<textarea class="ms-2 answerAndEnquiry auto-height-textarea" rows="1" id="answerAndEnquiry"
					readonly>${request}</textarea>
			</div>
		</div>
		
		<div class="d-flex align-items-top mt-2">
			<img src="picture/gzj/leftMiddleBar/文心一言.png" alt="Logo" width="25" height="25"
				class="d-inline-block align-text-top chatPic">
			<div class="containerChat">
				<textarea class="ms-2 answerAndEnquiry auto-height-textarea" rows="1" id="answerAndEnquiry"
					readonly>${response}</textarea>
			</div>
		</div>
		<hr/>
	`
	$(".chatContainer").append(chatElement);
}


// 根據文本内容自適應高度
function adjustTextareaHeight() {
	let textareas = document.getElementsByClassName('auto-height-textarea')
	for (let i = 0; i < textareas.length; i++) {
		textareas[i].style.height = 'auto';
		textareas[i].style.height = textareas[i].scrollHeight + 'px';
	}
}