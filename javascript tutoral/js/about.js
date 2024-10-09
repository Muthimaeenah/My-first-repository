//Assignment operator =
let tinubu = 75; // = assignment operator
document.write((tinubu -=3))
// tinubu = tinubu - 3

//Arithmetic Operator
let peterobi = 30 + 38;
document.write ((peterobi +=1))

//comparison operator == loose equality operation
let portable = 20 == "20";
document.write(portable);

//comparison operator === strict equality operation
let wizkid = 20 === "20"
document.write(wizkid);

//not equal !=
let jazzy = 10 != "10"; //not
document.write(jazzy);

//strict not equal !==
let wande = 40 !== "40";
document.write(wande);

//logical operators
//&& (and) both conditions has to be met for it to be true
// i.e true && true or false && false / 1 && 1 = true, 0 && 0 = true
let spyro = true && false ;
document.write(spyro);

// || OR (only one condition has to be met for it to be true)
// 1 || 1 =false, 1|| 0 = true

// type operator
let spider =  typeof 10 
document.write(spider); //number

let omoyemi = true;
document.write(omoyemi); // boolean

//ternary operator
let dave = (5 > 3) ? 'true' : 'false';// if 5 is greater than 3, if it is true print true and if it is opposite print false 
// ternary operator is a shortcut of conditional statement bcos it is meant to be in this format
 if (5 > 3){
    console.log("true");
} else{
     console.log("false");
} 
//document.write(dave) // it is a conditional statement

//type of

let b = 32;
console.log( typeof b);

let c = 'hello world'
console.log( typeof c);

let d = true;
console.log(typeof d);

let e = null;
console.log(typeof e);

//let f = undefined
let f;
console.log(typeof f);

let g = { age: 20, state: 'lagos'} ;
console.log( typeof g);

let h = function () {} ;
console.log( typeof h);

//NaN : Not a Number
let str12 = 45e6;
console.log(str12);

// to string: convert number to string(letter)
let str13 = 45;
//let str14 = str13.toString(2); with 2 in the bracket it helps to convert the string to binary no(1 & 0) and with 16 in the bracket it helps to convert to hexadecimal(0101af)
let str14 = str13.toString();

//objects method
//built-in method
//strings method
let quadrocash = "hello, world";
console.log(quadrocash. length);// javascript start from zero and also do count space as a letter
console.log(quadrocash.charAt(2));
console.log(quadrocash.charAt(-1)) // charAt means find the character at -1 which will start it counting from back bcos of the minus sign

let easycash = ("are you there?");
console.log(easycash. slice(3,7)); // slice is going to extract a section out of a string 
// and it has 2 argument which is the start index and the end index 
console.log(easycash. slice(-6,-2))

//substring
let establish = "hello world";
console.log(establish. substring(7,12));
console.log(`hello isn't ${easycash} then continue`);
console.log ("hello"+" nope"+" then continue");

//console.log(establish.localeuppercase());
let esta = establish.toLocaleUpperCase();
console.log(esta);

let string1 = 'HELLO WORLD LOWER'
let string2 = string1.toLowerCase();

//CONCATE : This means to join something together
let str3 = "crescent";
let str4 = "university";
let str5 = str3 .concat(" ",str4,".");
console.log(str5)

let str6 = "omotobi";
let str7 = str6.trim();
console.log(str7);

let str8 = "hadiza hazeem";
let str9 = str8.replace(/hazeem/g, "jenkins");
console.log(str9);

let str10 = "hadiza hazeem";
let str11 = str10.split(" ");
console.log(str11);

//array method

//math method
//toExponential
let str15e = 45e6 ; // this means 4.5*10^6
console.log(str15e);
let str15 = 4556678;
console.log(str15.toExponential(2));

//toFixed: to round up the decimal no to the no of zero. to specify a specific number to a fixed number of decimal 
let str16 = 48.1266;
console.log(str16.toFixed(5));

//toprecision: to be precise to the no of decimal u want
let str17 = 48.12676;
console.log(str17.toPrecision(6));

//valueof :
let str18 = new Number(234);
console.log(str18.valueOf);

//Number : it helps to convert a string to a number
console.log(Number("456"));
console.log(Number(" "));
// NaN
console.log(Number("123ahj"));

//parsefloat
console.log(parseFloat("45.6755gh"));

//parseInt
console.log(parseInt("47.87fd"));

//isNaN
console.log(isNaN('go'));

//maths round: this round up the value of decimal number to a whole number
let str19 = 56.679;
console.log(Math.round(str19));

//maths ceil: it rounded up the smallest number to whole no
let str20 = 47.46738;
console.log(Math.ceil(str20));

//Math floor: opposite of ceil, it doesn't round up any decimal to whole number irrespective of the no at the back of decimal point
let str21 = 40.43212;
console.log(Math.floor(str21));

// maths trunc:this only return only the intergers and truncatate the fraction
let str22 = 45.6756;
console.log(Math.trunc(str22));

//sqrt : squareroot
let str23 = 5;
let str24 = Math.sqrt(str23);
console.log(str24);
console.log(Math.ceil(str24));
let str25 = Math.floor(str24);
console.log(str25);

//abs: it is going to return absolute value
let str26 = 567.98765;
console.log(Math.abs(str26))

//Sin
console.log(Math.sin(45));

//cos 
console.log(Math.cos(25));

let str27 =[5, 6, 7, 3, 1]
//min
console.log(Math.min(...str27));
//max
console.log(Math.max(...str27));
//defining method
 //object literals
