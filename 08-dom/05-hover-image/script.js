// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    // your code here
    let imgTag = document.body.childNodes[1].childNodes[3].childNodes[3].childNodes[1].childNodes[1];

    imgTag.addEventListener("mouseover", () => {
        imgTag.setAttribute("src", "../../_shared/img/kiss-wink-heart.svg");
    });

    imgTag.addEventListener("mouseleave", () => {
        imgTag.setAttribute("src", "../../_shared/img/kiss.svg");
    });
})();
