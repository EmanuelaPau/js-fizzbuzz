// Problem 
console.log('test');
// Add 1 to 100 count
const fizzBuzzTxt = document.createElement("p");
document.getElementById('fizz-buzz-container').append(fizzBuzzTxt);


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

