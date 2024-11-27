//object: collection of properties
let person = {
    firstName: "sampleFN",
    lastName: "sampleLN",
    age: 26,
    fullName: function(){
        return this.firstName+" "+this.lastName
    }
}

console.log(person.firstName)
console.log(person['lastName'])
person.firstName = "newSampleFN"

console.log(person.firstName)

//we can also add property at run time
person.gender = "male"
console.log(person)
console.log('gender' in person)
//to delete a property
delete person.gender
console.log(person)

//to check if a property exists
console.log('gender' in person)

//to iterate through the properties similar to foreach loop
for(let key in person){
    console.log(key+": "+person[key])
}
console.log(person.fullName())