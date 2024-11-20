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
    //window.setTimeout(execute, 500, 1);
}