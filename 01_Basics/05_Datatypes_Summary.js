                                    // 1st -Primitive

// 7 Types: String , Number , Boolean , Undefined , Null , Symbol , BigInt(For Sceintific values);

const score =100 // in js we don't need to define types,while in typescript we need like score:Number(Type)
//So js is dynamic in nature which handle types flexiblitybut we have to be carefull of type errors,here typescript(Static typing)helps
const scoreValue =100.3
const isLoggedin = false
const Outsidetemp = null
let userEmail; // will give undefined
                           //Symbol basiclly used in react or in any frontend library
const id = Symbol('123')
const anotherID = Symbol('123')
                        // both will be treated as different even with same value
console.log(id===anotherID);// will give false
const bigNumber = 367384678324566666664747747474777n // using 'n' will automatically convert it to bigInt type.
                        
                                // 2nd -Reference(Non-Primitive)
// Arrays , Objects , Functions;
const Heros = ("hanuman","Shaktiman","Raj","Mighty raju")
let myObj = {
    name:"Suraj",
    age:21,
}
const myFunction = function(){ // Here,we declared function as a variable.
    console.log("Hello Computer");
}

console.log(typeof id);// this function used to tell type 




