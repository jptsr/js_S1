// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    // your code here

    let input = document.getElementById("pass-one");
    let span = document.getElementById("validity");

    input.addEventListener("input", () => {
        let i_txt = input.value;
        let count = String(i_txt).length;
        // let count = i_txt.replace(/\s+/g, '').length;
        let count_d = String(i_txt).match(/[0-9]+/g).length;
        // let count_d = i_txt.replace(/d+/g, '');

        if(count >= 8 && count_d >= 2){
            span.innerHTML = `ok`;
        }else{
            span.innerHTML = `not ok`;
        }
        
        console.log(count_d);
    });    
})();
