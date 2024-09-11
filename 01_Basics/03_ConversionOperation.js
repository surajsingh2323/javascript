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
console.log(StringNumber);
console.log(typeof StringNumber);
//its gives value as number 33 but type is changed to String

