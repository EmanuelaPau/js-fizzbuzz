// Problem 
console.log('test');
// Add 1 to 100 count
let div = document.createElement("div");
let p = document.createElement("p");
div.append("Some text", p);

for (let count = 1; count <= 100; count++) {


    // Add Fizz, Buzz and FizzBuzz
    if (count % 3 === 0 && count % 5 === 0) {
        console.log('FizzBuzz');
    } else if (count % 3 === 0) {
        console.log('Fizz');
    } else if (count % 5 === 0) {
        console.log('Buzz');
    }
    else {
        console.log(count);
    }
}

// BONUS 1:
// Crea un container nel DOM, aggiungendo(attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

