//自定义js
var strs = '';//创建字符串变量
function searchtoajax(){
	$.ajax({
			type:"post",
			url:"http://192.168.43.17:2212/MainTain/Items/queryItems.action",
			async:true,
	//		data : {},
			dataType: 'json',
			success : function(data){
				console.log(data);
					for(var j =0;j<data.length;j++){
						strs = strs+","+String(data[j].title);
					}
					console.log(strs);
			},
			 error : function(error,textStatus,reason){
			            	console.log('出现错误:'+JSON.stringify(error)+'\n状态：'+textStatus+'\n原因'+reason);
			           }
		});
}
//strs = String(strs);//改变其类型('123'++' Apricot Avocado Banana Melon Orange Peach Pear Pineapple')           
var ceshishuju = strs;//不能赋值

var fruits = ('笔记本键盘卡主了,phone5S开机问题,phoneX屏幕碎了,皮革沙发，被挂了一条口子,打印机漏水,笔记本装WIN10系统,地板被损坏,椅子的一个支架断了,书架,投影仪无法投影了,我的灯泡坏了').split(',');
//function ceshi(){
//	console.log(('123,Apricot,Avocado,Banana,Melon,Orange,Peach,Pear,Pineapple'));
//};

var search_ajax = app.autocomplete.create({
	  inputEl: '#search_ajax',
	  openIn: 'dropdown',
//		expandInput: true, // 扩大输入
	  source: function (query, render) {
	    var results = [];
	    if (query.length === 0) {
	      render(results);
	      return;
	    }
	    // 查找匹配的项目
	    for (var i = 0; i < fruits.length; i++) {
	      if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
	    }
	    // 通过将结果项传递给数组来渲染项目
	    render(results);
	  }
	});
	
	
//导航栏背景颜色的切换
 $(function() {
	 $('div#daohang1 a').click(function(){
	 	$(this).siblings("div#daohang1 a").removeClass("change-click").addClass("change-default");
	 	$(this).addClass("change-click").removeClass("change-default");
	});
});
//var arr = new Array();//创建全局数组
//获取订单列表数据
	function getData(id){
document.getElementById('preloader1').style.display="block";
		$.ajax({
			type:"post",
			url:"http://192.168.43.17:2212/MainTain/Items/queryItems.action",
			async:true,
			data:{'itemCustom.flag' : id},
			dataType:'json',
	            success : function(data){
document.getElementById('preloader1').style.display="none";
	            	for(var i = 0;i < data.length; i++)
	            	{
	            		console.log(data[i]);
	            	}
	            		getDatas(data);
	            },
	            error   : function(error,textStatus,reason){
	            	console.log('出现错误:'+JSON.stringify(error)+'\n状态：'+textStatus+'\n原因'+reason);
	           }
		});
	}
	//循环展示单列表数据
	function getDatas(data){
		console.log(data.length);
				for(var i = 0; i < data.length; i++){
					$('#show_content').append("<a id='titles' onclick='forID("+data[i].id+")' href='#view-display' class='tab-link item-link item-content'><div class='item-media'><img src='"+data[i].image+"' width='80'/></div><div class='item-inner'><div class='item-title-row'><div class='item-title' id='computer_title' style='font-size:16px;'>"+data[i].title+"</div><div class='item-after' id='computer_praise'>"+data[i].praise+"</div></div><div class='item-text' style='font-size:12px;' id='computer_content'>"+data[i].content+"</div></div></a>");
				}
	}
//点击订单列表中的一行则将id传入后台并获取详情数据
function forID(id){
//	console.log(id);
	$('#getID').html(id);
document.getElementById('preloader2').style.display="block";
	$.ajax({
			type:"get",
			url:"http://192.168.43.17:2212/MainTain/Items/queryItemContent.action",
			async:true,
			data:{'itemCustom.id' : id},
			dataType:'json',
	            success : function(data){
document.getElementById('preloader2').style.display="none";
	            	showAll(data);
	            },
	            error   : function(error,textStatus,reason){
	            	console.log('出现错误:'+JSON.stringify(error)+'\n状态：'+textStatus+'\n原因'+reason);
	           }
		});
}
//将详细数据显示在界面
function showAll(data){
	console.log(data[0]);
	$("#find_createdate").attr('value',data[0].create_date);
	$("#find_address").attr('value',data[0].address);
	$("#find_praise").attr('value',data[0].praise);
	$("#find_content").html(data[0].content);
	$("#find_phone").attr('value',data[0].phone);
}

