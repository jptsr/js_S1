// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", function(){
        let newAdj = Array.from(adjectives);
        let rBirds = random(birds.length);
        let rAdj = random(newAdj.length);

        if(birds[rBirds].fem == true){
            console.log(birds[rBirds].name + " " + newAdj[rAdj] + "e");
        }else{
            console.log(birds[rBirds].name + " " + newAdj[rAdj]);
        }
    });
})();

function random(a){
    return Math.floor(Math.random() * a);
}
