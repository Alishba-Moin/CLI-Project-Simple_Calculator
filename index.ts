#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.greenBright(`\n   <<<====================================>>>`));
console.log(chalk.bold.redBright(`<<<=========>>>  ${chalk.redBright.bold('SIMPLE CALCULATOR')}  <<<=========>>>`));
console.log(chalk.bold.greenBright(`   <<<====================================>>>\n`));

const answer = await inquirer.prompt([
  {
    message: chalk.italic.bold("Enter a first number"),
    type: "number",
    name: "FirstNumber",
  },
  {
    message: chalk.italic.bold("Enter a second number"),
    type: "number",
    name: "SecondNumber",
  },
  {
    message: chalk.italic.bold("Select one of the operators to perform operation"),
    type: "list",
    name: "operator",
    choices: ["Addition","Subtraction","Multiplication","Division"],
  },
]);

// conditional statment(if-else)

if(answer.operator === "Addition"){
    console.log(chalk.blueBright(answer.FirstNumber + answer.SecondNumber));
}
else if(answer.operator === "Subtraction"){
    console.log(chalk.blueBright(answer.FirstNumber - answer.SecondNumber));
}
else if(answer.operator === "Multiplication"){
    console.log(chalk.blueBright(answer.FirstNumber * answer.SecondNumber));
}
else if(answer.operator === "Division"){
    console.log(chalk.blueBright(answer.FirstNumber / answer.SecondNumber));
}
else{
   console.log(chalk.red("Please select a valid operator"));
}




