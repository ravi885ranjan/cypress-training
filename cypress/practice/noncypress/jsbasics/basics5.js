const Person = require('./basics7')

//Strings very similar to array
let day = 'tuesday '
console.log(day.length)
//sub string
let subDay = day.slice(0,4)
console.log(subDay)
//character at index
console.log(day[2])

//split into array by character/string
let splitArray = day.split("s")
console.log(splitArray[0])
console.log(splitArray[1])
console.log(splitArray[1].length)
console.log(splitArray[1].trim().length)

let first = '23'
let second = '96'
//let diff = Number(second)-Number(first)
let diff = parseInt(second)-parseInt(first)

console.log(diff)

//back to string
console.log(diff.toString())

//concatenate using +
console.log(diff.toString()+"dsfgsd")

//indexOf

let test = "this day is a nice day"

//search string and from index (inclusive), returns -1 when not found
console.log(test.indexOf("day",6))
let count=0
let index = test.indexOf("day")
while(index!== -1){
    count++
    index = test.indexOf("day",index+1)
    }
    console.log(count)


let person = new Person("rr","ll")
console.log(person.fullName())