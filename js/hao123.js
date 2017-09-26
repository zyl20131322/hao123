var themeColor=document.getElementsByClassName("theme-color");
//给所有颜色添加点击事件
for(var i=0;i<themeColor.length;i++){
	if(themeColor[i].addEventListener){
		themeColor[i].addEventListener("click",clickChangeTheme,false);
	}else if(themeColor[i].attachEvent){
		themeColor[i].attachEvent(onclick,clickChangeTheme);//IE
	}else{
		themeColor[i].onclick=clickChangeTheme;//其他
	}	
}
function clickChangeTheme(){
	var theme=this.id;
	changeTheme(theme);
}	
// .g-br13
function changeTheme(theme){
		
	switch(theme){
		case "green"://绿色主题
		document.getElementById("shouye-link").style.backgroundColor="#0aa770";
		document.getElementById("menus").style.borderColor="#099e6a";
		document.getElementById("govsite").style.borderColor="#ade0c1";
		document.getElementById("famoussite").style.borderColor="#ade0c1";
		changeFontColor("#118850");
		setLocalStorage("themeColor","green");
		break;
		case "yellow"://黄色主题
		document.getElementById("shouye-link").style.backgroundColor="#fec300";
		document.getElementById("menus").style.borderColor="#ffc107";
		document.getElementById("govsite").style.borderColor="#dfe0ad";
		document.getElementById("famoussite").style.borderColor="#dfe0ad";
		changeFontColor("#fec300");
		setLocalStorage("themeColor","yellow");
		break;
		case "blue"://蓝色主题
		document.getElementById("shouye-link").style.backgroundColor="#3385ff";
		document.getElementById("menus").style.borderColor="#1866ea";
		document.getElementById("govsite").style.borderColor="#adbee0";
		document.getElementById("famoussite").style.borderColor="#adbee0";
		changeFontColor("#1866ea");
		setLocalStorage("themeColor","blue");
		break;
		case "pink"://粉色主题
		document.getElementById("shouye-link").style.backgroundColor="#e50475";
		document.getElementById("menus").style.borderColor="#e91e63";
		document.getElementById("govsite").style.borderColor="#e0adc8";
		document.getElementById("famoussite").style.borderColor="#e0adc8";
		changeFontColor("#e50475");
		setLocalStorage("themeColor","pink");
		break;
	}
}
// 改变关键字颜色
function changeFontColor(color){
	var keyword=document.getElementsByClassName("tc-green");
	for(i=0;i<keyword.length;i++){
		keyword[i].style.color=color;
	}
}
//设置LocalStorage
function setLocalStorage(lname,lvalue){
	localStorage.setItem(lname,lvalue);
}
//获得LocalStorage
function getLocalStorage(lname){
	var name = lname + "=";
	var value = localStorage.getItem(lname);
	if(value=="null"){
		return "";
	}else{
	return value;		
	}

}
//检查LocalStorage
function checkLocalStorage(){
	var theme=getLocalStorage("themeColor");
	if (theme!=""){
		changeTheme(theme);
	}
	else {
		changeTheme(green);
	}
}
