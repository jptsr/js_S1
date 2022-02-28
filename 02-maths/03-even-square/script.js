
// 02-maths/03-even-square/script.js - 2.3: squares and pairs

let asw = [];

(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        for(let i = 0; i < 21; i++){
            asw[i] = ((i+1) * (i+1));
        }
        alert(asw);
    });

})();
