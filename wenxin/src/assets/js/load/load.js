// 当页面加载完毕时执行此函数
// 当页面加载完毕时执行此函数
window.onload = function() {
	// 隐藏加载提示并显示主内容

	let loadingLen = document.getElementsByClassName('loading').length
	let loadings = document.getElementsByClassName('loading')
	let mainContentLen = document.getElementsByClassName('mainContent').length
	let mainContents = document.getElementsByClassName('mainContent')
	for (let i = 0; i < loadingLen; i++) {
		console.log(loadings[i])
		loadings[i].style.display = 'none';
	}
	for (let i = 0; i < mainContentLen; i++) {
		console.log(mainContents[i])
		mainContents[i].style.display = 'block';
	}
};