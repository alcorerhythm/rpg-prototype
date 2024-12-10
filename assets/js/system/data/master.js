let masterHolder = ['<!id>','<!value>','<!class>','<!onclick>', '<!currentValue>','<!minValue>','<!maxValue>','<!color>'];
let masterType = ['npc','monster'];
let masterClass = ['skill-icon'];


//default
let battleFieldDefault = "terminate"


//area
const area_1 ={
	"name":"",
	"limitLevelMin":1,
	"limitLevelMax":8

}

const monster_attr ={
	"growth_exp":0.2
}

//monster

const monster_naming_index = ["A","B","C","D","E","F"]
const monster_slime = {
	"path":"monster/slime/",
	"name":"Slime",
	"id":"",
	"idle":{
		"path":"idle/",
		"format":".svg",
		"length":3
	},
	"width":420,
	"height":360,
	"data":{
		"current":{
			"hp":10,
			"mp":10,
			"attack":8,
			"defence":2,
			"agility":3
		},
		"base":{
			"level":1,
			"exp":5,
			"growth":2,
			"extra":1,

			"hp":10,
			"mp":10,
			"attack":8,
			"defence":2,
			"agility":3			
		}
	}
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


//basic_attack
let attack_slash = {
	"path":"attack/slash/sprite/",
	"name":"Slash",
	"name_file":"slash_",
	// "icon":"skill/punch_single/icon.svg",
	"format":"svg",
	"length":9,
	"damage":0,
	"duration":100
}



//skill
let skill_punch_single = {
	"path":"skill/punch_single/sprite/",
	"name":"Punch",
	"name_file":"punch_",
	"icon":"skill/punch_single/icon.svg",
	"format":"svg",
	"length":6,
	"damage":5,
};
let skill_punch_impact = {
	"path":"skill/punch_impact/sprite/",
	"name":"Impact",
	"name_file":"punch_",
	"icon":"skill/punch_impact/icon.svg",
	"format":"svg",
	"length":7,
	"damage":20,
};