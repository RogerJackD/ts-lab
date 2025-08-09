import { users } from "../Type-level-constructs/interfaces/data-user.interface";

//npx nodemon --exec ts-node src/01-data-types.ts


/// Iteración sin transformación foreach
users.forEach((user, i) => {
    user.name = 'nameremoved'
    console.log(user)
})

const names: string[] = users.map( user => user.name)

console.log(names)