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

function maxSumSubarray(arr: number[], k: number): number {
  let maxSum = 0;
  let windowSum = 0;
  
  // Tu código aquí
  
  return maxSum;
}
