/* For loop */
// Printing pattern via loop
for (i=1; i<10; i++) {
    console.log('*'.repeat(i));
}
// Using in keyword to loop
const weekDays = ['Sunday','Monday','Tuesday','Wednessday','Thursday','Friday','Saturday']
for (let day_index in weekDays) {
    console.log(day_index, weekDays[day_index]);
}

/* While loop */
let x = 5;
while (x>0) {
    console.log('*'.repeat(x));
    x--;
}