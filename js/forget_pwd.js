$(document).ready(function(){  
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


//忘记密码---第一步
$("#submit1").click(function(){
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
	$("#step1").hide();
	$("#step2").show(); 
});
$("#submit2").click(function(){
	var pw1      = $("#pw1").val(); 
	var pw2      = $("#pw2").val();  
	if(!pw1) { 
		$.toast("新的密码不能为空", "text");
		return false;
	} 
	if(pw1.length<6) { 
		$.toast("密码不得低于6个字符", "text");
		return false;
	}
	if(!pw2) { 
		$.toast("确认密码不能为空", "text");
		return false;
	}  
	if(pw1!=pw2) { 
		$.toast("两次密码不一致", "text");
		return false;
	} 
	$.toast("修改成功"); 
	
});


//点击获取验证码
// $("#send").click(function(){
// 	$("#send").hide();
// 	$("#sent").show();
// 	setTimeout(() => {
// 		$("#sent").hide();
// 		$("#send").show();
// 	},6*10*1000);
// }); 
});