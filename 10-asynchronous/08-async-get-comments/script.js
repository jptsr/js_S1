// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)


(() => {
    // your code here

    document.getElementById('run').addEventListener('click', () => {
        console.clear();

        callPosts();
        // callComments();
    });

    let callPosts = async () => {
        await window.lib.getPosts().then((articles) => {
            articles.forEach(element => {
                // element.comment = callComments();

                element.comment = window.lib.getComments().then((comments) => {
                    comments.forEach((elem) => {
                        return elem;
                    })
                });

                console.log(element);
            });
        });
    }

    // let callComments = async () => {
    //     await window.lib.getComments().then((comments) => {
    //         comments.forEach(element => {
    //             // return element;
    //             return console.log(element);
    //         });
    //     });
    // }
})();
