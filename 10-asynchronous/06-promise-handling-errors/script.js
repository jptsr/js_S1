// 10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)


(() => {
    // your code here

    document.getElementById('run').addEventListener('click', () => {
        console.clear();
        
        window.lib.getPersons().then((value) => {
            console.log(value);
        }, (err) => {
            console.log(err);
        });
    });
})();
