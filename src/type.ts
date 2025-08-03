// 1. type inference

let myName = "Aminul Islam";
let myRollNo = 123;
let myMarrige = false;

// 2. type annotation
let nam: string = "Aminul Islam";
let roll: number = 123;
let mrge: boolean = false;

// 3. union type

let userId: string | number;
userId = 123;
userId = "123";

const printId = (id: string | number) => {
  console.log(id);
};

printId("aminul");
printId(123);

// 4. type Alias / interface

// alias
type userName = string;
type userAge = number;
type userMarrage = boolean;
type userInfo = any;

type UsersData = {
  name: userName;
  age: userAge;
};

const typeAlias: UsersData = {
  name: "ariful",
  age: 20,
};

// interface

interface User {
  name: string;
  age: number;
}

const userData: User = {
  name: "aminul",
  age: 20,
};

const myUserData: User = {
  name: "ariful",
  age: 20,
};

// 5. type literal

let fixedValue: "admin" | "User";

fixedValue = "admin";
fixedValue = "User";
