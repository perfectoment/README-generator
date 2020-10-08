const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);


function writeToFile(fileName, data) {
    writeFileAsync(fileName, generateMarkdown(data), "utf8")
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
            message: "Tests?",
            name: "test",
        },
        {
            type: "input",
            message: "Github profile picture?",
            name: "Githubpics",
        },
        {
            type: "input",
            message: "Github email?",
            name: "Githubemail",
        },
      ])
      
      .then(function(data) {
        axios.get()
        writeToFile("README.md", data)
        
        })
    
}



init();
