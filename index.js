const fs = require("fs");
const inquirer = require("inquirer");
const utils = require("utils");

inquirer
  .prompt([
    {
      type: "input",
      message: "What would you like to name your README?",
      name: "title"
    },
    {
      type: "input",
      message: "Please enter a description of your project",
      name: "description"
    },
    {
      type: "input",
      message: "How do you install your project?",
      name: "install",
    },
    {
        type: "input",
        message: "How do you use your project?",
        name: "usage",
    },
    {
        type: "input",
        message: "License?",
        name: "license",
    },
    {
        type: "input",
        message: "Who contributed?",
        name: "contributors",
    },
    {
        type: "input",
        message: "test",
        name: "test",
    },
    {
        type: "input",
        message: "Questions",
        name: "questions",
    },
  ])
  .then(function(response) {

    
  })





const questions = [

];

function writeToFile(fileName, data) {
}

function init() {

}

init();
