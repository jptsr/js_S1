// 10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)


(() => {
    // your code here

    document.getElementById('run').addEventListener('click', () => {
        console.clear();
        call();
    });

    async function call(){
        await window.lib.getPosts().then((articles) => {
            articles.forEach(element => {
                return console.log(element);
            });
        });
    }
})();
