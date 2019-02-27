$(document).ready(function(){  
    $("#wuliuShow").click(function(){ 
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
			$("#courierirm").val(selected); 
		},2*1000);

	});
});