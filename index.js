const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const managerQuestions = require("./lib/Manager_Questions");
const engineerQuestions = require("./lib/Engineer_Questions");
const internQuestions = require("./lib/Intern_Questions");
const {prompt} = require("inquirer");
const {writeFile} = require("fs");
const Main_Menu = require("./lib/Main_Menu");

let flag = 1;
const teamMembers = [];

const buildTeam = async () => {
    
    console.log("\n");
    const managerAnswers = await prompt(managerQuestions);
    teamMembers.push(managerAnswers);

    do 
    {
        console.log("\n");
        const menuSelection = await prompt(Main_Menu);
        switch(menuSelection.teamMember)
        {
            case 'Engineer':
                console.log("\n");
                const engineerAnswers = await prompt(engineerQuestions);
                teamMembers.push(engineerAnswers);
                break;
            case 'Intern':
                console.log("\n");
                const internAnswers = await prompt(internQuestions);
                teamMembers.push(internAnswers);
                break;
            case 'My Team Is Complete':
                flag = 0;
                console.log("\n\nYour Team Has Been Registered");
                break;
            default:
                break; 
        }
    }while(flag === 1);

    console.log("\n\n Team Member Data-------------------------------\n", teamMembers);
}

buildTeam();


