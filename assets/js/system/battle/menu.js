  let menuStatus = false;



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
