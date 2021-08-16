/* Strict equality */
let config_val = 12;
let match_val = 12;
console.log(config_val === match_val);
// loose check || all true
'one' == '1';
'one' < 'two';

/* && and || */
'one' == '1' && 'one' < 'two';
'one' == '1' || 'one' < 'two';
'one' == '1' || 'one' < 'two' && 'three' > 'two'; // and condition will be checked first

/* if else */
if ('one' === null) {
    console.log(true)
}
else {
    console.log(false)
}
// Single if
if (1 === 1) console.log('Oneliner if');
else console.log('Else oneliner');

/* Switch */
switch ('one' !== 'one') {
    case true:
        console.log(true);
        break
    case false:
        console.log(false);
        break
}

/* Ternary Operator */
(1 === 1)? console.log(true) : console.log(false);
let result = (1 === 1)? true : false;
console.log("Result " + result)
