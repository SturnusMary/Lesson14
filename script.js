'use strict';

//#1 
function isNumberInRange(number) {
    if (number > 0 && number < 10) {
        return console.log('true');
    }
    return console.log('false');
}
isNumberInRange(11);

//#2
function isEven(number) {
    if (number % 2 == 0) {
        return console.log('true');
    }
    return console.log('false');
}
isEven(11);

//#3
let value = +prompt('value?', '');
switch (value) {
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;
}

//#4
function min(a,b) {
    if(a > b) {
        return console.log(b);
    } 
    return console.log(a);
}
min(5, -1);
min(3, 5);







