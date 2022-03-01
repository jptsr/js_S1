//07-classes/02-methods/script.js - 7.2: methods


(() => {
    // your code here
    class Person{
        constructor(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName;
        }

        sayHello(){
            return "Hello " + this.firstName + " " + this.lastName;
        }
    }

    let a = "Louis", b = "Boulet";
    let p1 = new Person(a, b);

    document.getElementById("run").addEventListener("click", function(){
        console.log(p1.sayHello());
    });
})();
