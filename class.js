//example class with public and private properties and methods, constructor with default values and getter and setter methods
class Person {
    constructor(name = 'John Doe', age = 30) {
        this._name = name;  //"this" refers to the object that is calling the function
        this._age = age;   //The underscore is used to indicate that the property is private
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
    getDetails() {
        return `${this._name} is ${this._age} years old.`;
    }
}

//this is how you use the class
let person = new Person();
console.log(person.getDetails());
//output: John Doe is 30 years old.
person.name = 'Jane Doe';
person.age = 25;
console.log(person.getDetails());
//output: Jane Doe is 25 years old.
