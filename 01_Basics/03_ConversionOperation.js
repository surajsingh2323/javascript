                                                   //We are doing investigation of data conversion here :)
let score = "45abc"

//console.log(typeof score);
//console.log(typeof (score));//this is as method type 

let valuenumber = Number(score)// type changed
//console.log(typeof valuenumber);
//console.log(valuenumber);//its real value type is NaN:-Not a Number, but however js convert it to a number type and for null it gives '0'and for undefined it gives again NaN. 

let isLoggedin = 1
let booleanisLoggedin = Boolean(isLoggedin)
//console.log(booleanisLoggedin);
//""=>false ; "suraj"=>true
//True=>'1' ; False=>'0' and vice versa '0'=>false ; '1'=>true
let someNumber = 33
let StringNumber = String(someNumber)
//console.log(StringNumber);
//console.log(typeof StringNumber);
//its gives value as number 33 but type is changed to String

/*********************************OPERATIONS*********************************************************************/

let value = 3
let negValue = -value
//console.log(negValue);

/*console.log(2+2);
console.log(2-2);
console.log(2*2); //2 raise to power 2
console.log(2**3); //2 raise to the power 3
console.log(2/3);
console.log(2%2); % operator used in cryptography and many algorithms */
let str1 = "Hello"
let str2 = " coders"
let str3 = str1+str2
//console.log(str3);
//console.log("1"+2);//result = 12
//console.log(1+"2");//result = 12
//console.log("1"+2+2);//result = 122
//console.log(1+2+"2");//result = 32
// read ecma for type conversion if first is string then all treated as a string; if last is string then first operation done after this string added on that operation
//console.log((3 + 4) * 5 % 3);//recommended to write operation in() that you want to execute first this is clean code way

/*console.log(+true);// output = 1
'+' will do type conversion of values in binary but this type of conversion not recommended for clean code 
console.log(+"");//output = 0 */
let num1 , num2 , num3
num1 = num2 = num3 = 3+3

let Gamecounter = 100
Gamecounter++;//++Gamecounter is prefix which will first increment then store value postfix is vice versa,source read 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment' 
console.log(Gamecounter);
//To study type conversion
//follow https://tc39.es/ecma262/#sec-type-conversion







