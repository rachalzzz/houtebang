$(document).ready(function(){
    $("#bg").click(function(){ 
		$("#popu").hide();  
		$("body").removeClass("h100")
	}); 
	$("#close").click(function(){ 
		$("#popu").hide();  
		$("body").removeClass("h100")
    }); 
    $("#sheng").click(function(){ 
        $("#popu").show(); 
		$("body").addClass("h100") 
    }); 
    $("#shi").click(function(){ 
        $("#popu").show(); 
		$("body").addClass("h100") 
    }); 
    $("#qu").click(function(){ 
        $("#popu").show(); 
		$("body").addClass("h100") 
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

	//默认地址按钮切换
	$("#ischange").bind("click", function () { 
        console.log($("#ischange").val());  
        if($("#ischange").val()=="on"){ 
            $("#ischange").val("off");
            console.log("滑块打开，状态值为："+$("#ischange").val()); 
        }else{ 
            $("#ischange").val("on");
            console.log("滑块关闭，状态值为："+$("#ischange").val());
        } 
    });
    //保存
    $("#sumbit").click(function(){  
        var username   = $("#username").val();
        var phone      = $("#phone").val(); 
        var province   = $("#province").val(); 
        var city       = $("#city").val();
        var area       = $("#area").val(); 
        var address    = $("#address").val();
        var ischange    = $("#ischange").val(); 
        var phoneable  = noTel(phone);
        console.log(ischange,1111);
        //相反值，on对应关闭
        if(ischange=='on'){
            ischange=1 //关闭
        }else{
            ischange=0//开
        }
        console.log(ischange,123456);
        if(!username) { 
            $.toast("请输入收件人", "text");
            return false;
        } 
        if(!phone) { 
            $.toast("请输入联系电话", "text");
            return false;
        } 
        if(!phoneable) { 
            $.toast("手机号码有误", "text");
            return false;
        } 
        if(!address) { 
            $.toast("请填写详细地址", "text");
            return false;
        }  
        $.toast("保存成功"); 
        window.location.href='../userCenter/myAddr.html';
       
        
    });
 
});