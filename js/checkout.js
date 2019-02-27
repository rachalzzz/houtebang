//不为空校验
function noEmptyvalidate(obj) {
	if(obj.length == 0) {
		return false;  
	} else {
		return true;
	}
}  
//电话号码
function noTel(num) {
	var re = /^1[34578]\d{9}$/;
    if (re.test(num)==false) {
        //alert("手机号码输入不合法");
        return false; 
    }else{
		return true;
	}
}
//不为0
function noNumber(num) {
	if(num > 0) {
		return true;
	} else {
		return false;
	}
} 
//不为0,是数字
function isNumber(oNum) {       
    var t=/^[0-9]*[1-9][0-9]*$/;
   if(t.test(oNum))   {  
      return true;
   }   else   {
       //alert("非法字符");
       return false; 
   }
  }
//校验身份证
 function isCardNo(card){  
   // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
   var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
   if(reg.test(card) === false){  
       //alert("身份证输入不合法");  
       return  false;  
   }  else{
   	 return true;
   }
} 
 

 