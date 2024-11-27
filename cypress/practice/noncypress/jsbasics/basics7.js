
//introduced from ES6
//module.exports exposes the class for public usage then 'require' is used to import like shown in basics5.js
module.exports = class Person {
    //these are class/static vars
    age = 25
    //we can also define method using get method, below is not a function
    get location(){
        return "Canada"
    }
    constructor(firstName,lastName){
        //instance vars are assigned values inside the constructor, rest everything outside is static var
        this.firstName = firstName
        this.lastName = lastName
    }
    fullName(){
        return this.firstName+" "+this.lastName
    }
}

/*let person = new Person("sampleFN","sampleLN")
let personNew = new Person("sampleFNNew","sampleLNNew")
console.log(person.age)
console.log(person.location)
console.log(person.firstName)
console.log(person.fullName())
console.log(personNew.fullName())*/