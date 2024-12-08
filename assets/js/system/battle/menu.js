let menuStatus = false;
let menuBattleAccess = false;
let menuActionAccess = false;
let selectedAction = 0;


function loadPlayerFormation(){
  // console.log("here!");
  for (var i = 0; i < formationParty.length; i++) {
    // console.log(formationParty[i]);
    constructPartyMember(i, formationParty[i]) 

  }
}

function menu() {
  if (menuStatus == false) {
    menuStatus = true
    $(".menu-action div.action, div.menu-light").addClass('active');
    $("menu li").addClass('hide');

  }else if(menuStatus == true){
    menuStatus = false
    $(".menu-action div.action, div.menu-light").removeClass('active');
    $("menu li").removeClass('hide');
  }
}

function loadSkill() {
  console.log("call Skill")
}

// function call(argument) {
//   // body...
// }

let menuDataList = ['item', 'attack', 'skill', 'magic', 'defence'];

function menuSwitch(value) {
  let idCurrent = menuDataList[selectedAction];
  let id = menuDataList[value];  
  console.log(id);
  $("div.action."+idCurrent+".active").removeClass('selected');
  $("div.action."+id+".active").addClass('selected');
  selectedAction = value
  
}

// function menuActionSelector(value){
//     $(battleFieldPartyMember[selectedPartyMember]+" div div.arrow").addClass("hide");
//     $(battleFieldPartyMember[value]+" div div.arrow").removeClass("hide");
//     $(battleFieldPartyMember[selectedPartyMember]+" div.bgBoxImage").removeClass("active");
//     $(battleFieldPartyMember[value]+" div.bgBoxImage").addClass("active");
//     selectedPartyMember = value;
// }

$(document).on('keydown', function(e) {
  let maxAction = menuDataList.length-1;
  let value = 0;
  if (menuActionAccess == true) {
    switch (e.keyCode) {
        case 39:
          value = selectedAction-1;
          if (value < 0) {
            value = maxAction;
          }
          menuSwitch(value)
          break;
        // case 38:
        //     console.log('Up Key pressed!');
        //     break;
        case 37:
          value = selectedAction+1;
          if (value > maxAction) {
            value = 0;
          }
          menuSwitch(value)
          break;
        // case 40:
        //     console.log('Down Key pressed!');
        //     break;
      }
  }
});