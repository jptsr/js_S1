// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    // your code here
    let name1 = "Skitty", name2 = "Pixel";
    let age1 = "9 years", age2 = "6 years";    
    let cat1, cat2;

    document.getElementById("run").addEventListener("click", function(){
        cat1 = new Cat(name1, age1);
        cat2 = new Cat(name2, age2);
        console.log(cat1);
        console.log(cat2);
    });
})();
