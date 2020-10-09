const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);


function writeToFile(fileName, data, response) {
    writeFileAsync(fileName, generateMarkdown(data, response), "utf8")
    console.log(response)
}

function init() {
    return inquirer.prompt([
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
          message: "What dependecies are required to use your project?",
          name: "install",
        },
        {
            type: "input",
            message: "How do you use your project?",
            name: "usage",
        },
        {
            type: "input",
            message: "What license did you use?",
            name: "license",
        },
        {
            type: "input",
            message: "Who else contributed?",
            name: "contributors",
        },
        {
            type: "input",
            message: "Tests?",
            name: "test",
        },
        {
            type: "input",
            message: "What is your Github username?",
            name: "username",
        },
      ])
      
      .then(function(data) {
        const queryUrl = `https://api.github.com/users/${data.username}`;  
        axios.get(queryUrl).then(function(response) {
          writeToFile("README.md", data, response)
        },

      
      
        )
      .catch(function (error){
        console.log(error)
      })
      })
    
}

init();
