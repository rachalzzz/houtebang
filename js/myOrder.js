//$(window).scroll(function(){
//　　var scrollTop = $(this).scrollTop();
//　　var scrollHeight = $(document).height();
//　　var windowHeight = $(this).height();
//　　if(scrollTop + windowHeight == scrollHeight){ 
//		$.toast("滑动到底部,这里执行事件", "text"); 
//		//$.toast("没有更多数据了", "text");
//　　}
//});


    

$(document).ready(function(){
    $("#addMoreData").click(function(){  
  $.toast("滑动到底部,这里执行事件", "text");
    }); 
    
    
    
    $("#step1").click(function(){
        $("#order1").show()
        $("#order2").hide()
        $("#order3").hide()
        $("#order4").hide()
		$(this).addClass('green')
        $(this).find('span').addClass('isshow')
        $(this).siblings().find('span').removeClass('isshow')
        $(this).siblings().find('span').addClass('ishide')
        $(this).siblings().removeClass('green') 
    }); 
    $("#step2").click(function(){ 
        $("#order2").show()
        $("#order1").hide()
        $("#order3").hide()
        $("#order4").hide() 
		$(this).addClass('green')
        $(this).find('span').addClass('isshow')
        $(this).siblings().find('span').removeClass('isshow')
        $(this).siblings().find('span').addClass('ishide')
        $(this).siblings().removeClass('green') 
    }); 
    $("#step3").click(function(){  
        $("#order3").show()
        $("#order2").hide()
        $("#order1").hide()
        $("#order4").hide()
		$(this).addClass('green')
        $(this).find('span').addClass('isshow')
        $(this).siblings().find('span').removeClass('isshow')
        $(this).siblings().find('span').addClass('ishide')
        $(this).siblings().removeClass('green') 
    }); 
    $("#step4").click(function(){  
        $("#order4").show()
        $("#order2").hide()
        $("#order3").hide()
        $("#order1").hide()
		$(this).addClass('green')
        $(this).find('span').addClass('isshow')
        $(this).siblings().find('span').removeClass('isshow')
        $(this).siblings().find('span').addClass('ishide')
        $(this).siblings().removeClass('green') 
    });
    
    $(".cancelBtn").click(function(){ 
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