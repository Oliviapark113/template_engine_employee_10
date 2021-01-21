const inquirer = require('inquirer');

class Employee {

    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.employeeArray = [];

    }
    getName(targetName){
       const employeeName = this.employeeArray.find(employee=>employee.name === targetName)
       console.log(employeeName)
      
    }

    getId(targetId){
        const employeeID = this.employeeArray.find(employee=>employee.id === targetId)
        console.log(employeeID)
    }

    getEmail(targetEmail){
        const employeeEmail = this.employeeArray.find(employee=>employee.Email === targetEmail)
        console.log(employeeEmail)
    }

    getRole(targetRole){
        const employeeRole = this.employeeArray.find(employee=>employee.Role === targetRole)
        console.log(employeeRole)
    }


}

const employee = new Employee( "Olivia", 5378,"oliviaypark113@gmail.com"
// [
//   { name: "Olivia", id:5378, email:"oliviaypark113@gmail.com" }
 
// ]
);

employee.getName()





module.exports = Employee