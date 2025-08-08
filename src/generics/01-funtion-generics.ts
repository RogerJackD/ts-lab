
function combinar<T, U>(a : T, b : U) : [T, U] {
    return [a , b]
}

const resp = combinar("hola", true); 
console.log(resp)

interface Resultado<T> {
    data : T,
    exito : true
}

function createResult<T>(a: T): Resultado<T>{
    return {
        data : a,
        exito : true
    }
}

console.log(createResult({hola : "objeto", id : 123}))


interface countInfo<T>{
    password : T;
    active : true
}

class bankCount<T, B> implements countInfo<T> {
    password: T;
    active = true as const;
    nickname : B;
    amount : number;

    constructor(password : T, amount: number, nickname: B){
        this.password = password;
        this.amount = amount;
        this.nickname = nickname;
    }

    incrementAmount<Z>(password : T, extraAmount: number, nameClient: Z ){
        if(password == this.password){
            this.amount += extraAmount;
            return `the client :${nameClient} gave you ${extraAmount}--- total amount now : ${this.amount}`
        }
        return "bad request"
    }
}

const miCount = new bankCount("unodos",2000,"melo")
console.log(miCount)

console.log("-----------------")
const request = miCount.incrementAmount("unodos", 3000, "roger")
console.log(request)
