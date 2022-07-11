// Get Variables from html
    let calcBtn = document.getElementById("calcButton");
    let totalVal = document.getElementById("resultAns");
    let abVal = document.getElementById("abTot");
    let acVal = document.getElementById("acTot");
    let bcVal = document.getElementById("bcTot");

// Add Event Listener When Calc Btn Clicked
    calcBtn.addEventListener("click", calcBtnClicked);
function calcBtnClicked (){

//  Input and Getting variables when button clicked
    let x1 = +document.getElementById("xOne").value;
    let x2 = +document.getElementById("xTwo").value;
    let x3 = +document.getElementById("xThree").value;
    let y1 = +document.getElementById("yOne").value;
    let y2 = +document.getElementById("yTwo").value;
    let y3 = +document.getElementById("yThree").value;

// Process and Output
    abVal.innerHTML = dist(x1, y1, x2, y2);
    acVal.innerHTML = dist(x1, y1, x3, y3);
    bcVal.innerHTML = dist(x2, y2, x3, y3);
    totalVal.innerHTML = ((dist(x1, y1, x2, y2)) + dist(x1, y1, x3, y3) + dist(x2, y2, x3, y3))
}

// Process
function dist(x1, y1, x2, y2) {
    return Math.sqrt((y2 - y1) ** 2 + (x2 - x1) ** 2);
}