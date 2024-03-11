// - Il software deve chiedere per 5 volte all’utente di inserire un numero.
//  Il programma stampa la somma di tutti i numeri inseriti.

//creo una variabile sum di valore 0

let sum = 0;
//chiedo all'utente 5 volte un numero
for(let i = 0; i < 5; i++) {
    let userNumber = parseInt(prompt('Dammi un numero'));
    //console.log(userNumber);
    
    //lo sommo al numero precedente
    sum = sum + userNumber;
    console.log(sum);
}


//STAMPO LA SOMMA DI TUTTI I NUMERI