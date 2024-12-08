let inputKeyboard = true;
let inputMouse = true;


function loadSetting(){
	if (inputKeyboard == true) {
		inputKeyboard = true;
	}else{
		inputKeyboard = false;
	}

	if (inputMouse == true) {
		inputMouse = true;
		$(".mouse-disable").hide();
	}else{
		inputMouse = false;
		$(".mouse-disable").show();
	}
}


function callSetting(){
	$("#settingPanel, .bg-panel").show();
	$("#settingBtn span").addClass("slow-spin");
	if (inputKeyboard == true) {
		$("#inputKeyboard").prop( "checked", true );
	}else{
		$("#inputKeyboard").prop( "checked", false );
	}
	if (inputMouse == true) {
		$("#inputMouse").prop( "checked", true );
	}else{
		$("#inputMouse").prop( "checked", false );
	}
}

$( document ).ready(function() {
	$("#settingPanel, .bg-panel.setting-color").hide();
	$('#closeSetting').click(function(){
	    $("#settingPanel, .bg-panel").hide();
	    $("#settingBtn span").removeClass("slow-spin");
	});
	$('#settingBtn').click(function(){
		callSetting();
	});

	$('#settingSaveBtn').click(function(){

		if ($('#inputKeyboard').is(':checked')) {
			inputKeyboard = true;
		}else{
			inputKeyboard = false;
		}

		if ($('#inputMouse').is(':checked')) {
			inputMouse = true;
			$(".mouse-disable").hide();
		}else{
			inputMouse = false;
			$(".mouse-disable").show();
		}

		alertPush("success", "Setting: Saved!")
		console.log(inputKeyboard);
		console.log(inputMouse);
	});

	$(document).on('keydown', function(e) {
		
		switch (e.keyCode) {
			case 27:
				console.log(e.keyCode);
				callSetting();
			 //  	$("#settingPanel, .bg-panel").hide();
				// $("#settingBtn span").removeClass("slow-spin");
			break;
		}

	});
	$(document).on('keyup', function(e) {
		// console.log(e);
		switch (e.keyCode) {
			case 27:

			 //  	$("#settingPanel, .bg-panel").hide();
				// $("#settingBtn span").removeClass("slow-spin");
			break;
		}

	});
});