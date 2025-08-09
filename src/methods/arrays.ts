//npx nodemon --exec ts-node src/01-data-types.ts

import { ValidRoles } from "../enums";

const myArrayNumber : Array<number> = [1,2,3,4,5];
console.log(myArrayNumber);

const arrayMap : Array<number> = myArrayNumber.map(i => i * 2);
console.log(arrayMap);

const arrayFilter = myArrayNumber.filter(i => i % 2 == 0);
console.log(arrayFilter);

//concat method
const myArrayString : Array<string> = ["roger", "melo"];
const resultConcat: Array<number | string> = [...myArrayNumber, ...myArrayString];
console.log(resultConcat)

const rol: ValidRoles = ValidRoles.admin

console.log(rol)