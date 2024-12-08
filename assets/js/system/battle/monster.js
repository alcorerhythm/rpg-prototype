let monsterBattle = []
let monsterAssetIdArr = []
let monsterAssetId = {}







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




function generateProgressBarValueViewer(name, id, value, type){
    let color = ""
    let idType = ""
    if (name == 'HP') {
        color = 'danger'
        idType = "-hp"
    }else if(name == 'MP'){
        color = 'primary'
        idType = "-mp"
    }else if(name == 'TP'){
        idType = "-tp"
        color = 'warning'
    }else if(name == 'EXP'){
        color = 'success'
    }else{
        console.log("Err: color not found!")
    }

    let progressBarValueViewerClass = replaceString(progressBarValueViewerComponent, masterHolder[2], id+idType+"-value");

    let currentValue = 0
    if(name == 'TP'){
        currentValue = 0
    }else{
        currentValue = value
    }
    let progressBarValueViewer = replaceString(progressBarValueViewerClass, masterHolder[1], currentValue); 

    // let progressBox = "";
    // if (type == masterType[0]) {
    //     progressBox =replaceString(divComponent['start'], masterHolder[2], 'progress-indicator-box')
    // }else if (type == masterType[0]) {
    //     progressBox =replaceString(divComponent['start'], masterHolder[2], 'progress-indicator-box')
    // }else{
    //     console.log("Err: type not found!")
    // }
    
    let progressBox =replaceString(divComponent['start'], masterHolder[2], 'progress-indicator-box')
    let progressBarValueClass = ""
    if (type == masterType[0]) {
        progressBarValueClass = replaceString(progressBarValueComponent['start'], masterHolder[2], "progress-bar-party-member")
    }else if(type == masterType[1]){
        progressBarValueClass = replaceString(progressBarValueComponent['start'], masterHolder[2], "")

    }
    let progressBarValueId = replaceString(progressBarValueClass, masterHolder[0], id+idType+"-bar")
    let progressBarValueColor = replaceString(progressBarValueId, masterHolder[7], color)
    let progressBarValue = ""
    if(name == 'TP'){
        progressBarValue = replaceString(progressBarValueColor, masterHolder[1], "0")
    }else{
        progressBarValue = replaceString(progressBarValueColor, masterHolder[1], "100")
    }

    // console.log(type)
    let progressBarBodyCurrentClass = "";
    if (type == masterType[0]) {
        progressBarBodyCurrentClass = replaceString(progressBarBodyComponent['start'], masterHolder[2], 'progress-indicator-party-member');
    }else if (type == masterType[1]) {
        progressBarBodyCurrentClass = replaceString(progressBarBodyComponent['start'], masterHolder[2], 'progress-indicator');
    }else{
        console.log("Err: type not found!");
    }
    

    // let progressBarBodyCurrentClass = replaceString(progressBarBodyComponent['start'], masterHolder[2], "progress-indicator")
    let progressBarBodyCurrentValue = replaceString(progressBarBodyCurrentClass, masterHolder[4], value)
    let progressBarBodyMinValue = replaceString(progressBarBodyCurrentValue, masterHolder[5], "0")
    let progressBarBody= replaceString(progressBarBodyMinValue, masterHolder[6], value)

    let progressBarLabelTitleClass = ""
    // console.log(type)
    if (type == masterType[0]) {
        progressBarLabelTitleClass = replaceString(progressBarLabelComponent, masterHolder[2], 'party-member');
    }else if (type == masterType[1]) {
        progressBarLabelTitleClass = replaceString(progressBarLabelComponent, masterHolder[2], "");
    }else{
        console.log("Err: type not found!");
    }
    let progressBarLabelTitleValue = replaceString(progressBarLabelTitleClass, masterHolder[1], name)

    let progressBarLabelValueClass = replaceString(progressBarLabelComponent, masterHolder[2], "party-member right")
    let progressBarLabelValue = replaceString(progressBarLabelValueClass, masterHolder[1], progressBarValueViewer+"/"+value)


    // console.log(progressBarValueViewer+"/"+value)

    let composeProgressBarValue = progressBox+progressBarLabelTitleValue+progressBarBody+progressBarValue+progressBarValueComponent['end']+progressBarBodyComponent['end']+progressBarLabelValue+divComponent['end'];

    return composeProgressBarValue
}

function generateMonsterStatus(name, area, id){
    let level = player['level']

    let enemyLevel = initLevel(level, area["limitLevelMax"], area["limitLevelMin"]);
    let monster = monsterBattle[id]
    monster.id = name+"-"+id
    monster.name = monster.name+" "+monster_naming_index[id]

    if (enemyLevel >1) {
        let expGrowth = monster.data.base.exp*monster_attr["growth_exp"]
        let exp = Math.round(expGrowth+(monster.data.base.exp*enemyLevel))
        let attack = monster.data.base.attack+(monster.data.base.extra*enemyLevel)
        let defence = monster.data.base.defence+(monster.data.baseextra*enemyLevel)
        let hp = monster.data.base.hp+((monster.data.base.growth+monster.data.base.extra)*enemyLevel)
        let mp = monster.data.base.mp+((monster.data.base.growth-monster.data.base.extra)*enemyLevel)


        // console.log("Name : "+monster.name+" "+monster_naming_index[id])
        // console.log("Lv. : "+enemyLevel)
        // console.log("HP : "+hp)
        // console.log("MP : "+mp)
        // console.log("Exp : "+exp)
        // console.log("Atk : "+attack)
        // console.log("Def : "+defence)
       
        monster.data.base.level = enemyLevel
        monster.data.base.exp = exp

        monster.data.current.hp = hp
        monster.data.current.mp = mp        
        monster.data.current.attack = attack
        monster.data.current.defence = defence


        monster.data.base.hp = hp
        monster.data.base.mp = mp
        monster.data.base.attack = attack
        monster.data.base.defence = defence
    }

    // if (true) {}
}

