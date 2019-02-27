$(document).ready(function(){  
	$('#rightBar').scroll(function(){ 
		var top1 = $("#rightBar").scrollTop()
		console.log(top1); 
		//判断导航
		if(top1>123){
			$(".csNav").show()
			$(".home_nav").hide() 
			$(".home_left").addClass('top2')
			$(".home_right").addClass('top2') 
			$("#top").removeClass('ishide')
		}else{
			$(".csNav").hide()
			$(".home_nav").show()
			$(".home_left").addClass('top1')
			$(".home_right").addClass('top1')
			$(".home_left").removeClass('top2')
			$(".home_right").removeClass('top2') 
			$("#top").addClass('ishide') 
		} 
		//判断右边内容滚动----第一部分
		if(top1<97){
			$("#rightBar").scrollTop(0)
			$(".csNav").hide()
			$(".home_nav").show()
			$(".home_left").addClass('top1')
			$(".home_right").addClass('top1')
			$(".home_left").removeClass('top2')
			$(".home_right").removeClass('top2') 
			$("#r1").addClass("active");  
			$("#r1").siblings().removeClass("active"); 
			$("#l1").find(".home_left_title").addClass("active"); 
			$("#l1").find("i").addClass("icon-selection ");   
			$("#l1").find("i").removeClass("icon-dian1 ");   
			$("#l1").siblings().find(".home_left_title").removeClass("active");    
			$("#l1").siblings().find("i").removeClass("icon-selection");    
			$("#l1").siblings().find("i").addClass("icon-dian1"); 
		}else if(97<top1<300){
			 $("#l2").find(".home_left_title").addClass("active"); 
			 $("#l2").find("i").addClass("icon-selection ");   
			 $("#l2").find("i").removeClass("icon-dian1 ");   
			 $("#l2").siblings().find(".home_left_title").removeClass("active");    
			 $("#l2").siblings().find("i").removeClass("icon-selection");    
			 $("#l2").siblings().find("i").addClass("icon-dian1");
			 $("#r2").addClass("active"); 
			 $("#r2").siblings().removeClass("active");   
		 }else if(300<top1<320){
			 $("#l3").find(".home_left_title").addClass("active"); 
			 $("#l3").find("i").addClass("icon-selection ");   
			 $("#l3").find("i").removeClass("icon-dian1 ");   
			 $("#l3").siblings().find(".home_left_title").removeClass("active");    
			 $("#l3").siblings().find("i").removeClass("icon-selection");    
			 $("#l3").siblings().find("i").addClass("icon-dian1");
			 $("#r3").addClass("active"); 
			 $("#r3").siblings().removeClass("active");   
		 }
	}) ;
 	//回到顶部
	$("#top").click(function () {  
		$("#rightBar").scrollTop(0)
		$(".csNav").hide()
		$(".home_nav").show()
		$(".home_left").addClass('top1')
		$(".home_right").addClass('top1')
		$(".home_left").removeClass('top2')
		$(".home_right").removeClass('top2') 
		$("#r1").addClass("active");  
		$("#r1").siblings().removeClass("active"); 
		$("#l1").find(".home_left_title").addClass("active"); 
		$("#l1").find("i").addClass("icon-selection ");   
		$("#l1").find("i").removeClass("icon-dian1 ");   
		$("#l1").siblings().find(".home_left_title").removeClass("active");    
		$("#l1").siblings().find("i").removeClass("icon-selection");    
		$("#l1").siblings().find("i").addClass("icon-dian1"); 
	});  
	//左边点击
	$("#l1").click(function(e){ 
		$("#r1").addClass("active"); 
		$("#r1").siblings().removeClass("active");   
		location.hash="#r1"; 
	});
	$("#l2").click(function(e){ 
		$("#r2").addClass("active"); 
		$("#r2").siblings().removeClass("active");   
		location.hash="#r2"; 
	});
	$("#l3").click(function(){ 
		$("#r3").addClass("active"); 
		$("#r3").siblings().removeClass("active");  
		location.hash="#r3"; 
	}); 
	$("#l4").click(function(){ 
		$("#r4").addClass("active "); 
		$("#r4").siblings().removeClass("active");  
		location.hash="#r4"; 
	}); 
	$("#l5").click(function(){ 
		$("#r5").addClass("active"); 
		$("#r5").siblings().removeClass("active");  
		location.hash="#r5"; 
	}); 
	$("#l6").click(function(){ 
		$("#r6").addClass("active"); 
		$("#r6").siblings().removeClass("active");    
		location.hash="#r6"; 
	}); 
	$("#l7").click(function(){ 
		$("#r7").addClass("active"); 
		$("#r7").siblings().removeClass("active");    
		location.hash="#r7"; 
	}); 
	$("#l8").click(function(){ 
		$("#r8").addClass("active"); 
		$("#r8").siblings().removeClass("active");    
		location.hash="#r8"; 
	}); 
	$("#l9").click(function(){ 
		$("#r9").addClass("active"); 
		$("#r9").siblings().removeClass("active");    
		location.hash="#r9"; 
	});





	$(".home_left .home_left_title").click(function(){ 
		$(this).addClass("active");  
		$(this).find("i").addClass("icon-selection ");   
		$(this).find("i").removeClass("icon-dian1 "); 
		$(this).parent().siblings().find(".home_left_title").removeClass("active");    
		$(this).parent().siblings().find("i").removeClass("icon-selection");    
		$(this).parent().siblings().find("i").addClass("icon-dian1");  
	});
	  
});


