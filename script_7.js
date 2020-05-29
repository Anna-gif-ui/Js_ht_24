(function () {
    'use strict'
    
    let sum
    do {
        sum = +prompt('Введите сумму покупки: ')
     } while(isNaN(sum))
     sum = Math.abs(sum)

     let message = (sum < 200 ) ? (`Сумма к оплате составляет ${sum} грн`) :
                (sum >= 300 && sum < 500) ? (`Сумма к оплате составляет ${sum * 0.95} грн`) :
                (sum >= 500) ? (`Сумма к оплате составляет ${sum * 0.93} грн`) :
                'Удачных покупок!';

    document.write(message)


 })()


