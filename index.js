/*
Title: Basic Node app example
Description: Simple node application that print random quotes per second interval.(RAW NODE JS)
Author: Asad
Date: 04/01/23
*/

// Dependencies
const mathLibarary = require('./lib/math');
const quotesLibrary = require('./lib/quotes');

// App object - Module scaffolding
const app = {};

// Configuration
app.config = {
    timeBetweenQuotes: 1000,
};

// Function that prints a random quotes
app.printAQuotes = function printAQuotes() {
    // Get all the quotes
    const allQuotes = quotesLibrary.allQuotes();

    // Get the length of the quotes
    const numberOfQuotes = allQuotes.length;

    // Pick a random number between 1 and the number of quotes
    const randomNumber = mathLibarary.getRandomNumber(1, numberOfQuotes);

    // Get the quotes at that position in the arrray (minus one)
    const selectedQuote = allQuotes[randomNumber - 1];

    // Print the quote to the console
    console.log(selectedQuote);
};

// Function that loops indefinitely, calling the printAQuote function as it goes
app.indefiniteLoop = function indefiniteLoop() {
    // Create the interval, using the config variable defined above
    setInterval(app.printAQuotes, app.config.timeBetweenQuotes);
};

// Invoke the loop
app.indefiniteLoop();
