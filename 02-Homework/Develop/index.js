const inquirer = require("inquirer");
// array of questions for user
const questions = [{
    type: "input",
    message: "What is your project's title?",
    name: "title"
},
{
    type: "input",
    message: "How would you describe your project?",
    name: "Description"
},
{
    type: "input",
    message: "If you have the time, please provide some installation instructions for your project.",
    name: "Installation"
},
{
    type: "input",
    message: "Help us fill out the Usage section with some instructions and examples of your project in action.",
    name: "usage"
},
{
    type: "input",
    message: "Please give us some guidelines for future contributions to your project",
    name: "contribution"
},
{
    type: "input",
    message: "Tell us how we can test your application please.",
    name: "tests"
},
{
    type: "list",
    message: "What license does your project require?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    name: "license"
},
{
    type: "input",
    message: "Please enter your Github username",
    name: "username"
},
{
    type: "input",
    message: "Lastly, please enter your email address.",
    name: "email"
}];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
