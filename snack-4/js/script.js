//- Calcola la somma e la media dei primi 10 numeri.
//dichiara variabile sum con valore 0
let sum = 0;
const numbersLength = 10;
//ciclo for per avere numeri da 1 a 10
for(let i = 1; i <= numbersLength; i++) {
    //console.log(i);
     //ad ogni numero sommo il precedente
     sum += i;
     //console.log(sum);  
}

// Mostro la somma dei numeri
alert(sum);

//calcolo la media dei numeri
let averageNumber = sum / numbersLength; 
// Mostro la media dei numeri
alert(averageNumber);

