/* Variables */

// var
var x = 12;
{
    console.log("x before change", x); // print 12
    var x = 22;
    console.log("x after change", x); // print 22
}
console.log("x outside block", x); // print 22


// let - blocked scope
let y = 10;
{
    // console.log(y); // raises ReferenceError
    let y = 22;
    console.log("y after change", y); // print 22
}
console.log("y outside block", y); // print 10
y = 25; // change allowed
console.log("y with change", y); // print 25
// let y = 75; // cannot redeclare

// const
const z = 10;
{
    // console.log(z); // raises ReferenceError
    const z = 22;
    console.log("z after change", z);
}
console.log("z outside block", z);
// const z = 75; // cannot redeclare
// z = 25; // TypeError: Assignment to constant variable.
