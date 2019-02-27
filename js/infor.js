$(document).ready(function(){
	 	//修改昵称
		 $("#userName").click(function(){ 
			$("#topBar").hide(); 
			$("#namePopup").show(); 
		});
		$("#sumbit").click(function(){ 
			var name = $("#name").val()
			if(!name){
				$.toast("昵称不能为空", "text");
				return false
			}
			$.toast("昵称修改为"+name, "text");

		}); 

});
function changeFile() {
	// 获取图片内容 
　　let file = document.getElementById('file').files[0]  
	if (document.getElementById('file').files.length == 0) {
		return false;
	}
	// 通过canvas压缩图片
	var reader = new FileReader();
	reader.readAsDataURL(file);
	var img = new Image();
	var imgSrc = ""; 
	reader.onload = function(e) { 
		img.src = this.result;
		var width = 400, //图像大小
		quality = 0.8, //图像质量
		canvas = document.createElement("canvas"),
		drawer = canvas.getContext("2d");
		img.onload = function() { 
		canvas.width = width;
		canvas.height = width * (img.height / img.width);
		drawer.drawImage(img, 0, 0, canvas.width, canvas.height);
		imgSrc = canvas.toDataURL("image/png", quality);
		if (imgSrc) {
			console.log(imgSrc,123)
			$.toast("图片压缩好，调接口调试", "text");
			//调接口，返回图片路径，赋值 
		} 
		};
	};
}