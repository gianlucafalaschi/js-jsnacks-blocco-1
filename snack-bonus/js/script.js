// - Dato un array contenente 10 numeri, stampare in console il numero più grande.

// dichiaro un array con 10 numeri
/* const numbersList = [1,2,3,4,5,6,7,8,9,10];
// console.log(numbersList);
// uso la funzione Math.max() per trovare il numero piu' grande 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
let biggestNumber = Math.max(...numbersList);
//console.log(biggestNumber);


//OUTPUT 
// stampo in console il numero piu' grande
let message = "il numero piu' grande è " + biggestNumber;
console.log(message); */

///////////////////////////////////

//  CORREZIONE

const numbers = ['1','2', '3', '4', '5', '6', '7', '8', '9','10'];

let biggestNumber = numbers[0];
// Scorro tutti i numeri dell'array
for(let i = 0; i < numbers.length; i++) {
    const thisNumbers = numbers[i];
    // per ogni numero
    // se il numero e' maggiore di quello che ho in memoria come piu' grande
    // allora questo numero diventa il piu' grande che mi segno in memoria
    if(thisNumbers > biggestNumber) {
        biggestNumber = thisNumbers;
    }
}
console.log(biggestNumber);