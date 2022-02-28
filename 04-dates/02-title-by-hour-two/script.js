
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)

const d = new Date();
let hour, minutes;

(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    hour = d.getHours();
    minutes = d.getMinutes();
    console.log(minutes);
    if(hour > 16 && minutes > 30){
        document.getElementById("target").innerHTML = "Good evening !";
    }else{
        document.getElementById("target").innerHTML = "Hello !";
    }
})();
