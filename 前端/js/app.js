var $$ = Dom7;

var app  = new Framework7({
  root: '#app', 
  id: 'io.framework7.testapp', // App ID
  name: 'Framework7', // App name
  theme: 'auto', // 自动主题检测
  routes: routes, // App 路由
  smartSelect: {
    sheetCloseLinkText:'关闭',//设置弹窗选项的关闭按钮文本
  },
  dialog:{
  	buttonOk: "确定",
 		buttonCancel: "取消",
  }
  
});

// 创建视图
var homeView = app.views.create('#view-home', {
  url: '/'
});
var catalogView = app.views.create('#view-find', {
  url: '/find/'
});
var settingsView = app.views.create('#view-send', {
  url: '/send/'
});
var MyView = app.views.create('#view-My' , {
	url: '/My/'
});
var computerView = app.views.create('#view-list' , {
	url : '/list/'
});
var otherView = app.views.create('#view-furniture' , {
	url : '/furniture/'
});
var displayView = app.views.create('#view-display' , {
	url : '/display/',
});
var otherView = app.views.create('#view-myinfo' , {
	url : '/myinfo/'
});
var otherView = app.views.create('#view-selectList' , {
	url : '/selectList/'
});
var otherView = app.views.create('#view-set' , {
	url : '/set/'
});
//swiper
var swiper = app.swiper.create('.swiper-container',{
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

//下拉选择弹窗
var smartSelect = app.smartSelect.create('.smart-select');


//初始化加载视图时触发的函数
$$(document).on('page:init',function(e){
//在这个方法中些需要实现的函数
//console.log(e.detail);


});
