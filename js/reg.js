$(document).ready(function(){
	//点击获取验证码
	$("#send").click(function(){
		var _this=$(this); 
		if(!$(this).hasClass("on")){
			$.leftTime(60,function(d){
				if(d.status){
					_this.addClass("on");
					_this.html("重获"+(d.s=="00"?"60":d.s)+"s");
				}else{
					_this.removeClass("on");
					_this.html("获取验证码");
				}
			});
		}
	});
	// 输入框操作
	$("#green").click(function(){  
		$(this).hide(); 
		$("#nogreen").show();  
		$("#password1").attr('type','');
	});
	$("#nogreen").click(function(){  
		$(this).hide(); 
		$("#green").show();  
		$("#password1").attr('type','password');
	}); 
	$("#green2").click(function(){  
		$(this).hide(); 
		$("#nogreen2").show();  
		$("#password2").attr('type','');
	});
	$("#nogreen2").click(function(){  
		$(this).hide(); 
		$("#green2").show();  
		$("#password2").attr('type','password');
	}); 
	$('#loginphone').bind('input propertychange', function() { 
		$("#clean").show()
	}); 
	$("#clean").click(function(){  
		$(this).hide();  
		$("#loginphone").val('')
	});  
	//登录 
	$("#zhuce").click(function(){
		var phone       = $("#loginphone").val(); 
		var code        = $("#code").val(); 
		var password1   = $("#password1").val(); 
		var password2   = $("#password2").val();  
		var phoneable   = noTel(phone);
		if(!phone) { 
			$.toast("手机号码不能为空", "text");
			return false;
		} 
		if(!phoneable) { 
			$.toast("手机号码输入错误", "text");
			return false;
		} 
		if(!code) { 
			$.toast("验证码不能为空", "text");
			return false;
		} 
		if(!password1) { 
			$.toast("密码不能为空", "text");
			return false;
		} 
		if(password1.length<6) { 
			$.toast("密码不得低于6个字符", "text");
			return false;
		} 
		if(!password2) { 
			$.toast("确认密码不能为空", "text");
			return false;
		} 
		if(password1!=password2) { 
			$.toast("两次密码不一致", "text");
			return false;
		}   
		window.location.href="http://www.baidu.com";
	});

});