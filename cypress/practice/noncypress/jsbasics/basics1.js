console.log("Hello World")
//single line comment
/* multi line comment

same as java
*/

// in js we don't specify type of the variable, javascript handles it internally depending on the value
// variables can be decalred using 'var', 'let' and 'const' (what is the difference?)
// 'var' is legacy, 'let' came in from ES6 engine

let a=4

// to see what data type is a variable
console.log(typeof(a))

let b=343.9
console.log(typeof(b))

let c="random string"
console.log(typeof(c))

let d=true

console.log(typeof(d))

// 2 more data types null and undefined (when no value is assigned)

//we can't redeclare same variable with 'let' as it will throw runtime error but its possible with 'var'
// not operator (!), same as java
c=a+b
//let c=a+b will throw error
//var c=a+b will not throw any error
console.log(c)
//const stands for constant so can't be reassigned