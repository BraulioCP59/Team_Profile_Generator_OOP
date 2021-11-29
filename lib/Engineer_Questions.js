//Write your questions here
const Engineer_Questions = [
    {
        type: "input",
        name: "name",
        message: "Enter a name for the engineer:", 
    },
    {
        type: "input",
        name: "employeeID",
        message: "Enter the engineer's employee id:", 
    },
    {
        type: "input",
        name: "email",
        message: "Enter the engineer's email:", 
    },
    {
        type: "input",
        name: "gitHub",
        message: "Enter the engineer's git hub user name:", 
    },
]


module.exports = Engineer_Questions;


/*
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
*/