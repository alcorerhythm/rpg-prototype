// //BattleFlow
// let chooseTarget = false
// let battleFieldEnemy = []

let partyMemberDetail = false; 
function loadPartyMemberDetail(){
	if (partyMemberDetail == true) {
		$("#partyMemberDetailPage").show();
	}else{
		$("#partyMemberDetailPage").hide();
	}

}
		


function turnCounter() {
	let turn = $("#turnIndicator").text();
	let turnMax = $("#turnIndicatorMax").text();
	turn = parseInt(turn)+1; 
	$("#turnIndicator").text("");

	if (turn <= turnMax) {
		if (turn <10) {
			$("#turnIndicator").text("0"+turn);
		}else{
			$("#turnIndicator").text(turn);
		}
		
		
	}else if (turn > turnMax) {
		turn = 0; 
	}

}



function initBattle(){
	$("#battleQuestionPanel, .bg-panel.dark").show();
}

$( document ).ready(function() {
	turnCounter();
	loadSetting();
	loadPartyMemberDetail();
	$("#battleQuestionPanel, .bg-panel.dark").hide();
	$("#inventoryPanel").hide();
	$('#skillPanelBattle').hide();
    console.log( "ready!" );
    // initBattle()
    initBattleField();
    loadPlayerFormation();
    $('#approveBattle').click(function(){
    	$("#battleQuestionPanel").animate({ height: 0, opacity: 0 }, 'slow');
    	    setTimeout(() => {
		      console.log('wait finished');
		       $( ".bg-panel.dark" ).toggle( "pulsate" );
		      // $(".bg-panel.dark").animate({ height: 0, opacity: 0 }, 'slow');
		      // resolve(true); // when time will pass, than resolve promise
		    }, 1000); // set wait time in miliseconds
    	// $("#battleQuestionPanel, .bg-panel.dark").hide();
	    initBattleField();

		loadSkill();
		loadPlayerFormation();
	});
    // window.setTimeout(runMonster, 500, 1);

	$("#attack-field, .attack-field").hide();
	$('.formation-1, .formation-2, .formation-3, .formation-4, .formation-5').hide();
});