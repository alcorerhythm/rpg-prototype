function callingEnemySelector(){
    console.log(battleFieldEnemy)
    let id = battleFieldEnemy[0]
    $(id+" div.select-arrow").addClass("active")
    $(id).addClass("active")
}

function initBattleField() {
    let level = user['data']['level']
    let enemyAmount = limitEnemy(level);
    // console.log(enemyAmount)
    for (var i = 1; i <= enemyAmount; i++) {
        // console.log(i)
        constructEnemy(i, 'monster_slime')
    }

    callingEnemySelector()
    
}

function initFormation(amount){
    // let draw = 
}


function limitEnemy(level) {
    let min = 1;
    let max = 1;
    if (level < 10) {
        max = 2
    }else if (level < 20) {
        max = 3
    }else if (level < 35) {
        max = 4
    }else {
        max = 5
    }
    let enemy = random(min, max);
    return enemy;
}







// function getlength(number) {
// 	return number.toString().length;
// }

// function setStringIndex(value){
// 	let characterLength = getlength(value)
// 	if (characterLength < 10) {
// 		return "00"+value.toString()
// 	}else if(characterLength < 100){
// 		return "0"+value.toString()
// 	}else{
// 		console.log("Err: setStringIndex")
// 	}
// }

// function replaceString(text, param, value){
// 	let result = text.replace(param, value);
// 	return result;
// }



// let progressBarComponent = 
// 	`<div class="progress-indicator-box">
// 		<div class="progress-label"><b>HP</b></div>	
// 		<div class="progress progress-indicator" role="progressbar" aria-label="Danger example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="10">
// 			<div class="progress-bar bg-danger" style="width: 100%">
// 				<span class="valueHp"></span>/<span class="valueHpMax"></span>
// 			</div>
// 		</div>
// 	</div>`;


// let monster_status = 
// 	`<div id="<!id>" class="monster-status">
// 		<div class="container-fluid d-flex justify-content-end monster-status-title">
// 			<div class="indicator-level justify-content-start half">
// 				<b>Slime</b>
// 			</div>
// 			<div class="indicator-level float-end half">
// 				<span class="float-end">Lv. </span>
// 				<span id="valueLevel" class="float-end"></span>
// 			</div>
// 		</div>

// 		<div class="progress-indicator-box">
// 			<div class="progress-label"><b>HP</b></div>	
// 			<div class="progress progress-indicator" role="progressbar" aria-label="Danger example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="10">
// 				<div class="progress-bar bg-danger" style="width: 100%">
// 					<span class="valueHp"></span>/<span class="valueHpMax"></span>
// 				</div>
// 			</div>
// 		</div>
// 		<div class="progress-indicator-box">
// 			<div class="progress-label"><b>MP</b></div>		
// 			<div class="progress progress-indicator" role="progressbar" aria-label="Warning example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="10">
// 				<div class="progress-bar text-light" style="width: 100%" right>
// 					<span class="valueMp"></span>/<span class="valueMpMax"></span>
// 				</div>
// 			</div>
// 		</div>
// 	</div>`;



// let main_asset_path = "./assets/img/";




function generateProgressBarValueViewer(name, id, value){
    let progressBarValueViewerClass = replaceString(progressBarValueViewerComponent, masterHolder[2], id+"-hp-value");
    let progressBarValueViewer = replaceString(progressBarValueViewerClass, masterHolder[1], value); 

    let color = ""
    if (name == 'HP') {
        color = 'danger'
    }else if(name == 'MP'){
        color = 'primary'
    }else if(name == 'EXP'){
        color = 'success'
    }else{
        console.log("Err: color not found!")
    }

    let progressBox =replaceString(divComponent['start'], masterHolder[2], 'progress-indicator-box')

    let progressBarValueId = replaceString(progressBarValueComponent['start'], masterHolder[0], id+"-hp-bar")
    let progressBarValueColor = replaceString(progressBarValueId, masterHolder[7], color)
    let progressBarValue = replaceString(progressBarValueColor, masterHolder[1], "100")

    let progressBarBodyCurrentValue = replaceString(progressBarBodyComponent['start'], masterHolder[4], value)
    let progressBarBodyMinValue = replaceString(progressBarBodyCurrentValue, masterHolder[5], "0")
    let progressBarBody= replaceString(progressBarBodyMinValue, masterHolder[6], value)

    let progressBarLabelComponentValue = replaceString(progressBarLabelComponent, masterHolder[1], name)


    let composeProgressBarValue = progressBox+progressBarLabelComponentValue+progressBarBody+progressBarValue+progressBarValueViewer+"/"+value+progressBarValueComponent['end']+progressBarBodyComponent['end']+divComponent['end'];

    return composeProgressBarValue
}

