/* Functions */
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
// calling function
var response = isEven(5);
console.log(response);

// function with default argument
function helloWorld(text="Hello Someone!") {
    return text;
}
console.log(helloWorld("Hello Sam!"));

/* Objects and functions */

// Objects are passed by reference
var car = {
    "Name": "Kia",
    "Model": "Seltos",
    "Year": 2016
};

function change_year(vehicle) {
    vehicle.Year = 2012;
}

change_year(car);
console.log(car);

// Changing by value

function change_year_val(vehicle) {
    var year = vehicle.Year;
    year = 2020;
    return {
        Name: vehicle.Name,
        Model: vehicle.Model,
        Year: year
    };
}

var new_car = change_year_val(car);
console.log("Car is ",car,"|| New car is ",new_car);