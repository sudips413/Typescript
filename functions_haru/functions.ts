//arrow function

const add =(a:number,b:number)=> a+b
console.log(add(10,20))

//fucntion with two data types object
function greet(person:{name:string , age:number}){
    return 'Hello'+ person.name
}
let obj={
    name:"Sudip Shrestha",
    age:70
}
console.log(greet(obj))

//function with interface

interface Person {
    name:string,
    age:number
}
const greet1=(person:Person)=>{
    return 'Hello'+ person.name

}
console.log(greet1(obj))

//function with type
type Person1={
    name:string,
    age:number
}
const greet2=(person:Person1)=>{
    return 'Hello'+ person.name

}
console.log(greet2(obj))
let a = (4)
console.log(a)



export {}