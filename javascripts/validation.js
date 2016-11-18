// 只允许输入数字
// 调用是在标签中标记 onkeydown="checkKeyForInt(this.value,event)"
function checkKeyForInt(value, e) {
	var isOK = false;
	var key = window.event ? e.keyCode : e.which;
	var txt = new RegExp(/["'<>%;)(&+]/);
	var character = String.fromCharCode(key);
	var nLength = value.length;
	// 小键盘上的0到9，大键盘上的0到9，不影响正常编辑键的使用(8:BackSpace;9:Tab;46:Delete;37:Left;39:Right)
	if ((key > 95 && key < 106) || (key > 47 && key < 60) || key == 8 || key == 9 || key == 46 || key == 37 || key == 39 ) {
		if(nLength<6){
			isOK = true;
		}else {
			alert("只能输入6位数字");
		}
	} else {
			if (window.event){ //IE
				e.returnValue = false; //event.returnValue=false 效果相同.
			} else { //Firefox
				e.preventDefault();
			}
	}
	return isOK;
}