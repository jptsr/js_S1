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
            this.name = name;
        }
        // static greeting = this.sayHello();
    }

    let c = new Cat().sayHello();

    document.getElementById("run").addEventListener("click", function(){
        console.log(c);
    });
})();
