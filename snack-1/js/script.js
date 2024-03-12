// -Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati 
// (inserire il numero nell'array solo se non è già presente).



//dichiaro un array vuoto
/* const numberList = [];

// chiedo all'utente 5 volte un numero
for(let i = 0; i < 5; i++) {
    const userNumber = parseInt(prompt('Dammi un numero'));
    // console.log(userNumber); 

    //controllo che il numero non sia nell'array
    if(numberList.includes(userNumber) === false) {
        // se il numero non e' nell'array lo aggiungo nell'array
        numberList.push(userNumber);
    }
        

}

console.log(numberList);

 */

/////////////////////////////////////////////////////////////

// CORREZIONE
const numbersArray = [];
// Per 5 volte :
for(let i = 0; i < 5; i++) {
    //chiedere un numero all'utente
    const userNumber = parseInt(prompt('Dimmi un numero'));
    
    //controllo che non sia gia' presente e se non e' presente lo pusho
   /*  if(numbersArray.includes(userNumber) === false) {
        numbersArray.push(userNumber);
   } */
   //posso accorciare cosi'
    if(!numbersArray.includes(userNumber)) {
        numbersArray.push(userNumber);
   }
}
console.log(numbersArray); 
  
