
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age

let day, month, year;

(() => {

    // your code here
    document.getElementById("run").addEventListener("click", function(){
        day = Number(document.getElementById("dob-day").value);
        month = Number(document.getElementById("dob-month").value);
        year = Number(document.getElementById("dob-year").value);

        switch(month){
            case 1:
                alert(day + " January " + year);
                break;
            case 2:
                alert(day + " February " + year);
                break;
            case 3:
                alert(day + " March " + year);
                break;
            case 4:
                alert(day + " April " + year);
                break;
            case 5:
                alert(day + " Mei " + year);
                break;
            case 6:
                alert(day + " June " + year);
                break;
            case 7:
                alert(day + " July " + year);
                break;
            case 8:
                alert(day + " August " + year);
                break;
            case 9:
                alert(day + " September " + year);
                break;
            case 10:
                alert(day + " October " + year);
                break;
            case 11:
                alert(day + " November " + year);
                break;
            case 12:
                alert(day + " Décember " + year);
                break;
        }
    });
})();
