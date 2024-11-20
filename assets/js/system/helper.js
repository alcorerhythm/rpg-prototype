function getlength(number) {
	return number.toString().length;
}

function setStringIndex(value){
	let characterLength = getlength(value)
	if (characterLength < 10) {
		return "00"+value.toString()
	}else if(characterLength < 100){
		return "0"+value.toString()
	}else{
		console.log("Err: setStringIndex")
	}
}

function replaceString(text, param, value){
	let result = text.replace(param, value);
	return result;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}