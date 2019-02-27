$(document).ready(function(){
	//点击获取验证码
	$("#send").click(function(){
		$("#send").hide();
		$("#sent").show();
		setTimeout(() => {
			$("#sent").hide();
			$("#send").show();
		},6*1000);
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
});