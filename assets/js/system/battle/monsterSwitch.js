//BattleFlow
let chooseTarget = false
let battleFieldEnemy = []
let selectedEnemy = 0

function callingEnemySelector(value){
	$(battleFieldEnemy[selectedEnemy]).removeClass("active");
	$(battleFieldEnemy[selectedEnemy]+" div.select-arrow").removeClass("active");
    let id = battleFieldEnemy[value];
    $(id+" div.select-arrow").addClass("active");
    $(id).addClass("active");
    selectedEnemy = value;
}






$(document).on('keydown', function(e) {
	let maxEnemy = battleFieldEnemy.length-1;
	let value = 0;
	if (chooseTarget == true) {
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