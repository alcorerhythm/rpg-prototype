function accept(){
	// console.log(menuActionAccess);


	if (chooseTargetPartyMember == true) {
		disactivatePartyMember();
		let id = $("div.bgBoxImage.active").parent().attr('id');
		let idValue = replaceString(id, "party-", "")
		if (idValue == "0") {
			partyMemberDetail = true;
			loadPartyMemberDetail()
		}else{
			$(".arrow.arrow-menu").show();
			chooseTargetPartyMember = false;
			menuBattleAccess = true;
			let idInt = parseInt(idValue)-1
			pushLog("partyMember", idInt)
		}
		
	}else if(menuBattleAccess == true){
		menu();
		$(".arrow.arrow-menu").hide();
		menuBattleAccess = false;
		menuActionAccess = true;
		menuSwitch(1);
	}else if(menuActionAccess == true){
		menuActionAccess = false;
		chooseTargetEnemy = true
		let id = $("div.action.active.selected").attr("id");
		let idValue = replaceString(id, "party-", "")
		let idInt = parseInt(idValue)
		accessMenu(idInt)
	}else if(chooseTargetEnemy == true){
		chooseTargetEnemy =false;
		let id = $("div.monster-status-box div.monster-status.active").parent().parent().attr('id');
		let idValue= getNumber(id);
		pushLog("enemy", idValue)
		damageCounter()

	}



	return null
}

function cancel() {
	if (partyMemberDetail == true) {
		partyMemberDetail = false;
		loadPartyMemberDetail()
	}
	else if (chooseTargetPartyMember == true) {
		// disactivatePartyMember();
		// let id = $("div.bgBoxImage.active").parent().attr('id');
		// // console.log(id)
		// let idValue = replaceString(id, "party-", "")
		// if (idValue == "0") {
		// 	partyMemberDetail = true;
		// 	loadPartyMemberDetail()
		// }else{
		// 	$(".arrow.arrow-menu").show();
		// 	chooseTargetPartyMember = false;
		// 	menuBattleAccess = true;
		// 	writeLogRow("partyMember", id)
		// }
		
	}else if(menuBattleAccess == true){
		// menu();
		// $(".arrow.arrow-menu").hide();
		// menuBattleAccess = false;
		// menuActionAccess = true;
		// menuSwitch(1);
	}else if(menuActionAccess == true){
		// let id = $("div.action.active.selected").attr("id");


	}


	else{

	}
}


function accessMenu(id){
	console.log(id);
	if (id == 0) {
		pushLog("action", "item")
	}else if (id == 1) {
		 pushLog("action", "attack")
		 callingEnemySelector(0);
	}else if (id == 2) {
		pushLog("action", "skill")
	}else if (id == 3) {
		pushLog("action", "magic")
	}else if (id == 4) {
		pushLog("action", "defense")

	}
}

let mappingAction = []
let mappingActionRow = {}
function wirteMapAction(actionId, enemy){

}

let log = []
let logRow = {}
let logMessage = []
let devTool = true;


function pushLogRow(){
	let row = JSON.parse(JSON.stringify(eval(mappingActionRow)))
	mappingAction.push(row)
	let objectBattleField = formationParty.length+monsterBattle.length

	
	// console.log("formationParty : "+formationParty.length)
	// console.log("monsterBattle : "+monsterBattle.length)
	// console.log("mappingAction : "+mappingAction.length)
	// console.log(" objectBattleField : "+ objectBattleField)
	if (mappingAction.length == formationParty.length) {
		mappingEnemyAttack()
	}else if(mappingAction.length == objectBattleField){
		mappaingActionLoop()
		mappingAction = mappingAction.sort(( first, second ) => second.speed - first.speed );

	}
	mappingActionRow={}

	// else{

	// }



	// if (devTool == true){

	// }
	// if (type == 'enemy') {
	// 	mappingActionRow['enemy'] = value;
	// }else if(type == 'action'){
	// 	mappingActionRow['action'] = value;
	// }else if(type == 'partyMember'){
	// 	mappingActionRow['partyMember'] = value;
	// }
}

