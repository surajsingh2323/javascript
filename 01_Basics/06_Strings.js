const name = "Suraj"
const age = 21
// console.log(name + age + "value"); not recommended old method
console.log(`Hello my name is ${name} and my age is ${age}`);
// this is a string interpolation in which we make place holders ${} where we can inject variables good for using in backend devlopment ,its a same like string template in kotlin 
const gameName = new String(`Surajhc`);// declaring string another method 

console.log(gameName[0]);
console.log(gameName.__proto__);// for accessing prototype there are amny syntax we used .__prot__ here ;
// we will get a object {} that seems to empty but there are many values in it, best way to check these is through console(by inspect)
console.log(gameName.length);
console.log(gameName.toUpperCase());// use ()at end otherwise it only tell--> function toUppercase and also it using stack memory

