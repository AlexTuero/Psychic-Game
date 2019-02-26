//alphabet letters used for guesses
var letters = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// how many times you've won
var wins = 0;
//how many times you've lost
var losses = 0;
//remaining guesses left
var guessesLeft = 10;
//shows which letters you've guessed
var yourGuess = [];

//function starts on any alphabet key press down

document.onkeydown = function(event) {
    // userGuess starts on key press ... computerGuess is a random alphabet letter
    var userGuess = event.key;
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    if (letters.indexOf(userGuess) === -1) {
        alert("That's not a letter in the alphabet!")
    }
    if (letters.indexOf(userGuess) > -1) {
        
        if (userGuess === computerGuess) {
            wins ++;
            guessesLeft = 10;
            yourGuess = [];
        }

        if (userGuess != computerGuess) {
            guessesLeft --;
            yourGuess.push(userGuess);
        }

        if (guessesLeft === 0) {
            guessesLeft = 10;
            losses ++;
            yourGuess = [];
        }
    


    var html = 
        "<h1>The Psychic Game</h1>" +
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>" +
        "<p>Your guesses so far: " + yourGuess.join(", ") + "</p>";
        //updates on guesses and wins/losses
    document.querySelector("#main").innerHTML = html;
    }

};
