
// 04-dates/04-locale-date/script.js - 4.4: textual date

const d = new Date();
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturay", "Sunday"];
let day = days[d.getDay()];
let date = d.getDate();
const months = ["January", "February", "March", "April", "Mei", "June", "July", "August", "September", "October", "November", "December"];
let month = months[d.getMonth()];
let year = d.getFullYear();
let hour = d.getHours();
let minutes = d.getMinutes();

(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    document.getElementById("target").innerHTML = day + " " + date + " " + month + " " + year + ", " + hour + "h" + minutes;
})();
