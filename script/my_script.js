// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Prima di partire a scrivere codice poniamoci qualche domanda:

// Come faccio a sapere se un numero è divisibile per un altro ?
//     Abbiamo visto qualcosa di particolare che possiamo usare ?

//         Consigli del giorno:
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

console.log('test');
let count = 15;

// // Add 1 to 100 count
// for (count = 1; count <= 100; count++) {
//     console.log(count);

// }

// TEST

// Add Fizz, Buzz and FizzBuzz
if (count % 3 === 0 && count % 5 === 0) {
    count = 'FizzBuzz';
    console.log(count);
} else if (count % 3 === 0) {
    count = 'Fizz';
    console.log(count);
} else if (count % 5 === 0) {
    count = 'Buzz';
    console.log(count);
}
// else {
//     console.log(count);
// }

