#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNumber" },
    {message:"Enter second Number",type:"number",name:"SecondNumber"},
    {message:"Select one of the Operator",
    type:"list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"]
  },
  ]);
  console.log(answer)
  if(answer.operator === "Addition")
  {
      console.log( answer.FirstNumber + answer.SecondNumber);
  }
  else if(answer.operator === "Subtraction")
  {
      console.log(answer.FirstNumber-answer.SecondNumber)
  }
  else if(answer.operator === "Multiplication")
  {
      console.log(answer.FirstNumber*answer.SecondNumber)
  }
  else if(answer.operator === "Division")
  {
      console.log(answer.FirstNumber/answer.SecondNumber)
  }
  else{
      console.log("Choose the correct Operator")
  }