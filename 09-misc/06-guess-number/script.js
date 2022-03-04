// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here

    // let p = document.createElement("p");
    // p.setAttribute("id", "comment");
    // let parent = document.querySelector(".explain");
    // parent.append(p);

    let rand_nb = Math.floor(Math.random() * 101);
    console.log(rand_nb);

    let nb = Number(prompt("Guess the number : "));
    console.log(nb);

    if(nb === rand_nb){
        alert("that's it");
    }

    let ask1 = () => {
        nb = Number(prompt("Too high, try again : "));
    
        if(nb < rand_nb){
            ask2();
        }else if(nb > rand_nb){
            ask1();
        }else{
            return alert("that's it");
        }
    }
    
    let ask2 = () => {
        nb = Number(prompt("Too low, try again : "));

        if(nb < rand_nb){
            ask2();
        }else if(nb > rand_nb){
            ask1();
        }else{
            return alert("that's it");
        }
    }

    if(nb < rand_nb){
        ask2();
    }

    if(nb > rand_nb){
        ask1();
    }
})();