//import defaultExport from './dictionary.js'
function matchRegExp(stitch){
    stitch = "p5";
    let patt = /^[KP][0-9]$/i;
    return stitch.match(patt);

}

function splitCommas(rowNumber, line){
    let stitches = line.split(",");
    for (let j = 0; j < stitches.length; j++){
        console.log("Stitch " + j + " : " + stitches[j].trim());
        if(matchRegExp(stitches[j])!=null) {
            let splitStitch = stitches[j].split("");
            for (let count = 0; count < splitStitch[1]; count++) {
                console.log(splitStitch[0]);
                createCell("Row"+ rowNumber+1, splitStitch[0]);
            }
        }else{
            createCell("Row"+ rowNumber+1, stitches[j]);

        }
    }
}
function splitLines(){
    let instruction = document.getElementById("textBox").value;
    let lines = instruction.split("\n");
    for (let i = 0; i < lines.length; i++){
        console.log("Line " + i + " : " + lines[i]);
        createRow(i+1);
        splitCommas(i, lines[i]);
    }
}

function deleteChart(){
    let existingChart = document.getElementById("knittingChart");
    while(existingChart!=null && existingChart.hasChildNodes()){
        existingChart.removeChild(existingChart.firstChild);
    }
}

function createRow(rowId){
    let row = document.createElement("TR");
    row.setAttribute("id", "Row" + rowId);
    document.getElementById("knittingChart").appendChild(row);
}

function createCell(rowNumber,stitchValue){
    let cell = document.createElement("TD");
    let cellValue = document.createTextNode(stitchValue);
    cell.appendChild(cellValue);
    document.getElementById(rowNumber).appendChild(cell);
}

function createChart() {
    deleteChart();
    let chart = document.getElementById("knittingChart");
    chart.createCaption().innerHTML = "Knitting Chart";
    splitLines();
}

function autoGrow (oField) {
    if (oField.scrollHeight > oField.clientHeight) {
        oField.style.height = oField.scrollHeight + "px";
    }
}
