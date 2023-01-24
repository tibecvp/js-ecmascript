// Declarando la clase
class User {

}
// Instancia de una clase
// const newUser = new User();

class user {
    // metodos
    greeting() {
        return 'Helo';
    }
}

const tibecvp = new user();
console.log(tibecvp.greeting());
const berijas = new user();
console.log(berijas.greeting());

// constructor
class user {
    // Constructor
    constructor() {
        console.log('Nuevo usuario');
    }

    greeting() {
        return 'Helo';
    }
}

const david = new user();

// This
class user {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return 'Helo';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting());

// Setters & Getters
class user {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // metodos
    speak() {
        return 'Helo';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const bebeloper = new user('David', 15);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 20);
console.log(bebeloper.uAge);
