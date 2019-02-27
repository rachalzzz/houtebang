$(document).ready(function(){ 
    // 发票类型
    $("#type div").click(function(){ 
        var type =$(this).find("span").html()  
        console.log(type) 
        $(this).find("i").addClass("icon-selection green")
        $(this).find("i").removeClass("icon-choose")

        $(this).siblings().find("i").addClass("icon-choose")
        $(this).siblings().find("i").removeClass("icon-selection green") 
        if(type=="个人"){
            $("#code").hide()
            $("#code1").hide()
        }else{
            $("#code").show()
            $("#code1").show()
        }
    });
    //是否开发票
    $(".tk_type").click(function(){ 
        var selected =$(this).find("span").html()  
        console.log(selected) 
        $(this).find("img").removeClass("ishide")
        $(this).siblings().find("img").addClass("ishide")
        $(this).addClass("active")
        $(this).siblings().removeClass("active") 
        if(selected=="不开发票"){
            $(".ticket_msg").hide()
        }else{
            $(".ticket_msg").show()
        }
    });
    $("#submit").click(function(){
        var type   = $("#type").val(); 
        var phone       = $("#phone").val();  
        var name   = $("#name").val(); 
        var eamil   = $("#eamil").val();  
        var idcode   = $("#idcode").val();  
        var phoneable   = noTel(phone);
        if(!name) { 
            $.toast("发票抬头不能为空", "text");
            return false;
        } 
        if(!phone) { 
            $.toast("手机号码不能为空", "text");
            return false;
        } 
        if(!phoneable) { 
            $.toast("手机号码输入错误", "text");
            return false;
        } 
        
        if(!eamil) { 
            $.toast("邮箱地址不能为空", "text");
            return false;
        } 
           
        window.location.href="http://www.baidu.com";
    });
});