var ajaxTimeoutTest = $.ajax({
	url: "", // 请求的URL
	timeout: 1000, // 超时时间设置，单位毫秒
	type: "get",
	data: {},
	dataType: "json",
	success: function(data) {
		alert("success");
	},
	complete: function(XMLHttpRequest,status) { // 请求完成后最终执行参数
		if(status == "timeout") { // 超时,status还有success,error等值的情况
			ajaxTimeoutTest.abort();
			alert("超时");
		}
	}
});

// 设置timeout的时间，通过检测complete时status的值判断请求是否超时，如果超时执行响应的操作。