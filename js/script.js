'use strict'
const padString = function (str, numb, sym, side = true){
    if (typeof str === undefined){
       return  console.log('Вы не ввели строку');
    } else if (typeof numb != "number"){
        return console.log('Вы не ввели число (длину строки)');
    } else if (sym === undefined){
        return console.log('Вы не ввели символ');
    } else if (numb > str.length && side === true){
        let result = '';
        for (let i = 0; i < numb - str.length; i++) {
            result += sym;
        }
       return console.log(str + result);
    } else if (numb > str.length && side === false){
        let result = '';
        for (let i = 0; i < numb - str.length; i++) {
            result += sym;
        }
        return console.log(result + str)
    } else {
        let result = str.substr(0, numb);
        return console.log(result);
    }
}
padString('hello', 7, '*', false);


