var code ; //在全局 定义验证码      

//需要验证码时取消注解
/*function createCode(){       
code = "";      
var codeLength = 4;//验证码的长度      
var checkCode = document.getElementById("checkCode");      
checkCode.value = "";    //需要验证码时去掉词注解
var selectChar = new Array(1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');      
      
for(var i=0;i<codeLength;i++) {      
   var charIndex = Math.floor(Math.random()*60);      
  code +=selectChar[charIndex];      
}      
if(code.length != codeLength){      
  createCode();      
}      
checkCode.value = code;      
}          */

function validate () {    
	
var mobile = $("#mobile").val();
var password = $("#password").val();
var checkCode = $("#input1").val();	
if(mobile==""||mobile==null||mobile=="商户号或注册邮箱"){
$("#mobile").focus();
$("#m-tip").html("请输入用户名");
	return false;
}
else{	
	$("#m-tip").html("");
	
 

if(password==""||password==null){      
//alert("输入正确，输入的验证码为："+inputCode);
$("#password").focus();
$("#p-tip").html("请输入密码！");

  return false;      
}
$("#p-tip").html("");

/**
 * 验证码 需要时直接去掉注解即可
 */
/*
 var inputCode = document.getElementById("input1").value.toUpperCase();      
var codeToUp=code.toUpperCase(); 
if(inputCode.length <=0) {      
   
 $("#input1").focus();
$("#c-tip").html("请输入验证码！");

  return false;      
}      
else if(inputCode != codeToUp ){  
$("#input1").val("");    
$("#input1").focus(); 
$("#c-tip").html("验证码输入错误！");
   createCode();      
   return false;      
}      
else {
$("#c-tip").html("");
}
*/

return true;
}  

}