//返回则删除数据
function delete_a(){
	$('#show_content').empty();//再次点击如果元素存在则删除
}
//上传图片
function up_files(){
	document.getElementById("up_files").click();
}
//提交数据
function submit(){
	var choose_type = $("#choose_type").val();//选择维修类型
	var mode = $("#mode").val();//维修方式
	var send_title = $("#send_title").val();//标题
	var send_content = $("#send_content").val();//内容
	var address = $("#address").val();//地址
	var phone = $("#send_phone").val();//联系方式
	var reg = /^[0-9]+$/;//数字验证
	var send_praise = "";//价格
	if(!reg.test($("#send_praise").val()) && $("#send_praise").val() != ""){console.log('输入格式错误');}//，输入格式错误，错误提示
	else if(send_praise !="" && (send_praise>= 5000 || send_praise <= 0) ){console.log("价钱不合适");}//价钱不合适，错误提示
	else{
		if($("#send_praise").val() == ""){send_praise = "面议";}//为空则传值为面议
		else{send_praise = $("#send_praise").val();}//正常赋值
		console.log(send_praise);
  	app.dialog.progress();//等待框
		console.log(localStorage.getItem("login_id"));
		$.ajax({
				type:"post",
				url	:"http://192.168.43.17:2212/MainTain/Items/insertItems.action",
				async:true,
				data:{
					'user_id'			: localStorage.getItem("login_id"),
					'title'				: send_title,
					'content'			: send_content,
					'phone'				: phone,
					'address'			: address,
					'flag' 				: choose_type,
					'praise' 			: send_praise,
					'mode'				: mode,
				},
				dataType:'json',
		            success : function(data){
		            app.dialog.close();//关闭等待框
		            app.dialog.alert('',"发布成功",function(){
		            	window.location.replace('main.html');
		            });
		            },
		            error : function(error,textStatus,reason){
		            	console.log('出现错误:'+JSON.stringify(error)+'\n状态：'+textStatus+'\n原因'+reason);
		           }
			});	
	}
}
//清除表单数据
function clean(){
	var $$ = Dom7;
  		app.dialog.confirm('是否清除信息','', function () {
	  	$("#send_title").val('');//标题
			$("#send_content").val('');//内容
			$("#address").val('');//地址
			$("#send_phone").val('');//联系方式
			$("#send_praise").val('');//价格
  		});
}
//接单
function accept(){
	var item_id = $("#getID").text();
//	console.log(item_id);
//app.preloader.show();
app.dialog.confirm('是否接此单','是否确认',
	 function(){
//	 window.location.replace('main.html');
		 $.ajax({
					type:"post",
					url	:"http://192.168.43.17:2212/MainTain/Items/receiveItems.action",
					async:true,
					data:{
	//					'user_id'	: localStorage.getItem("login_id"),
	//					'item_id'	: item_id,
						'receiveItemCustom.item_id' : item_id,
						'itemCustom.state'	 : 'maintaining',
						'itemCustom.id'	 : item_id,
						'receiveItemCustom.user_id' : localStorage.getItem("login_id")
						},
					dataType:'text',
			            success : function(data){
	//		            	app.preloader.hide();
										app.dialog.alert("","接单成功,请及时联系对方",function(){
											window.location.replace('main.html');
										});
//			            	console.log(data);
			            },
			            error : function(error,textStatus,reason){
			            	console.log('出现错误:'+JSON.stringify(error)+'\n状态：'+textStatus+'\n原因'+reason);
			           }
				});	
	 },
	 function (){app.dialog.destroy});
}

function getMyinfo(){
	var login_id = localStorage.getItem("login_id");
	$.ajax({
		type:"post",
		url:"http://192.168.43.17:2212/MainTain/Account/Content.action",
		async:true,
		data : {
			'accountCustom.user_id' : login_id 
		},
		dataType: 'json',
		success : function(data){
			console.log(data);
			$('#myinfo_name').html(data.username);
			$('#myinfo_stu_num').html(data.user_id);
			$('#myinfo_said').html(data.information);
		},
		 error : function(error,textStatus,reason){
		            	console.log('出现错误:'+JSON.stringify(error)+'\n状态：'+textStatus+'\n原因'+reason);
		           }
	});
}
//退出登录
function quit(){
	 app.dialog.confirm('退出登录','是否确认',
	 function(){
	 	localStorage.removeItem("login_id");//删除登录id
	 	if(localStorage.getItem('login_id') == null){
	 		window.location.replace('login.html');
	 	}else{cansole.log('未能删除id');}
	  	
	 },
	 function (){app.dialog.destroy});
}

//图片上传的预览
 var msg = "您可以上传png, jpg, 或者gif格式的图片";
 var filter = {
   "jpeg": "/9j/4",
   "gif": "R0lGOD",
   "png": "iVBORw"
 };
 function preview(file) {
   var container = document.getElementById("container");
   container.innerHTML = "";
   if (window.FileReader) {
     for (var index=0, f; f = file.files[index]; index++) {
       var filereader = new FileReader();
       filereader.onload = function (event) {
          var srcpath = event.target.result;//获取DataUrl的值
          if (!validateImg(srcpath)) {
          console.log("H5"+msg);//格式错误
          } else {
          showPreviewImage(srcpath);
          }
       };
       filereader.readAsDataURL(f);
     }
   } else {
       if (!/\.jpg$|\.png$|\.gif$/i.test(file.value)) {
       console.log("原生"+msg);
       } else {
       showPreviewImage(file.value);
       }
    }
 }
 function validateImg(data) {
   // console.log(data);
   var pos = data.indexOf(",") + 1;
     for (var e in filter) {
       if (data.indexOf(filter[e]) === pos) {
       return e;
       }
     }
   return null;
 }
 function showPreviewImage(src) {
   console.log(src);
   var img = document.createElement('img');
   img.src = src;
   img.style = "width:100px;height:88px;margin:5px 5px 5px 5px;"
   container.appendChild(img);
 }
 

