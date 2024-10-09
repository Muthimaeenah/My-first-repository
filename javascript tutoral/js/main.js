//OUTPUTING IN JAVASCRIPT

console.log("Hello World") // this is used for debugging purpose
//alert("hello") used for displaying an alert dialogue
document.write("Opay")// this helps to write text drectly to our html or it can be used for texting 
/* but not recommend for production */
document.getElementById("hello").innerHTML = "Hello,<strong> how are you </strong>";// it is mostly used when doing DOM manipulation
// innerHTML is used when you want to manipulate text and innerText is used when there is no need for manipulation
document.getElementById("greeting").innerText = " goodday,<strong> hope you are good</strong>";

/* javascript is case sensitive and there are two type of javascript case which is camelcase (omirindeMuthimainah) or pascal case(ThisIsPascalCase)
so it is advisable to always used lowercase letter */

//STATEMENT IN JAVASCRIPT: set of instructions given to a computer to execute a function
// DECLARATION STATEMENT
var x = 'Haleemah'; //var is not recognised nowadays
let y = "Fatimah"; // let is commmonly used bcos it can be changed
const Z ="Zeenat"; // const is used for values that cant be changed e.g pi = 3.14

// FUNCTION DECLARATION ; ()this is used to identify a function
// function is like an action word , more of like a performance
function Muthimainah (){
  console.log("my name is Muthimainah");
}


//CONTROL FLOW STATEMENT
let jenkins = 2
let quadri = 4

if (jenkins > quadri) {
    console.log("jenkins is greater than quadri");
} else{
    console.log("jenkin is not greater than quadri")
}
//SWITCH STATEMENT

switch (jenkins) {
    case 1:
        consol.log("Ass capt")
        break;
    case 2:
        console.log("capt")
    default:
        break;
        console.log("jenkins is not capt or Ass capt");
}
//ASSIGNMENT STATEMENT: This is when a value is assigned to a variable (=)
let w = "jenkins"
console.log(w);

//CONTROL FLOW STATEMENT /  CONDITIONAL STATEMENT: it is going to execute different codes according to the conditions given to them
let fatimah = 5; // always used reserved keywords and dont start with numbers
let haleemah = 3;
if (haleemah > fatimah){
 console.log('haleemah is greater than fatiamh');
} else {
    console.log('haleemah is not greater than fatiamh');
}
// switch statement
switch (haleemah){
    case 1: 
     console.log("Asst. captain");
    break;
    case 2:
        console.log('Captain');
      break;
      default:
        console.log("haleemah is not a captain or Asst. captain");
}
//LOOPING STATEMENT ; this helps the instruction to keep repeating itself
// for loop 
for( let i = 0; i > 5; i ++){
    console.log(i);
}
// RETURN STATEMENT:
function aminah(a,b){
    return a + b;
}
//   SINGLE LINE COMMENT
/*
     MULTI LINE COMMENT
*/

//Primitive Data Type
let babatunde =25; //Number
let hadiza = "25"; //String
let mmm = true;//boolean
let victor; //undefined
document.write(victor);
let thompson = null // a variable that is not assigned to a data is called  null

//Non-primitive Data Type
// Object : collection of properties and methods. {} is a representation of an object.
let easy = {
    name: "babatunde",
    age: 25,
}

// object is like a container housing information 
//Array [] this is a representation of an array which is used for storing ordered collection. and it is possible to have an object inside an array
let nwankwo = [1, 2, 3, 4, 5, 6]; //array
function hazeem () {
    console.log("hello world")
}
//function is a block of code designed to perform a specific task. () is the representation of a function
 function vio(){
    console.log("inspect vehicle")
    document.write("inspect vehicle") 
 }
 vio();
//date()
//CLASSWORK
/* alert(Date())// to show us today's date on our system */

//string
console.log('hello, world');

//common string method
let email = "muthimaeenah@gmail.com";
console.log(email);
/* let otheremail = email.lastIndexOf('n'); i.e count the number in which n is placed starting from zero */
let otheremail = email.lastIndexOf('n');
console.log(otheremail);

// string slice ; slice is going to extract a section out of a string and it has 2 argument which is the start index and the end index 
let dave= email.slice(2,5);
console.log(dave) 

//string substring: i.e write out the letters from the starting point to ending point 
let total = email. substring(4,10); //i.e write out from 4 to 10
console.log(total)

// string replace : i.e to replace a letter with another letter
let newEmail = email.replace ('m', 'w') 
console.log(newEmail);
// 3 ways of joining strings in javascript
//string concatenate // i.e to join string together 
let firstname= "omirinde";
let lastname= "muthimainah";

let fullname= firstname +' '+ lastname; //'' is added to give space btw the names 
myName = fullname;
console.log(myName);

const author ="maria";
const like = 30;
let blog = 'the blog called '+ 'by ' + author + ' has ' + like + ' likes';
console.log(blog);

//template string way
let blog2 = `the blog called ${author} has ${like} likes`
console.log(blog2);

// creating HTML template
let HTML = `
    <p>By ${author}</p>
    <span>has ${like} likes</span>`;
console.log(HTML)

//getting characters
console.log(fullname[12]);// the counting start from zero because javascript is a zero programming language

// string length : to count the length of a function given
console.log(fullname. length);

// string method: this is to change the variable full name to uppercase letters
console.log(fullname. toUpperCase());

//number data type
// arithmetic operator
let result = 5* (10-3)**2;
console.log(result)

let likes = 10;
console.log(likes + 1);

let newlikes = likes ++;
console.log(newlikes);

let likes1 = likes --;
console.log(likes1);

let likes2 = likes += 10;
console.log(likes2);

let likes3 = likes -= 5;
console.log(likes3);

let likes4 = likes *= 2;
console.log(likes4);

let likes5 = likes /= 2;
console.log(likes5);

//NaN: not a number
console.log(5/ 'hello');

//array
let fruit = ['Apple','Mango', 'banana','orange'];
fruit[1] = 'pineapple';
console.log(fruit[1]);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let random = ['fatimah', 'easy', 25, 'rokeeb', 50];
console.log(random);

console.log(fruit.length);

//Array methods
//let fruits = fruit.join('-');
let fruits = fruit.indexOf('banana');
console.log(fruits);



