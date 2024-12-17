function accept(){
	// console.log(menuActionAccess);

	// console.log("menuStatus : "+menuStatus)
	// console.log("menuBattleAccess : "+menuBattleAccess)
	// console.log("menuActionAccess : "+menuActionAccess)

	if (chooseTargetPartyMember == true) {
		
		let id = $("div.bgBoxImage.active").parent().attr('id');
		let idValue = replaceString(id, "party-", "")
		hideSelectorPartyMember(idValue);
		if (idValue == "0") {
			partyMemberDetail = true;
			loadPartyMemberDetail()
		}else{
			
			chooseTargetPartyMember = false;
			let idInt = parseInt(idValue)-1
			formationPartyCurrentConfigAvailable[idValue] = battleFieldUsedDefault
			pushLog("partyMember", idInt)
			if (menuStatus == false) {
				$("menu.box-body").addClass('hover');
				$("#menuCostum1").removeClass('hide');
				$("#menuCostum2").removeClass('hide');
				menuBattleAccess = true;
			}else if(menuStatus == true){
				// menuBattleAccess = false;
				// menuActionAccess = true;
				// menuBattleAccess = false;
				menuActionAccess = true;
				// menuActionAccess = true;
				menuSwitch(1);
			}
		}
		
	}else if(menuBattleAccess == true){
		menu();
		// $(".arrow.arrow-menu").hide();
		$("menu.box-body").removeClass('hover');
		$("#menuCostum1").addClass('hide');
		$("#menuCostum2").addClass('hide');
		menuBattleAccess = false;
		menuActionAccess = true;
		menuSwitch(1);
	}else if(menuActionAccess == true){
		menuActionAccess = false;
		let id = $("div.action.active.selected").attr("id");
		let idValue = replaceString(id, "party-", "")
		let idInt = parseInt(idValue)
		accessMenu(idInt)
		menuSwitchLeave(mappingActionRow["action"])
	}else if(chooseTargetEnemy == true){
		chooseTargetEnemy =false;

		let id = $("div.monster-status-box div.monster-status.active").parent().parent().attr('id');
		let idValue= getNumber(id);
		hideSelectorEnemy(idValue);
		let idInt = parseInt(idValue)
		pushLog("enemy", idInt)
		damageCounter()

	}else if(chooseInvenotyBattleItem == true){
		chooseInvenotyBattleItem = false;
		chooseTargetPartyMemberItemBattle = true;
		let id = $('li.item-row.active').attr('id');
		pushLog("item", id)
		$("#inventoryPanel").hide();
		activationPartyMemberItemBattle()
	}else if(chooseTargetPartyMemberItemBattle == true){
		chooseTargetPartyMemberItemBattle = false;
		let id = $("div.bgBoxImage.active").parent().attr('id');
		let idValue = replaceString(id, "party-", "")
		// hideSelectorPartyMember(idValue);


		// let id = $("div.bgBoxImage.active").parent().attr('id');
		// let idValue = replaceString(id, "party-", "")
		// hideSelectorPartyMember(idValue);
		
		let idInt = parseInt(idValue)-1
		pushLog("target", idInt)
		hideSelectorPartyMember(idInt)
		let fighter = getPartyMemberFromFormationParty(mappingActionRow['partyMember']);
		let fighterSpeed = fighter["data"]["status_current"]["agility"];
		pushLog("speed", fighterSpeed+userItemTimeSpeedDefault);
		pushLog("push", "execute");
	}



	return null
}

