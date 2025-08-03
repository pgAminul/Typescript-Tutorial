"use strict";
// 1. type inference
let myName = "Aminul Islam";
let myRollNo = 123;
let myMarrige = false;
// 2. type annotation
let nam = "Aminul Islam";
let roll = 123;
let mrge = false;
// 3. union type
let userId;
userId = 123;
userId = "123";
const printId = (id) => {
    console.log(id);
};
printId("aminul");
printId(123);
const typeAlias = {
    name: "ariful",
    age: 20,
};
const userData = {
    name: "aminul",
    age: 20,
};
const myUserData = {
    name: "ariful",
    age: 20,
};
// 5. type literal
let fixedValue;
fixedValue = "admin";
fixedValue = "User";
