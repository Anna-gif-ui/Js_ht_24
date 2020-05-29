(function () {
    'use strict'
    
    let sum
    do {
        sum = +prompt('Введите сумму в USD: ')
     } while(isNaN(sum))
     sum = Math.abs(sum)

    let currency = prompt('В какую валюту вы хотите перевести, введите: EUR, UAH или AZN')
     switch(currency) {
        case 'EUR', 'eur':
            document.write(`${sum} USD составляет ${sum * 0.91} EUR`);
            break;
        case 'UAH', 'uah':
            document.write(`${sum} USD составляет ${sum * 26.96} UAH`);
            break;
        case 'AZN', 'azn':
            document.write(`${sum} USD составляет ${sum * 1.7} AZN`);
            break;
     }

 })()


