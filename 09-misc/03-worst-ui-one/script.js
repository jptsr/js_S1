// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    // your code here

    let slider = document.getElementById('slider');
    let target = document.getElementById('target');
    // console.log(slider.value);
    document.addEventListener('keydown', (e) => {
        switch(e.key){
            case e.key = '0':
                slider.value = 460000000;
                target.innerHTML = slider.value;
                break;
            case e.key = '1':
                slider.value = 461111111;
                target.innerHTML = slider.value;
                break;
            case e.key = '2':
                slider.value = 462222222;
                target.innerHTML = slider.value;
                break;
            case e.key = '3':
                slider.value = 463333333;
                target.innerHTML = slider.value;
                break;
            case e.key = '4':
                slider.value = 464444444;
                target.innerHTML = slider.value;
                break;
            case e.key = '5':
                console.log(2);
                slider.value = 465555555;
                target.innerHTML = slider.value;
                break;
            case e.key = '6':
                console.log(2);
                slider.value = 466666666;
                target.innerHTML = slider.value;
                break;
            case e.key = '7':
                slider.value = 467777777;
                target.innerHTML = slider.value;
                break;
            case e.key = '8':
                slider.value = 468888888;
                target.innerHTML = slider.value;
                break;
            case e.key = '9':
                slider.value = 469999999;
                target.innerHTML = slider.value;
                break;
            default:
                break;
        }
    });
})();
