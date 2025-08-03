let Name: string = "Aminul Islam";
let rollNo: number = 123;
let marrige: boolean = false;

let fatherName: null = null;

let motherName: any = "shahina";
motherName = 10;
motherName = true;

const anyFunction = (): void => {
  console.log("my name is aminul");
};

let stringArray: string[] = ["aminul", "ariful"];
let numberArray: number[] = [1, 5];

// example form
// name, string
// age, nubmer
// marrige, boolean
// optional - num, str, bool
//  tuple / triple

let mixedArray: [string, number, boolean, any] = ["aminul", 1, true, 1];

enum websiteRole {
  Admin,
  User,
  Guest,
}

let currentRole: websiteRole = websiteRole.User;

if (currentRole === websiteRole.User) {
  console.log("you have user access");
}
