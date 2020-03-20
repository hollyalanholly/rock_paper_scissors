console.log("Welcome pals to the wonder that is the wildly exciting ' Rock, Paper, Scissors!!'");
//Obtain a choice from user
//readline is about acquiring input from the terminal
const readline = require("readline").createInterface({
 input: process.stdin,
 output: process.stdout
});

function handleUserResponse (response) {
    //Make all capitals or strip capatlisation
 var lowerResponse =response.toLowerCase();
 //If the user made a correct response a random number is generated,
if((lowerResponse)==="rock"||(lowerResponse)==="paper"||(lowerResponse)==="scissors") {
    responseNumber = (Math.random());
     }   
    else {
    return console.log("typo ...balls")
    }
//The computer compares the two choices and prints what the computer's random choice was, rock/paper or scissors.
//Reports on who won - this will be to console log who won
    if((responseNumber<=0.33)&&(lowerResponse==="rock")) {
        console.log("'ROCK' draw try again");
    }
    else if((responseNumber<=0.33)&&(lowerResponse==="paper")) {
        console.log("ROCK! you win.");
    }
    else if((responseNumber<=0.33)&&(lowerResponse==="scissors")) {
        console.log("ROCK! in your face loser.");
    }
    else if((responseNumber>0.33<=0.66)&&(lowerResponse==="paper")) {
        console.log("'PAPER' draw try again");
    }
    else if((responseNumber>0.33<=0.66)&&(lowerResponse==="rock")) {
        console.log("PAPER! in your face loser.");
    }
    else if((responseNumber>0.33<=0.66)&&(lowerResponse==="scissors")) {
        console.log("PAPER! you win.");
    }
    else if((responseNumber>0.66)&&(lowerResponse==="scissors")) {
        console.log("'SCISSORS' draw try again");
    }
    else if((responseNumber>0.66)&&(lowerResponse==="rock")) {
        console.log("SCISSORS! you win.");
    }
    else if((responseNumber>0.66)&&(lowerResponse==="paper")) {
        console.log("SCISSORS! in your face loser.");
    }
// where you see that \n it means NEW LINE that is to stop the anser being squisged up to the question in the console
//readline.close closes the program 
readline.close();
}

readline.question("Please choose either rock, paper or scissors!\n", handleUserResponse);
