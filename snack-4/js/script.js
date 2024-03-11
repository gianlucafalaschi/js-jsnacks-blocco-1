//- Calcola la somma e la media dei primi 10 numeri.

//dichiara variabile sum con valore 0
let sum = 0;
let average
//ciclo for per avere numeri da 1 a 10
for(let i = 1; i <= 10; i++) {
    //console.log(i);
    let number = i; 
     //ad ogni numero sommo il precedente
     sum = sum + number;
     //console.log(sum);

}



// Mostro la somma dei numeri
alert(sum);

//calcolo la media dei numeri
let averageNumber = sum / 10; 
// Mostro la media dei numeri
alert(averageNumber);

