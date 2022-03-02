// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here

    let btn = document.getElementById("run");
    let input1 = document.getElementById("pass-one");
    let input2 = document.getElementById("pass-two");

    btn.addEventListener("click", () => {
        if(input1.value === input2.value){
            input1.style.borderColor = "green";
            input2.style.borderColor = "green";
        }else{
            input1.style.borderColor = "red";
            input2.style.borderColor = "red";
        }
    });
})();
