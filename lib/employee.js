
 
class Employee {

    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
      
     

    }
    getName(){
     return this.name?this.name:null;
      
    }

    getId(){
        return this.id?this.id:null;
    }

    getEmail(){
        return this.email?this.email:null;
      
    }

    getRole(){
    //    let id =this.id.match('^[0-9]+$')
    //    let email = this.email.match('@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$"')
       return "Employee"
    }


}







module.exports = Employee