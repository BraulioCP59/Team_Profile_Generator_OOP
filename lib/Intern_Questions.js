//Write your questions here
const Intern_Questions = [
    {
        type: "input",
        name: "name",
        message: "Enter a name for the intern:", 
    },
    {
        type: "input",
        name: "employeeID",
        message: "Enter the intern's employee id:", 
    },
    {
        type: "input",
        name: "email",
        message: "Enter the intern's email:", 
    },
    {
        type: "input",
        name: "schoolName",
        message: "What school does this intern attend?", 
    },
]


module.exports = Intern_Questions;



/*
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
*/