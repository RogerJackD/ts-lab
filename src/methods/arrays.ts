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

const values: number[] = [5, 12, 8, 20, 3];

const sum = values
  .filter(v => v > 10)
  .reduce((acc, v) => acc + v, 0);

console.log(sum); // 32

const names: string[] = ["juan", "maria", "luis"];

const upperNames = names.map(name => name.toUpperCase());

console.log(upperNames);

interface User {
  id: number;
  active: boolean;
}

const users: User[] = [
  { id: 1, active: true },
  { id: 2, active: true },
  { id: 3, active: false },
];

const allActive = users.every(user => user.active);

console.log(allActive); // false

interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 120 },
  { name: "Monitor", price: 900 },
];

const mostExpensive = products.reduce((max, p) =>
  p.price > max.price ? p : max
);

console.log(mostExpensive);


const numbers: number[] = [1, 2, 2, 3, 3, 3];

const countMap = numbers.reduce<Record<number, number>>((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

console.log(countMap); 

const values: number[] = [1, 2, 2, 3, 4, 4];

const uniqueValues = [...new Set(values)];

console.log(uniqueValues); // [1, 2, 3, 4]

interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: "Ana", age: 30 },
  { name: "Luis", age: 20 },
  { name: "Pedro", age: 40 },
];

const sortedByAge = [...people].sort((a, b) => a.age - b.age);

console.log(sortedByAge);

interface Item {
  id: number;
  value: string;
}

const items: Item[] = [
  { id: 1, value: "A" },
  { id: 2, value: "B" },
  { id: 3, value: "C" },
];

const foundItem = items.find(item => item.id === 2);

console.log(foundItem);
const words: string[] = ["hi", "hello", "hey", "bye"];

const grouped = words.reduce<Record<number, string[]>>((acc, word) => {
  const length = word.length;
  acc[length] = acc[length] || [];
  acc[length].push(word);
  return acc;
}, {});

console.log(grouped);
