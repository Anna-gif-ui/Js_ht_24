(function () {
    'use strict'

    let number
         do {
            number = +prompt( 'Введите трехзначное число: ')
         } while(isNaN(number))
         number = Math.abs(number)

    var number1 = parseInt(number / 100);
  
    var number2 = parseInt(number / 10) % 10;
    
    var number3 = number % 10;
   
    if(number1===number2 || number2===number3 || number1===number3)
    document.write('Найдено совпадение цифр');
    else
    document.write('Совпадений не найдено');

 })()


