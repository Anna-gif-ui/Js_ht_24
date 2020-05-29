(function () {
    'use strict'
    
    let circleLength   
    do {
        circleLength = +prompt('Введите длину окружности')
    }  while(isNaN(circleLength))
    circleLength = Math.abs(circleLength)

    let squarePerimetr
    do {
        squarePerimetr  = +prompt('Введите периметр квадрата')
    } while(isNaN(squarePerimetr))
    squarePerimetr = Math.abs(squarePerimetr) 

    if ((circleLength / Math.PI) >= (squarePerimetr / 4)){
    document.write (`Окружность длиной ${circleLength} 
    не поместится в квадрат периметором ${squarePerimetr}`)
    } else{ 
        document.write (`Окружность длиной ${circleLength} 
    поместится в квадрат периметором ${squarePerimetr}`)
    }
 })()


