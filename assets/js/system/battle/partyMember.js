function composePartyMember(id, npcName){
    let partyMember = eval(npcName);

    // console.log("NPC");
    // console.log(masterType[0]);
    let hp = generateProgressBarValueViewer("HP", id, partyMember['data']['status_current']['hp'],partyMember['data']['status_build_base']['hp'], masterType[0]);
    let mp = generateProgressBarValueViewer("MP", id, partyMember['data']['status_current']['mp'],partyMember['data']['status_build_base']['mp'], masterType[0]);
    let tp = generateProgressBarValueViewer("TP", id, 100, 100, masterType[0]);


    let partyMemberStatus = replaceString(divComponent['start'], masterHolder[2],'container-fluid d-flex justify-content-end party-member-status-title');

    let namePartyMember = replaceString(nameMonsterComponent, masterHolder[1], partyMember['name']);
    let levelPartyMember = replaceString(levelMonsterComponent, masterHolder[1], partyMember['level']);
    let partyBoxStatus = replaceString(divComponent['start'], masterHolder[2], 'party-status');

    let imgProfileClass = replaceString(imgCompoment, masterHolder[2], 'party-profile');
    let imgProfileValue = replaceString(imgProfileClass, masterHolder[1], main_asset_path+partyMember['img']);

    let buffStatusComponent = replaceString(divComponent['start'], masterHolder[0], 'buff-status-'+id);
    let buffStatus = replaceString(buffStatusComponent, masterHolder[2], 'buff-status-list');
    


//     let test = `<div class="buff-icon"><span class="fa fa-shield"></span></div>
// <div class="buff-icon"><span class="fa fa-shield"></span></div>
// <div class="buff-icon"><span class="fa fa-shield"></span></div>
// <div class="buff-icon"><span class="fa fa-shield"></span></div>
// <div class="buff-icon"><span class="fa fa-shield"></span></div>
// <div class="buff-icon"><span class="fa fa-shield"></span></div>
// <div class="buff-icon"><span class="fa fa-shield"></span></div>
// <div class="buff-icon"><span class="fa fa-shield"></span></div>
// <div class="buff-icon"><span class="fa fa-shield"></span></div>
// <div class="buff-icon"><span class="fa fa-shield"></span></div>
// <div class="buff-icon"><span class="fa fa-shield"></span></div>
//     `;

    let buff = buffStatus+divComponent['end'];
    // progress-indicator-party-member
    let composeMosnterStatus = imgProfileValue+partyBoxStatus+partyMemberStatus+namePartyMember+levelPartyMember+divComponent['end']+hp+mp+tp+buff+divComponent['end'];

    return composeMosnterStatus;
}




// let monsterAssetIdArr = []
// let monsterAssetId = {}

let battleFieldPartyMember = ["#party-0"]
function constructPartyMember(id, npcName) {
    let customeId = id+1
    let partyStatus = composePartyMember("party-"+customeId, npcName);
    // let start = replaceString(divComponent["start"], masterHolder[0], "party-"+id);

    let start = replaceString(divComponent["start"], masterHolder[0], "party-"+customeId);
    let divClass = replaceString(start, masterHolder[2], "party-box-status");
    let divStart = replaceString(divClass, masterHolder[2], "party-"+customeId);
    let imgIdGenerate = "party-"+customeId+"-idle-";
    battleFieldPartyMember.push("#party-"+customeId);

    let divColor = replaceString(divComponent["start"], masterHolder[2], "bgBoxImage");

    // let monster = eval(npcName)
    // let monsterConstruct = ""
    // let monsterAssetIdData = []
    // for (var i = 1; i <= monster["idle"]["length"]; i++) {
    //     let setIndex = setStringIndex(i)
    //     let imgId = replaceString(imgCompoment, masterHolder[0], imgIdGenerate+setIndex)
    //     let full_path = main_asset_path+monster["path"]+monster["idle"]["path"]+setIndex+monster["idle"]["format"]
    //     let imgValue = replaceString(imgId, masterHolder[1], full_path)
    //     monsterConstruct = monsterConstruct+imgValue
    //     monsterAssetIdData.push(imgIdGenerate+setIndex)
    //     monsterAssetIdArr.push(imgIdGenerate)
    //     monsterAssetId[imgIdGenerate]=monsterAssetIdData
        
    // }
    let selectFighter = replaceString(selectFighterRightComponent, masterHolder[0], "party-member-pointer-"+customeId);
    $("#party-member").append(divStart+divColor+partyStatus+divComponent["end"]+selectFighter+divComponent["end"]);
    // for (var i = 0; i <= monsterAssetIdData.length; i++) {
    //     $("#"+monsterAssetIdData[i]).hide()
    // }
    // runMonster(imgIdGenerate,0)
}

