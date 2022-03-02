// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    // your code here

    let input = document.getElementById("pass-one");
    let span = document.getElementById("counter");
    let count = 0;

    input.addEventListener("input", (e) => {
        console.log("ok");

        count++;

        if(count > 10){
            console.log("no more input");
        }

        span.innerHTML = `${count}/10`;
        console.log(count);
    });

    input.addEventListener("keydown", (e) => {
        const key = e.key;
        if(key === "Backspace"){
            count--;
            span.innerHTML = `${count}/10`;
            console.log(`Count = ${count}`);
        }
    });

    // input.addEventListener("input", whileInput);
    // input.addEventListener("keydown", whileInput);

    // function whileInput(e){
    //     console.log("ok");

    //     count++;

    //     const key = e.key;
    //     if(key === "Backspace"){
    //         console.log("backspace");
    //     }

    //     if(count > 10){
    //         console.log("no more input");
    //     }

    //     span.innerHTML = `${count}/10`;
    //     console.log(count);
    // }
})();
