//import defaultExport from './dictionary.js'

let instruction = document.getElementById("textBox").value;
const firstRow = table.rows[0];
const table = document.getElementById("tableTest");
let currentRowNumber = 0; 

// when detected input, update table, add cell at the end of table row - ignore spaces and commas
function addRowTextArea(){
    alert("it's running");
    // when detect "enter" in textarea, add a row
    if(event.keyCode == 13){
// create a row if textfield not empty
    let newRow = table.insertRow(0);
    let newCell = newRow.insertCell(0);
    newCell.innerHTML = "new cell 1";
    }
}

function addRowText(){
if(instruction.value !== ""){
        let newRow = table.insertRow(currentRowNumber);
        let inputVal = document.getElementById("Row1").value;
        
    }
    
    }


}
function coordinate(x){
    let currentCell = x.cellIndex;
    let currentRow  = x.rowIndex;
    let totalRow = table.rows.length; 
    alert(currentCell +"/" + totalRow);
}

function scrape(){ 
    try{alert("wee");}
    catch(err){document.getElementById("coord").innerHTML=err.message;}
    
}

