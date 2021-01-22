
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeArray=[];



// 2.After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


const getEmployeePrompt = ()=>{
inquirer.prompt([
      /* Pass your questions in here */
  {  type:'input',
    message:'What is your employee name?',
    name:'name',
    validate:(value)=>{if(value){return true} else{return "Please enter valid information"}}
  },

  
  {  type:'input',
  message:'What is your employee ID?',
  name:'id',
  validate:(value)=>{if(value){return true} else{return "Please enter valid information"}}
  },
  
  {  type:'input',

  message:'What is your employee Email?',
  name:'email',
  validate:(value)=>{if(value){return true} else{return "Please enter valid information"}}
  },
  

  {  type:'confirm',
  message:'Would you like to add more emplyee? ',
  name:'confirmation',
  default:false,
 
  validate:(value)=>{if(value){return true} else{return "Please enter valid information"}}
  },

  {  type:'list',
  message:'What role would you like to add to your team board? ',
  choices: ['Manager', 'Engineer', 'Intern'],
  name:'role',
  validate:(value)=>{if(value){return true} else{return "Please enter valid information"}}
  },
   ]).then(info=>{
 
  
  let questions;
   if (info.role === 'Manager') {
    questions = [
      {
        type: 'input',
        message: 'What is your officeNumber?',
        name: 'officeNumber',
        validate:(value)=>{
        //only contains number
        let pass = value.match('^[0-9]+$');
        if(pass){return true} 
        else{return "Please enter valid information"}}
      }
    ]
  }
  else if (info.role === 'Engineer'){
     questions = [
      { type: 'input',
        message: 'What is your github user name?',
        name: 'github',
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}}
  
      }
    ]

  }

  else if (info.role === 'Intern'){
    questions = [
     { type: 'input',
       message: 'What school are you attending?',
       name: 'school',
       validate:(value)=>{if(value){return true} else{return "Please enter valid information"}}
 
     }
   ]

 }
 
 inquirer.prompt(questions)
 .then(info2 => {
   let newEmployee

   if(info.role === 'Manager') {
     newEmployee = new Manager(info.name, info.id, info.email, info2.officeNumber)
     
   } else if (info.role === 'Engineer') {
     newEmployee = new Engineer(info.name, info.id,info.email, info2.github)
   
   }
   else if(info.role === 'Intern'){
     newEmployee = new Intern( info.name, info.id,info.email, info2.school)
    
   }
   employeeArray.push(newEmployee)
  console.log(employeeArray)
  if(info.confirmation){
    getEmployeePrompt()

  }
  else{
    const html = render(employeeArray)
    fs.writeFile("team.html", html, (err)=>{
      if(err){
        console.log(err)

      }
      else{
        console.log("File saved")
      }
    })
  }


 })


  })
}

getEmployeePrompt()


  
  
    
