let firstVar :string ="My name is Test";
const index =firstVar.lastIndexOf("Test");
console.log(firstVar);
console.log(index)

let firstNum: number = 100;
console.log(firstNum)

const firstBoolean : Boolean = true;
console.log(firstBoolean)

//array
let arrayNumber :number[] = [1,2,3,4,45,6,7,8,9,10];
console.log(arrayNumber)

//functio to print the odd number
const printOdd =(num: number)=>{
    if (num % 2 == 0){
        return num        

    }
    else{
        return null
    }


}
printOdd(10); //returns null
printOdd(11); //returns 11
//printOdd("String"); // error denotes that the argument is not a number








export {} //temporarily fix  the error "Cannot redeclare block-scoped variable 'firstVar'."
