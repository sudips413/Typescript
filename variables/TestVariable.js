"use strict";
exports.__esModule = true;
var firstVar = "My name is Test";
var index = firstVar.lastIndexOf("Test");
console.log(firstVar);
console.log(index);
var firstNum = 100;
console.log(firstNum);
var firstBoolean = true;
console.log(firstBoolean);
//array
var arrayNumber = [1, 2, 3, 4, 45, 6, 7, 8, 9, 10];
console.log(arrayNumber);
//functio to print the odd number
var printOdd = function (num) {
    if (num % 2 == 0) {
        return num;
    }
    else {
        return null;
    }
};
printOdd(10); //returns null
printOdd(11); //returns 11
