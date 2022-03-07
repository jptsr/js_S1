// 11-fetch/05-delete/script.js - 11.5: supprimer un élément


(() => {
    // your code here

    const btn = document.getElementById('run');
    const id = document.getElementById('hero-id');

    let v_id;

    btn.addEventListener('click', () => {
        v_id = id.value;

        fetch('http://localhost:3000/heroes', {
            // method: 'DELETE'
            method: 'GET'
            
        })
        .then(res => res.json())
        .then(data => console.log(data))
    })
})();
