
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)

let red, green, blue;

(() => {

    // your code here
    document.getElementById("run").addEventListener("click", function(){

        red = Math.floor(Math.random()*256);
        green = Math.floor(Math.random()*256);
        blue = Math.floor(Math.random()*256);

        document.body.style.backgroundColor = "rgb(" + red+ "," + green+ "," + blue + ")";
    });
})();
