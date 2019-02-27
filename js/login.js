$(document).ready(function(){
	//点击获取验证码
	$("#send").click(function(){
		$("#send").hide();
		$("#sent").show();
		setTimeout(() => {
			$("#sent").hide();
			$("#send").show();
		},6*10*1000);
	});
	//确定按钮
	$("#saveBtn").click(function(){ 
		var phone      = $("#phone").val(); 
		var code       = $("#code").val(); 
		var phoneable  = noTel(phone);
		if(!phone) { 
			$.toast("手机号码不能为空", "text");
			return false;
		} 
		if(!phoneable) { 
			$.toast("手机号码有误", "text");
			return false;
		} 
		if(!code) { 
			$.toast("验证码不能为空", "text");
			return false;
		}  
		$.toast("校验通过");  
	});
	// 输入框操作
	$("#green").click(function(){  
		$(this).hide(); 
		$("#nogreen").show();  
		$("#code").attr('type','');
	});
	$("#nogreen").click(function(){  
		$(this).hide(); 
		$("#green").show();  
		$("#code").attr('type','password');
	}); 
	$('#loginphone').bind('input propertychange', function() { 
		$("#clean").show()
	}); 
	$("#clean").click(function(){  
		$(this).hide();  
		$("#loginphone").val('')
	});  
	//登录 
	$("#login").click(function(){
		var phone      = $("#loginphone").val(); 
		var password   = $("#password").val(); 
		var phoneable  = noTel(phone);
		if(!phone) { 
			$.toast("手机号码不能为空", "text");
			return false;
		} 
		if(!phoneable) { 
			$.toast("手机号码输入错误", "text");
			return false;
		} 
		if(!password) { 
			$.toast("密码不能为空", "text");
			return false;
		}  
		$.toast("校验通过");  
	});

});