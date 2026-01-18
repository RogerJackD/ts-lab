import { users } from "../Type-level-constructs/interfaces/data-user.interface";

//npx nodemon --exec ts-node src/01-data-types.ts


/// Iteración sin transformación foreach
users.forEach((user, i) => {
    user.name = 'nameremoved'
    console.log(user)
})

const names: string[] = users.map( user => user.name)

console.log(names)

const findName = users.find( user => user.familyMember.find( family => family.fullName === 'dad' ))
console.log("----------", findName)

interface User {
  id: number;
  name: string;
  active: boolean;
}

const users: User[] = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
];

// example usage
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);

const numbers: number[] = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(n => n % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]
