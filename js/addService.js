$(document).ready(function(){ 
	//确定按钮
	$("#sumbit").click(function(){  
		var order       = $("#order").html(); 
		var username    = $("#username").val(); 
		var usertel     = $("#usertel").val(); 
		var userMsg     = $("#userMsg").val(); 
		var phoneable   = noTel(usertel);
		console.log(order);
		console.log(username);
		console.log(usertel);
		console.log(userMsg); 
		if(!order||order=="请选择订单") { 
			$.toast("请选择订单", "text");
			return false;
		}
		if(!username) { 
			$.toast("姓名不能为空", "text");
			return false;
		} 
		if(!usertel) { 
			$.toast("手机号码不能为空", "text");
			return false;
		} 
		if(!phoneable) { 
			$.toast("手机号码有误，请重新输入", "text");
			return false;
		} 
		if(!userMsg) { 
			$.toast("咨询内容不能为空", "text");
			return false;
		}  
		$.toast("校验通过");  
	}); 


	$("#popuShow").click(function(){ 
		$("#popu").show(); 
	});
	$("#bg").click(function(){ 
		$("#popu").hide(); 
	});
	$("#close").click(function(){ 
		$("#popu").hide(); 
	});
	$("#popuRow .popu").click(function(){ 
		$(this).addClass("green")
		$(this).find(".icon-selected").removeClass("ishide")
		$(this).siblings().removeClass("green")
		$(this).siblings().find(".icon-selected").addClass("ishide") 
		var selected =$(this).find("span").html() 
		setTimeout(() => {
			$("#popu").hide(); 
			$("#order").html(selected); 
		},2*1000);

	});
});