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

        switchItem
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
        item = item+itemRow
        
    }
    $("#item-list").html(item)
}

function switchItem(id){
    $("li#"+selectedItem).removeClass('active');
    $("li#"+id).addClass('active');
    selectedItem = id    
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