function cancel() {
	console.log("Test")
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
		chooseTargetPartyMember = true
		menuBattleAccess = false
		formationPartyCurrentConfigAvailable[selectedPartyMember] = battleFieldPartyMember[selectedPartyMember]
		callingPartySelector("init",selectedPartyMember)
		$("menu.box-body").removeClass('hover');
		$("#menuCostum1").addClass('hide');
		$("#menuCostum2").addClass('hide');
		// $(".arrow.arrow-menu").hide();
		// menu();
		// $(".arrow.arrow-menu").hide();
		// menuBattleAccess = false;
		// menuActionAccess = true;
		// menuSwitch(1);
	}else if(menuActionAccess == true){
		
		//$(battleFieldPartyMember[mappingActionRow['partyMember']]+" div div.arrow").removeClass("hide");
		chooseTargetPartyMember = true
		menuActionAccess = false
		formationPartyCurrentConfigAvailable[selectedPartyMember] = battleFieldPartyMember[selectedPartyMember]
		callingPartySelector("init",selectedPartyMember)
				// let id = $("div.action.active.selected").attr("id");
	}else if(chooseTargetEnemy == true){
		chooseTargetEnemy = false
		menuActionAccess = true;
		hideSelectorEnemy(selectedEnemy)
		menuSwitch(selectedAction);
	}else if(chooseInvenotyBattleItem == true){
		chooseInvenotyBattleItem = false
		menuActionAccess = true;
		menuSwitch(selectedAction);
		$("#inventoryPanel").hide();
		// let id = $("div.action.active.selected").attr("id");


	}


	else{

	}
}


