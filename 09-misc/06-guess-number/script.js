// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here

    let rand_nb = Math.floor(Math.random() * 101);
    console.log(rand_nb);

    // let p = document.createElement("p");
    // p.setAttribute("id", "comment");
    // let parent = document.querySelector(".explain");
    // parent.append(p);

    let nb = Number(prompt("Guess the number : "));
    console.log(nb);

    // switch(nb){
    //     case nb > rand_nb:
    //         ask1();
    //         break;
    //     case nb < rand_nb:
    //         ask2();
    //         break;
    //     case rand_nb:
    //         alert("that's it");
    //         break;
    // }

    if(nb < rand_nb){
        ask2();
    }

    if(nb > rand_nb){
        ask1();
    }

    if(nb = rand_nb){
        ok();
    }

    function ask1(){
        nb = Number(prompt("Too high, try again : "));

        if(nb < rand_nb){
            ask2();
        }
    
        if(nb > rand_nb){
            ask1();
        }

        if(nb = rand_nb){
            ok()
        }
    }

    function ask2(){
        nb = Number(prompt("Too low, try again : "));

        if(nb < rand_nb){
            ask2();
        }
    
        if(nb > rand_nb){
            ask1();
        }

        if(nb = rand_nb){
            ok();
        }
    }

    function ok(){
        alert("that's it");
    }
})();