//未登录则跳转至登录界面
function tologins(){
	localStorage.removeItem("login_id");//再次删除登录id
	window.location.replace('login.html');
}

//订单查询
function selectsList(){
	document.getElementById('preloader3').style.display="block";
//	console.log('ss');
		$.ajax({
		type:"post",
		url:"http://192.168.43.17:2212/MainTain/Items/queryItemContent.action",
		async:true,
		data : {
			'itemCustom.user_id' : localStorage.getItem("login_id"),
			'itemCustom.State' 	 :	'all',
		},
		dataType: 'json',
		success : function(data){
			document.getElementById('preloader3').style.display="none";
			for(var i=0;i<data.length;i++){
				if(data[i].state == 'ing'){data[i].state = '交易中';}
				if(data[i].state == 'cancel'){data[i].state = '已取消';}
				if(data[i].state == 'ed'){data[i].state = '已完成'; 
					$('#show_alllist').append("<li><div class='item-content' id='all_selectList'><div class='item-inner item-cell'><div class='item-row'><div class='item-cell' style='font-size:10px;'>订单号<strong>"+data[i].id+"</strong></div><div class='item-cell' style='font-size:12px;color:orange;'>"+data[i].state+"</div><div class='item-cell' style='font-size:12px;'>"+data[i].praise+"</div></div><div class='item-row'><div class='item-cell'><img src='"+data[i].image+"' width='50' height='50'></div><div class='item-cell'><div class='item-row' style='margin-left:-35px;'><strong>"+data[i].title+"</strong></div><div class='item-row' style='font-size:12px;margin-left:-35px;'><i>"+data[i].content+"</i></div></div></div><div class='item-row'><div class='item-cell' style='font-size:12px;'>"+data[i].create_date+"</div><div class='item-cell'></div></div></div></div></li>");
				}else{
					$('#show_alllist').append("<li><div class='item-content' id='all_selectList'><div class='item-inner item-cell'><div class='item-row'><div class='item-cell' style='font-size:10px;'>订单号<strong>"+data[i].id+"</strong></div><div class='item-cell' style='font-size:12px;color:orange;'>"+data[i].state+"</div><div class='item-cell' style='font-size:12px;'>"+data[i].praise+"</div></div><div class='item-row'><div class='item-cell'><img src='"+data[i].image+"' width='50' height='50'></div><div class='item-cell'><div class='item-row' style='margin-left:-35px;'><strong>"+data[i].title+"</strong></div><div class='item-row' style='font-size:12px;margin-left:-35px;'><i>"+data[i].content+"</i></div></div></div><div class='item-row'><div class='item-cell' style='font-size:12px;'>"+data[i].create_date+"</div><div class='item-cell'><button class='button button-small col button-fill  button-round' onclick='cancel("+data[i].id+")'  id='show_button'>取消订单</button></div><div class='item-cell'><button class='button button-small col button-fill  button-round' onclick='over("+data[i].id+")' id='show_button'>完成订单</button></div></div></div></div></li>");
				}
			}
		},
		 error : function(error,textStatus,reason){
    	console.log('出现错误:'+JSON.stringify(error)+'\n状态：'+textStatus+'\n原因'+reason);
   }
	});
}

//取消订单
function cancel(id){
	 app.dialog.confirm('是否取消订单','',function(){
	 		$.ajax({
					type:"post",
					url:"http://192.168.43.17:2212/MainTain/Items/update_ReceiveItem.action",
					async:true,
					data : {
						'receiveItemCustom.user_id' : localStorage.getItem("login_id"),
						'receiveItemCustom.item_id' :	id,
						'receiveItemCustom.result'	: 'cancel'
					},
					dataType: 'text',
					success : function(data){
						console.log(data);
						if(data == 'success'){
							app.dialog.alert('你已取消该订单','',function(){})
						}
					},
					 error : function(error,textStatus,reason){
			    	console.log('出现错误:'+JSON.stringify(error)+'\n状态：'+textStatus+'\n原因'+reason);
			   }
			});
	 })
}
//完成订单
function over(id){
	 app.dialog.confirm('是否结算订单','',function(){
	 		$.ajax({
					type:"post",
					url:"http://192.168.43.17:2212/MainTain/Items/update_ReceiveItem.action",
					async:true,
					data : {
						'receiveItemCustom.user_id' : localStorage.getItem("login_id"),
						'receiveItemCustom.item_id' :	id,
						'receiveItemCustom.result'	: 'ed'
					},
					dataType: 'text',
					success : function(data){
						if(data == 'success'){
							app.dialog.alert('你已完成该订单','',function(){})
						}
					},
					 error : function(error,textStatus,reason){
			    	console.log('出现错误:'+JSON.stringify(error)+'\n状态：'+textStatus+'\n原因'+reason);
			   }
			});
//	 		app.dialog.alert('你已完成该订单','',function(){})
	 })
}
