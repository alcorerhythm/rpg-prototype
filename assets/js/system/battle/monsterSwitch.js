//BattleFlow
let chooseTargetEnemy = false
let battleFieldEnemy = []
let selectedEnemy = 0


function activation(handle, btnId){
    chooseTargetEnemy = true;
    console.log(btnId);
    $("#"+btnId).addClass("active");
    callingEnemySelector(0);
    //window.setTimeout(execute, 500, 1);
}


function callingEnemySelector(value){
    console.log(battleFieldEnemy[selectedEnemy]);
    console.log(selectedEnemy);
    //div#+id+ div.monster-status-box div.select-arrow active div.arrow.down
	$(battleFieldEnemy[selectedEnemy]+" div.monster-status-box div.monster-status").removeClass("active");
	$(battleFieldEnemy[selectedEnemy]+" div.select-arrow div.arrow.down").addClass("hide");
    let id = battleFieldEnemy[value];
    $(id+" div.select-arrow div.arrow.down").removeClass("hide");
    $(id+" div.monster-status-box div.monster-status").addClass("active");
    selectedEnemy = value;
}






$(document).on('keydown', function(e) {
	let maxEnemy = battleFieldEnemy.length-1;
	let value = 0;
	if (chooseTargetEnemy == true) {
		switch (e.keyCode) {
        case 37:
        	value = selectedEnemy-1;
        	if (value < 0) {
        		value = maxEnemy;
        	}
            callingEnemySelector(value)
            break;
        // case 38:
        //     console.log('Up Key pressed!');
        //     break;
        case 39:
            value = selectedEnemy+1;
        	if (value > maxEnemy) {
        		value = 0;
        	}
            callingEnemySelector(value)
            break;
        // case 40:
        //     console.log('Down Key pressed!');
        //     break;
    	}
	}

});