function loadPlayerFormation(){
    // console.log("here!");
    for (var i = 0; i < formationParty.length; i++) {
      // console.log(formationParty[i]);
      constructPartyMember(i, formationParty[i]) 

    }
    activationPartyMember()
}


function composeDetailPartyMember(){
    // let i = 0;
    let result = "";
    for (var i = 0; i < formationParty.length; i++){
        let partyMember = formationParty[i];
        let customeId = i;
        let id = "party-"+customeId;
        let partyBoxStatus = replaceString(divComponent['start'], masterHolder[2], 'party-status');
        let exp = generateProgressBarValueViewerDetail("EXP", id, partyMember['exp']['current'],partyMember['exp']['base'], masterType[0]);
        let hp = generateProgressBarValueViewerDetail("HP", id, partyMember['data']['status_current']['hp'],partyMember['data']['status_build_base']['hp'], masterType[0]);
        let mp = generateProgressBarValueViewerDetail("MP", id, partyMember['data']['status_current']['mp'],partyMember['data']['status_build_base']['mp'], masterType[0]);
        let tp = generateProgressBarValueViewerDetail("TP", id, 100, 100, masterType[0]);


        let levelBox = composeLevel(id, partyMember['level']);
        let expFinal = replaceString(exp, masterHolder[1], levelBox);
        let partyMemberStatus = replaceString(divComponent['start'], masterHolder[2],'container-fluid d-flex justify-content-end party-member-status-title');


        let namePartyMember = composeName(partyMember['name']);
        let classActive = composeActiveClass(id,"Swordman", 1, "ra", "ra-sword");
        


        let imgBox = replaceString(divComponent['start'], masterHolder[2], 'photo-layout');
        let imgProfileClass = replaceString(imgCompoment, masterHolder[2], 'img-sequare');
        let imgProfileId = replaceString(imgProfileClass, masterHolder[0], 'photoprofile');
        let imgProfileValue = replaceString(imgProfileId, masterHolder[1], main_asset_path+partyMember['img']);

        
        let mainStatusComponent = replaceString(divComponent['start'], masterHolder[2],'menu-left-layout');
        let mainStatus = mainStatusComponent+partyBoxStatus+partyMemberStatus+divComponent['end']+expFinal+hp+mp+tp+divComponent['end']+divComponent['end'];

        let composePartyMemberMainStatus = classActive+imgBox+imgProfileValue+divComponent['end']+namePartyMember+mainStatus; //buff


        
        let strStatus = generateProgressBarValueStatusDetail("STR", id, partyMember['data']['status_current']['strength'],partyMember['data']['status_build_base']['strength']);
        let agiStatus = generateProgressBarValueStatusDetail("AGI", id, partyMember['data']['status_current']['agility'],partyMember['data']['status_build_base']['agility']);
        let vitStatus = generateProgressBarValueStatusDetail("VIT", id, partyMember['data']['status_current']['vitality'],partyMember['data']['status_build_base']['vitality']);
        let intStatus = generateProgressBarValueStatusDetail("INT", id, partyMember['data']['status_current']['intelegent'],partyMember['data']['status_build_base']['intelegent']);
        let dexStatus = generateProgressBarValueStatusDetail("DEX", id, partyMember['data']['status_current']['dexterity'],partyMember['data']['status_build_base']['dexterity']);
        let lukStatus = generateProgressBarValueStatusDetail("LUK", id, partyMember['data']['status_current']['luck'],partyMember['data']['status_build_base']['luck']);

        
        let rowComponent = composeDivClass("row");
        let halfStatusLeftBoxComponent = composeDivClass("col-6 infoStatusRL");
        let halfStatusRIghtBoxComponent = composeDivClass("col-6 infoStatusRL");
    
        let halfStatusLeftComponent = replaceString(halfStatusLeftBoxComponent, masterHolder[1], strStatus+agiStatus+vitStatus);
        // let statusLeftComponent = replaceString(rowComponent, masterHolder[1], halfStatusLeftBoxComponent);

        let halfStatusRightComponent = replaceString(halfStatusRIghtBoxComponent, masterHolder[1], intStatus+dexStatus+lukStatus);
        let statusComponent = replaceString(rowComponent, masterHolder[1], halfStatusLeftComponent+halfStatusRightComponent);

        let buffComponent = composeBuff(id);
        let btn = composeButtonPartyMemberDetailAction(id);

        let divZeroPadding = composeDivClass("zeroPadding");
        let partySingleMemberdivZeroPadding = replaceString(divZeroPadding, masterHolder[1], composePartyMemberMainStatus+statusComponent+buffComponent+divComponent['end']);
        let partyMemberSingleDetail = replaceString(divComponent['start'], masterHolder[2],'party-member-single');
        let partyMemberSingleDetailId = replaceString(partyMemberSingleDetail, masterHolder[0],id+'-detail');
        let partyMemberSingle = partyMemberSingleDetailId+btn+partySingleMemberdivZeroPadding+divComponent['end'];


        let divCol = composeDivClass("col");
        let partySingleMemberCol = replaceString(divCol, masterHolder[1], partyMemberSingle);

        result = result+partySingleMemberCol;
    }
    $("#partyMemberDetailList").html("");
    $("#partyMemberDetailList").html(result);

}


