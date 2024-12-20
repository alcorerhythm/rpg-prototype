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

composeDetailPartyMember()
function composeDetailPartyMember(){
    let i = 0;
    
    // for (var i = 0; i < formationParty.length; i++){
    let partyMember = formationParty[i];
    let customeId = i+1;
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

    let  partyMemberSingleDetail = replaceString(divComponent['start'], masterHolder[2],'party-member-single');
    let partyMemberSingle = partyMemberSingleDetail+composePartyMemberMainStatus+divComponent['end'];
    
    $("#testDev").html(partyMemberSingle)
    // }

}


function composeName(name){  
    let nameComponent = replaceString(divComponent['start'], masterHolder[2], 'info-layout');
    let nameBoxComponent = replaceString(divComponent['start'], masterHolder[2], 'nameUser');

    let result = nameComponent+nameBoxComponent+name+divComponent['end']+divComponent['end'];
    return result;
}