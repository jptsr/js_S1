

(() => {
    // your code here

    const btn = document.getElementById('run');
    const temp = document.getElementById('tpl-hero');
    const p = document.getElementById('target');

    let clone; 

    btn.addEventListener('click', () => {
        console.clear();

        if(clone){
            console.log('clone exist');
        }

        fetch('http://localhost:3000/heroes')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            for(let i = 0; i < 5; i++){
                clone = temp.content.cloneNode(true);
                clone.querySelector('strong').textContent = `${data[i].name}`;
                clone.querySelector('em').textContent = `${data[i].alterEgo}`;
                clone.querySelector('p').textContent = `${data[i].abilities}`;
                p.appendChild(clone);
            }
        })
    })
})();
