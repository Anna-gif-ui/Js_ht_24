(function () {
    'use strict'
     
    let age = +prompt('Сколько вам лет?');

        let message = (age >= 0 && age < 12) ? 'Вы ребенок' :
                (age >= 12 && age < 18) ? 'Вы подросток' :
                (age >= 18 && age < 60) ? 'Вы взрослый' :
                (age >= 60) ? 'Вы пенсионер' :
                'Какой необычный возраст!';
  
    document.write(message)
 })()
