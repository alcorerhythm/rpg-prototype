//BattleFlow
let chooseTarget = false
let battleFieldEnemy = []


$( document ).ready(function() {
    console.log( "ready!" );
    // window.setTimeout(runMonster, 500, 1);
    initBattleField()

	loadSkill()
	$("#attack-field").hide();
	$('.formation-1, .formation-2, .formation-3, .formation-4, .formation-5').hide();
});