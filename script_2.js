(function () {
    'use strict'

    let key = prompt('Введите число от 0 до 9 и я покажу спецсимвол, который соответствует этому числу')
     switch(key) {
        case '0':
            document.write(`${key} соответствует )`);
            break;
        case '1':
            document.write(`${key} соответствует !`);
            break;
        case '2':
            document.write(`${key} соответствует @`);
            break;
        case '3':
            document.write(`${key} соответствует #`);
            break;
        case '4':
            document.write(`${key} соответствует $`);
            break;  
        case '5':
            document.write(`${key} соответствует %`);
            break;  
        case '6':
            document.write(`${key} соответствует ^`);
            break;  
        case '7':
            document.write(`${key} соответствует &`);
            break; 
        case '8':
            document.write(`${key} соответствует *`);
            break; 
        case '9':
            document.write(`${key} соответствует (@)`);
            break; 
        default: return `Я не знаю этот символ`;
     }

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
