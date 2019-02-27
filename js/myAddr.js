$(document).ready(function(){ 
	//默认按钮
	$(".dizhi").click(function(){  
		$(this).addClass('green')
		$(this).find('i').addClass('green icon-chooseh')
		$(this).find('i').removeClass('icon-choose') 
		$(this).parent().parent().siblings().find('.dizhi').removeClass('green')
		$(this).parent().parent().siblings().find('.dizhi').find('i').removeClass('green icon-chooseh') 
		$(this).parent().parent().siblings().find('.dizhi').find('i').addClass('icon-choose') 
		$.toast("切换成功"); 
	}); 
	//删除
	$(".delete").click(function(){  
		$("#popu").show()  
	}); 
	$("#popu_close").click(function(){  
		$("#popu").hide() 
	}); 
	$(".popu_close").click(function(){  
		$("#popu").hide() 
	});
	$("#del_save").click(function(){  
		$("#popu").hide() ;
		$.toast("删除成功"); 
	}); 
});