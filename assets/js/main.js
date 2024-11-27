// //BattleFlow
// let chooseTarget = false
// let battleFieldEnemy = []




function initBattle(){
	$("#battleQuestionPanel, .bg-panel.dark").show();
}


$( document ).ready(function() {
	$("#battleQuestionPanel, .bg-panel.dark").hide();
    console.log( "ready!" );
    initBattle()
    $('#approveBattle').click(function(){
    	$("#battleQuestionPanel, .bg-panel.dark").hide();
	    initBattleField();

		loadSkill();
		loadPlayerFormation();
	});
    // window.setTimeout(runMonster, 500, 1);

	$("#attack-field").hide();
	$('.formation-1, .formation-2, .formation-3, .formation-4, .formation-5').hide();
});