// function generateProgressBarValueViewer(name, id, value){
//     let progressBarValueViewerClass = replaceString(progressBarValueViewerComponent, masterHolder[2], id+"-hp-value");
//     let progressBarValueViewer = replaceString(progressBarValueViewerClass, masterHolder[1], value); 

//     let color = ""
//     if (name == 'HP') {
//         color = 'danger'
//     }else if(name == 'MP'){
//         color = 'primary'
//     }else if(name == 'TP'){
//         color = 'warning'
//     }else if(name == 'EXP'){
//         color = 'success'
//     }else{
//         console.log("Err: color not found!")
//     }

//     let progressBox =replaceString(divComponent['start'], masterHolder[2], 'progress-indicator-box')

//     let progressBarValueId = replaceString(progressBarValueComponent['start'], masterHolder[0], id+"-hp-bar")
//     let progressBarValueColor = replaceString(progressBarValueId, masterHolder[7], color)
//     let progressBarValue = replaceString(progressBarValueColor, masterHolder[1], "100")

//     let progressBarBodyCurrentValue = replaceString(progressBarBodyComponent['start'], masterHolder[4], value)
//     let progressBarBodyMinValue = replaceString(progressBarBodyCurrentValue, masterHolder[5], "0")
//     let progressBarBody= replaceString(progressBarBodyMinValue, masterHolder[6], value)

//     let progressBarLabelComponentValue = replaceString(progressBarLabelComponent, masterHolder[1], name)


//     let composeProgressBarValue = progressBox+progressBarLabelComponentValue+progressBarBody+progressBarValue+progressBarValueViewer+"/"+value+progressBarValueComponent['end']+progressBarBodyComponent['end']+divComponent['end'];

//     return composeProgressBarValue
// }


function composePartyMember(id, npcName){
    let partyMember = eval(npcName);

    // console.log("NPC");
    // console.log(masterType[0]);
    let hp = generateProgressBarValueViewer("HP", id, partyMember['hp'], masterType[0]);
    let mp = generateProgressBarValueViewer("MP", id, partyMember['mp'], masterType[0]);
    let tp = generateProgressBarValueViewer("TP", id, 100, masterType[0]);


    let monsterStatus = replaceString(divComponent['start'], masterHolder[2],'container-fluid d-flex justify-content-end party-member-status-title');

    let nameMonster = replaceString(nameMonsterComponent, masterHolder[1], partyMember['name']);
    let levelMonster = replaceString(levelMonsterComponent, masterHolder[1], partyMember['level']);
    let partyBoxStatus = replaceString(divComponent['start'], masterHolder[2], 'party-status');

    let imgProfileClass = replaceString(imgCompoment, masterHolder[2], 'party-profile');
    let imgProfileValue = replaceString(imgProfileClass, masterHolder[1], main_asset_path+partyMember['img']);

    let composeMosnterStatus = imgProfileValue+partyBoxStatus+monsterStatus+nameMonster+levelMonster+divComponent['end']+hp+mp+tp+divComponent['end'];

    return composeMosnterStatus;
}




// let monsterAssetIdArr = []
// let monsterAssetId = {}

let battleFieldPartyMember = []
function constructPartyMember(id, npcName) {
    let partyStatus = composePartyMember("party-"+id, npcName);
    // let start = replaceString(divComponent["start"], masterHolder[0], "party-"+id);

    let start = replaceString(divComponent["start"], masterHolder[0], "party-"+id);
    let divClass = replaceString(start, masterHolder[2], "party-box-status");
    let divStart = replaceString(divClass, masterHolder[2], "party-"+id);
    let imgIdGenerate = "monster-"+id+"-idle-";
    battleFieldPartyMember.push(".monster-"+id);

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
    let selectFighter = replaceString(selectFighterRightComponent, masterHolder[0], "party-member-pointer-"+id);
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
}
