let skill_punch_impact_index = 0
// let selected = 1
let chooseTargetSkill = false;
let selectedSkill = "";

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

function callingSkillSelector(value){
    console.log("value :"+value);
    $('ul#skillList li.skill-item.active').removeClass("active");
    $('ul#skillList li#'+value+'.skill-item').addClass("active");
    selectedSkill = value;
}

function loadSkill() {
    console.log("Load Skill!");
    let id = mappingActionRow['partyMember'];
    let fighterRow = formationParty[id];
    let data = fighterRow["data"]["skill_holder"];
    let skillButton ="";
    let selectedSkill = "";
    for (var i =0; i < data.length; i++) {
        if (i == 0){
            selectedSkill = data[i]["id"];
        }
        
        // let data = eval(idSkill);

        // console.log(skillConfig["data"][i])
        // let skillButtonComponentStartI= replaceString(skillButtonComponent['start'], masterHolder[0], skillConfig["data"][i])
        let skillRowStart= replaceString(liComponent['start'], masterHolder[0], data[i]["id"])
        let skillRow= replaceString(skillRowStart, masterHolder[2], "skill-item")
        
        //masterHolder
        // if (skillConfig["data"][i] == "skill_punch_impact") {
        //     skillValue = eval(skillConfig["data"][0]);
        // }else if (skillConfig["data"][i] == "skill_punch_single") {
        //     skillValue = eval(skillConfig["data"][1]);
        // }

        // let skillButtonComponentStart= replaceString(skillButtonComponentStartI, masterHolder[3], "activation(&#39;"+data[i]['name']+"&#39;,&#39;"+skillConfig["data"][i]+"&#39;)");
        let skillIconClass= replaceString(imgCompoment, masterHolder[2], masterClass[0]);
        let skillIcon= replaceString(skillIconClass, masterHolder[1], main_asset_path+data[i]['assets']['icon']);
        skillButton = skillButton+skillRow+skillIcon+data[i]['name']+liComponent['end']; //skillButtonComponent['end']+
        

    }
    $('#skillList').html(skillButton);
    $('#skillPanelBattle').fadeIn();
    $('ul#skillList li#'+selectedSkill+'.skill-item').addClass('active');
}


$(document).on('keydown', function(e) {
	let value = 0;
	if (chooseTargetSkill == true) {
        let id = $("li.skill-item.active").attr('id');
        let idPlayer = mappingActionRow['partyMember'];
        let fighterRow = formationParty[idPlayer];
        let data = fighterRow["data"]["skill_holder"];
    
        let indexSkill = data.findIndex(function(elem) {
            return elem.id == id
        });
		switch (e.keyCode) {
        case 38:           
        	value = indexSkill-1;
        	if (value < 0) {
        		value = data.length-1;
        	}
            callingSkillSelector(data[value]['id']);
            break;
        case 40:
            value = indexSkill+1;
        	if (value > data.length-1) {
        		value = 0;
        	}
            callingSkillSelector(data[value]['id']);
            break;
    	}
	}
});