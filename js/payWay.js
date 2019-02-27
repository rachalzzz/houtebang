$(document).ready(function(){  
    // 支付方式切换
    $(".payItem").click(function(){  
        $(this).find('i').addClass('green icon-selection')
        $(this).find('i').removeClass('icon-choose')  
        $(this).siblings().find('i').removeClass('green icon-selection') 
        $(this).siblings().find('i').addClass('icon-choose') 
    });
    
});