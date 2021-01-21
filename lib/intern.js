const Employee = require('./employee');


class Intern extends Employee {
    constructor(school){

       super (name, id, email)
       this.school= school;

    }

    getSchool(targetSchool){
        const internSchool = this.employeeArray.find(intern=>intern.school ===targetSchool)
        console.log(internSchool)
    }
   
    getRole(targetRole){
        const internRole = this.employeeArray.find(intern=>intern.role === targetRole)
        console.log(internRole)
      
    }
}



module.exports = Intern