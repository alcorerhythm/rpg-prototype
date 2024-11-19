function getlength(number) {
	return number.toString().length;
}

function setStringIndex(value){
	let characterLength = getlength(value)
	if (characterLength < 10) {
		return "00"+value.toString()
	}else if(characterLength < 100){
		return "0"+value.toString()
	}else{
		console.log("Err: setStringIndex")
	}
}

function replaceString(text, param, value){
	let result = text.replace(param, value);
	return result;
}

let masterHolder = ['<!id>','<!value>','<!class>','<!onclick>', '<!currentValue>','<!minValue>','<!maxValue>','<!color>']
let masterClass = ['skill-icon']


let main_asset_path = "./assets/img/";
let user = {
	"data":{
		"id":"",
		"name":"",
		"level":10
	}
}


//setting
let skillConfig = {
	"data":["skill_punch_impact"]
}
console.log(skillConfig["data"][0])

let monsterEnvironmet = {
	"data":["monster_slime"]
}

let monster_formation = [
	{
		"id":1,
		"amount":1
	},
]


//Component
let imgCompoment = "<img id='<!id>' class='<!class>' src='<!value>'>"
let divComponent = {
	"start":"<div id='<!id>' class='<!class>'>",	
	"end":"</div>"
}

let nameMonsterComponent = '<div class="indicator-level justify-content-start half"><b><!value></b></div>'
let levelMonsterComponent = '<div class="indicator-level float-end half"><span id="valueLevel" class="float-end"><b><!value></b></span><span class="float-end">Lv. </span></div>'


let progressBarLabelComponent = '<div class="progress-label"><b><!value></b></div>';
let progressBarBodyComponent = { 
	'start':'<div class="progress progress-indicator" role="progressbar" aria-valuenow="<!currentValue>" aria-valuemin="<!minValue>" aria-valuemax="<!maxValue>">',
	'end':'</div>'
	};
let progressBarValueComponent = {
	'start':'<div id="<!id>" class="progress-bar bg-<!color>" style="width: <!value>%">',	
	'end':'</div>'
}
let progressBarValueViewerComponent = '<span class="<!class>"><!value></span>'

let skillButtonComponent = {
	"start":"<button class='btn btn-skill' id='<!id>' onclick='<!onclick>'>",	
	"end":"</button>"
}

//monster
let monster_slime = {
	"path":"monster/slime/",
	"name":"Slime",
	"idle":{
		"path":"idle/",
		"format":".svg",
		"length":3
	},
	"width":420,
	"height":360,
	"level":1,
	"hp":10,
	"mp":10
};




// let monster_slime = {
// 	"path":"monster/slime/",
// 	"name":"slime.png",
// 	"idle":{
// 		"path":"idle/",
// 		"format":".svg",
// 		"length":3
// 	},
// 	"width":420,
// 	"height":360,
// 	"hp":10,
// 	"mp":10
// };

// main_asset_path+monster_slime["path"]+monster_slime["idle"]['path']

// +monster_slime["idle"]['format']
// monster_slime["idle"]['length']

//skill
let skill_punch_impact = {
	"path":"skill/punch_impact/sprite/",
	"name":"Impact",
	"name_file":"punch_",
	"icon":"skill/punch_impact/icon.svg",
	"format":"svg",
	"length":7,
};

	let skill_punch_impact_index = 0
	
	function execute(j) {
		$("#attack-field").show()
		if (++j <= skill_punch_impact['length']) window.setTimeout(execute, 180, j);
		skill_punch_impact_index = skill_punch_impact_index+1

		let setIndex = setStringIndex(skill_punch_impact_index)
		let full_path = main_asset_path+skill_punch_impact['path']+skill_punch_impact['name_file']+setIndex+"."+skill_punch_impact['format'];
		document.getElementById("attack-field").src = full_path;

		if (skill_punch_impact_index == skill_punch_impact['length']) {
			skill_punch_impact_index = 0
			$("#attack-field").hide()
		}
	}

	// function summonMonster(){
	// 	let full_path = main_asset_path+monster_slime["path"]+monster_slime["name"]
	// 	$('#monster-point').attr("src", full_path);
	// }

	function loadSkill() {
		let skillButton =""
		for (var i =0; i < skillConfig["data"].length; i++) {
			let skillValue = ""
			

			let skillButtonComponentStartI= replaceString(skillButtonComponent['start'], masterHolder[0], skillConfig["data"][i])
			//masterHolder
			if (skillConfig["data"][i] == "skill_punch_impact") {
				skillValue = eval(skillConfig["data"][0])
			}

			let skillButtonComponentStart= replaceString(skillButtonComponentStartI, masterHolder[3], "activation(&#39;"+skillValue['name']+"&#39;)")
			let skillIconClass= replaceString(imgCompoment, masterHolder[2], masterClass[0])		

			let skillIcon= replaceString(skillIconClass, masterHolder[1], main_asset_path+skillValue['icon'])
			skillButton = skillButton+skillButtonComponentStart+skillIcon+skillValue['name']+skillButtonComponent['end']

		}
		$('#skill-box').append(skillButton)
	}

	function activation(handle){
		window.setTimeout(execute, 500, 1);
	}

	function initBattleField() {
		let level = user['data']['level']
		let enemyAmount = limitEnemy(level);
		console.log(enemyAmount)
		for (var i = 1; i <= enemyAmount; i++) {
			console.log(i)
			constructEnemy(i, 'monster_slime')
		}
		
	}

	function initFormation(amount){
		// let draw = 
	}


	function limitEnemy(level) {
		let min = 0;
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
		let enemy = randomEnemy(min, max);
		return enemy;
	}


	function randomEnemy(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
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
		$("#battleField").append(divStart+monsterStatus+monsterConstruct+divComponent["end"])
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







$( document ).ready(function() {
    console.log( "ready!" );
    // window.setTimeout(runMonster, 500, 1);
    initBattleField()

	loadSkill()
	$("#attack-field").hide();
	$('.formation-1, .formation-2, .formation-3, .formation-4, .formation-5').hide();
});