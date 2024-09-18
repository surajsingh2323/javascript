const name = "Suraj"
const age = 21
// console.log(name + age + "value"); not recommended old method
console.log(`Hello my name is ${name} and my age is ${age}`);
// this is a string interpolation in which we make place holders ${} where we can inject variables and its good for using in backend devlopment ,its a same like string template in kotlin 
const gameName = new String(`Suraj_hc_com`);// declaring string another method 
                            // Methods for Strings:-
console.log(gameName[0]);
console.log(gameName.__proto__);// for accessing prototype there are amny syntax we used .__prot__ here ;
// we will get a object {} that seems to empty but there are many values in it, best way to check these is through console(by inspect)
console.log(gameName.length);
console.log(gameName.toUpperCase());// use ()at end otherwise it only tell--> function toUppercase and also using stack memory
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));// if give random character that is not in string it gives (-1).
const newstring = gameName.substring(0,4)// 4th index will not included but 4 characters will print here.
//this ignores negative values and start from '0';
console.log(newstring);
const anotherString = gameName.slice(0,-6)// used to extract specific section in string mention in range ;return '-1' if not found.also negative values for indexing accepted.ex:- (0,-6) -->,6 charcters from '5th' to '0' index <--(reverse order right to left)
console.log(anotherString);
const newstringone = "   Suraj  " // sometimes when we make userform for our websites ,user delebrately or unknowingly add some spaces or extra characters like in email etc that we don't want to save for our database, for this we can use '.Trim' method
console.log(newstringone);
console.log(newstringone.trim());// trimstart and trimend can use for specific trim
const Url = "https://Suraj.com/Suraj%20Singh"// browser don't understand spaces so it will convert them into '%20' in url encoding
console.log(Url.replace("%20","_"));//  will replace (value,with value),now url become usable.
console.log(Url.includes("suraj"));// tell that value present in string or not
console.log(gameName.split("_"));// will split string on basis of("given basis"),we did on "_" here
// note:- check methods applied on changed String value or original String based on memory allocated(Stack,Heap)
//***************study methods of strings from'mdn'docs,mastering these methods = knowing Strings in js 



