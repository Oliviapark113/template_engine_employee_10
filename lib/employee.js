
 
class Employee {

    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
      
     

    }
    getName(){
     return this.name? this.name:null;  
    }

    getId(){
        return this.id? this.id:null;
    }

    getEmail(){
        return this.email? this.email:null;
      
    }

    getRole(){
       return "Employee"
    }

}







module.exports = Employee