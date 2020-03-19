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
//If the user made a correct response a random number is generated,
     if((lowerResponse)==="rock"||(lowerResponse)==="paper"||(lowerResponse)==="scissors") {
    responseNumber = Math.floor(Math.random()*3.33);
     }
//the computer prints what the computers random choice was, rock/paper ot scissors.
    if((responseNumber===0)&&(lowerResponse==="rock")) {
        console.log("'rock' draw try again");
    }
    else if(responseNumber===1) {
        console.log("paper");
    }
    else if(responseNumber===2) {
        console.log("scissors");
    }
 //Tells the user to correct their typo
    else {
        console.log("OI! check you didn't make a typo-only 'rock', 'paper' or 'scissors; allowed!");
    }

//Compare the two choices
//Report on who won - this will be to console log who won
// where you see that \n it means NEW LINE that is to stop the anser being squisged up to the question in the console

//readline.close closes the program 
readline.close();
}

readline.question("Please choose either rock, paper or scissors!\n", handleUserResponse);
