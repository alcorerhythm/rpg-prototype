function generateProgressBarValueViewer(name, id, value, valueBase, type){
    let color = ""
    let idType = ""
    if (name == 'HP') {
        color = 'danger'
        idType = "-hp"
    }else if(name == 'MP'){
        color = 'primary'
        idType = "-mp"
    }else if(name == 'TP'){
        idType = "-tp"
        color = 'warning'
    }else if(name == 'EXP'){
        color = 'success'
    }else{
        console.log("Err: color not found!")
    }

    let progressBarValueViewerClass = replaceString(progressBarValueViewerComponent, masterHolder[2], id+idType+"-value");

    let currentValue = 0
    if(name == 'TP'){
        currentValue = 0
    }else{
        currentValue = value
    }
    let progressBarValueViewer = replaceString(progressBarValueViewerClass, masterHolder[1], currentValue); 

    // let progressBox = "";
    // if (type == masterType[0]) {
    //     progressBox =replaceString(divComponent['start'], masterHolder[2], 'progress-indicator-box')
    // }else if (type == masterType[0]) {
    //     progressBox =replaceString(divComponent['start'], masterHolder[2], 'progress-indicator-box')
    // }else{
    //     console.log("Err: type not found!")
    // }
    
    let progressBox =replaceString(divComponent['start'], masterHolder[2], 'progress-indicator-box');
    let progressBarValueClass = ""
    if (type == masterType[0]) {
        progressBarValueClass = replaceString(progressBarValueComponent['start'], masterHolder[2], "progress-bar-party-member");
    }else if(type == masterType[1]){
        progressBarValueClass = replaceString(progressBarValueComponent['start'], masterHolder[2], "");

    }
    let progressBarValueId = replaceString(progressBarValueClass, masterHolder[0], id+idType+"-bar");
    let progressBarValueColor = replaceString(progressBarValueId, masterHolder[7], color);
    let progressBarValue = ""
    if(name == 'TP'){
        progressBarValue = replaceString(progressBarValueColor, masterHolder[1], "0");
    }else{
        // progressBarValue = replaceString(progressBarValueColor, masterHolder[1], "100");
        // console.log("value : "+value);
        // console.log("valueBase : "+valueBase);
        let currrent = Math.round((value/valueBase)*100);
        // console.log("currrent : "+currrent)
        if(type == masterType[0] && value < valueBase){
            progressBarValue = replaceString(progressBarValueColor, masterHolder[1], currrent);
        }else{
            progressBarValue = replaceString(progressBarValueColor, masterHolder[1], "100");
        }
    }

    // console.log(type)
    let progressBarBodyCurrentClass = "";
    if (type == masterType[0]) {
        progressBarBodyCurrentClass = replaceString(progressBarBodyComponent['start'], masterHolder[2], 'progress-indicator-party-member');
    }else if (type == masterType[1]) {
        progressBarBodyCurrentClass = replaceString(progressBarBodyComponent['start'], masterHolder[2], 'progress-indicator');
    }else{
        console.log("Err: type not found!");
    }
    

    // let progressBarBodyCurrentClass = replaceString(progressBarBodyComponent['start'], masterHolder[2], "progress-indicator")
    let progressBarBodyCurrentValue = replaceString(progressBarBodyCurrentClass, masterHolder[4], value);
    let progressBarBodyMinValue = replaceString(progressBarBodyCurrentValue, masterHolder[5], "0");
    let progressBarBody= replaceString(progressBarBodyMinValue, masterHolder[6], valueBase);

    let progressBarLabelTitleClass = "";
    // console.log(type)
    if (type == masterType[0]) {
        progressBarLabelTitleClass = replaceString(progressBarLabelComponent, masterHolder[2], 'party-member');
    }else if (type == masterType[1]) {
        progressBarLabelTitleClass = replaceString(progressBarLabelComponent, masterHolder[2], "");
    }else{
        console.log("Err: type not found!");
    }
    let progressBarLabelTitleValue = replaceString(progressBarLabelTitleClass, masterHolder[1], name)

    let progressBarLabelValueClass = replaceString(progressBarLabelComponent, masterHolder[2], "party-member right")
    let progressBarLabelValue = replaceString(progressBarLabelValueClass, masterHolder[1], progressBarValueViewer+"/"+valueBase)


    // console.log(progressBarValueViewer+"/"+value)

    let composeProgressBarValue = progressBox+progressBarLabelTitleValue+progressBarBody+progressBarValue+progressBarValueComponent['end']+progressBarBodyComponent['end']+progressBarLabelValue+divComponent['end'];

    return composeProgressBarValue
}

