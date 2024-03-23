#!/usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number -done
// 2) user input for gussing number - done
// 3) compare user input with computer genrated number and show result-done
const randomeNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6",
    },
]);
if (answer.userGuessedNumber === randomeNumber) {
    console.log("Conguratulations! you guessed right number ");
}
else {
    console.log("You guessed wrong number");
}
console.log(answer);
