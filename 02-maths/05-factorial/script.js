
// 02-maths/05-factorial/script.js - 2.5: Factorial

let asw = 1;

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        
        // your code here
        // document.getElementById("number").value = factorial(number);
        inputNb =  Number(document.getElementById("number").value);
        alert(factorial(inputNb));
    });
})();

function factorial(nb){
    for(let i = 1; i < nb + 1; i++){
        asw *= i;
    }
    return asw;
}
