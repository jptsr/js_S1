// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    // your code here
    class Cat extends Animal {
        constructor(name) {
            super(name);
            this.name = name;
        }
        static greeting = "Hello";
    }

    let c1 = Cat.greeting;
    let c = new Cat("Boulet").sayHello(c1);

    document.getElementById("run").addEventListener("click", () => { 
        console.log(c);
    });
})();
