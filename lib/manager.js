const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNumber){

       super (name, id, email)
       this.officeNumber= officeNumber;

    }
   
    getRole(targetRole){
        const managerRole = this.employeeArray.find(manager=>manager.role === targetRole)
        console.log(managerRole)
      
    }
}



module.exports = Manager