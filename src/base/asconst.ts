
//let → puedes reasignar la variable y cambiar su contenido interno.
let user = {
    name : 'roger',
    age : 21,
}
//aceptable por let
user = {
    name : 'roger',
    age : 21,
}

console.log(user)

// const → no puedes reasignar la variable, pero sí modificar su contenido interno si es un objeto o array.
const config = {
    tema: "oscuro",
    maxUsers: 10,
} 
//ERROR!
// const config = {
//     tema: "claro",
//     maxUsers: 1000,
// } 

config.maxUsers = 11;

console.log(config)


//as const = objeto literal y readonly con valores literales
const credential = {
    password: "abc123",
    user: "admin123",
} as const 

// credential.password = "???err0r"