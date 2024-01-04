/* Classes */

// class can be declared in two ways

// Declaration
// class Shape {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }

// const square = new Shape(12, 15);
// console.info(square.height, square.width);

// Expression
const Shape = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

const rectangle = new Shape(12, 15);
console.info(rectangle.height, rectangle.width);

// class Kind - setter, getter, method, fields
const Person = class {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // setter
    set birthYear(birthYear) {
        const currentTime = new Date();
        this._age = currentTime.getFullYear() - birthYear;
    }
    // getter
    get age() {
        return this._age;
    }
    // method
    fullName = () => this.firstName + " " + this.lastName;
    // static method
    static creationMsg() {
        return "Person object created."
    }
}

const person = new Person("Ajay", "Singh");
console.info(Person.creationMsg());
person.birthYear = 1994;
console.info(person.age);
console.info(person.fullName());
