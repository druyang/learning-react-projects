class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age; 
    }
    getGreeting() {
        // This is a regular string: return 'Hi ' + this.name; 
        // ES6 Template string, allows for injection: 
        return `Hi I am ${this.name}!`; 
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`
    }

}

// Inheritance going on here, with some overriding 
class Student extends Person{
    constructor(name, age, major){ // no need to reconfigure properties 
        super(name, age); // Just like Java 
        this.major = major; 
    } 
    hasMajor(){
        return !!this.major; 
    }
    getDescription(){
        let description = super.getDescription(); 
        return `${description} and is majoring in ${this.major}`
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age); 
        this.homeLocation = homeLocation; 
    }
    getGreeting(){
        let greeting = super.getGreeting(); 
         if (this.homeLocation){
             return greeting + ` and I am visiting from ${this.homeLocation}`; 
         }
         else{
             return greeting; 
         }
    }
}

const me = new Traveler('Andrw', 20, 'Minnesota'); 
const other = new Traveler(undefined, undefined); 
console.log(me.getGreeting()); 
console.log(other.getGreeting()); 