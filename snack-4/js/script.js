//- Calcola la somma e la media dei primi 10 numeri.

//dichiara variabile sum con valore 0
let sum = 0;

//ciclo for per avere numeri da 1 a 10
for(let i = 1; i <= 10; i++) {
    //console.log(i);
    let number = i; 
     //ad ogni numero sommo il precedente
     sum = sum + number;
     console.log(sum);
}

alert(sum);
    // divido la somma totale per il numero totale dei numeri 

