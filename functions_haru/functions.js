"use strict";
//arrow function
exports.__esModule = true;
var add = function (a, b) { return a + b; };
console.log(add(10, 20));
//fucntion with two data types object
function greet(person) {
    return 'Hello' + person.name;
}
var obj = {
    name: "Sudip Shrestha",
    age: 70
};
console.log(greet(obj));
var greet1 = function (person) {
    return 'Hello' + person.name;
};
console.log(greet1(obj));
