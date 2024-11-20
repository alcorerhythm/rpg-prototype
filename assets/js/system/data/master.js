let masterHolder = ['<!id>','<!value>','<!class>','<!onclick>', '<!currentValue>','<!minValue>','<!maxValue>','<!color>'];
let masterClass = ['skill-icon'];


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