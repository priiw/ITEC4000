//import defaultExport from './dictionary.js'

let instruction = document.getElementById("textBox");
const table = document.getElementById("tableTest");

function createChart() {
    var chart = document.createElement("TABLE");
    chart.setAttribute("id", "knittingChart");
    document.body.appendChild(chart);

    var row = document.createElement("TR");
    row.setAttribute("id", "rows");
    document.getElementById("knittingChart").appendChild(row);

    var cell = document.createElement("TD");
    var cellValue = document.createTextNode("cell");
    cell.appendChild(cellValue);
    document.getElementById("rows").appendChild(cell);
}
