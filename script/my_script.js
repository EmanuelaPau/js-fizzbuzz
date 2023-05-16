// Problem 
console.log('test');
// Add 1 to 100 count
// const fizzBuzzTxt = document.createElement("p");

for (let count = 1; count <= 100; count++) {
    // Add Fizz, Buzz and FizzBuzz
    if (count % 3 === 0 && count % 5 === 0) {
        console.log('FizzBuzz');

        const fizzBuzzTxt = document.createElement("p");
        fizzBuzzTxt.innerHTML += 'FizzBuzz';
        fizzBuzzTxt.classList.add("my_fizz-buzz");
        fizzBuzzTxt.classList.add("my_button");
        document.getElementById('fizz-buzz-container').append(fizzBuzzTxt);
    } else if (count % 3 === 0) {
        console.log('Fizz');

        const fizzBuzzTxt = document.createElement("p");
        let fizz = fizzBuzzTxt.innerHTML += 'Fizz';
        fizzBuzzTxt.classList.add("my_fizz");
        fizzBuzzTxt.classList.add("my_button");
        document.getElementById('fizz-buzz-container').append(fizzBuzzTxt);
    } else if (count % 5 === 0) {
        console.log('Buzz');

        const fizzBuzzTxt = document.createElement("p");
        fizzBuzzTxt.innerHTML += 'Buzz';
        fizzBuzzTxt.classList.add("my_buzz");
        fizzBuzzTxt.classList.add("my_button");
        document.getElementById('fizz-buzz-container').append(fizzBuzzTxt);
    }
    else {
        console.log(count);

        const fizzBuzzTxt = document.createElement("p");
        fizzBuzzTxt.innerHTML += count;
        fizzBuzzTxt.classList.add("my_count-text");
        fizzBuzzTxt.classList.add("my_button");
        document.getElementById('fizz-buzz-container').append(fizzBuzzTxt);
    }
}

// BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.