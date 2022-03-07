// 11-fetch/01-list-to-console/script.js - 11.1: liste vers console


(() => {
    // your code here

    const btn = document.getElementById('run');

    btn.addEventListener('click', () => {
        fetch('http://localhost:3000/heroes')
            .then(res => res.json())    // promesse 1 qui passe les données sous format json
            .then(data => console.log(data))    // promesse 2 qui renvoie le fichier json dans la console
    });
})();
