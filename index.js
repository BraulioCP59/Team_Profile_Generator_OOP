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
let teamCards ='';


const buildTeamSite = async () => {

    teamMembers.forEach((employee) => {
        switch(employee.getRole())
        {
            case 'Manager':
                teamCards += ` <div id="Manager" class="card col-md-6" style="width: 17rem; margin: 10px 0; padding: 0;">
                <div style="background-color: dodgerblue; border-top-right-radius: 5px; border-top-left-radius: 5px; color: floralwhite; padding-left: 15px;">
                    <h3>Braulio Mora</h3>
                    <h3>Manager</h3>
                </div>
                <div class="" style="background-color: rgb(248, 248, 248);">
                  <div style="border: 1px solid lightgray; border-radius: 5px; margin: 30px 15px; background-color: white;">
                    <p style="border-bottom: 1px solid lightgray; margin-bottom: 0;">ID: </p>
                    <p style="margin-bottom: 0;">Email:<a href="mailto: brauliocdc59@gmail.com"> brauliocdc59@gmail.com </a></p>
                    <p style="border-top: 1px solid lightgray; margin-bottom: 0;">Office Number: </p>
                  </div>
                </div>
            </div>`;
                break;
            case 'Engineer':
                teamCards += `<div id="Engineer" class="card col-md-6" style="width: 17rem; margin: 10px 0; padding: 0;">
                <div style="background-color: dodgerblue; border-top-right-radius: 5px; border-top-left-radius: 5px; color: floralwhite; padding-left: 15px;">
                    <h3>Cynthia Mora</h3>
                    <h3>Engineer</h3>
                </div>
                <div class="" style="background-color: rgb(248, 248, 248);">
                  <div style="border: 1px solid lightgray; border-radius: 5px; margin: 30px 15px; background-color: white;">
                    <p style="border-bottom: 1px solid lightgray; margin-bottom: 0;">ID: </p>
                    <p style="margin-bottom: 0;">Email:<a href="mailto: brauliocdc59@gmail.com"> brauliocdc59@gmail.com </a></p>
                    <p style="border-top: 1px solid lightgray; margin-bottom: 0;">GitHub: <a href="https://github.com/BraulioCP59" target="_blank">BraulioCP59</a></p>
                  </div>
                </div>
            </div>`;
                break;
            case 'Intern':
                teamCards += ` <div id="Intern" class="card col-md-6" style="width: 17rem; margin: 10px 0; padding: 0;">
                <div style="background-color: dodgerblue; border-top-right-radius: 5px; border-top-left-radius: 5px; color: floralwhite; padding-left: 15px;">
                    <h3>Alden Mora</h3>
                    <h3>Intern</h3>
                </div>
                <div class="" style="background-color: rgb(248, 248, 248);">
                  <div style="border: 1px solid lightgray; border-radius: 5px; margin: 30px 15px; background-color: white;">
                    <p style="border-bottom: 1px solid lightgray; margin-bottom: 0;">ID: </p>
                    <p style="margin-bottom: 0;">Email:<a href="mailto: brauliocdc59@gmail.com"> brauliocdc59@gmail.com </a></p>
                    <p style="border-top: 1px solid lightgray; margin-bottom: 0;">School: </p>
                  </div>
                </div>
            </div>`;
                break;
            default:
                break;
        }
    });

    let teamSite = 
    `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>myTeam</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
            <div class="d-flex p-2 justify-content-center"  style="background-color: rgb(240, 72, 72);">
                <h1 style="color: white;">My Team</h1>
            </div>
            <div class="container">
                <div class="row d-flex justify-content-evenly" style="margin: 20px 0;">
                 ${teamCards}        
                </div>
            </div>
    </body>
    </html>`;

    writeFile('./Results/Team_Roster.html', teamSite, (err) => {
        if(err)
        {
            console.log("YOUR FILE FAILED TO BE SAVED, YOU HAVE NO TEAM!");
            return err;
        }
        console.log("\n--------------------------------------\nYOUR TEAM ROSTER HAS BEEN SUCCESSFULLY CREATED!\n-------------------------------------\n");
    } );
}

const buildTeam = async () => {
    
    console.log("\n");
    const managerAnswers = await prompt(managerQuestions);
    teamMembers.push(new Manager(managerAnswers));
    console.log("\n---------------------------\nMANAGER HAS BEEN INSTANTIATED!\n---------------------------\n");

    do 
    {
        console.log("\n");
        const menuSelection = await prompt(Main_Menu);
        switch(menuSelection.teamMember)
        {
            case 'Engineer':
                console.log("\n");
                const engineerAnswers = await prompt(engineerQuestions);
                teamMembers.push(new Engineer(engineerAnswers));
                console.log("\n---------------------------\nENGINEER HAS BEEN INSTANTIATED!\n---------------------------\n");
                break;
            case 'Intern':
                console.log("\n");
                const internAnswers = await prompt(internQuestions);
                teamMembers.push(new Intern(internAnswers));
                console.log("\n---------------------------\nINTERN HAS BEEN INSTANTIATED!\n---------------------------\n");
                break;
            case 'My Team Is Complete':
                flag = 0;
                console.log("\n---------------------------\nYOUR TEAM HAS BEEN REGISTERED!!\n---------------------------\n");
                break;
            default:
                break; 
        }
    }while(flag === 1);

    buildTeamSite();

    console.log("\n-------------------------------TEAM MEMBER DATA-------------------------------\n\n", teamMembers);
}


buildTeam();


