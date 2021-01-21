const inquirer = require('inquirer');

class Manager extends Employee {
    constructor(officeNumber){
       super ()

    }
   

    getName(data){
      console.log(`NAME: ${data.name}`)
    }
    getId(data){
        console.log(`ID: ${data.id}`)
    }
    getEmail(){
        console.log(`ID: ${data.email}`)
    }
    getRole(){
        //returns Employee...
        console.log(`ID: ${data.role}`)
    }
}



module.exports = Manager