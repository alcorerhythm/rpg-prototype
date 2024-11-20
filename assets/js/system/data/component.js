//Component
//
let imgCompoment = "<img id='<!id>' class='<!class>' src='<!value>'>";
let divComponent = {
	"start":"<div id='<!id>' class='<!class>'>",	
	"end":"</div>"
};
let spanComponent = '<span class="<!class>"><!value></span>';


//Monster
let nameMonsterComponent = '<div class="indicator-level justify-content-start half"><b><!value></b></div>';
let levelMonsterComponent = '<div class="indicator-level float-end half"><span id="valueLevel" class="float-end"><b><!value></b></span><span class="float-end">Lv. </span></div>';


let progressBarLabelComponent = '<div class="progress-label"><b><!value></b></div>';
let progressBarBodyComponent = { 
	'start':'<div class="progress progress-indicator" role="progressbar" aria-valuenow="<!currentValue>" aria-valuemin="<!minValue>" aria-valuemax="<!maxValue>">',
	'end':'</div>'
	};
let progressBarValueComponent = {
	'start':'<div id="<!id>" class="progress-bar bg-<!color>" style="width: <!value>%">',	
	'end':'</div>'
};
let progressBarValueViewerComponent = '<span class="<!class>"><!value></span>';

//Skill
let skillButtonComponent = {
	"start":"<button class='btn btn-skill' id='<!id>' onclick='<!onclick>'>",	
	"end":"</button>"
};

//Battle
let selectEnemyComponent ='<div class="select-arrow"><span class="fa-solid fa-angle-down"></span></div>';