# JavaScript Notes

## What is JavaScript?

JavaScript(or JS) is a lightweight, interpreted, object-oriented language with first-class functions. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles.

### Details on terms used

- Lightweight: JavaScript does not have too many language constructs(loops, conditionals) that you can use for building your code. Meaning it ships with the basic constructs that can be used almost too freely, whichever use case we need to cover.
- Interpreted: the source code is read and directly executed, line by line.
- Object-oriented: Object-oriented is a whole programming paradigm based around objects (data structures) that contain data fields and methods. Note that this doesn't necessarily means class and objects.
- First-class functions: Where functions are treated as any other variable. Passed as argument, returned from a function & assigned to a variable.
- Protype-based: A prototype based object oriented language uses objects for inheritance, for example an employee object has Person object as its prototype.
- Multi-paradigm Scripting:
- Dynamic:
- Imperative programming:
- Functional programming:

## Is JavaScript an interpreted language?

According to its definition, JavaScript is an interpreted language meaning it executes code line by lines. However consider the below example.

```js
max(3,5);

// function declaration
function max(a,b) {
    if(a>b) {
        return a;
    }else {
        return b;
    }
}
```

Do you think the program is executed? It will be executed. In JS, this is called 'Hoisting' where all the declarations are moved on the top of script. However only the declarations are moved and not initialized.

Coming back to interpreted question, consider another example

```js
console.log("Executed!!");
wrong_syntax;
```

What happens now? Well here the language will show you why it is called interpreted. The first line will be executed and then it will throw you the error for second line. Had it been compiled, it would have never executed the first line. <br>
Ref: [JavaScript — is it Compiled or Interpreted?](https://almogad.medium.com/javascript-is-it-compiled-or-interpreted-9779278468fc)

## Is JavaScript an object-oriented language?

Simple check for any programming language would be to see if it passes the four OOPs principles or not.

### Inheritance

### Encapsulation

### Abstraction

### Polymorphism

## Explain First-class functions in JavaScript

First-class function is termed to those function in a programming language where the function can be

- passed as an argument to another function
- returned from another function
- assigned to a variable

### Example

```js
var rand = function() {
    // random number b/w 1 and 100
    return Math.floor(Math.random()*100);
}
function isEven(func) {
    var num = func();
    console.log("Random Number :: "+num);
    return function {
        console.log((num%2==0));
    }
}
isEven(rand);
isEven(rand)(); // to call the retuned function
// another way to call 
var output = isEven(rand);
output();
```

Important Notes:

1. The function that we pass as an argument to another function, is called a <b>Callback function</b>.
2. A function that returns a function is called a <b>Higher-Order Function</b>.
<br>Ref: [First-class Function](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)

## Why is JavaScript called a object-oriented programming language?

JavaScript is an object-oriented programming language. Now there are couple of way an OOP language implements this, for example, generally mosts are class-based OOP and some like JavaScript are prototype based OOP.

### Difference between a class-based and prototype based OOP language

In class-based language, the classes are created beforehand and the objects are instantiated based on the classes. For example, 'Fruit' class with 'Apple' & 'Mango' as objects.

- In prototype-based languages the objects are the primary entities. No classes even exist.
- The prototype of an object is just another object to which the object is linked. Every object has one prototype link (and only one).
- Only single inheritance can be implemented through the prototype.

## Why is JavaScript called a prototype based programming language?

To provide inheritance in JavaScript, objects can have a prototype object, which acts as a template object that it inherits methods and properties from.<br>
This prototype object can also have a prototype object and so on. This is often referred to as a prototype chain.

```js
// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const emp_01 = new Person('Ajay',23);
console.info(emp_01);
//Adding a property via prototype
Person.prototype.gender = 'male';
console.info(emp_01.gender);
```

## Class based object creation vs function based

```js
// class based object creation
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}
const person = new Person('Tom', 27);
console.log(person.name);

// function based object creation
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person = new Person('Tom', 27);
console.info(person.name);
```

## Explain classes in JavaScript

Classes are special functions and can be defined using declaration and expressions just like a function.
Also class declarations are not hoisted like functions.

```js
// class with declaration
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}
// class with expression
const Person = class {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
};
```

A class element can be characterized by three aspects:

1. Kind: Getter, setter, method, or field
2. Location: Static or instance
3. Visibility: Public or private

```js
// Kind - setter, getter, method, fields
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
}

const person = new Person("Ajay", "Singh");
person.birthYear = 1994;
console.info(person.age);
console.info(person.fullName());
```

```js
// Location - static or instance
const Person = class {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    // static method
    static creationMsg() {
        return "Person object created."
    }
    // instance method
    showDetails() {
        return `${this.name} is ${this.age} old`;
    }
};

const person = new Person("Ajay", 12);
console.info(Person.creationMsg());
console.info(person.showDetails());

// update method using prototype
Person.prototype.showDetails = function(){ return this.name};
```

```js
// visibility - private
const Person = class {
    #age;
    constructor (name, age) {
        this.name = name;
        this.#age = age;
    }
    showDetails() {
        return `${this.name} is ${this.#age} old`;
    }

};

const person = new Person("Ajay", 12);
console.info(person.showDetails());
// console.info(person.#age); // access not possible
```
