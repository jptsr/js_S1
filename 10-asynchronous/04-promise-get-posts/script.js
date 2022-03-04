// 10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)


(() => {
    // your code here

    document.getElementById('run').addEventListener('click', () => {
        console.log('btn ok');


        window.lib.getPosts().then((value) => {
            console.log(value);
        });
        /** 
         * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
         * ici la méthode "then" retourne une seule callback fct pour retourner la valeur, il n'y a pas de deuxième callback fct pour retourner
           une erreur.
         * .then renvoie une promesse nvellement générée (peut être utilisée pour le chaînage.
         * 
         * */

        console.log('everything clicked');
    });
})();