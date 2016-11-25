$.ajax(function() {
	url: "",
	type: "post",
	datatype: "json",
	data: {
		data
	},
	beforeSend: function() {
		$(".loading").show();
	},
	success: function(data) {
		if(data == "success") {
			// ...
		}
	},
	complete: function() {
		$(".loading").hide();
	},
	error: function(data) {
		console.log("error:" + data.responseText);
	}
});