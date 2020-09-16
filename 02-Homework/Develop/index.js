const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
const questions = [{
    type: "input",
    message: "What is your project's title?",
    name: "title",
    default: "Cool Project for Cool People"
},
{
    type: "input",
    message: "How would you describe your project?",
    name: "description",
    default: "It's a trip to Coolsville"
},
{
    type: "input",
    message: "If you have the time, please provide some installation instructions for your project.",
    name: "installation"
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
    name: "username",
    default: "kylegero"
},
{
    type: "input",
    message: "Lastly, please enter your email address.",
    name: "email",
    default: "kylepyk@gmail.com"
}];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            return console.log(err);
        }
        console.log("Congratulations! Now you have a ReadMe!")
    });
}

const writeFileAysnc = util.promisify(writeToFile);

// function to initialize program
async function init() {
    try{
        const userInput = await inquirer.prompt(questions);
        console.log("You said ", userInput);

        const markdown = generateMarkdown(userInput);
        console.log(markdown);

        await writeFileAysnc("ReadMeExample.md", markdown);
} catch (error) {
    console.log(error);
}};


// function call to initialize program
init();
