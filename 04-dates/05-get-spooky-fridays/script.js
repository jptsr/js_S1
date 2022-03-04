
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13

(() => {

    // your code here

    let date, day = 13;
    let input = document.getElementById('year');
    let months = ["January","February", "March", "April", "Mei", "June", "July", "August", "Septembre", "Octobre", "Novembre", "Decembre"];
    
    document.getElementById('run').addEventListener('click', () => {
        console.clear();

        for(let i = 0; i < months.length; i++){
            date = new Date(input.value, i, day);

            if(date.getDay() == 5){
                console.log(months[date.getMonth()]);
            }
        }
    });
})();
