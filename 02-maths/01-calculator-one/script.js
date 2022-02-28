
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

let opOne, opTwo, asw = 0;

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        opOne = document.getElementById("op-one").value;
        opTwo = document.getElementById("op-two").value;
        asw = Number(opOne) + Number(opTwo);
        alert(asw);
        // alert(opOne+opTwo);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        opOne = document.getElementById("op-one").value;
        opTwo = document.getElementById("op-two").value;
        asw = parseFloat(opOne) - parseFloat(opTwo);
        alert(asw);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        opOne = document.getElementById("op-one").value;
        opTwo = document.getElementById("op-two").value;
        asw = Number(opOne) * Number(opTwo);
        alert(asw);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        opOne = document.getElementById("op-one").value;
        opTwo = document.getElementById("op-two").value;
        asw = parseFloat(opOne) / parseFloat(opTwo);
        alert(asw);
    });
})();
