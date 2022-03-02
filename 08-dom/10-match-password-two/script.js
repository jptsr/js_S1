// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    // your code here

    let btn = document.getElementById("run");
    let input1 = document.getElementById("pass-one");
    let input2 = document.getElementById("pass-two");

    btn.addEventListener("click", () => {
        if(input1.value === input2.value){
            input1.removeAttribute("class", "error");
            input2.removeAttribute("class", "error");
        }else{
            input1.setAttribute("class", "error");
            input2.setAttribute("class", "error");
        }
    });
})();
