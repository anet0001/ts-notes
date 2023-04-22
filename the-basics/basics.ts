let username: string = "Nonso";
let hasLoggedIn: boolean = true;

username += " Anetoh";

console.log(username);

// There are multiple ways to declare arrays in typescript.

const names: string[] = username.split(" ");
const values: Array<string> = [
  "this",
  "will",
  "only",
  "accept",
  "strings",
];
const multiDimensionalArray: number[][] = [[1], [2, 3]];