function composeProgressBarValueViewer(monsterName, id){
    let monsterId = monsterName+"-"+id
    let monster = monsterBattle[id];
    // console.log("Monster ID : "+id);
    // console.log(monsterBattle[id]["data"]["level"]);
    let hp = generateProgressBarValueViewer("HP", monsterId, monster.data.current.hp, masterType[1]);
    let mp = generateProgressBarValueViewer("MP", monsterId, monster.data.current.mp, masterType[1]);


    let monsterStatus = replaceString(divComponent['start'], masterHolder[2],'container-fluid d-flex justify-content-end monster-status-title');

    let nameMonster = replaceString(nameMonsterComponent, masterHolder[1], monster.name);
    let levelMonster = replaceString(levelMonsterComponent, masterHolder[1], monster.data.base.level);
    let monsterBoxStatus = replaceString(divComponent['start'], masterHolder[2], 'monster-status');

    let composeMosnterStatus = monsterBoxStatus+monsterStatus+nameMonster+levelMonster+divComponent['end']+hp+mp+divComponent['end'];

    return composeMosnterStatus;
}





function constructEnemy(id, monsterName, area) {
    // let monster = eval(monsterName)
    let monster = monsterBattle[id]


    let monsterStatus = composeProgressBarValueViewer(monsterName, id)
    let start = replaceString(divComponent["start"], masterHolder[0], monsterName+"-"+id)
    let divStart = replaceString(start, masterHolder[2], "monster-"+id)
    let imgIdGenerate = "monster-"+id+"-idle-";
    battleFieldEnemy.push(".monster-"+id)
    

    let monsterConstruct = ""
    let monsterAssetIdData = []
    for (var i = 1; i <= monster.idle.length; i++) {
        let setIndex = setStringIndex(i)
        let imgId = replaceString(imgCompoment, masterHolder[0], imgIdGenerate+setIndex)
        let full_path = main_asset_path+monster.path+monster.idle.path+setIndex+monster.idle.format
        let imgValue = replaceString(imgId, masterHolder[1], full_path)
        monsterConstruct = monsterConstruct+imgValue
        monsterAssetIdData.push(imgIdGenerate+setIndex)
        monsterAssetIdArr.push(imgIdGenerate)
        monsterAssetId[imgIdGenerate]=monsterAssetIdData
        
    }
    let statusBoxStart = replaceString(divComponent["start"], masterHolder[2], "monster-status-box")
    let statusBox = statusBoxStart+selectEnemyDownComponent+monsterStatus+divComponent["end"];
    let attackFieldStart = replaceString(divComponent["start"], masterHolder[2], "monster-"+id+" attack-field")
    let attackField = attackFieldStart+divComponent["end"];



    $("#battleField").append(divStart+statusBox+monsterConstruct+attackField+divComponent["end"])
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

function initBattleField() {
    let level = player['level'];
    let area = area_1;
    let enemyAmount = limitEnemy(level);
    // console.log(enemyAmount)

            
    let monsterName = "monster_slime"
    console.log(monster_slime)
    for (var i = 0; i <= enemyAmount; i++) {
        let monster = JSON.parse(JSON.stringify(eval(monsterName)))
        // console.log(i)
        monsterBattle.push(monster)
        generateMonsterStatus('monster_slime', area,i)
        constructEnemy(i,'monster_slime',area)
        // console.log(monster_slime)
    }    
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

function initLevel(level, limitMaxArea, limitMinArea) {
    // console.log(" Level Player : "+level);
    // console.log("Limit Level Area : "+limitMaxArea);



    let randomHigherLevel = random(1, 5);
    let higherThenPlayer = false
    if (randomHigherLevel == 1 || randomHigherLevel ==2 || randomHigherLevel == 3) {
        higherThenPlayer = false
    }else if (randomHigherLevel == 4 || randomHigherLevel == 5) {
        higherThenPlayer = true
    }

    let enemyLevel = 0
    if (higherThenPlayer == true) {
        let growthUp = random(1, 5)
        enemyLevel = level+growthUp;
        if (enemyLevel > limitMaxArea) {
            enemyLevel = limitMaxArea
        }
    }else{
        let growthDown = random(1, 5)
        enemyLevel = random(1, level);
        if (enemyLevel < limitMinArea){
            enemyLevel = limitMinArea
        }
    }
    // console.log("Lv. "+enemyLevel);
    return enemyLevel;
}

function generateStatusByLevel(){

}