
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)

const d = new Date();
let hour;

(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    hour = d.getHours();
    if(hour < 18){
        document.getElementById("target").innerHTML = "Hello !";
    }else{
        document.getElementById("target").innerHTML = "Good evening !";
    }
})();
