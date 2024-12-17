let masterHolder = ['<!id>','<!value>','<!class>','<!onclick>', '<!currentValue>','<!minValue>','<!maxValue>','<!color>'];
let masterType = ['npc','monster'];
let masterClass = ['skill-icon'];


//default
let battleFieldDefault = "terminate"
let battleFieldUsedDefault = "mapped"


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

//item
let item_herb={
	"id":"item_herb",
	"name":"Herbs",
	"describe":"Herp can be growth in the a lush land or forest.Example: <i>&lt;<b>Area-1</b>&gt;</i>.<br>Herp also highly droped by Grass type Enemy. ",
	"icon":{
		"type":"fa",
		"logo":"fa-solid fa-leaf fa-rotate-45",
		"color":"#88bb88",
	},
	"amount":0,
	"price":{
		"base":10,
	},
	"effect":{
		"target_status":"hp",
		"value":15,
		"denomination":"point",
		"target":"fellow",
		"type":"heal",
	}
}

let item_posion_low={
	"id":"posion",
	"name":"Potion",
	"describe":"a liquid with toxic damage for emeny.",
	"icon":{
		"type":"ra",
		"logo":"fa ra ra-flask",
		"color":"#88bb88",
	},
	"amount":0,
	"price":{
		"base":50,
	},
	"effect":{
		"target_status":"hp",
		"value":10,
		"denomination":"point",
		"target":"enemy",
		"type":"toxic",
	}
}


let item_potion={
	"id":"item_potion",
	"name":"Potion",
	"describe":"a liquid with healing properties.",
	"icon":{
		"type":"fa",
		"logo":"fa-solid fa-vial",
		"color":"#FF4545",
	},
	"amount":0,
	"price":{
		"base":50,
	},
	"effect":{
		"target_status":"hp",
		"value":100,
		"denomination":"point",
		"target":"fellow",
		"type":"heal",
	}
}
let item_high_potion = {
	"id":"item_high_potion",
	"name":"High Potion",
	"icon_type":"fa",
	"icon_logo":"fa-solid fa-leaf",
	"icon_color":"#FF4545",
	"amount":0,
	"price":{
		"base":10,
	},
	"effect":{
		"target_status":"hp",
		"value":150,
		"denomination":"point",
		"target":"fellow",
		"type":"heal",
		"used":""
	}
}

let item_full_potion = {
	"id":"item_full_potion",
	"name":"Full Potion",
	"icon_type":"fa",
	"icon_logo":"fa-solid fa-leaf",
	"icon_color":"#FF4545",
	"amount":0,
	"price":{
		"base":10,
	},
	"effect":{
		"target_status":"hp",
		"value":100,
		"denomination":"%",
		"target":"fellow",
		"type":"heal",
		"used":""
	}
}
let item_potion_mana={
	"id":"item_potion_mana",
	"name":"Magic Potion",
	"icon_type":"fa",
	"icon_logo":"fa-solid fa-leaf",
	"icon_color":"#4F75FF",
	"amount":0,
	"base_price":10,
	"effect":{
		"target_status":"hp",
		"point":40,
		"target":"fellow",
		"type":"heal",
		"used":""
	}
}
let item_water_pure = {
	"id":"item_water_pure",
	"name":"Pure Water",
	"icon_type":"ra",
	"icon_logo":"fa ra ra-round-bottom-flask",
	"icon_color":"#BBE9FF",
	"amount":0,
	"base_price":10,
	"effect":{
		"target_status":"sp",
		"value":15,
		"denomination":"point",
		"target":"fellow",
		"type":"heal",
		"used":""
	}
}


// buff

let buff_defence_default = {
	"id":"buff_defence_default",
	"name":"defence",
	"type":"buff",
	"turn":1,
	"speed":120,
	"icon":{
		"type":"fa",
		"logo":"fa-solid fa-shield",
		"color":"#fff",
		"background":"#fb7b2e",
	},
	"effect":[
		{
			"status":"technique point",
			"target":"self",
			"value":20,
			"denomination":"%",
			"trigger":"passive"
		},
		{
			"status":"damage resistance",
			"target":"self",
			"value":50,
			"denomination":"%",			
			"trigger":"active"
		}
	]
}