function accessMenu(id){
	// console.log(id);
	if (id == 0) {
		chooseInvenotyBattleItem = true
		pushLog("action", "item")
		loadInventory()
	}else if (id == 1) {
		chooseTargetEnemy = true
		pushLog("action", "attack")
		callingEnemySelector("init",0);
	}else if (id == 2) {
		pushLog("action", "skill")
	}else if (id == 3) {
		pushLog("action", "magic")
	}else if (id == 4) {
		pushLog("action", "defense")
		buildDefence()
	}else if (id == 5) {
		menuBattleAccess = true
		menu()
		$("menu.box-body").addClass('hover');
		$("#menuCostum1").removeClass('hide');
		$("#menuCostum2").removeClass('hide');
		pushLog("action", "menuQuit")
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
	// console.log(mappingActionRow)
	let row = JSON.parse(JSON.stringify(eval(mappingActionRow)))
	mappingAction.push(row)
	let partyAmount = countAliveFellow("party")
	let enemyAmounth = countAliveFellow("enemy")
	let objectBattleField = partyAmount+enemyAmounth

	console.log("objectBattleField : "+objectBattleField)

	
	// console.log("formationParty : "+formationParty.length)
	// console.log("monsterBattle : "+monsterBattle.length)
	// console.log("mappingAction : "+mappingAction.length)
	// console.log(" objectBattleField : "+ objectBattleField)
	if (mappingAction.length < formationParty.length) {
		activationPartyMember()
		// console.log("formationPartyCurrentConfig :"+formationPartyCurrentConfig)
		// console.log("formationPartyCurrentConfigAvailable :"+formationPartyCurrentConfigAvailable)
	}else if (mappingAction.length == formationParty.length) {
		mappingEnemyAttack()
		// console.log(battleFieldEnemy)
		// console.log(monsterBattle)
		console.log(mappingAction)
	}else if(mappingAction.length == objectBattleField){
		mappingActionLoop()
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

let logDict ={}
function pushLog(type, value){
	if (devTool == true) {
		// let logDict ={}
		logDict[type] = value;
		let html = '<li>'+type+' : '+value+'</li>';
		$('#logListDevTool').append(html);
		$('#logListDevTool').scrollTop($(document).height());

		if (type == 'push' && value == 'execute') {
			log.push(logDict)
			logDict ={}
		}
	}

	if (type == 'enemy') {
		mappingActionRow['enemy'] = value;
	}else if(type == 'action'){
		if(value == 'buff' || value == 'skill'){
			mappingActionRow['isDispel'] = false;
		}else if(value == 'magic'){
			mappingActionRow['isDischarge'] = false;
		}
		mappingActionRow['action'] = value;
	}else if(type == 'buff'){
		mappingActionRow['buff'] = value;	
	}else if(type == 'skill'){
		mappingActionRow['skill'] = value;
	}else if(type == 'magic'){
		mappingActionRow['magic'] = value;		
	}else if(type == 'partyMember'){
		mappingActionRow['partyMember'] = value;	
	}else if(type == 'damage'){
		mappingActionRow['damage'] = value;
	}else if(type == 'item'){
		mappingActionRow['item'] = value;
	}else if(type == 'target'){
		mappingActionRow['target'] = value;	
	}else if(type == 'type'){
		mappingActionRow['type'] = value;
	}else if(type == 'speed'){
		mappingActionRow['speed'] = value;		
	}else if(type == 'push' && value == 'execute'){
		mappingActionRow['isExecute'] = false;
		pushLogRow()
	}
}


function getPartyMemberFromFormationParty(id){
	let fighterGet = formationParty[id];
	let fighter = eval(fighterGet);
	return fighter;
}

function writeLog(){
	
	$("#logList").append()
}


function chargeTechniquePoint(figherIndex, value){
	let fighterRow = formationParty[mappingAction[figherIndex].partyMember];
	let partyIdValue = mappingAction[figherIndex].partyMember+1;
	fighterRow['data']['status_current']['tp'] = fighterRow['data']['status_current']['tp']+ value;
	$("#party-"+partyIdValue+"-tp-bar").attr("style","width:"+fighterRow['data']['status_current']['tp']+"%");
	$(".party-"+partyIdValue+"-tp-value").text(fighterRow['data']['status_current']['tp']);
}

function buildDefence(){
	// let dataBuff = eval(defence_default)
	let data = JSON.parse(JSON.stringify(buff_defence_default));
	let fighter = getPartyMemberFromFormationParty(mappingActionRow['partyMember']);
	let fighterSpeed = fighter["data"]["status_current"]["agility"];
	pushLog("action", 'buff');
	pushLog("buff", 'buff_defence_default');
	pushLog("speed", fighterSpeed+data.speed);
	pushLog("push", "execute");
	$(".action.defence.active.selected").removeClass('selected');
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

function damageRecounter(){
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
	mappingActionRow={}
	return damage
	// pushLog("type", "attack")
	// pushLog("speed", fighterSpeed)
	// pushLog("damage", damage)
	// pushLog("push", "execute")
	

}

function initBuff(id,buff){
	// id: 'party-1'
	// buff: 'default_defence'
	let dataBuff = eval(buff)
	let data = JSON.parse(JSON.stringify(dataBuff))

    let buffStatusRowComponentStart = replaceString(divComponent['start'], masterHolder[0], data.id+'-'+id);
    let buffStatusRowComponent = replaceString(buffStatusRowComponentStart, masterHolder[2], 'buff-icon');


    let buffImg = ""
    let buffImgBoxComponent = ""
    if(data.icon.type == "fa" || data.icon.type == "ra"){
        buffImgComponent = replaceString(spanComponent, masterHolder[1], '');
        buffImg = replaceString(buffImgComponent, masterHolder[2], data.icon.logo+'" style="color:'+data.icon.color+';background:'+data.icon.background+'" title="'+data.name+'"');
    }else{
        buffImg = '<span class="fa-solid fa-ban"></span>';
    }
    let buffImgBox = buffStatusRowComponent+buffImgBoxComponent+buffImg+divComponent['end']+divComponent['end'];

    $('#buff-status-'+id).append(buffImgBox);

}


function mappingEnemyAttack(){
	for (var i = 0; i < monsterBattle.length; i++) {

		if (battleFieldEnemy[i] != battleFieldDefault) {
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

	}
}

function buffCounter(data, type, trigger, status){
	let result = []; 
	for (let i = 0; i < data.length; i++) {
		if(data[i]["type"] == type){
			result.push(buffEffectDetailCounter(data[i]['effect'], trigger, status))
		}
	}
	return result;
}

function buffEffectDetailCounter(data, trigger, status){
	let result =[]; 
	for (let i = 0; i < data.length; i++) {
		if(data[i]["status"] == status && data[i]["trigger"] == trigger){
			result['value'] = data[i]["value"]
			result['denomination'] = data[i]["denomination"]
		}
	}
	return result;
}

function buffReset(){
	console.log(formationParty)
	let index = 0;

	for (let i = 0; i < formationParty.length; i++) {
		index = i+1;
		let id = "-party-"+index;

		let data = formationParty[i]['data']['buff'];
		for (let j = 0; j < data.length; j++) {
			console.log(data[j]['turn']);
			data[j]["turn"] = data[j]["turn"]-1;

			if(data[j]["turn"] == 0){
				id = data[j]["id"]+"-party-"+index;
				$("#"+id).remove();
			}
		}
		data = data.filter(function(elem) {
			return !(elem.turn == 0)
		});
	}
}

function buffRecounter(buff, value){
	let result = 0
	for (let i = 0; i < buff.length; i++) {
		if(buff[i]['denomination'] == '%'){
			let percent = Math.round((buff[i]['value']/100)*value);
			result = value-percent;
		}
	}

	return result;
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


let mappingActionIndex = 0; 
let expTemp = 0;

function mappingActionLoop() {
  setTimeout(function() {
  	let i = mappingActionIndex;
    console.log("============")
    console.log("TURN"+i)

	
	let fighterRow = formationParty[mappingAction[i].partyMember]//JSON.parse(JSON.stringify())
	// console.log("fighterRow.data.status_current.hp T: "+fighterRow.data.status_current.hp)

	let enemyRow = monsterBattle[mappingAction[i].enemy]
	let enemyIndex = mappingAction[i].enemy

	let composeLog = ""
	if (mappingAction[i].type == "attack") {
		// console.log("battleFieldEnemy[mappingAction[i].enemy] :"+battleFieldEnemy[mappingAction[i].enemy])
		// if (battleFieldEnemy[mappingAction[i].enemy] != battleFieldDefault) {
		// 	enemyIndex =  getFirstEnemy("init", mappingAction[i].enemy)
		// 	enemyRow = monsterBattle[enemyIndex]
		// }else{
		// 	enemyRow = monsterBattle[mappingAction[i].enemy]
		// }

		// console.log(enemyRow)
		// console.log(enemyRow.id)

		let skill = "attack_slash"

		if (mappingAction[i].action == "attack") {
			callAnimation("monster-"+enemyIndex, skill, 1)
			// callAnimation("monster-1","attack_slash", 1)
		}
		// console.log("mappingAction[i].damage : "+mappingAction[i].damage)
		enemyRow.data.current.hp = enemyRow.data.current.hp - mappingAction[i].damage
		let hpWidth = (enemyRow.data.current.hp /enemyRow.data.base.hp) *100 
		// console.log("enemyRow.data.current.hp : "+enemyRow.data.current.hp)
		// console.log("enemyRow.data.base.hp : "+enemyRow.data.base.hp)
		// console.log(hpWidth)
		// console.log(enemyRow.id)
		console.log("partyMember TURN : "+mappingAction[i].partyMember)
		mappingAction[i].isExecute = true
		let hpPercent = Math.round(hpWidth)
		if (enemyRow.data.current.hp <= 0) {
			console.log(">>>> KILLED!")
			enemyRow.data.current.hp = 0
			hpWidth = 0
			let slash = eval(skill)
			let animateDuration = slash['duration']*slash['length']
			
			// $(battleFieldEnemy[mappingAction[i].enemy]).addClass('hide')
			expTemp = expTemp+enemyRow.data.base.exp
			let typeParam = mappingAction[i].type
			let enemyParam = enemyIndex
			let enemyId = JSON.parse(JSON.stringify(battleFieldEnemy[enemyParam]));
			battleFieldEnemy[enemyParam] = battleFieldDefault
			// console.log("typeParam : "+typeParam)
			// console.log("enemyParam : "+enemyParam)
			let countEnmeyFellow =  countAliveFellow("enemy")
			let enemyIndexUpdate =  getFirstEnemy("init", enemyParam)
			// mappingAction.filter(elem => elem.enemy == enemyParam && elem.type == "attack").forEach(elem => elem.enemy = enemyIndexUpdate)

			let mappingActionIndexUpdate = mappingAction.findIndex(function(elem) {
			  return elem.enemy == enemyParam && elem.type == "attack" && elem.isExecute == false
			});
			// console.log("mappingActionIndexUpdate : "+mappingActionIndexUpdate)
			// console.log("enemyIndexUpdate : "+enemyIndexUpdate)

			if(mappingActionIndexUpdate >= 0 && countEnmeyFellow != 0){
				
				mappingActionRow['partyMember'] = mappingAction[mappingActionIndexUpdate].partyMember
				mappingActionRow['enemy'] = enemyIndexUpdate
				// console.log(mappingActionRow)
				let damageUpdate = damageRecounter()
				// console.log(damageUpdate)
				mappingAction.filter(elem => elem.enemy == enemyParam && elem.type == "attack"  && elem.isExecute == false).forEach(elem => elem.enemy = enemyIndexUpdate, elem => elem.damage = damageUpdate)
				
			}


			mappingAction = mappingAction.filter(function(elem) {
			  return !(elem.type == "defence" &&  elem.enemy == enemyParam && elem.isExecute == false)
			});
			// console.log(mappingActionRow)
			// console.log("mappingAction dec :")
			// console.log(mappingAction)

			setTimeout(function() {
				$(enemyId).fadeOut(500);
				
			}, animateDuration);
		}

		$("#"+enemyRow.id+"-hp-bar").attr("style","width:"+hpPercent+"%")
		$("."+enemyRow.id+"-hp-value").text(enemyRow.data.current.hp)
		chargeTechniquePoint(mappingAction[i].partyMember,10);
		// console.log("mappingAction :")
		// console.log(mappingAction)

		composeLog = enemyRow.name+" got "+mappingAction[i].damage+" damage by <b>"+fighterRow['name']+"</b> ";
	}else if(mappingAction[i].type == "defence"){


		let partyIdValue = mappingAction[i].partyMember+1;
		let valueBuff = buffCounter(fighterRow['data']['buff'], "buff", "active", "damage resistance");
		console.log("damage current : ")
		console.log(mappingAction[i].damage);
		if(valueBuff.length > 0){
			let damage = buffRecounter(valueBuff, mappingAction[i].damage);
			fighterRow['data']['status_current']['hp'] = fighterRow['data']['status_current']['hp'] - damage;
			console.log("damage : ")
			console.log(damage);
		}else{
			fighterRow['data']['status_current']['hp'] = fighterRow['data']['status_current']['hp'] - mappingAction[i].damage;
			console.log("damage : ")
			console.log(mappingAction[i].damage);
		}
		// console.log("fighterRow.data.status_current.hp B: "+fighterRow['data']['status_current']['hp'])
		mappingAction[i].isExecute = true
		let hpWidth = (fighterRow['data']['status_current']['hp'] /fighterRow['data']['status_build_base']['hp'])*100 ;
		if (fighterRow['data']['status_current']['hp'] <= 0) {
			fighterRow['data']['status_current']['hp'] = 0;
			hpWidth = 0;
		}

		
		// fighterRow['data']['buff']
		// party-1-mp-bar
		// party-1-hp-value
		let hpPercent = Math.round(hpWidth);
		// console.log("fighterRow.data.status_current.hp A: "+fighterRow['data']['status_current']['hp'])

		let tpWidth =(mappingAction[i].damage/fighterRow['data']['status_build_base']['hp'])*100;
		console.log("tpWidth : "+tpWidth)
		let tpPercentAdditional = Math.round(tpWidth);
		fighterRow['data']['status_current']['tp'] = fighterRow['data']['status_current']['tp']+ tpPercentAdditional;
		
		// console.log("hpPercent : "+hpPercent)
		// console.log("tpPercent : "+tpPercentAdditional)

		$("#party-"+partyIdValue+"-hp-bar").attr("style","width:"+hpPercent+"%");
		$(".party-"+partyIdValue+"-hp-value").text(fighterRow['data']['status_current']['hp']);
		$("#party-"+partyIdValue+"-tp-bar").attr("style","width:"+fighterRow['data']['status_current']['tp']+"%");
		$(".party-"+partyIdValue+"-tp-value").text(fighterRow['data']['status_current']['tp']);

		composeLog = fighterRow['name']+" got "+mappingAction[i].damage+" damage by <b>"+enemyRow.name+"</b> ";
		$(".bgBoxImage.active").removeClass("active");
		$(".monster-status.active").removeClass("active");

	}else{

		

		//check not terminate
		if (mappingAction[i].action == "buff") {
			if(mappingAction[i].isDispel == false){
				let buffData = JSON.parse(JSON.stringify(eval(mappingAction[i].buff)));

				fighterRow['data']['buff'].push(buffData);
				let partyIdValue = mappingAction[i].partyMember+1;
				
				initBuff('party-'+partyIdValue,mappingAction[i].buff);
				let valueBuff = buffCounter(fighterRow['data']['buff'], "buff", "passive", "technique point");
				
				chargeTechniquePoint(mappingAction[i].partyMember, valueBuff[0]['value']);
				// callAnimation("monster-"+enemyIndex, skill, 1)
				// callAnimation("monster-1","attack_slash", 1)
				composeLog = "<b>"+fighterRow['name']+"</b>'s defensive stance is activated.";
			}else{
				composeLog = "<b>"+fighterRow['name']+"</b>'s defensive stance is failed to activate.";
			}
		}else if (mappingAction[i].action == "item") {
			useItem(fighterRow, i)
		}
	}
	// let enemyDefence = enemyGet.data.hp-mappingAction



		// handleScroll("logList",interfaceLogListScroll, composeLog)
		$("#logList").append('<li>'+composeLog+'</li>')
		$("#logList").scrollTop($(document).height());
		console.log("============")
    mappingActionIndex++;
    if (mappingActionIndex < mappingAction.length) {
    	mappingActionLoop() 
    }else if(mappingActionIndex == mappingAction.length){
		resetFormationPartyCurrent();
    	turnCounter();
		buffReset();
    	chooseTargetPartyMember =true;
    	callingPartySelector("init",1);
    	mappingAction = [];
    	mappingActionIndex = 0;
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

function monsterRemove(){

}


let actionIndex = 0
function callAnimation(target, asset, j) {
	let data = eval(asset);

    $("."+target+".attack-field").show()
    if (++j <= data['length']) window.setTimeout(callAnimation, data['duration'], target, asset, j);
    actionIndex = actionIndex+1;

    let setIndex = setStringIndex(actionIndex)
    let full_path = main_asset_path+data['path']+data['name_file']+setIndex+"."+data['format'];
    $("."+target+".attack-field").html(imgCompoment);
    $("."+target+".attack-field img").attr('src',full_path);

    if (actionIndex == data['length']) {
        actionIndex = 0;
        $("."+target+".attack-field").hide();
    }
}


function countAliveFellow(type){
	let result = 0
	if (type == "enemy") {
		let enemyAvailable = 0;

		for (var i = 0; i < battleFieldEnemy.length; i++) {
			if (battleFieldEnemy[i] != battleFieldDefault) {
				enemyAvailable=enemyAvailable+1;
			}
		}

		result = enemyAvailable;
	}else if(type == "party"){
		let formationPartyAvailable = 0;

		for (var i = 0; i < formationPartyCurrentConfig.length; i++) {
			if (formationPartyCurrentConfig[i] != battleFieldDefault || formationPartyCurrentConfig[value] != battleFieldUsedDefault) {
				formationPartyAvailable=formationPartyAvailable+1;
			}
		}

		result = formationPartyAvailable;
	}

	return result;

}