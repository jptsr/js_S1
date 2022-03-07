

(() => {
    // your code here

    const btn = document.getElementById('run');
    const ol = document.getElementById('target');

    const temp = document.getElementById('tpl-hero');
    // const li = document.getElementById('hero');
    // const h4 = document.getElementById('title');
    // const strong = document.getElementById('name');
    // const em = document.getElementById('alter-ego');
    // const p = document.getElementById('powers');

    // const temp = document.createElement('template');
    // const li = document.createElement('li');
    // const h4 = document.createElement('h4');
    // const strong = document.createElement('strong');
    // const em = document.createElement('em');
    // const p = document.createElement('p');

    let template = document.getElementsByTagName("template")[0];
    let a;

    // let show = template.content.cloneNode(true);
    // document.body.appendChild(show);

    btn.addEventListener('click', () => {
        fetch('http://localhost:3000/heroes')
            .then(res => res.json())
            .then(data => {
                console.log(data);

                item = template.content.querySelector("strong");
                a = document.importNode(item, true);
                a.textContent = `${data[0].name}`;

                document.body.appendChild(a);

                // strong.innerText = `${data[0].name}`;
                // em.innerHTML = `${data[0].alterEgo}`;
                // p.innerHTML = `${data[0].abilities}`;

                for(let i = 0; i < 5; i++){
                    console.log(`X-Men ${i + 1} : \n- ${data[i].name} \n- ${data[i].alterEgo} \n- ${data[i].abilities}`);
                }
            })
    })
})();
