

class Employee {

    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
      
     

    }
    getName(targetName){
       const employeeName = employeeArray.find(employee=>employee.name === targetName)
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







module.exports = Employee