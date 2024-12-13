//Component
//
let imgCompoment = "<img id='<!id>' class='<!class>' src='<!value>'>";
let divComponent = {
	"start":"<div id='<!id>' class='<!class>'>",	
	"end":"</div>"
};
let spanComponent = '<span id="<!id>" class="<!class>"><!value></span>';
let ulComponent = {'start':'<ul>','end':'</ul>'};
let liComponent = {'start':'<li id="<!id>" class="<!class>">','end':'</li>'};

let alertComponent = 
		`<div class="toast align-items-center text-white bg-<!color> border-0 " role="alert" aria-live="assertive" aria-atomic="true">
			<div class="d-flex">
			    <div class="toast-body">
			      <!value>
			    </div>
			    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
			</div>
		</div>`;


//Monster
let nameMonsterComponent = '<div class="indicator-level justify-content-start half"><b><!value></b></div>';
let levelMonsterComponent = '<div class="indicator-level float-end half"><span id="valueLevel" class="float-end"><b><!value></b></span><span class="float-end">Lv. </span></div>';


let progressBarLabelComponent = '<div class="progress-label <!class>"><b><!value></b></div>';
let progressBarBodyComponent = { 
	'start':'<div class="progress <!class>" role="progressbar" aria-valuenow="<!currentValue>" aria-valuemin="<!minValue>" aria-valuemax="<!maxValue>">',
	'end':'</div>'
};
let progressBarValueComponent = {
	'start':'<div id="<!id>" class="progress-bar bg-<!color> <!class>" style="width: <!value>%">',	
	'end':'</div>'
};
let progressBarValueViewerComponent = '<span class="<!class>"><!value></span>';

//Skill
let skillButtonComponent = {
	"start":"<button class='btn btn-skill' id='<!id>' onclick='<!onclick>'>",	
	"end":"</button>"
};

//Battle
let selectEnemyComponent ='<div class="select-arrow"><span class="fa-solid fa-angle-down fa-bounce"></span></div>';
let selectFighterComponent ='<div class="select-arrow-party-member"><span class="fa-solid fa-angle-down fa-rotate-90  fa-bounce"></span></div>';
let selectFighterRightComponent =
    `<div id="<!id>" class="select-arrow-party-member">
    	<div class="arrow hide">
	        <span></span>
	        <span></span>
	        <span></span>
        </div>
    </div>`;
let selectEnemyDownComponent =
    `<div id="<!id>" class="select-arrow">
    	<div class="arrow down hide">
	        <span></span>
	        <span></span>
	        <span></span>
        </div>
    </div>`;