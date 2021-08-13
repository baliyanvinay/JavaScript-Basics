/* Basic Understanding of variables in JS */

/* Declaring variables using var */
var age = 32, first_name = 'Jack';
console.log("First name is :: " + first_name + " of age :: " + age)

/* String with double quotes */
var string_option_01 = "Jack's car";
var string_option_02 = "Jack's car name is \"Tesla\" which is nice.";
console.log(string_option_02)

/* Property associated with strings */
console.log(string_option_02.constructor, string_option_02.length)

/* Numbers */
var number = 12;
let x = 12;

/* Boolean */
var isUrlValid = true

/* Objects */
const car = { "type": "Fiat", "model": "500", "color": "white" };
console.log(car.model, car.type, car['color']);

/* Arrays : Keeps the order of data */
var weekList = ['Sunday', 'Monday', 'Tuesday']
var objArray = [car]
var mixedArray = ['Some string', 12, false, { 'objects': 'yes' }]