//import defaultExport from './dictionary.js'
let existingChart = document.getElementById("knittingChart");

function matchRegExp(stitch){
    stitch = "p5";
    let patt = /^[KP][0-9]$/i;
    let result = stitch.match(patt);
    if(result!=null) {
        console.log(result);
        let splitStitch = result.toString().split("");
        for(let count = 0; count < splitStitch[1]; count++) {
            console.log(splitStitch[0]);
        }
    }
}

function splitCommas(line){
    let stitches = line.split(",");
    for (let j = 0; j < stitches.length; j++){
        console.log("Stitch " + j + " : " + stitches[j].trim());
    }
}
function splitLines(){
    let instruction = document.getElementById("textBox").value;
    let lines = instruction.split("\n");
    for (let i = 0; i < lines.length; i++){
        console.log("Line " + i + " : " + lines[i]);
        splitCommas(lines[i]);
    }
}
function createCaption(){
    let caption = existingChart.createCaption();
    caption.innerHTML = "Knitting Chart";
}

function deleteCaption(){
    existingChart.deleteCaption();
}

function deleteChart(){
    while(existingChart!=null && existingChart.hasChildNodes()){
        existingChart.removeChild(existingChart.firstChild);
        deleteCaption();
    }
}

function createRow(rowId){
    let row = document.createElement("TR");
    row.setAttribute("id", rowId);
    document.getElementById("knittingChart").appendChild(row);
}

function createCell(rowNumber){
    let cell = document.createElement("TD");
    let cellValue = document.createTextNode("cell");
    cell.appendChild(cellValue);
    document.getElementById(rowNumber).appendChild(cell);
}

function createChart() {
    let chartCreation = document.createElement("TABLE");
    chartCreation.setAttribute("id", "knittingChart");
    chartCreation.setAttribute("align", "center");
    document.body.appendChild(chartCreation);
    createCaption();

    createRow("Row1");
    createCell("Row1");
    createRow("Row2");
    createCell("Row2");
}

function autoGrow (oField) {
    if (oField.scrollHeight > oField.clientHeight) {
        oField.style.height = oField.scrollHeight + "px";
    }
}
