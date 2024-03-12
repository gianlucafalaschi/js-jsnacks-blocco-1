// - Crea un array vuoto.
//  Chiedi per 6 volte all’utente di inserire un numero,
//  se è dispari inseriscilo nell’array.

// crea array vuoto
/* const numberList = [];
// chiedi per 6 volte all'utente di inserire un numero
for(let i = 0; i < 6; i++) {
    let userNumber = parseInt(prompt('Dimmi un numero'));
    //console.log(userNumber);

    //controlla se il numero e' pari o dispari
    if(userNumber % 2 !== 0) {
        //se il numero e' dispari lo inserisco nell'array
        numberList.push(userNumber);

    }
}


console.log(numberList); */


/////////////////////////////////////////////////////////////

//CORREZIONE
const numbers = [];
for(let i = 0; i < 6; i++) {
    const userNumber = parseInt(prompt('Dammi un numero'));
    if(userNumber % 2 !== 0) {
        numbers.push(userNumber);

    }
}

console.log(numbers);