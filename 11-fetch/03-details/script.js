// 11-fetch/03-details/script.js - 11.3: details


(() => {
    // your code here

    const input = document.getElementById('hero-id');
    const btn = document.getElementById('run');
    let val;

    btn.addEventListener('click', () => {
        console.clear();

        val = input.value;

        fetch('http://localhost:3000/heroes')
            .then(res => res.json())
            .then(data => {
                switch(val){
                    case '0':
                        console.log(`X-Men 1: \n- ${data[0].name} \n- ${data[0].alterEgo} \n- ${data[0].abilities}`);
                        break;
                    case '1':
                        console.log(`X-Men 2: \n- ${data[1].name} \n- ${data[1].alterEgo} \n- ${data[1].abilities}`);
                        break;
                    case '2':
                        console.log(`X-Men 3: \n- ${data[2].name} \n- ${data[2].alterEgo} \n- ${data[2].abilities}`);
                        break;
                    case '3':
                        console.log(`X-Men 4: \n- ${data[3].name} \n- ${data[3].alterEgo} \n- ${data[1].abilities}`);
                        break;
                    case '4':
                        console.log(`X-Men 5: \n- ${data[4].name} \n- ${data[4].alterEgo} \n- ${data[4].abilities}`);
                        break;
                    default:
                        console.log(`ERROR - try again`);
                        break;
                }
            })
    });
})();
