// 10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)


(() => {
    // your code here

    document.getElementById('run').addEventListener('click', () => {
        window.lib.getPosts().then((articles) => {
            for(let i = 0; i < articles.length; i++){

                window.lib.getComments().then((comments) => {
                    comments.forEach(element => {
                        articles[i].comment = element;
                    });
                });

                console.log(articles[i]);
            }
        });
    });
})();