function pushLog(type, value){
	if (devTool == true) {
		let html = '<li>'+type+' : '+value+'</li>';
		$('#logListDevTool').append(html);
		$('#logListDevTool').scrollTop($(document).height());
	}

	if (type == 'enemy') {
		mappingActionRow['enemy'] = value;
		
	}else if(type == 'skill'){
		mappingActionRow['skill'] = value;
	}else if(type == 'action'){
		mappingActionRow['action'] = value;
	}else if(type == 'partyMember'){
		mappingActionRow['partyMember'] = value;	
	}else if(type == 'damage'){
		mappingActionRow['damage'] = value;		
	}else if(type == 'type'){
		mappingActionRow['type'] = value;
	}else if(type == 'speed'){
		mappingActionRow['speed'] = value;	
		// pushLogRow(value)
	}else if(type == 'push' && value == 'execute'){
		
		pushLogRow()
	}


}

function writeLog(){
	
	$("#logList").append()
}


function damageCounter(){
	// console.log(mappingActionRow['partyMember'])
	let fighterGet = formationParty[mappingActionRow['partyMember']];
	let fighter = eval(fighterGet)
	let fighterAttack = fighter["data"]["status_current"]["strength"]
	let fighterSpeed = fighter["data"]["status_current"]["agility"]

	let enemyGet = monsterBattle[mappingActionRow['enemy']]
	let enemyDefence = enemyGet.data.current.defence
	// console.log(enemyDefence)
	// pushLog("attack", fighterAttack)

	let damage = fighterAttack-enemyDefence
	// console.log("damage : "+damage)
	if (damage <= 0 ) {
		damage = 0
	}
	pushLog("type", "attack")
	pushLog("speed", fighterSpeed)
	pushLog("damage", damage)
	pushLog("push", "execute")
	

}



function mappingEnemyAttack(){

// }

// function randomFighter(){
	for (var i = 0; i < monsterBattle.length; i++) {
		let enemyGet = monsterBattle[i]
		let enemyAttack = enemyGet.data.current.attack
		let enemySpeed= enemyGet.data.current.agility

		let fighterIndex = random(0, formationParty.length-1);
		let fighterGet = formationParty[fighterIndex];
		// console.log(fighterIndex)
		let fighter = eval(fighterGet)
		// console.log(fighterGet)
		let fighterDefence = fighter["data"]["status_current"]['vitality']

		let damage = enemyAttack-fighterDefence
		console.log("damage : "+damage)
		if (damage <= 0 ) {
			damage = 0
		}
		pushLog("type", "defence")
		pushLog("action", "attack")
		pushLog("enemy", i)
		pushLog("partyMember", fighterIndex)
		pushLog("speed", enemySpeed)
		pushLog("damage", damage)
		pushLog("enemy", i)
		pushLog("push", "execute")
		
	}





	// console.log(enemyDefence)
	// pushLog("attack", fighterAttack)

	// let damage = fighterAttack-enemyDefence
	// pushLog("damage", damage)


}

// function attackExcute(){

// 	console.log("Start Turn!")
// 	for (var i = 0; i < mappingAction.length; i++) {
// 		let enemyRow = monsterBattle[mappingAction[i].enemy]
// 		let fighterRow = formationParty[mappingAction[i].partyMember]





// 		let composeLog = ""
// 		if (mappingAction[i].type == "attack") {
// 			console.log("mappingAction[i].damage : "+mappingAction[i].damage)
// 			enemyRow.data.current.hp = enemyRow.data.current.hp - mappingAction[i].damage
// 			let hpWidth = (enemyRow.data.current.hp /enemyRow.data.base.hp) *100 
// 			console.log("enemyRow.data.current.hp : "+enemyRow.data.current.hp)
// 			console.log("enemyRow.data.base.hp : "+enemyRow.data.base.hp)
// 			console.log(hpWidth)
// 			console.log(enemyRow.id)
// 			let hpPercent = Math.round(hpWidth)
// 			$("#"+enemyRow.id+"-hp-bar").attr("style","width:"+hpPercent+"%")
// 			$("."+enemyRow.id+"-hp-value").text(enemyRow.data.current.hp)

// 			composeLog = enemyRow.name+" got "+mappingAction[i].damage+" damage by <b>"+fighterRow['name']+"</b> "
// 		}else if(mappingAction[i].type == "defence"){
// 			composeLog = fighterRow['name']+" got "+mappingAction[i].damage+" damage by <b>"+enemyRow.name+"</b> "
// 		}
// 		// let enemyDefence = enemyGet.data.hp-mappingAction



// 		$("#logList").append('<li>'+composeLog+'</li>')
// 		$('#logList').scrollTop($('#logList').height());
// 	}
// }


var i = 0; 

