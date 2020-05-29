(function () {
    'use strict'

    let number = +prompt('Введите пятиразрядное число: ')
    number = number + ''

    if (number === number.split('').reverse().join(''))
    
        document.write('Данное число является палиндромом')
    else
        document.write('Данное число не является палиндромом')
   

 })()


