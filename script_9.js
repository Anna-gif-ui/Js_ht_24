(function () {
    'use strict'


let question = {
    text     : 'вопрос №1',
    points   : 2,
    answer   : 'a',
    variants : [{
            letter: 'a',
            text: 'правильный вариант'
        },{
            letter: 'b',
            text: 'Неправильный вариант №1'
        },{
            letter: 'c',
            text: 'Неправильный вариант №2'
        }]
}

let questions = [
    {
        text     : 'вопрос №1',
        points   : 2,
        answer   : 'a',
        variants : [{
                letter: 'a',
                text: 'правильный вариант'
            },{
                letter: 'b',
                text: 'Неправильный вариант №1'
            },{
                letter: 'c',
                text: 'Неправильный вариант №2'
            }]
    },{
        text     : 'вопрос №2',
        points   : 3,
        answer   : 'b',
        variants : [{
                letter: 'a',
                text: 'Неправильный вариант'
            },{
                letter: 'b',
                text: 'правильный вариант №1'
            },{
                letter: 'c',
                text: 'Неправильный вариант №2'
            }]
    },{
        text     : 'вопрос №3',
        points   : 1,
        answer   : 'c',
        variants : [{
                letter: 'a',
                text: 'Неправильный вариант'
            },{
                letter: 'b',
                text: 'Неправильный вариант №1'
            },{
                letter: 'c',
                text: 'правильный вариант №2'
            }]
    }];

let i = 0,
score = 0;

while (i < questions.length){
    let q = questions[i],
        str = q.text

    q.variants.map(variant => {
        
        str += `\n${variant.letter}. ${variant.text}` 
    })
   
    let answer = String(prompt(str)).toLowerCase();

    console.log(answer);

    // if (answer == q.answer){
    //     score +=  q.points
    // }

    score += (answer == q.answer) ? q.points : 0;

    i++;
}
alert(`вы набрали ${score} очков`);
    
})()