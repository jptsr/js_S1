// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
    class Person {
        constructor(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName;
        }

        getter(){
            return `${this.firstName} ${this.lastName}`;
        }

        setter(){
            let name = this.getter();
            let divide = name.split(' ');
            return divide;
        }
    }

    let p1 = new Person("Boulet", "SauceLapin").getter();
    let p2 = new Person("Boulette", "SauceTomate").setter();

    document.getElementById("run").addEventListener("click", () => {
        console.log(p1);
        console.log(p2);
    });
})();
