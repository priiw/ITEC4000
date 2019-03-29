//import defaultExport from './dictionary.js'


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

function createRow(rowId){
    var row = document.createElement("TR");
    row.setAttribute("id", rowId);
    document.getElementById("knittingChart").appendChild(row);
}

function createCell(rowNumber){
    var cell = document.createElement("TD");
    var cellValue = document.createTextNode("cell");
    cell.appendChild(cellValue);
    document.getElementById(rowNumber).appendChild(cell);
}

function createChart() {
    var chart = document.createElement("TABLE");
    chart.setAttribute("id", "knittingChart");
    document.body.appendChild(chart);

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
