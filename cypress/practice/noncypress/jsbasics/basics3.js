var marks = Array(6)
var marks = new Array(20,40,60,85,97,10)
var marks = [20,40,60,85,97,10]
console.log(marks[2])
marks[3]=25
console.log(marks)
console.log(marks.length)
// unlike java, array is resizable and also behavior of stack (lifo)
//lifo
marks.push(45)
console.log(marks)
marks.pop()
console.log(marks)
//to insert in first
marks.unshift(12)
console.log(marks)

//index retrieval 
console.log(marks.indexOf(20))
//contains
console.log(marks.includes(65))

console.log(marks)
// sub array start and end index and end index exclusive, so below would be 2,3,4 indexes
var submarks = marks.slice(2,5)
console.log(submarks)

var sum=0
for(let i=0;i<marks.length;i++){
    sum=sum+marks[i]
}
console.log(sum)
//same can be done using reduce method, takes 2 args and returns one result (first argument which is the accumulator)
let total = marks.reduce((sum,mark)=>sum=sum+mark,0)
//below will throw undefined error
//let total = marks.reduce((sum,mark)=>{sum=sum+mark},0)
console.log(total)

//filters just to apply a specific filter as the name suggests and returns a new array
let newFilteredArray = marks.filter(mark=>mark %2==0)
console.log(newFilteredArray)
//map same as java stream map
let newArray = newFilteredArray.map(element=>element*3)
console.log(newArray)

let combined = newFilteredArray
    .filter(element=>element %4==0)
    .map(element=>element*2)
    .reduce((final,element)=>final=final*element,1)
console.log(combined)

//sorting
//string array
let fruites = ["Apple","Mango","Banana","Dragon Fruite"]
//ascending
console.log(fruites.sort())
//descending
console.log(fruites.reverse())

//number array
let numbers = [52,8745,6456,74,14]
//ascending
console.log(numbers.sort((a,b)=>a-b))
//descending
console.log(numbers.sort((a,b)=>b-a))