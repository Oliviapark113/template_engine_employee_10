
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
  
  {  type:'list',
  message:'What role would you like to add to your team board? ',
  choices: ['Manager', 'Engineer', 'Intern'],
  name:'role',
  validate:(value)=>{if(value){return true} else{return "Please enter valid information"}}
  },

  {  type:'confirm',
  message:'Would you like to add more emplyee? ',
  name:'confirmation',
  default:false,
 
  validate:(value)=>{if(value){return true} else{return "Please enter valid information"}}
  },


   ]).then(info=>{
 
  
  let questions;
   if (info.role === 'Manager') {
    questions = [
      {
        type: 'input',
        message: 'What is manager\'s officeNumber?',
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
        message: 'What is engineer\'s github user name?',
        name: 'github',
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}}
  
      }
    ]

  }

  else if (info.role === 'Intern'){
    questions = [
     { type: 'input',
       message: 'What school is intern attending?',
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

  if(info.confirmation){
    getEmployeePrompt()

  }
  else{
    const html = render(employeeArray)
    fs.writeFile(outputPath, html, (err)=>{
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


  
  
    
