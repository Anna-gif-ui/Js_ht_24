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
        default: document.write(`Я не знаю этот символ`);
     }

 })()


