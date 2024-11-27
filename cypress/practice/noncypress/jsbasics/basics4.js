//scopes
// var keyword scope is global and inside function not code block {}
// let and const scope is global and code block {}
//block of code
function add(a,b){
 return a+b
}

let sum = add(2,3)
console.log(sum)

//anonymous function
let newSum = function(c,d){
    return c+d
}
//let newSum1 = (c,d)=>c+d

//how to call
console.log(newSum(3,2))

var greet = "Evening"
if(1==1){
    //global value would be changed as var scope is not on code block level
    var greet = "Afternoon"
}
function change(){
    var greet = "Morning"
    //this variable will die out outside the function
}
//will print Afternoon
console.log(greet)

let newGreet = "Evening"
if(1==1){
    //this variable will die out outside the code block
    let newGreet = "Afternoon"
}
function change(){
    let newGreet = "Morning"
    //this variable will die out outside the function as that is also a code block
}
//will print Evening
console.log(newGreet)