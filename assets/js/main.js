// //BattleFlow
// let chooseTarget = false
// let battleFieldEnemy = []




function initBattle(){
	$("#battleQuestionPanel, .bg-panel.dark").show();
}

$( document ).ready(function() {
	loadSetting();
	loadPartyMemberDetail();
	$("#battleQuestionPanel, .bg-panel.dark").hide();
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