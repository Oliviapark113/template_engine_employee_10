const Employee = require('./employee');

class Engineer extends Employee{
   constructor (github){
       super (name, id, email)
        this.github = github


   }
   getGitHub(targetGithub){
    const githubUsername = this.employeeArray.find(engineer=>engineer.github === targetGithub)
    console.log(githubUsername)
   }

   getRole(targetRole){
    const engineerRole = this.employeeArray.find(engineer=>engineer.role === targetRole)
    console.log(engineerRole)
}




}


module.exports = Engineer