(function () {
    'use strict'

    let number = prompt('Enter the number from 0 to 9', 0);
    switch(number) {
        case '0':
            console.log('0 is )');
            break;
        case '1':
            console.log('1 is !');
            break;
        case '2':
            console.log('2 is @');
            break;
        case '3':
            console.log('3 is #');
            break;
        case '4':
            console.log('4 is $');
            break;
        case '5':
            console.log('5 is %');
            break;
        case '6':
            console.log('6 is ^');
            break;
        case '7':
            console.log('7 is &');
            break;
        case '8':
            console.log('8 is *');
            break;
        case '9':
            console.log('9 is (');
            break;
 

 })()

// function getSymbol (s) {

//     if ( Boolean(s)) {
//         switch (s) {
//             case '0': return `There is ")" under the number ${s}.`;
//             case '1': return `There is "!" under the number ${s}.`;
//             case '2': return `There is "@" under the number ${s}.`;
//             case '3': return `There is "#" under the number ${s}.`;
//             case '4': return `There is "$" under the number ${s}.`;
//             case '5': return `There is "%" under the number ${s}.`;
//             case '6': return `There is "^" under the number ${s}.`;
//             case '7': return `There is "&" under the number ${s}.`;
//             case '8': return `There is "*" under the number ${s}.`;
//             case '9': return `There is "(" under the number ${s}.`;
//             default: return "I don't know this!";
//         }
//     } else if ( s == '') {
//         return (getSymbol(prompt("You forgot enter a number! Try again! \n \n What number of the symbol you want me to return?")));
//     } else {
//         return ("Goodbye!");
//     }
// }
