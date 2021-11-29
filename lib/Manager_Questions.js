//Write your questions here
const Manager_Questions = [
    {
        type: "input",
        name: "name",
        message: "Enter a name for the manager:", 
    },
    {
        type: "input",
        name: "employeeID",
        message: "Enter the manager's employee id:", 
    },
    {
        type: "input",
        name: "email",
        message: "Enter the manager's email:", 
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter an office number for the manager:", 
    },
]


module.exports = Manager_Questions;



/*
WHEN I start the application - Done 
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number - Done

WHEN I enter the team manager’s name, employee ID, email address, and office number - Done 
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team - Done

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
*/