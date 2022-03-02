// 08-dom/02-select-two/script.js - 8.2: select by css selector


(() => {

    // your code here
    let a = document.body.childNodes[1].childNodes[3].childNodes[3].childNodes[1];
    a.innerHTML = "owned";
    // a.textContent = "OWNED";
    console.log(a);
})();
