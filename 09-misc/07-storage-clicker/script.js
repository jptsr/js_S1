// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here
    let counter = 0;
    let btn = document.getElementById('increment');
    let p = document.getElementById('target');

    p.innerHTML = localStorage.getItem("counter");
    // counter = localStorage.getItem("counter");

    btn.addEventListener('click', () => {
        counter++;
        p.innerHTML = counter;
        localStorage.setItem("counter", counter);
    });
})();
