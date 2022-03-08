// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


(() => {
    // your code here

    document.getElementById('run').addEventListener('click', () => {
        console.clear();

        window.lib.getPosts((pError, pArr) => {
            if(pError != null){
                return console.log('ERROR1');
            }else{
                pArr.forEach(el => {
                    window.lib.getComments(el.id, (err2, comments) => {
                        if(err2 != null){
                            return console.log('ERROR2');
                        }else{
                            comments.forEach(element => {
                                pArr[el.id].comment = element;
                                // el.comment = element;
                            });
                        }
                    });
                    console.log(el);
                });
            }
        });
    });    
})();
