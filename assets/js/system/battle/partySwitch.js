//BattleFlow
let selectedPartyMember = 1
let selectedPartyMemberItemBattle = 1
let chooseTargetPartyMember = false
let chooseTargetPartyMemberItemBattle = false


function activationPartyMember(){
    chooseTargetPartyMember = true;
    callingPartySelector("init",1);
}

function hideSelectorPartyMember(id){
    // console.log(battleFieldPartyMember[0])
    $(battleFieldPartyMember[id]+" div div.arrow").addClass("hide");
    // $(battleFieldPartyMember[selectedPartyMember]+" div.bgBoxImage").removeClass("active");
}

function activationPartyMemberItemBattle(){
    console.log("chooseTargetPartyMemberItemBattle :"+chooseTargetPartyMemberItemBattle)
    let value = mappingActionRow['partyMember']+1;
    // console.log("valueCostume : "+valueCostume)
    $(battleFieldPartyMember[value]+" div div.arrow").removeClass("hide");
    $(battleFieldPartyMember[value]+" div.bgBoxImage").addClass("active");
    selectedPartyMemberItemBattle = value;
}

function callingPartyMemberItemBattleSelector(value){
    $(battleFieldPartyMember[selectedPartyMemberItemBattle]+" div div.arrow").addClass("hide");
    $(battleFieldPartyMember[selectedPartyMemberItemBattle]+" div.bgBoxImage").removeClass("active");

    $(battleFieldPartyMember[value]+" div div.arrow").removeClass("hide");
    $(battleFieldPartyMember[value]+" div.bgBoxImage").addClass("active");
    selectedPartyMemberItemBattle = value;
}



function callingPartySelector(option, value){
    // console.log("option :"+option)

    let valueCostume = 0
    if (formationPartyCurrentConfigAvailable[value] == battleFieldDefault || formationPartyCurrentConfigAvailable[value] == battleFieldUsedDefault) {
        // console.log("selectedPartyMember :"+selectedPartyMember)
        // console.log("value :"+value)
        
        valueCostume = getPlayedPartyMember(option, value);
    }else{
        valueCostume = value
    }

    // console.log("valueCostume : "+valueCostume)
    $(battleFieldPartyMember[selectedPartyMember]+" div div.arrow").addClass("hide");
    $(battleFieldPartyMember[valueCostume]+" div div.arrow").removeClass("hide");
    $(battleFieldPartyMember[selectedPartyMember]+" div.bgBoxImage").removeClass("active");
    $(battleFieldPartyMember[valueCostume]+" div.bgBoxImage").addClass("active");
    selectedPartyMember = valueCostume;
}

function resetFormationPartyCurrent(){
    formationPartyCurrentConfigAvailable = ["#party-0"]
    for (var i = 0; i < formationPartyCurrentConfig.length; i++) {
        formationPartyCurrentConfigAvailable.push(formationPartyCurrentConfig[i])
    }
}


function getPlayedPartyMember(param, value) {
    if (param == "switch") {
        let i = 0;
        while (i < formationPartyCurrentConfigAvailable.length) { 

            if (selectedPartyMember > value) {
                value = value-1
            }else if (selectedPartyMember < value) {
                value = value+1
            }
            // console.log("formationPartyCurrentConfigAvailable[value] : "+formationPartyCurrentConfigAvailable[value])
            // console.log("value"+value)
            
            if (formationPartyCurrentConfigAvailable[value] != battleFieldDefault && formationPartyCurrentConfigAvailable[value] != battleFieldUsedDefault) {
                return value
            }

            i++;
        }
    }else if(param == "init"){
        for (var i = 0; i < formationPartyCurrentConfigAvailable.length; i++) {
            // console.log(formationPartyCurrentConfigAvailable[i])
            // console.log(formationPartyCurrentConfigAvailable[selectedPartyMember])
            if (formationPartyCurrentConfigAvailable[i] != battleFieldDefault && formationPartyCurrentConfigAvailable[i] != battleFieldUsedDefault && i != 0) {
               return i
            }
        }
    }
}



$(document).on('keydown', function(e) {
	let maxPartyMember = battleFieldPartyMember.length-1;
	let value = 0;
	if (chooseTargetPartyMember == true) {
		switch (e.keyCode) {
        case 38:
        	value = selectedPartyMember-1;
        	if (value < 0) {
        		value = maxPartyMember;
        	}
            callingPartySelector("switch",value)
            break;
        case 40:
            value = selectedPartyMember+1;
        	if (value > maxPartyMember) {
        		value = 0;
        	}
            callingPartySelector("switch",value)
            break;
    	}
	}else if (chooseTargetPartyMemberItemBattle == true) {
		switch (e.keyCode) {
        case 38:
        	value = selectedPartyMemberItemBattle-1;
        	if (value < 1) {
        		value = maxPartyMember;
        	}
            callingPartyMemberItemBattleSelector(value)
            break;
        case 40:
            value = selectedPartyMemberItemBattle+1;
        	if (value > maxPartyMember) {
        		value = 1;
        	}
            callingPartyMemberItemBattleSelector(value)
            break;
    	}
	}
});

$(document).on('keydown', function(e) {
    switch (e.keyCode) {
    case 90:
        accept()
        $("#acceptBtn").addClass("hover");
        
    break;
    case 88:
        cancel()
        $("#cancelBtn").addClass("hover");
    break;
    }
});

$(document).on('keyup', function(e) {
    // if (chooseTargetPartyMember == true) {
    switch (e.keyCode) {
    case 90:
        $("#acceptBtn").removeClass("hover");
    break;
    case 88:
        $("#cancelBtn").removeClass("hover");
    break;
    }
    // }
});