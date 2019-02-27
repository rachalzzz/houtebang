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


// window.onload = function() {
// 	//日期倒计时
// 	var curDate=new Date()	
// 	var nextDdate=new Date(curDate.getTime()+24*60*60*1000)
// 	var y=curDate.getFullYear();
// 	var m=curDate.getMonth()+1;
// 	var d=curDate.getDate()+1; 
// 	var h=curDate.getHours();
// 	var min=curDate.getMinutes();
// 	var s=curDate.getSeconds();
// 	d=d<10?('0'+d):d; 
// 	min=min<10?('0'+min):min;
// 	s=s<10?('0'+s):s; 
// 	var countTime=y+'/'+m+'/'+ d+' '+h+':'+min+':'+s //"2019/01/22 23:45:24"
// 	$.leftTime(countTime,function(d){
// 	   if(d.status){
// 		   var $dateShow1=$("#dateShow1"); 
// 		   $dateShow1.find(".h").html(d.h);
// 		   $dateShow1.find(".m").html(d.m);
// 		   $dateShow1.find(".s").html(d.s);
// 	   }
// 	})
// };

 