
init();
/**
 * 初始化页面方法
 */
function init(){
	if(top.location!=self.location){  
		parent.location.reload();
	}
}
function go(){
	if(!validate()){

		return;
	}

	var userName=$("#mobile").val();
	var pwd = $("#password").val();

	$.post('/property/user/isLogin', {
		loginname : userName, 
		password : pwd 
	}, function(data) {
		if (data) {
			location = "/property/HTML/Index.html";
		} else {
			$("#p-tip").text("用户名或密码错误！");
			createCode();
		}
	}); 

};
document.onkeydown = function(e) {  
	var code = e.keyCode;
	if (code === 13) {
		go();
	}
};
$(function() {

	$("#Button1").click(function () {  
		go();  
	});
});