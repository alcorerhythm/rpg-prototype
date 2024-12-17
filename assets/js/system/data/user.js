let player = {
	"id":"R3N",
	"name":"Ren",
	"img":"character/profile/Ren.png",
	"level":1,
	"exp":0,
	"data":{
		// "attack":10,
		// "defence":8,
		// "agility":8,
		"base":{ //Buffless & Equipment less
			"hp":30,
			"mp":10,
			"strength" : 10,
			"agility" : 6,
			"vitality" : 5,
			"intelegent" : 4,
			"dexterity" : 5,
			"luck"  : 3
		},
		"status_build_base":{ //Buff || Equipment
			"hp":30,
			"mp":10,
			"strength" : 10,
			"agility" : 6,
			"vitality" : 5,
			"intelegent" : 4,
			"dexterity" : 5,
			"luck"  : 3
		},
		"status_current":{ //mirror of status_build_base
			"hp":10,
			"mp":10,
			"strength" : 10,
			"agility" : 6,
			"vitality" : 5,
			"intelegent" : 4,
			"dexterity" : 5,
			"luck"  : 3,
			"tp":0,
		},
		"equipment":{
			"head":"",
			"hand-left":"",
			"hand-left":"",
			"cloth":"",
			"armor":"",
			"glove":"",
			"shoes":""
		},
		"equipment_extend":[],
		"buff":[],
	}
};


let party = {
	"data":[{
			"id":"1192838",
			"name":"Rochart",
			"img":"character/profile/Rochart.png",
			"level":1,
			"hp":30,
			"mp":10,
			"exp":100,
		},
		{
			"id":"2312838",
			"name":"Emilly",
			"img":"character/profile/Emi.png",
			"level":1,
			"hp":30,
			"mp":10,
			"exp":100,
		}
	]
};


let npc_rochart = {
	"id":"1192838",
	"name":"Rochart",
	"img":"character/profile/Rochart.png",
	"level":1,
	"exp":0,
	"data":{
		// "attack":10,
		// "defence":8,
		// "agility":8,
		"base":{ //Buffless & Equipment less
			"hp":30,
			"mp":10,
			"strength" : 10,
			"agility" : 6,
			"vitality" : 5,
			"intelegent" : 4,
			"dexterity" : 5,
			"luck"  : 3
		},
		"status_build_base":{ //Buff || Equipment
			"hp":30,
			"mp":10,
			"strength" : 10,
			"agility" : 6,
			"vitality" : 5,
			"intelegent" : 4,
			"dexterity" : 5,
			"luck"  : 3
		},
		"status_current":{ //mirror of status_build_base
			"hp":10,
			"mp":10,
			"strength" : 10,
			"agility" : 6,
			"vitality" : 5,
			"intelegent" : 4,
			"dexterity" : 5,
			"luck"  : 3,
			"tp":0,
		},
		"equipment":{
			"head":"",
			"hand-left":"",
			"hand-left":"",
			"cloth":"",
			"armor":"",
			"glove":"",
			"shoes":""
		},
		"equipment_extend":[],
		"buff":[]
	}
}
let npc_emilly = {
	"id":"2312838",
	"name":"Emilly",
	"img":"character/profile/Emi.png",
	"level":1,
	"exp":0,
	"data":{
		// "attack":10,
		// "defence":8,
		// "agility":8,
		"base":{ //Buffless & Equipment less
			"hp":30,
			"mp":10,
			"strength" : 10,
			"agility" : 6,
			"vitality" : 5,
			"intelegent" : 4,
			"dexterity" : 5,
			"luck"  : 3
		},
		"status_build_base":{ //Buff || Equipment
			"hp":30,
			"mp":10,
			"strength" : 10,
			"agility" : 6,
			"vitality" : 5,
			"intelegent" : 4,
			"dexterity" : 5,
			"luck"  : 3
		},
		"status_current":{ //mirror of status_build_base
			"hp":12,
			"mp":10,
			"strength" : 10,
			"agility" : 6,
			"vitality" : 5,
			"intelegent" : 4,
			"dexterity" : 5,
			"luck"  : 3,
			"tp":0,
		},
		"equipment":{
			"head":"",
			"hand-left":"",
			"hand-left":"",
			"cloth":"",
			"armor":"",
			"glove":"",
			"shoes":""
		},
		"equipment_extend":[],
		"buff":[],
	}
}


let formationParty = [player, npc_emilly, npc_rochart]; //, npc_rochart, npc_emilly
let formationPartyCurrentConfig = ["player",  "npc_emilly", "npc_rochart"]; //, npc_rochart, npc_emilly
let formationPartyCurrentConfigAvailable = ["#party-0", "player",  "npc_emilly", "npc_rochart"]; //, npc_rochart, npc_emilly
let npcRecruitableList = ["npc_rochart", "npc_emilly"];


item_herb["amount"]=5
item_potion["amount"]=2
item_posion_low["amount"]=2
let playerInventoryTest = [item_herb, item_potion, item_posion_low];
let playerInventory = JSON.parse(JSON.stringify(playerInventoryTest));