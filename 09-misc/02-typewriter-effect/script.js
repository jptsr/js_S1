// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here

    let txt = document.getElementById('target').innerHTML;
    // console.log(txt);
    // console.log(txt.length);
    document.getElementById('target').innerHTML = '';
    let nb_letter = 0;
    // console.log(letter);

    function write(){
        if(nb_letter < txt.length){
            // console.log(nb_letter);
            //console.log(txt.charAt(nb_letter));
            document.getElementById('target').innerHTML += txt.charAt(nb_letter);
            nb_letter++;
            setTimeout(write, 150);
        }
    }

    write();
})();
