// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    // your code here

    let input1 = document.getElementById('part-one').value;
    let input2 = document.getElementById('part-two').value;
    let input3 = document.getElementById('part-three').value;
    let input4 = document.getElementById('part-four').value;
    let btn1 = document.getElementById('fix-part-one');
    let btn2 = document.getElementById('fix-part-two');
    let btn3 = document.getElementById('fix-part-three');
    let btn4 = document.getElementById('fix-part-four');
    let target = document.getElementById('target');

    function rollInputOne(){
        input1++;
        input2++;
        input3++;
        input4++;
        setTimeout(rollInputOne, 50);
    
        if(input1 > 499){
            input1 = 460;
        }

        if(input2 > 99){
            input2 = 0;
        }

        if(input3 > 99){
            input3 = 0;
        }

        if(input4 > 99){
            input4 = 0;
        }
    
        // console.log(`${input1} ${input2} ${input3} ${input4}`);
        document.getElementById('part-one').value = input1;
        document.getElementById('part-two').value = input2;
        document.getElementById('part-three').value = input3;
        document.getElementById('part-four').value = input4;
    }
    
    rollInputOne();

    btn1.addEventListener('click', () => {
        console.log(input1);
        document.getElementById('part-one').value = input1;
    });

    // function display(){
    //     let val2 = `${input2}`;
    //     let val3 = `${input3}`;
    //     let val4 = `${input4}`;
    
    //     if(input2 < 10){
    //         val2 = `0${input2}`;
    //     }
    
    //     if(input3 < 10){
    //         val3 = `0${input3}`;
    //     }
    
    //     if(input3 < 10){
    //         val4 = `0${input4}`;
    //     }
    
    //     target.innerHTML = `+${input1}${val2}${val3}${val4}`;
    // }    
})();