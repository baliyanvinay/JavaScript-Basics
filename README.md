## What is JavaScript?
JavaScript(or JS) is a lightweight, interpreted, object-oriented language with first-class functions. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles.

### Details on terms used
- Lightweight: JavaScript does not have too many language constructs(loops, conditionals) that you can use for building your code. Meaning it ships with the basic constructs that can be used almost too freely, whichever use case we need to cover.
- Interpreted: the source code is read and directly executed, line by line. 
- Object-oriented: 

## Is JavaScript an interpreted language?
According to its definition, JavaScript is an interpreted language meaning it executes code line by lines. However consider the below example.
```js
max(3,5);

function max(a,b) {
    if(a>b) {
        return a;
    }else {
        return b;
    }
}
```
Do you think the program is executed? It will be executed. In JS, this is called 'Hoisting' where all the declarations are moved on the top of script. However only the declarations are moved and not initialized. <br>
Coming back to interpreted question, consider another example
```js
console.log("Executed!!");
wrong_syntax;
```
What happens now? Well here the language will show you why it is called interpreted. The first line will be executed and then it will throw you the error for second line. Had it been compiled, it would have never executed the first line. 
Ref: https://almogad.medium.com/javascript-is-it-compiled-or-interpreted-9779278468fc