function mappaingActionLoop() {
  setTimeout(function() {
    // console.log('hello');

	let enemyRow = monsterBattle[mappingAction[i].enemy]
	let fighterRow = formationParty[mappingAction[i].partyMember]//JSON.parse(JSON.stringify())
	// console.log("fighterRow.data.status_current.hp T: "+fighterRow.data.status_current.hp)

	let composeLog = ""
	if (mappingAction[i].type == "attack") {
		if (mappingAction[i].action == "attack") {
			callAnimation("monster-"+mappingAction[i].enemy, "attack_slash", 1)
			// callAnimation("monster-1","attack_slash", 1)
		}
		// console.log("mappingAction[i].damage : "+mappingAction[i].damage)
		enemyRow.data.current.hp = enemyRow.data.current.hp - mappingAction[i].damage
		let hpWidth = (enemyRow.data.current.hp /enemyRow.data.base.hp) *100 
		// console.log("enemyRow.data.current.hp : "+enemyRow.data.current.hp)
		// console.log("enemyRow.data.base.hp : "+enemyRow.data.base.hp)
		// console.log(hpWidth)
		// console.log(enemyRow.id)
		let hpPercent = Math.round(hpWidth)
		$("#"+enemyRow.id+"-hp-bar").attr("style","width:"+hpPercent+"%")
		$("."+enemyRow.id+"-hp-value").text(enemyRow.data.current.hp)

		composeLog = enemyRow.name+" got "+mappingAction[i].damage+" damage by <b>"+fighterRow['name']+"</b> "
	}else if(mappingAction[i].type == "defence"){


		let partyIdValue = mappingAction[i].partyMember+1
		// console.log("fighterRow.data.status_current.hp B: "+fighterRow['data']['status_current']['hp'])
		fighterRow['data']['status_current']['hp'] = fighterRow['data']['status_current']['hp'] - mappingAction[i].damage
		let hpWidth = (fighterRow['data']['status_current']['hp'] /fighterRow['data']['status_build_base']['hp'])*100 

		// party-1-mp-bar
		// party-1-hp-value
		let hpPercent = Math.round(hpWidth)
		// console.log("fighterRow.data.status_current.hp A: "+fighterRow['data']['status_current']['hp'])

		let tpWidth =(mappingAction[i].damage/fighterRow['data']['status_build_base']['hp'])*100 
		let tpPercentAdditional = Math.round(tpWidth)
		fighterRow['data']['status_current']['tp'] = fighterRow['data']['status_current']['tp']+ tpPercentAdditional;

		console.log("hpPercent : "+hpPercent)
		console.log("tpPercent : "+tpPercentAdditional)

		$("#party-"+partyIdValue+"-hp-bar").attr("style","width:"+hpPercent+"%")
		$(".party-"+partyIdValue+"-hp-value").text(fighterRow['data']['status_current']['hp'])
		$("#party-"+partyIdValue+"-tp-bar").attr("style","width:"+fighterRow['data']['status_current']['tp']+"%")
		$(".party-"+partyIdValue+"-tp-value").text(fighterRow['data']['status_current']['tp'])

		composeLog = fighterRow['name']+" got "+mappingAction[i].damage+" damage by <b>"+enemyRow.name+"</b> "
	}
	// let enemyDefence = enemyGet.data.hp-mappingAction



	$("#logList").append('<li>'+composeLog+'</li>')
	$('#logList').scrollTop($('#logList').height());
    i++;
    if (i < mappingAction.length) {
    	mappaingActionLoop() 
    }
  }, 1500)
}
 
// function attack(){
// 	$("#"++"-hp-bar").text()
// 	$("#"++"-hp-value").text()
// }

// $("#test1").text("Hello world!");
// $("#test1").text("Hello world!");

// function callAnimation(){

// }


let actionIndex = 0
function callAnimation(target, asset, j) {
	console.log("test_exec");
	let data = eval(asset)
	// console.log(data)
	// console.log(data['length'])


    $("."+target+".attack-field").show()
    if (++j <= data['length']) window.setTimeout(callAnimation, 80, target, asset, j);
    actionIndex = actionIndex+1

    let setIndex = setStringIndex(actionIndex)
    let full_path = main_asset_path+data['path']+data['name_file']+setIndex+"."+data['format'];
    // console.log(full_path)
    // document.getElementById("attack-field").src = full_path;
    $("."+target+".attack-field").html(imgCompoment)
    $("."+target+".attack-field img").attr('src',full_path)

    if (actionIndex == data['length']) {
        actionIndex = 0
        $("."+target+".attack-field").hide()
    }
}


