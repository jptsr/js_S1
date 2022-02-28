
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

let add, sub, mult, div;
let opOne, opTwo, asw = 0;

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation

        switch(operation){
            case operation = "addition":
                opOne = document.getElementById("op-one").value;
                opTwo = document.getElementById("op-two").value;
                asw = Number(opOne) + Number(opTwo);
                alert(asw);
                break;
            case operation = "substraction":
                opOne = document.getElementById("op-one").value;
                opTwo = document.getElementById("op-two").value;
                asw = Number(opOne) - Number(opTwo);
                alert(asw);
                break;
            case operation = "multiplication":
                opOne = document.getElementById("op-one").value;
                opTwo = document.getElementById("op-two").value;
                asw = Number(opOne) * Number(opTwo);
                alert(asw);
                break;
            case operation = "division":
                opOne = document.getElementById("op-one").value;
                opTwo = document.getElementById("op-two").value;
                asw = Number(opOne) / Number(opTwo);
                alert(asw);
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
