'use strict';

//#1 
function isNumberInRange(number) {
    if (number > 0 && number < 10) {
        return true;
    }
    return false;
}
isNumberInRange(11);

//#2
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
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
        return b;
    } 
    return a;
}
min(5, -1);
min(3, 5);







