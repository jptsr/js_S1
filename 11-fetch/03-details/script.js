// 11-fetch/03-details/script.js - 11.3: details


(() => {
    // your code here

    const input = document.getElementById('hero-id');
    const btn = document.getElementById('run');
    const temp = document.getElementById('tpl-hero');
    const p = document.getElementById('target');

    let val, clone;

    btn.addEventListener('click', () => {
        console.clear();

        val = input.value;

        fetch('http://localhost:3000/heroes')
            .then(res => res.json())
            .then(data => {
                switch(val){
                    case '0':
                        clone = temp.content.cloneNode(true);
                        clone.querySelector('strong').textContent = `${data[0].name}`;
                        clone.querySelector('em').textContent = `${data[0].alterEgo}`;
                        clone.querySelector('p').textContent = `${data[0].abilities}`;
                        p.appendChild(clone);
                        break;
                    case '1':
                        clone = temp.content.cloneNode(true);
                        clone.querySelector('strong').textContent = `${data[1].name}`;
                        clone.querySelector('em').textContent = `${data[1].alterEgo}`;
                        clone.querySelector('p').textContent = `${data[1].abilities}`;
                        p.appendChild(clone);
                        break;
                    case '2':
                        clone = temp.content.cloneNode(true);
                        clone.querySelector('strong').textContent = `${data[2].name}`;
                        clone.querySelector('em').textContent = `${data[2].alterEgo}`;
                        clone.querySelector('p').textContent = `${data[2].abilities}`;
                        p.appendChild(clone);
                        break;
                    case '3':
                        clone = temp.content.cloneNode(true);
                        clone.querySelector('strong').textContent = `${data[3].name}`;
                        clone.querySelector('em').textContent = `${data[3].alterEgo}`;
                        clone.querySelector('p').textContent = `${data[3].abilities}`;
                        p.appendChild(clone);
                        break;
                    case '4':
                        clone = temp.content.cloneNode(true);
                        clone.querySelector('strong').textContent = `${data[4].name}`;
                        clone.querySelector('em').textContent = `${data[4].alterEgo}`;
                        clone.querySelector('p').textContent = `${data[4].abilities}`;
                        p.appendChild(clone);
                        break;
                    default:
                        console.log(`ERROR - try again`);
                        break;
                }
            })
    });
})();