function generateProgressBarValueViewerDetail(name, id, value, valueBase, type){
    let color = ""
    let idType = ""
    let iconLabel =""
    if (name == 'HP') {
        color = 'danger'
        idType = "-hp"
        iconLabel = composeLabel("infoBar", "HP", "", "");
    }else if(name == 'MP'){
        color = 'primary';
        idType = "-mp";
        iconLabel = composeLabel("infoBar", "MP", "", "");
    }else if(name == 'TP'){
        color = 'warning';
        idType = "-tp";
        iconLabel = composeLabel("infoBar", "", "fa", "fa-bolt");
    }else if(name == 'EXP'){
        color = 'success';
        iconLabel = composeLabel("infoBar", "EXP.", "fa", "fa-history");
    }else{
        console.log("Err: color not found!")
    }
	// <div class="progress-indicator-detail-box">
	// 	<div id="<!id>" class="progress-indicator-box">
	// 		<div class="progress expBar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="30">
	// 			<div id="party-1-hp-bar" class="progress-bar bg-success" style="width: 100%">
	// 			</div>
	// 		</div>
	// 	</div>
		// <div class="progress-label valueBarMain valueExpBarMain float-end">
		// 	<span class="party-1-hp-value">30</span>/30
		// </div>
	// </div>


    let progressBarValueViewerClass = replaceString(progressBarValueViewerComponent, masterHolder[2], id+idType+"-value");

    let currentValue = 0
    if(name == 'TP'){
        currentValue = 0
    }else{
        currentValue = value
    }
    let progressBarValueViewer = replaceString(progressBarValueViewerClass, masterHolder[1], currentValue); 

    // let progressBox = "";
    // if (type == masterType[0]) {
    //     progressBox =replaceString(divComponent['start'], masterHolder[2], 'progress-indicator-box')
    // }else if (type == masterType[0]) {
    //     progressBox =replaceString(divComponent['start'], masterHolder[2], 'progress-indicator-box')
    // }else{
    //     console.log("Err: type not found!")
    // }
    
    let progressBox =replaceString(divComponent['start'], masterHolder[2], 'progress-indicator-detail-box');
    let progressBoxDeeper =replaceString(divComponent['start'], masterHolder[2], 'progress-indicator-box');
    let progressBarValueClass = ""
    // if (type == masterType[0]) {
    //     if(name == 'EXP'){
    //         progressBarValueClass = replaceString(progressBarValueComponent['start'], masterHolder[2], "progress-bar-party-member");
    //     }else{
    //         progressBarValueClass = replaceString(progressBarValueComponent['start'], masterHolder[2], "progress-bar-party-member");
    //     }
    // }else if(type == masterType[1]){
        progressBarValueClass = replaceString(progressBarValueComponent['start'], masterHolder[2], "");

    // }
    let progressBarValueId = replaceString(progressBarValueClass, masterHolder[0], id+idType+"-bar");
    let progressBarValueColor = replaceString(progressBarValueId, masterHolder[7], color);
    let progressBarValue = ""
    if(name == 'TP'){
        progressBarValue = replaceString(progressBarValueColor, masterHolder[1], "0");
    }else{
        // progressBarValue = replaceString(progressBarValueColor, masterHolder[1], "100");
        // console.log("value : "+value);
        // console.log("valueBase : "+valueBase);
        let currrent = Math.round((value/valueBase)*100);
        if(type == masterType[0] && value < valueBase){
            progressBarValue = replaceString(progressBarValueColor, masterHolder[1], currrent);
        }else{
            progressBarValue = replaceString(progressBarValueColor, masterHolder[1], "100");
        }
    }

    // console.log(type)
    let progressBarBodyCurrentClass = "";
    if (type == masterType[0]) {
        if(name == 'EXP'){
            progressBarBodyCurrentClass = replaceString(progressBarBodyComponent['start'], masterHolder[2], 'expBar');
        }else{
            progressBarBodyCurrentClass = replaceString(progressBarBodyComponent['start'], masterHolder[2], 'pointBar');
        }        
    // }else if (type == masterType[1]) {
    //     progressBarBodyCurrentClass = replaceString(progressBarBodyComponent['start'], masterHolder[2], 'progress-indicator');
    }else{
        console.log("Err: type not found!");
    }


    // let progressBarBodyCurrentClass = replaceString(progressBarBodyComponent['start'], masterHolder[2], "progress-indicator")
    let progressBarBodyCurrentValue = replaceString(progressBarBodyCurrentClass, masterHolder[4], value);
    let progressBarBodyMinValue = replaceString(progressBarBodyCurrentValue, masterHolder[5], "0");
    let progressBarBody= replaceString(progressBarBodyMinValue, masterHolder[6], valueBase);

    // <div class="progress-label valueBarMain valueExpBarMain float-end">
    //     <span class="party-1-hp-value">30</span>/30
    // </div>
    // <div class="progress-label party-member right">
    //     <b><span class="party-3-hp-value">10</span>/30</b>
    // </div>

    // let progressBarLabelTitleClass = "";
    // console.log(type)
    // if (type == masterType[0]) {
    //     progressBarLabelTitleClass = replaceString(progressBarLabelComponent, masterHolder[2], 'valueBarMain valueExpBarMain float-end');
    // }
    // else if (type == masterType[1]) {
    //     progressBarLabelTitleClass = replaceString(progressBarLabelComponent, masterHolder[2], "");
    // }else{
    //     console.log("Err: type not found!");
    // }

    
    // let test = +divComponent['end']
    let progressBarLabelValueClass =""
    if(name == 'EXP'){
        progressBarLabelValueClass = replaceString(progressBarLabelComponent, masterHolder[2], "valueBarMain valueExpBarMain float-end");
    }else{
        progressBarLabelValueClass = replaceString(progressBarLabelComponent, masterHolder[2], "valueBarMain float-end");
    }
    let progressBarLabelValue = replaceString(progressBarLabelValueClass, masterHolder[1], progressBarValueViewer+"/"+valueBase);

    let composeProgressBarValue = "";
    if(name == 'EXP'){
        composeProgressBarValue = iconLabel+'<!value>'+progressBox+progressBoxDeeper+progressBarBody+progressBarValue+divComponent['end']+progressBarValueComponent['end']+progressBarBodyComponent['end']+progressBarLabelValue+divComponent['end'];
    }else{
        let infoBarDetailComponentClass = replaceString(divComponent['start'], masterHolder[2], 'infoDetail');
        let infoBarDetailComponent = replaceString(infoBarDetailComponentClass, masterHolder[0], '');
    
        composeProgressBarValue = infoBarDetailComponent+progressBox+progressBoxDeeper+iconLabel+progressBarBody+progressBarValue+divComponent['end']+progressBarValueComponent['end']+progressBarBodyComponent['end']+progressBarLabelValue+divComponent['end']+divComponent['end'];
    }

    return composeProgressBarValue;
}
/*<span class="infoBar">HP</span>*/


