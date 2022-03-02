// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    // your code here
    let txt = document.getElementById('target');
    let p1 = "Woo-hoo!";
    let p2 = "I'm making waves!";
    let p3 = "Wéééé!"
    let p4 = "Oh ...";
    let p5 = "I think I'm having seasickness ...";

    p1.style.fontSize = "16px";
    p2.style.fontSize = "26px";

    txt.innerHTML = `${p1} ${p2}`;
})();
