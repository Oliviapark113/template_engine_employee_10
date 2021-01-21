const inquirer = require('inquirer');
const fs = require('fs')

const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
// let department = process.argv[2];
// let employName = process.argv[3];




let employeeArray = [];


const getPromptEmployee = ()=>{
    return  inquirer.prompt([
      /* Pass your questions in here */
    {  type:'input',
    message:'What is your employee name?',
    name:'name',
    validate:(value)=>{if(value){return true} else{return "Please enter valid information"}}
  },

  {  type: "checkbox",
  message:"What is employee's role?",
  name: "role",
  choices: ['Manager', 'Engineer', 'Intern'],
  validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},
  
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
  
  
 
    ])
  }
  
  getPromptEmployee().then(info=>{
  employeeArray.push(info)
  console.log(employeeArray)
  const employee = new Employee (info.name, info.id, info.email)
  employee.getName("Olivia")
  
  console.log(employee)
  //  fs.writeFile(`enployee.html`, html, err =>{if(err) throw err})
  
  
  })
//   .catch(error => console.log(error))




    // const rendertoHTML =employeeArray.map(employee=>{
    //       return `
          
          
          
          
          
    //       `



    // }).join("")


   