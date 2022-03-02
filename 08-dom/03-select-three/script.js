// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    // your code here
    for(let i = 0; i < 5; i++){
        document.getElementsByClassName("target")[i].innerHTML = "owned";
    }
})();
