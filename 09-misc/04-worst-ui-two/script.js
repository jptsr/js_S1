// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    // your code here
    let btn1 = document.getElementById('part-one');
    let btn1_value = 460;
    let btn2 = document.getElementById('part-two');
    let btn2_value = 0;
    let btn3 = document.getElementById('part-three');
    let btn3_value = 0;
    let btn4 = document.getElementById('part-four');
    let btn4_value = 0;
    let target = document.getElementById('target');

    btn1.addEventListener('click', () => {
        btn1_value++;
        btn1.innerHTML = btn1_value;
        target.innerHTML = `+${btn1_value}000000`;

        if(btn1_value > 498){
            btn1_value = 459;
        }
    });

    btn2.addEventListener('click', () => {
        btn2_value++;
        btn2.innerHTML = `0${btn2_value}`;
        target.innerHTML = `+${btn1_value}0${btn2_value}0000`;

        if(btn2_value > 9){
            target.innerHTML = `+${btn1_value}${btn2_value}0000`;
        }

        if(btn2_value > 98){
            btn2_value = -1;
        }
    });

    btn3.addEventListener('click', () => {
        btn3_value++;
        btn3.innerHTML = `0${btn3_value}`;
        target.innerHTML = `+${btn1_value}0${btn2_value}0${btn3_value}00`;

        if(btn3_value > 9){
            target.innerHTML = `+${btn1_value}${btn2_value}${btn3_value}00`;
        }

        if(btn3_value > 98){
            btn3_value = -1;
        }
    });

    btn4.addEventListener('click', () => {
        btn4_value++;
        btn4.innerHTML = `0${btn4_value}`;
        target.innerHTML = `+${btn1_value}0${btn2_value}0${btn3_value}0${btn4_value}`;

        if(btn4_value > 9){
            target.innerHTML = `+${btn1_value}${btn2_value}${btn3_value}${btn4_value}`;
        }

        if(btn4_value > 98){
            btn4_value = -1;
        }
    });
})();
