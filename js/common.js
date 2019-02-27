window.onload = function() {
	// var Width=(window.screen.availWidth-768)/2
	console.log(window.screen.availWidth,99 ) 
	document.getElementsByTagName('html')[0].style.fontSize =
	 	document.getElementsByTagName('html')[0].offsetWidth / 7.2 + 'px';
	window.onresize = function() {
		document.getElementsByTagName('html')[0].style.fontSize =
			document.getElementsByTagName('html')[0].offsetWidth / 7.2 + 'px'; 
	}
	

	 //日期倒计时
	 var curDate=new Date()	
	 var nextDdate=new Date(curDate.getTime()+24*60*60*1000)
	 var y=curDate.getFullYear();
	 var m=curDate.getMonth()+1;
	 var d=curDate.getDate()+1; 
	 var h=curDate.getHours();
	 var min=curDate.getMinutes();
	 var s=curDate.getSeconds();
	 d=d<10?('0'+d):d; 
	 min=min<10?('0'+min):min;
	 s=s<10?('0'+s):s; 
	 var countTime=y+'/'+m+'/'+ d+' '+h+':'+min+':'+s //"2019/01/22 23:45:24"
	 $.leftTime(countTime,function(d){
		if(d.status){
			var $dateShow1=$("#dateShow1"); 
			$dateShow1.find(".h").html(d.h);
			$dateShow1.find(".m").html(d.m);
			$dateShow1.find(".s").html(d.s);
		}
	});
}

$(document).ready(function(){  
    	$("#addrShow").click(function(){  
			$("#popu").show(); 
			$("body").addClass("h100")  
		});
		$("#bg").click(function(){ 
			$("#popu").hide(); 
			$("body").removeClass("h100") 
		});
		$("#close").click(function(){ 
			$("#popu").hide();
			$("body").removeClass("h100") 
		});  
		$("#province").click(function(){ 
			$(this).addClass("active")  
			$(this).siblings().removeClass("active") 
			$("#provinceItem").show()  
			$("#cityItem").hide()  
			$("#areaItem").hide()   
		}); 
		$("#city").click(function(){ 
			$(this).addClass("active")  
			$(this).siblings().removeClass("active") 
			$("#provinceItem").hide()  
			$("#cityItem").show()  
			$("#areaItem").hide()   
		}); 
		$("#area").click(function(){ 
			$(this).addClass("active")  
			$(this).siblings().removeClass("active") 
			$("#provinceItem").hide()  
			$("#cityItem").hide()  
			$("#areaItem").show()   
		});   
		//默认地址按钮切换
		$("#provinceItem span").bind("click", function () {  
			$(this).addClass("green") 
			$(this).siblings().removeClass("green") 
			var selected1 =$(this).html()  
			setTimeout(() => {
				$("#city").removeClass("ishide")
				$("#provinceItem").hide()
				$("#cityItem").show() 
				$("#province").removeClass("active")
				$("#city").addClass("active")
				$("#province").html(selected1);  
			},2*100); 
		});
		$("#cityItem span").bind("click", function () {  
			$(this).addClass("green") 
			$(this).siblings().removeClass("green") 
			var selected2 =$(this).html()  
			setTimeout(() => {
				$("#city").html(selected2);  
				$("#area").removeClass("ishide")
				$("#cityItem").hide() 
				$("#areaItem").show()  
				$("#city").removeClass("active")
				$("#area").addClass("active")
			},2*100);  
		});
		$("#areaItem span").bind("click", function () {  
			$(this).addClass("green") 
			$(this).siblings().removeClass("green") 
			var selected3 =$(this).html()  
			setTimeout(() => {
				$("#area").html(selected3);  
				$("#area").removeClass("active") 
				$("#popu").hide(); 
				$("body").removeClass("h100")  
				$("#sheng").html($("#province").html());  
				$("#shi").html($("#city").html());  
				$("#qu").html($("#area").html());  
			},2*100);   
		});
});
