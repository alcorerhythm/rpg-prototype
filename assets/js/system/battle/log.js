let logData = [];
let logDataRow = {};

function pushDataLog(param, value){
    if(param == 'push' && value == 'execute'){
        let row = JSON.parse(JSON.stringify(eval(logDataRow)))
        logData.push(row)
        logDataRow = {}
    }else{
        logDataRow[param] = value;
    }
}

function readLog(){
    console.log(logData);
}