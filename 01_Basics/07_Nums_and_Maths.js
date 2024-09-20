const score = 100
//console.log(score);

const balance = new Number(100)// we intensionaly defined its type

//console.log(balance);  
// in console,number gives less properties as compared to strings.

//console.log(balance.toString().length);  
// as we converted its type to string so its properties will also added up so we use .length

//console.log(balance.toFixed(3)); 
//used in ecommerce websites where calculation happend on data like multiplication ,gst calculation etc where we don't need big pricise values so tofixed method used to limit decimal point  
const otherNumber = 112.5498
//console.log(otherNumber.toPrecision(3)); 
//this will give precision till given value in()and treated other as exponantial ex-let 1123.8 it gives 1.12e+3 its like a string"1.12e+3"not exact number in coding
const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')); 
// by default it gives Stringvalue in us standard by using this in() we will get Stringvalue in Indian standards

/*********************************Maths**************************************************** */
//console.log(Math);
//console.log(Math.abs(-5));
// give absolute values here it gives--> 5

//console.log(Math.round(4.33));
// it will roundoff values mostly we will used it.rather than ceil & floor

//console.log(Math.ceil(4.33));
// it will roundoff for top value like here it will roundoff value to '5'.

//console.log(Math.floor(4.9));
// it will give lowest value like here it will give '4'

//console.log(Math.min(4,5,6,1));
// give min value;

//console.log(Math.max(4,5,6,8,1));
// give max value;

console.log(Math.random());// gives random value b/w '0' and '1' 

console.log((Math.random()*10) + 1);// this will make value b/w '0' to '1' into full integer values 
// for shifting decimal place we did '*10' and +1 for cases where even after shifting values can be only b/w '0'&'1' ex--> 0.045-- it will 0.45 floor will give '0', so by adding '1' it will become 1.45-- etc.it used in making number games like dice games (1 to 6)
console.log(Math.floor(Math.random()*10) + 1);//used to roundoff to floor value

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1))+ min);// used for specific range values.

//(max-min+1)--> max-min,for range that we want '+1' for avoiding floor case and '+ min' for getting value atleast up from mininmum value ex; 20-10 , 10+value will give value > 10 so,10 is minimum we want.
