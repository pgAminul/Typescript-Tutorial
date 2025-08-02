"use strict";
let Name = "Aminul Islam";
let rollNo = 123;
let marrige = false;
let fatherName = null;
let motherName = "shahina";
motherName = 10;
motherName = true;
const anyFunction = () => {
    console.log("my name is aminul");
};
let stringArray = ["aminul", "ariful"];
let numberArray = [1, 5];
// example form
// name, string
// age, nubmer
// marrige, boolean
// optional - num, str, bool
//  tuple / triple
let mixedArray = ["aminul", 1, true, 1];
var websiteRole;
(function (websiteRole) {
    websiteRole[websiteRole["Admin"] = 0] = "Admin";
    websiteRole[websiteRole["User"] = 1] = "User";
    websiteRole[websiteRole["Guest"] = 2] = "Guest";
})(websiteRole || (websiteRole = {}));
let currentRole = websiteRole.User;
if (currentRole === websiteRole.User) {
    console.log("you have user access");
}
