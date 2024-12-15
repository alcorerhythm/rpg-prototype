let chooseInvenotyItem = false;
let selectedItem = ""
function loadInventory(){
    chooseInvenotyItem = true
    $("#inventoryPanel").show();
    callInventoryList();
}

function callInventoryList(){
    console.log("openInventory!")
    let item = ""

    for (var i = 0; i < playerInventory.length; i++){
        let itemImgBoxComponent = replaceString(divComponent['start'], masterHolder[2], 'item-img-preview-row float-start');

        let itemImg = ""
        if(playerInventory[i].icon.type == "fa" || playerInventory[i].icon.type == "ra"){
            itemImgComponent = replaceString(spanComponent, masterHolder[1], '');
            itemImg = replaceString(itemImgComponent, masterHolder[2], playerInventory[i].icon.logo+' img-font-item-preview-row" style="color:'+playerInventory[i].icon.color+'"');
        }else{
            itemImg = '<span class="fa-solid fa-ban img-font-item-preview-row"></span>';
        }
        let itemImgBox = itemImgBoxComponent+itemImg+divComponent['end']


        let itemAmountComponentStart = replaceString(divComponent['start'], masterHolder[0], playerInventory[i].id+'_amount');
        let itemAmountComponent = replaceString(itemAmountComponentStart, masterHolder[2], 'item-position float-end');
        let itemAmount = itemAmountComponent+playerInventory[i].amount+divComponent['end'];
        
        let itemNameComponentStart = replaceString(spanComponent, masterHolder[0], 'name_item');
        let itemNameComponent = replaceString(itemNameComponentStart, masterHolder[2], 'item-position');
        let itemName = replaceString(itemNameComponent, masterHolder[1], playerInventory[i].name);
        
        let itemRowComponentStart = replaceString(liComponent['start'], masterHolder[0], playerInventory[i].id);
        let itemRowComponent = "";
        console.log(i)
        if(i == 0){
            selectedItem = playerInventory[i].id
            itemRowComponent = replaceString(itemRowComponentStart, masterHolder[2], 'item-row active');
        }else{
            itemRowComponent = replaceString(itemRowComponentStart, masterHolder[2], 'item-row');
        }
        
        let itemRow = itemRowComponent+itemImgBox+itemName+itemAmount+liComponent['end'];
        item = item+itemRow;
        
    }
    $("#item-list").html(item);
}

function generateDetail(id){

    let inventoryIndex = playerInventory.findIndex(function(elem) {
        return elem.id == id
    });
    let data = playerInventory[inventoryIndex]


    let itemDetailBoxComponentStart = replaceString(divComponent['start'], masterHolder[2], 'detail item-detail panel-style');
    let itemTitle = replaceString(h5Component['start'], masterHolder[2], 'item-title-preview')+data.name+h5Component['end'];

    
    
    let itemDetailImgBoxComponent = replaceString(divComponent['start'], masterHolder[2], 'item-img-preview');
    let itemImg = ""
    if(data.icon.type == "fa" || data.icon.type == "ra"){
        itemImgComponent = replaceString(spanComponent, masterHolder[1], '');
        itemImg = replaceString(itemImgComponent, masterHolder[2], data.icon.logo+' img-font-item" style="color:'+data.icon.color+'"');
    }else{
        itemImg = '<span class="fa-solid fa-ban img-font-item"></span>';
    }
    let itemImgBox = itemDetailImgBoxComponent+itemImg+divComponent['end'];


    let itemDetailDescribeBoxComponentStart = replaceString(divComponent['start'], masterHolder[2], 'item-detail-text');
    // let itemDetailDescribeBoxComponentStart = replaceString(divComponent['start'], masterHolder[2], 'item-detail-text');
    
    
    let itemDetailTextComponentStart = replaceString(textComponent[2], masterHolder[1], textComponent[1]);
    let subTitleInfo = replaceString(itemDetailTextComponentStart, masterHolder[1], "Info");
    let subTitleEffect = replaceString(itemDetailTextComponentStart, masterHolder[1], "Effect");
    let describeInfo = replaceString(textComponent[0], masterHolder[1], data.describe);

    data.effect.target_status
    let effectInfo = liComponent['start']+data.effect.target_status+" : "+data.effect.value+data.effect.denomination+" ("+data.effect.type+" "+data.effect.target+")"+liComponent['end'];
    let detailText = itemDetailDescribeBoxComponentStart+subTitleInfo+describeInfo+subTitleEffect+ulComponent['start']+effectInfo+ulComponent['end']+divComponent['start'];
    
    
    let detailInfo = itemDetailBoxComponentStart+itemTitle+itemImgBox+detailText+divComponent['start'];



// {/* <div class="">
//     <h5 class="item-title-preview">Herp</h5>
//     <div class="detail "></div>
//     <div class="item-img-preview">
//         <i class="fa-solid fa-leaf img-font-item"></i>
//     </div>
//     <div class="item-detail-text">
//         <i><b>Info</b></i>
//         <p>
//             Herp can be growth in the a lush land or forest.Example: <i>&lt;<b>Area-1</b>&gt;</i>.<br>
//             Herp also highly droped by Grass type Enemy. 
//         </p>
        
//         <i><b>Effect</b></i>
//         <ul>
//             <li>HP : + 10 point</li>
//         </ul>
        
//     </div>
// </div> */}

// {/* <div id="<!id>" class="detail item-detail panel-style">
//     <h5 class="item-title-preview">
//         <div id="<!id>" class="item-img-preview">
//             <span id="<!id>" class="fa-solid fa-leaf fa-rotate-45 img-font-item" style="color:#88bb88" "=""></span>
//             </div>
//             <div id="<!id>" class="item-detail-text">
//                 <b><i>Info</i></b>
//                 <p>Herp can be growth in the a lush land or forest.Example: <i>&lt;<b>Area-1</b>&gt;</i>.<br>Herp also highly droped by Grass type Enemy. </p>
//                 <b><i>Effect</i></b>
//                 <ul>
//                     <li id="<!id>" class="<!class>">hp : 15(heal fellows)</li>
//                     </ul><div id="<!id>" class="<!class>"></div></div></h5>
//                     </div> */}

    $("#itemDetail").html();
    $("#itemDetail").html(detailInfo);

}


function switchItem(id){
    $("li#"+selectedItem).removeClass('active');
    $("li#"+id).addClass('active');
    generateDetail(id)
    selectedItem = id    
}

function useItem(){
    let id = $(".item-row.active").attr('id');
    let inventoryIndex = playerInventory.findIndex(function(elem) {
        return elem.id == id
    });
}


$(document).on('keydown', function(e) {
    let id = $(".item-row.active").attr('id');
    let inventoryIndex = playerInventory.findIndex(function(elem) {
        return elem.id == id
    });

	let index = 0;
	if (chooseInvenotyItem == true) {
        
		switch (e.keyCode) {
        case 38:
        	index = inventoryIndex-1;
        	if (index <= 0) {
        		index = 0;
        	}
            switchItem(playerInventory[index].id)
            break;
        case 40:
            index = inventoryIndex+1;
        	if (index >= playerInventory.length) {
        		index = inventoryIndex;
        	}
            switchItem(playerInventory[index].id)
            break;
    	}
	}
});