function composeLevel(id, level){
    let spanComponentId = replaceString(spanComponent, masterHolder[0], "level-"+id);
    let spanComponentClass = replaceString(spanComponentId, masterHolder[2], "level-size");
    let spanComponentValue = replaceString(spanComponentClass, masterHolder[1], "Lv."+level);

    let spanComponentRemoveId = replaceString(spanComponent, masterHolder[0], "");
    let spanComponentClassAdd = replaceString(spanComponentRemoveId, masterHolder[2], "float-end");
    let spanBoxValueComponent= replaceString(spanComponentClassAdd, masterHolder[1], spanComponentValue);

    return spanBoxValueComponent;
}


function composeIconAwesome(type, value){
    let spanComponentRemoveId = replaceString(spanComponent, masterHolder[0], "");
    let spanComponentRemoveValue = replaceString(spanComponentRemoveId, masterHolder[1], "");

    let iconValue = "";
    if(type == 'fa' || type == 'ra'){
        iconValue = type+" "+value;
    }
    let result = replaceString(spanComponentRemoveValue, masterHolder[2], iconValue);
    return result;
}

function composeLabel(className, text, fontId, fontIcon){
    let result = "";
    let icon = composeIconAwesome(fontId, fontIcon);
    let spanComponentRemoveId = replaceString(spanComponent, masterHolder[0], "");
    let spanComponentClass = replaceString(spanComponentRemoveId, masterHolder[2], className);

    if(fontId != "" || fontIcon != "" ){
        result = replaceString(spanComponentClass, masterHolder[1], icon+" "+text);
    }else{
        result = replaceString(spanComponentClass, masterHolder[1], text);
    }
    return result;
}

function composeActiveTitle(className, text, fontId, fontIcon){
    let result = "";
    let icon = composeIconAwesome(fontId, fontIcon);
    let spanComponentRemoveId = replaceString(spanComponent, masterHolder[0], "");
    let spanComponentClass = replaceString(spanComponentRemoveId, masterHolder[2], className);

    if(fontId != "" || fontIcon != "" ){
        result = replaceString(spanComponentClass, masterHolder[1], icon+" "+text);
    }else{
        result = replaceString(spanComponentClass, masterHolder[1], text);
    }
    return result;
}
function composeActiveClass(id,className, classLevel, fontId, fontIcon){
    let icon = composeIconAwesome(fontId, fontIcon);
    let spanLevelComponentId = replaceString(spanComponent, masterHolder[0], "class-level-"+id);
    let spanLevelComponentClass = replaceString(spanLevelComponentId, masterHolder[2], "level-size");
    let spanLevelComponentValue = replaceString(spanLevelComponentClass, masterHolder[1], "Lv."+classLevel);


    let spanBoxComponentRemoveId = replaceString(spanComponent, masterHolder[0], "");
    let spanBoxComponentClassAdd = replaceString(spanBoxComponentRemoveId, masterHolder[2], "infoBar");
    let spanBoxValueComponent= replaceString(spanBoxComponentClassAdd, masterHolder[1], icon+className+" | Lv."+spanLevelComponentValue);

    let spanRightComponentRemoveId = replaceString(spanComponent, masterHolder[0], "");
    let spanRightComponentClass = replaceString(spanRightComponentRemoveId, masterHolder[2], "float-end");
    let spanRightComponentValue= replaceString(spanRightComponentClass,  masterHolder[1], spanBoxValueComponent);

    return spanRightComponentValue;
}