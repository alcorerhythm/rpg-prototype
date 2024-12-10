//BattleFlow
let selectedPartyMember = 1
let chooseTargetPartyMember = false


function activationPartyMember(){
    chooseTargetPartyMember = true;
    // console.log(btnId);
    // $("#"+btnId).addClass("active");
    callingPartySelector(1);
    //window.setTimeout(execute, 500, 1);
}

function hideSelectorPartyMember(id){
    // console.log(battleFieldPartyMember[0])
    $(battleFieldPartyMember[id]+" div div.arrow").addClass("hide");
    // $(battleFieldPartyMember[selectedPartyMember]+" div.bgBoxImage").removeClass("active");
}


function callingPartySelector(value){
    $(battleFieldPartyMember[selectedPartyMember]+" div div.arrow").addClass("hide");
    $(battleFieldPartyMember[value]+" div div.arrow").removeClass("hide");
    $(battleFieldPartyMember[selectedPartyMember]+" div.bgBoxImage").removeClass("active");
    $(battleFieldPartyMember[value]+" div.bgBoxImage").addClass("active");
    selectedPartyMember = value;
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
            callingPartySelector(value)
            break;
        // case 38:
        //     console.log('Up Key pressed!');
        //     break;
        case 40:
            value = selectedPartyMember+1;
        	if (value > maxPartyMember) {
        		value = 0;
        	}
            callingPartySelector(value)
            break;
        // case 40:
        //     console.log('Down Key pressed!');
        //     break;
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