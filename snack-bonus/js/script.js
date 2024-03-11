// - Dato un array contenente 10 numeri, stampare in console il numero più grande.

// dichiaro un array con 10 numeri
const numbersList = [1,2,3,4,5,6,7,8,9,10];
// console.log(numbersList);
// uso la funzione Math.max() per trovare il numero piu' grande 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
let biggestNumber = Math.max(...numbersList);
//console.log(biggestNumber);
// stampo il numero piu' grande
let message = "il numero piu' grande è " + biggestNumber;

alert(message);