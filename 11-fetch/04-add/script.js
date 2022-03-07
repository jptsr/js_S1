// 11-fetch/04-add/script.js - 11.4: ajouter un élément


(() => {
    // your code here

    // const form = document.getElementsByTagName('form')[0];
    const btn = document.getElementById('run');

    const name = document.getElementById('hero-name');
    const alter = document.getElementById('hero-alter-ego');
    const pws = document.getElementById('hero-powers');

    let v_name, v_alter, v_pws, arr_pows = [];

    btn.addEventListener('click', (e) => {
        // console.log('btn ok');
        
        e.preventDefault();

        v_name = name.value;
        v_alter = alter.value;
        v_pws = pws.value;
        arr_pows.push(v_pws);

        if(v_name !== "" && v_alter !== "" && v_pws !== ""){
            fetch('http://localhost:3000/heroes', {
                method: 'POST',
                body: JSON.stringify({
                    name: v_name,
                    alterEgo: v_alter,
                    abilities: arr_pows
                }),
                headers: {
                    "Content-type":"application/json; charset=UTF-8"
                }
            })
            .then(res => res.json())
            .then(data => console.log(data))

            console.log('process is done');
        }
    })
})();
