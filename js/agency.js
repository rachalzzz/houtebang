$(document).ready(function(){ 
 	$(".agItem .iconfont").click(function(){ 
		var selected =$(this).parent().find("span").html()  
		console.log(selected)
		if(selected=="其他业务"){
			$(".other").removeClass("ishide")
		}else{
			$(".other").addClass("ishide")
		}	
 		$(this).removeClass("icon-choose")
		$(this).addClass("icon-chooseh green") 
		$(this).parent().siblings().removeClass("green")
		$(this).parent().siblings().find(".iconfont").removeClass("green icon-chooseh")  
		$(this).parent().siblings().find(".iconfont").addClass("icon-choose")  
	});
	
	$(".agItem span").click(function(){
		var selected =$(this).parent().find("span").html()  
		console.log(selected)
		if(selected=="其他业务"){
			$(".other").removeClass("ishide")
		}else{
			$(".other").addClass("ishide")
		}	
   		$(this).parent().find("i").removeClass("icon-choose")
		$(this).parent().find("i").addClass("icon-chooseh green") 
		$(this).parent().siblings().find("i").removeClass("green")
		$(this).parent().siblings().find("i").removeClass("green icon-chooseh")  
		$(this).parent().siblings().find(".iconfont").addClass("icon-choose")  
	});
	
	// 计数器
	$(".agItem-count .increase").click(function(){ 
		console.log($(this).parent().find(".count_number").val(),'++')
		var number =Number($(this).parent().find(".count_number").val())+1  
		$(this).parent().find(".count_number").val(number)  
	});
	$(".agItem-count .decrease").click(function(){ 
		console.log($(this).parent().find(".count_number").val(),'--') 
		var number =Number($(this).parent().find(".count_number").val())-1 
		if(number>0){
			$(this).parent().find(".count_number").val(number)  
		}
		
	});
});


