//============================================
//		2018-04-27  By Fanhua
//		DzAdmin 1.0.6
//============================================
function getParent(){
	return window.parent;
}


//打开新窗口
function openWindow(url){
	 getParent().openWindow(url);
}

//创新当前窗口
function refresh(){
	getParent().refresh();
}

//返回桌面
function desktop(){
	getParent().desktop();
}

//返回上一级
function go(type){
	window.history.go(type);
}

function refresh(){
	go(0);
}

function back(){
	go(-1);
}

function forward(){
	go(1);
}


//打开加载中
function showLoading(title){
	getParent().showLoading(title);
}

//关闭加载中
function closeLoading(){
	getParent().closeLoading();
}