function composeName(name){  
    let nameComponent = replaceString(divComponent['start'], masterHolder[2], 'info-layout');
    let nameBoxComponent = replaceString(divComponent['start'], masterHolder[2], 'nameUser');

    let result = nameComponent+nameBoxComponent+name+divComponent['end']+divComponent['end'];
    return result;
}


function composeDivClass(nameClass){
    let divIdComponent = replaceString(divComponent['start'], masterHolder[0], "");
    let divClassComponent = replaceString(divIdComponent, masterHolder[2], nameClass);

    let result = divClassComponent+'<!value>'+divComponent['end'];
    return result;
}

function composeBuff(id){
    let divRow = composeDivClass("row")
    let divCol = composeDivClass("col")
    let divTitleBuff = composeDivClass("detail-party-member-buff-title")
    let divTitleComponent = replaceString(divTitleBuff, masterHolder[1], "BUFF");

    let divBuffComponentId = replaceString(divComponent['start'], masterHolder[0], id+"-buff-list");
    let divBuffComponentClass = replaceString(divBuffComponentId, masterHolder[2], "buffList");

    let divBuffComponent = replaceString(divCol, masterHolder[1], divTitleComponent+divBuffComponentClass);
    let buffComponent = replaceString(divRow, masterHolder[1], divBuffComponent);

    return buffComponent;
}



let selectedPartyMemberDetail = 0;
let selectedPartyMemberDetailAction = 1;
let switchPartyMemberDetail = false;
let switchPartyMemberDetailActive = false;
let chooseTargetPartyMemberDetailAction = false;



function callingPartyDetailActivate(){
    switchPartyMemberDetail= true;
    let value = mappingActionRow['partyMember'];
    console.log("callingPartyDetailActivate : "+value);
    $('#party-'+value+'-detail.party-member-single').addClass('selected');
    selectedPartyMemberDetail = value;
}
function callingPartyDetailSelector(value){
    $('div.party-member-single').removeClass('selected');
    $('#party-'+value+'-detail.party-member-single').addClass('selected');
    selectedPartyMemberDetail = value;
}
function callingPartyDetailSelectorChooesed(){
    switchPartyMemberDetailActive = true;
    switchPartyMemberDetail = false;
    console.log('#party-'+selectedPartyMemberDetail+'-detail.party-member-single.selected')
    $('#party-'+selectedPartyMemberDetail+'-detail.party-member-single.selected').addClass('choosed');
}
function callingPartyDetailSelectorUnchooesed(){
    switchPartyMemberDetailActive = false;
    switchPartyMemberDetail = true;
    console.log('#party-'+selectedPartyMemberDetail+'-detail.party-member-single.selected.choosed')
    $('#party-'+selectedPartyMemberDetail+'-detail.party-member-single.selected.choosed').removeClass('choosed');
}
$(document).on('keydown', function(e) {
	let maxPartyMember = formationParty.length-1;
	let value = 0;
	if (switchPartyMemberDetail == true) {
		switch (e.keyCode) {
        case 37:
        	value = selectedPartyMemberDetail-1;
        	if (value < 0) {
        		value = maxPartyMember;
        	}
            callingPartyDetailSelector(value)
            break;
        case 39:
            value = selectedPartyMemberDetail+1;
        	if (value > maxPartyMember) {
        		value = 0;
        	}
            callingPartyDetailSelector(value)
            break;
    	}
	}
});

function callingPartyMemberDetailActionButtonSelector(value){
    $("#party-member-button-party-"+selectedPartyMemberDetail+"-"+partyMemberDetailAction[value]).addClass("active");
    $("#party-member-button-party-"+selectedPartyMemberDetail+"-"+partyMemberDetailAction[selectedPartyMemberDetailAction]).removeClass("active");
    selectedPartyMemberDetailAction = value;
}
$(document).on('keydown', function(e) {
	let maxPartyMemberDetail = partyMemberDetailAction.length-1;
	let value = 0;
	if (chooseTargetPartyMemberDetailAction == true) {
		switch (e.keyCode) {
        case 38:
        	value = selectedPartyMemberDetailAction-1;
        	if (value < 0) {
        		value = maxPartyMemberDetail;
        	}
            callingPartyMemberDetailActionButtonSelector(value)
            break;
        case 40:
            value = selectedPartyMemberDetailAction+1;
        	if (value > maxPartyMemberDetail) {
        		value = 0;
        	}
            callingPartyMemberDetailActionButtonSelector(value)
            break;
    	}
	}
});