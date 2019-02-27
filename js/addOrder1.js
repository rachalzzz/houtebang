$(document).ready(function(){ 
	$("#bg").click(function(){ 
		$("#popu").hide();  
		$("body").removeClass("h100")
	});
	$("#bg1").click(function(){ 
		$("#popu1").hide(); 
		$("body").removeClass("h100")
	});
	$("#bg2").click(function(){  
		$("#popu2").hide(); 
		$("body").removeClass("h100")
	});
	$("#close").click(function(){ 
		$("#popu").hide();  
		$("body").removeClass("h100")
	});
	$("#close1").click(function(){ 
		$("#popu1").hide();  
		$("body").removeClass("h100")
	});
	$("#close2").click(function(){ 
		$("#popu2").hide();  
		$("body").removeClass("h100")
	});
	
	
    $("#wuliuShow").click(function(){ 
		$("#popu").show(); 
		$("body").addClass("h100") 
	}); 
	$("#popuRow .popu").click(function(){ 
		$(this).addClass("green")
		$(this).find(".icon-selected").removeClass("ishide")
		$(this).siblings().removeClass("green")
		$(this).siblings().find(".icon-selected").addClass("ishide") 
		var selected =$(this).find("span").html() 
		setTimeout(() => {
			$("#popu").hide(); 
			$("#courierirm").val(selected); 
			$("body").removeClass("h100")
		},2*500); 
	});

	// 添加收货地址
 


	// 紧急程度弹窗
	$("#urgency").click(function(){ 
		$("#popu2").show(); 
		$("body").addClass("h100")
	});
	$("#popuRow .popu").click(function(){ 
		$(this).addClass("green")
		$(this).find(".icon-selected").removeClass("ishide")
		$(this).siblings().removeClass("green")
		$(this).siblings().find(".icon-selected").addClass("ishide") 
		var selected =$(this).find("span").html() 
		setTimeout(() => {
			$("#popu2").hide(); 
			$("#urgency").find("span").html(selected); 
			$("body").removeClass("h100")
		},2*500); 
	});
	// 协议
	$("#agree").click(function(){  
		$(this).toggleClass('green icon-chooseh icon-choose') 
	}); 

	
});

 
 