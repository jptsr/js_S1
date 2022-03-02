// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    // your code here

    let value = document.getElementById("source").getAttribute("data-image");
    // document.getElementById("source").setAttribute("img-src", "https://i.pinimg.com/564x/fd/e9/68/fde968b02563c0361dad61048347340c.jpg");
    // document.getElementById("source").removeAttribute("data-image");
    console.log(value);

    let img = document.createElement("img");
    img.src = "http://www.randomkittengenerator.com/cats/rotator.php"
    document.getElementById("target").appendChild(img);
    document.getElementById("source").remove();
})();
