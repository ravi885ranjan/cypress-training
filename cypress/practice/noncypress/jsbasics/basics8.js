const Person = require("./basics7");

//inheritance
class Employee extends Person {
    //mandatory to call super constructor as first statement
    constructor(firstName,lastName){
        super(firstName,lastName)
    }
    //overriding if not provided then super class implementation would be called
    get location(){
        return "some place"
    }
}
let employee = new Employee("randomFN","randomLN")
console.log(employee.age)
console.log(employee.location)
console.log(employee.fullName())