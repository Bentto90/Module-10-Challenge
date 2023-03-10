const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputloc = path.join(OUTPUT_DIR, "SAMPLE.html")
const generateOutput = require('./src/template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');



employeeArray = [];

function init (){

  function generateTeam (){
    inquirer.prompt([{
      type: 'list',
      name: 'employeeRole',
      message: 'What kind of employee do you want to add?',
      choices: ['Manager', 'Engineer', 'Intern', 'I am done with adding employee']
    }]). then(function (userInput) {
      switch(userInput.employeeRole) {
        case "Manager":
          generateManager();
          break;
        case "Engineer":
          generateEngineer();
          break;
        case "Intern":
          generateIntern();
          break;

        default:
          gennerateHTML();
      }
    })
  }
  function generateManager() {
    inquirer.prompt ([
      {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?"
      },

      {
        type: 'input',
        name: 'id',
        message: "What is the manager's employee id?"
      },

      {
        type: 'input',
        name: 'email',
        message: "What is the manager's email?"
      },

      {
        type: 'input',
        name: 'officenum',
        message: "What is the manager's office number?"
      },
    ]).then(response => {
      const manager = new Manager(response.name, response.id, response.email, response.officenum);
      employeeArray.push(manager);
      generateTeam();
    });
  }
  function generateEngineer() {
    inquirer.prompt ([
      {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?"
      },

      {
        type: 'input',
        name: 'id',
        message: "What is the engineer's employee id?"
      },

      {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email?"
      },

      {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github ID?"
      },
    ]).then(response => {
      const engineer = new Engineer(response.name, response.id, response.email, response.github);
      employeeArray.push(engineer);
      generateTeam();
    });
  }
  function generateIntern() {
    inquirer.prompt ([
      {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?"
      },

      {
        type: 'input',
        name: 'id',
        message: "What is the intern's employee id?"
      },

      {
        type: 'input',
        name: 'email',
        message: "What is the intern's email?"
      },

      {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?"
      },
    ]).then(response => {
      const intern = new Intern(response.name, response.id, response.email, response.school);
      employeeArray.push(intern);
      generateTeam();
    });
  }

function gennerateHTML () {
  console.log('You have created team list!')

  fs.writeFileSync(outputloc, generateOutput(employeeArray), "utf-8")
}

generateTeam();

}

init();