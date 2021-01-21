const inquirer = require('inquirer');

const Employee = require('./lib/employee')




let employeeArray = [];


const getPromptEmployee = ()=>{
    return  inquirer.prompt([
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
  
  
  {  type: "checkbox",
  message:"What is employee's role?",
  name: "role",
  choices: ['Fullstack Engineer', 'Front end developer', 'Back-end developer', 'Account'],
  validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},
  
  }
    ])
  }
  
  getPromptEmployee().then(info=>{
      employeeArray.push(info)
   console.log(employeeArray)
  
  
  })


