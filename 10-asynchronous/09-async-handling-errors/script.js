// 10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)


(() => {
    // your code here

    document.getElementById('run').addEventListener('click', () => {
        console.clear();

        let callPersons = async () => {
            await window.lib.getPersons().then((names) => {
                names.forEach(element => {
                    return console.log(element);
                });
            }, (err) => {
                return console.log(err);
            });
        }

        callPersons();
    });
})();
