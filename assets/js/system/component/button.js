function composeButtonPartyMemberDetailAction(id){
    let result = "";
    for (let i = 0; i < partyMemberDetailAction.length; i++) {
        let composeClassId = "party-member-button-"+id+"-"+partyMemberDetailAction[i];
        let composeClassName = partyMemberDetailAction[i].toLowerCase()+"-button";
        
        let button = composeButton("span", composeClassId, "", partyMemberDetailAction[i]);
        let buttonFinal = composeButton('a', "", composeClassName, button);
        
        result = result+buttonFinal;
    }
    
    return result;
}


function composeButton(component, idName, className, value){
    let componentId = "";
    if(component == "span"){
        if(idName != ""){
            componentId = replaceString(spanComponent, masterHolder[0], idName);
        }else{
            componentId = replaceString(spanComponent, masterHolder[0], "");
        }
    }else if(component == "button"){
        if(idName != ""){
            componentId = replaceString(buttonComponent, masterHolder[0], idName);
        }else{
            componentId = replaceString(buttonComponent, masterHolder[0], "");
        }
    }else if(component == "a"){
        if(idName != ""){
            componentId = replaceString(aComponent, masterHolder[0], idName);
        }else{
            componentId = replaceString(aComponent, masterHolder[0], "");
        }
    }
    let componentClass = "";
    if(className != ""){
        componentClass = replaceString(componentId, masterHolder[2], className);
    }else{
        componentClass = replaceString(componentId, masterHolder[2], "");
    }
    let result = "";
    if(value == ""){
        result = replaceString(componentClass, masterHolder[1], "<!value>");
    }else{
        result = replaceString(componentClass, masterHolder[1], value);
    }

    return result ;
}