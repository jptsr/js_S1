
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

let age, gender, town, ok;

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Keller programmer');

    // YOUR CODE HERE
    questions(); 
    
})();

function questions(){
    age = prompt("How old are you ?");
    gender = prompt("What is your gender ?");
    town = prompt("In wich time do you live ?");

    alert("Your answers : " + age + ", " + gender + ", " + town + ".");

    ok = prompt("Is your informations ok ?");

    if(ok === "no"){
        questions();
    }
}
