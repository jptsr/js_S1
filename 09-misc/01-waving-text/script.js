// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    // your code here
    
    let txt = document.getElementById('target');
    txt.innerHTML = '';

    let span1 = document.createElement("span");
    span1.style.fontSize = "30px";
    span1.innerHTML = "Woo-hoo!";
    txt.appendChild(span1);

    let span2 = document.createElement("span");
    span2.style.fontSize = "15px";
    span2.innerHTML = " I'm making waves!";
    txt.appendChild(span2);

    let span3 = document.createElement("span");
    span3.style.fontSize = "40px"
    span3.innerHTML = " Wéééé!";
    txt.appendChild(span3);

    let span4 = document.createElement("span");
    span4.style.fontSize = "25px"
    span4.innerHTML = " Oh ...";
    txt.appendChild(span4);

    let span5 = document.createElement("span");
    span5.style.fontSize = "45px"
    span5.innerHTML = " I think I'm having seasickness ...";
    txt.appendChild(span5);
})();
