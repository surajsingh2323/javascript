/*console.log(2>1);
console.log(2>=1);
console.log(2==2);
console.log(2!=1);
console.log(2<1); */   //they all give boolean values


console.log("2">1);
console.log("02">1); //both will give true value as js automatically convert them to same data type 
// it is recommended to use same data type in same opreration ,Here typescript came in role which is strictly typed and don't allow you to write different data type in same operation
console.log(null>0);
console.log(null==0);// unexcepted gives false; some times convert into NaN ,sometimes null there is inconsistency in js
console.log(null>=0);
/* Reason is that an equality check '==' and comparison <,>,<=,>= works different comparison will convert null into number which gives its a value '0' thats why 'null>0' gives false and 'null>=' gives true; */
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);// these all will give false

// === used for strictly checking will also check its data types
console.log("2"===2); //will give false
/****************************************avoid these type of codes clean code is our priority******************************** */













