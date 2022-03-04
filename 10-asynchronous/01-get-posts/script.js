// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles


(() => {
    // your code here

    /*
    !!! getPosts est déjà "défini / paramétré" !!!
    On renomme les paramètres cô on veut. Leur manière de fctionner est déjà définie avec la fct

    window.lib.getPosts((pError, pArr) => {
        // pError "retourne" null
        // pArr "retourne" Arr. ... 
        voir shared/lib/callback.js 
    });
    */

    document.getElementById('run').addEventListener('click', () => {

        window.lib.getPosts((pError, pArr) => {
            console.clear();

            pArr.forEach(element => {
                console.log(element);
            });            
        });

    });

})();
