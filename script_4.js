(function () {
     'use strict'
 
     let year
     do {
         year = +prompt('Введите year')
     } while(isNaN(year))
     year = Math.abs(year)
 
     // if ((year % 400) == 0) {}
     if (!(year % 400) || (!(year % 4) && (year % 100))) {
     alert('this year is leap')
     } else{
     alert ('this year is not leap')
     }
 
     // let isLeapYear = false;
 
     // if (!(year % 400)) {
     //     isLeapYear = true;
     // }
 
     // if (!(year % 4) && (year % 100)) {
     //     isLeapYear = true;
     // }
 
     // if(isLeapYear){
     //     alert ('this year is leap')
     // } else {
     //     alert ('this year is not leap')
     // }
//  }
     // let date = new Date(year, 1, 28);
     // date.setDate(date.getDate() + 1)
 
     // if (date.getDate() == 1) {
     //     alert ('this year is leap')
     // } else {
     //     alert ('this year is not leap')
     // }
 })()