function generateMonsterStatus(){

}

function composeProgressBarValueViewer(id, monsterName){
    let monster = eval(monsterName);
    let hp = generateProgressBarValueViewer("HP", id, monster['hp']);
    let mp = generateProgressBarValueViewer("MP", id, monster['mp']);


    let monsterStatus = replaceString(divComponent['start'], masterHolder[2],'container-fluid d-flex justify-content-end monster-status-title');

    let nameMonster = replaceString(nameMonsterComponent, masterHolder[1], monster['name']);
    let levelMonster = replaceString(levelMonsterComponent, masterHolder[1], monster['level']);
    let monsterBoxStatus = replaceString(divComponent['start'], masterHolder[2], 'monster-status');

    let composeMosnterStatus = monsterBoxStatus+monsterStatus+nameMonster+levelMonster+divComponent['end']+hp+mp+divComponent['end'];

    return composeMosnterStatus;
}



let monsterAssetIdArr = []
let monsterAssetId = {}

function constructEnemy(id, monsterName) {
    let monsterStatus = composeProgressBarValueViewer("enemy-"+id, monsterName)
    let start = replaceString(divComponent["start"], masterHolder[0], "enemy-"+id)
    let divStart = replaceString(divComponent["start"], masterHolder[2], "monster-"+id)
    let imgIdGenerate = "monster-"+id+"-idle-";
    battleFieldEnemy.push(".monster-"+id)

    let monster = eval(monsterName)
    let monsterConstruct = ""
    let monsterAssetIdData = []
    for (var i = 1; i <= monster["idle"]["length"]; i++) {
        let setIndex = setStringIndex(i)
        let imgId = replaceString(imgCompoment, masterHolder[0], imgIdGenerate+setIndex)
        let full_path = main_asset_path+monster["path"]+monster["idle"]["path"]+setIndex+monster["idle"]["format"]
        let imgValue = replaceString(imgId, masterHolder[1], full_path)
        monsterConstruct = monsterConstruct+imgValue
        monsterAssetIdData.push(imgIdGenerate+setIndex)
        monsterAssetIdArr.push(imgIdGenerate)
        monsterAssetId[imgIdGenerate]=monsterAssetIdData
        
    }
    $("#battleField").append(divStart+selectEnemyComponent+monsterStatus+monsterConstruct+divComponent["end"])
    for (var i = 0; i <= monsterAssetIdData.length; i++) {
        $("#"+monsterAssetIdData[i]).hide()
    }
    runMonster(imgIdGenerate,0)
}


function hideMonsterAllAssets(id){
    let assetId = "";
    for (var i = 0; i < monsterAssetId[id].length; i++) {
        if (monsterAssetId[id].length-1 == i) {
            assetId = assetId+"#"+monsterAssetId[id][i]
        }else{
            assetId = assetId+"#"+monsterAssetId[id][i]+","
        }
    }
    $(assetId).hide()
}



function runMonster(id,index){
    setTimeout(function() {
        hideMonsterAllAssets(id)
        $("#"+monsterAssetId[id][index]).show()
        index++;
        if (index < monsterAssetId[id].length) { 
            runMonster(id, index);
        }else{
            runMonster(id, 0);
        }		

    }, 360)
}
