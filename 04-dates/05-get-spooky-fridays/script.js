
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13

let d = new Date();
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturay", "Sunday"];
let year, month, day;

(() => {

    // your code here
    document.getElementById("run").addEventListener("click", function(){
        year = Number(document.getElementById("year").value);
        day = 3; // vdd
        date = 13;

        alert(year);
    });
})();
