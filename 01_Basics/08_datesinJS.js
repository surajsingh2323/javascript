// Dates

let myDate = new Date()// object or instance of Date;
/*console.log(myDate);
console.log(myDate.toString());// will give dates proper manner;
console.log(myDate.toLocaleString()); */

//console.log(typeof myDate);// Date is a object in js;
let myCreatedDate = new Date(2023,-11,23)// 12 months,0 to 11(dec) as its a array;12==0(jan),13==1(feb) and so on;and - will take it months back ex; -11 --> 12 months back ;
console.log(myCreatedDate.toDateString());
//let MyCreatedDate = new Date(2023,-11,23,5,3)
//console.log(MyCreatedDate.toLocaleString());// will tell with time ;
let MyCreatedDate = new Date("2023-01-14")// now, 01 is Jan 01 notequalto 1; its a format("yy-mm-dd");
console.log(MyCreatedDate.toLocaleString());

let MyCreatedDate2 = new Date("01-14-2023")// in india we follow ("mm-dd-yy");
//console.log(MyCreatedDate2.toLocaleString());
let myTimeStamp = Date.now() //uses in making time stamp quizzes and polls in js;
console.log(myTimeStamp);// will give values in milliseconds;

console.log(MyCreatedDate2.getTime());// by this we can get time from our date,used in making hotel booking systems and polls and we can also compare different times in output for our usecases;
console.log(Math.floor(Date.now()/1000));// will convert millisec into seconds and without decimal(.);
let newDate = new Date
console.log(newDate.getMonth()+1);// +1 used for getting exact month as months are (0 to 11);
console.log(newDate.getDay());
//`${newDate.getDay()} and the time is-- `  string interpolation for practising date and time
newDate.toLocaleString('default',{// defining date as object in proper format;
    weekday: "long",
    timeZone:''
})




