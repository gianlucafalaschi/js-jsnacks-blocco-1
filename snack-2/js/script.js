// - Il software deve chiedere per 5 volte all’utente di inserire un numero.
//  Il programma stampa la somma di tutti i numeri inseriti.

//creo una variabile sum di valore 0

/* let sum = 0;
//chiedo all'utente 5 volte un numero
for(let i = 0; i < 5; i++) {
    let userNumber = parseInt(prompt('Dammi un numero'));
    //console.log(userNumber);
    
    //lo sommo al numero precedente
    sum = sum + userNumber;
    //console.log(sum);


}

//STAMPO LA SOMMA DI TUTTI I NUMERI
const userMessage = 'La somma dei numeri è ' + sum;
//alert(userMessage);

document.querySelector('#message').innerHTML = userMessage; */


////////////////////////////////////////////////////////////////

// CORREZIONE (DA RIVEDERE NON FUNZONA)
let userSum = 0;
// Per 5 volte:
for(let i = 0; i < 5; i++) {
    // chiedere un numero all'utente
    const userNumber = parseInt(prompt('Dimmi un numero'));
    console.log(userNumber);
    // sommarlo alla somma che avevo in precedenza
    userSum += userNumber;
    console.log(userSum);

}
   
