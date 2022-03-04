// 10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur


(() => {
    // your code here

    document.getElementById('run').addEventListener('click', () => {
        console.clear();

        window.lib.getPersons((err, pArr) => {
            if(err){
                console.log(err);
            }else{
                pArr.forEach(element => {
                    console.log(element);
                });
            }
        });
    });
})();
