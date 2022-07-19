'use strict'
const padString = function (str, numb, sym, side = true){
    if (typeof str !== "string"){
       return 'some error str';
    } if (typeof numb != "number"){
        return 'some error num';
    } if (typeof sym !== "string" || sym.length !== 1){
        return 'some error sym';
    } if (typeof side !== "boolean"){
        return 'some error side';
    }
    if (numb > str.length && side === true){
        let result = '';
        for (let i = 0; i < numb - str.length; i++) {
            result += sym;
        }
       return console.log(str + result);
    }if (numb > str.length && side === false){
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


