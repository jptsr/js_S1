// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    let me = {
        lastName: "Paternoster",
        firstName: "Julie",
        age: 21,
        city: "Braine-Le-Comte",
        country: "Belgique" 
    }

    document.getElementById("run").addEventListener("click", function(){
        console.log(me);
    });
})();
