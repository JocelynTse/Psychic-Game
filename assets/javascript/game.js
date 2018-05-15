//Array of possible choices - alphabet
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Player stats variables for wins, losses, #guesses, letters entered
var wins = 0;
var losses = 0;
var guesses = 9;
var letters = [];

//Press a key to make a guess (user) & compare to computer
document.onkeyup = function(event)  {
    var user = event.key.toLowerCase();
    var computer = alphabet[Math.floor(Math.random()) * alphabet.length];

//Push guess to letter array
    letters.push(user);

//Determine outcome of user vs computer
    if (user === computer && guesses > 0)   {
        wins++;
        alert("You guessed correctly!");
        guesses = 9;

    } else if (user !== computer && guesses > 0) {
        guesses = guesses - 1;

    } else if (guesses === 0)   {  
        losses++;
        alert("Try again!");
        guesses = 9;
    }

//Variable for html - keeps track of guesses, wins, & losses    
    var html = 
    "<h1>The Psychic Game</h1>" +
    "<p>Guess what letter I'm thinking of..." +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guesses + "</p>"
    "<p>Your Guesses so far: " + letters + "</p>";

    document.querySelector("#game").innerHTML = html;
    } 

