
// 03-colors/02-change-bcg-two/script.js - 3.2: Bcg 2

let inputColor;

(() => {

    // your code here
    document.getElementById("run").addEventListener("click", function(){
        inputColor = document.getElementById("color").value;
        switch(inputColor){
            case inputColor = "blue":
                document.body.style.backgroundColor = "blue";
                break;
            case inputColor = "green":
                document.body.style.backgroundColor = "green";
                break;
            case inputColor = "yellow":
                document.body.style.backgroundColor = "yellow";
                break;  
            case inputColor = "red":
                document.body.style.backgroundColor = "red";
                break;
            case inputColor = "orange":
                document.body.style.backgroundColor = "orange";
                break;
            case inputColor = "purple":
                document.body.style.backgroundColor = "purple";
                break;    
            case inputColor = "black":
                document.body.style.backgroundColor = "black";
                break;
            case inputColor = "white":
                document.body.style.backgroundColor = "white";
                break;   
            default:
                document.body.style.backgroundColor = "#16232E";
                break;
        }
    });
})();
