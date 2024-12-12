//BattleFlow
let chooseTargetEnemy = false
let battleFieldEnemy = []
let selectedEnemy = 0


function hideSelectorEnemy(id){
    // console.log(battleFieldPartyMember[0])
    $(battleFieldEnemy[id]+" div div div.arrow.down").addClass("hide");
    // $(battleFieldPartyMember[selectedPartyMember]+" div.bgBoxImage").removeClass("active");
        
}



function activation(handle, btnId){
    chooseTargetEnemy = true;
    // console.log(btnId);
    $("#"+btnId).addClass("active");
    callingEnemySelector("init",0);
    //window.setTimeout(execute, 500, 1);
}


function getFirstEnemy(param, value) {
    if (param == "switch") {
        let i = 0;
        while (i < formationPartyCurrentConfigAvailable.length) { 

            if (selectedEnemy > value) {
                value = value-1
            }else if (selectedEnemy < value) {
                value = value+1
            }
            // console.log("formationPartyCurrentConfigAvailable[value] : "+formationPartyCurrentConfigAvailable[value])
            // console.log("value"+value)
            
            if (battleFieldEnemy[value] != battleFieldDefault) {
                return value
            }

            i++;
        }
    }else if(param == "init"){
        for (var i = 0; i < battleFieldEnemy.length; i++) {
            if (battleFieldEnemy[i] != battleFieldDefault) {
                return i
            }
        }
    }



    // if (type == "enemy") {
    //     for (var i = 0; i < battleFieldEnemy.length; i++) {
    //         if (battleFieldEnemy[i] != battleFieldDefault) {
    //             return i
    //         }
    //     }
    // }else if(type == "party"){
    //     if (option == "min") {
    //         for (var i = formationPartyCurrentConfigAvailable.length; i > 0 ; i--) {
    //             console.log(formationPartyCurrentConfigAvailable[i])
    //             console.log(formationPartyCurrentConfigAvailable[selectedPartyMember])
    //             return i
    //         }
    //         // if (formationPartyCurrentConfigAvailable[i] != battleFieldDefault && formationPartyCurrentConfigAvailable[i] != battleFieldUsedDefault) {
    
    //         // }
    //     }else  if (option == "max") {
    //         for (var i = 0; i < formationPartyCurrentConfigAvailable.length; i++) {
    //             console.log(formationPartyCurrentConfigAvailable[i])
    //             console.log(formationPartyCurrentConfigAvailable[selectedPartyMember])
    //             return i
    //         }
    //     }else{
    //         for (var i = 0; i < formationPartyCurrentConfigAvailable.length; i++) {
    //             console.log(formationPartyCurrentConfigAvailable[i])
    //             console.log(formationPartyCurrentConfigAvailable[selectedPartyMember])
                

    //             if (formationPartyCurrentConfigAvailable[i] != battleFieldDefault && formationPartyCurrentConfigAvailable[i] != battleFieldUsedDefault && i != 0) {
    //                 return i
    //             }
    //         }
    //     }
        // }else{
        //     if (formationPartyCurrentConfigAvailable[i] != battleFieldDefault && formationPartyCurrentConfigAvailable[i] != battleFieldUsedDefault && i != 0) {
                
        //     }
        // }



    // }

    // return result;
}

function callingEnemySelector(option, value){
    
    let valueCostume = 0
    if (battleFieldEnemy[value] == battleFieldDefault) {
        valueCostume = getFirstEnemy(option, value);
    }else{
        valueCostume = value
    }
    let id = battleFieldEnemy[valueCostume];



    // console.log(battleFieldEnemy[selectedEnemy]);
    // console.log(selectedEnemy);
    //div#+id+ div.monster-status-box div.select-arrow active div.arrow.down
	$(battleFieldEnemy[selectedEnemy]+" div.monster-status-box div.monster-status").removeClass("active");
	$(battleFieldEnemy[selectedEnemy]+" div.select-arrow div.arrow.down").addClass("hide");
    
    $(id+" div.select-arrow div.arrow.down").removeClass("hide");
    $(id+" div.monster-status-box div.monster-status").addClass("active");
    selectedEnemy = valueCostume;
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
            callingEnemySelector("switch",value)
            break;
        // case 38:
        //     console.log('Up Key pressed!');
        //     break;
        case 39:
            value = selectedEnemy+1;
        	if (value > maxEnemy) {
        		value = 0;
        	}
            callingEnemySelector("switch",value)
            break;
        // case 40:
        //     console.log('Down Key pressed!');
        //     break;
    	}
	}

});