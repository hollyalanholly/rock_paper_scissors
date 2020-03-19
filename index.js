console.log("Welcome pals to the wonder that is the wildly exciting ' Rock, Paper, Scissors!!'");
//Obtain a choice from user
//readline is about acquiring input from the terminal
const readline = require("readline").createInterface({
 input: process.stdin,
 output: process.stdout
});

function handleUserResponse (response) {
//make all capitals or strip capatlisation
 var lowerResponse =response.toLowerCase();
//Validate the user's choice and tell them if they made a mistake
 if((lowerResponse)==="rock"||(lowerResponse)==="paper"||(lowerResponse)==="scissors") {
    console.log(response);
 }
    else {console.log("OI! check you didn't make a typo-only 'rock', 'paper' or 'scissors; allowed!");
    }
 
 
 
  //Computer to make random selection
  //Random choice of rock paper scissors
//Compare the two choices
//Report on who won - this will be to console log who won
// where you see that \n it means NEW LINE that is to stop the anser being squisged up to the question in the console

//readline.close closes the program 
readline.close();
}

readline.question("Please choose either rock, paper or scissors!\n", handleUserResponse);
