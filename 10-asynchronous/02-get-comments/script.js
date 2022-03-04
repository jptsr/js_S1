// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


(() => {
    // your code here
    
    // document.getElementById('run').addEventListener('click', () => {

    //     window.lib.getPosts((pError, pArr) => {
    //         console.clear();
    //             pArr(() => {console.log("bonjour");});

    //             // window.lib.getComments((err, comments) => {
    //             //     comments.forEach(element => {
    //             //         console.log(element);
    //             //     });
    //             // });
            
            
    //     });

    // });

    // document.getElementById('run').addEventListener('click', () => {
    //     console.clear();

    //     window.lib.getPosts((err, article) => {
    //         // article.forEach(element => {
    //         //     element.id;
    //         //     console.log(element.id);
    //         // });

    //         for(let i = 0; i < article.length; i++){
    //             window.lib.getComments((err1, comments) => {
    //                 console.log(comments);
    //             });
    //         }
    //     });
    // });

    document.getElementById('run').addEventListener('click', () => {
        console.clear();

        window.lib.getPosts((pError, pArr) => {

            for(let i = 0; i < pArr.length; i++){
                //console.log(pArr[i]);
                // let comment = pArr[i].comments = "5565";
                // console.log(comment);
                // console.log(pArr[i]);

                window.lib.getComments( '', (err2, comments) => {
                    comments.forEach(element => {
                        console.log(element);
                        pArr[i].comment = element;
                    });
                });

                console.log(pArr[i]);
            }  
        });

        // window.lib.getComments( '', (err2, comments) => {
        //     comments.forEach(element => {
        //         console.log(element);
        //     });
        // });
    });    
})();
