//CONDITIONAL STATEMENT or CONTROL FLOW
// IF Statement
let easy1 = 5;
if (easy1 > 3){
    console.log("Easy is truly greater than 3");
}

// if-else Statement: if-else statement goes from up to bottom
let easy2 = 5;
if (easy2 > 10){
    console.log("Easy is truly greater than 10");
}else {
    console.log("Easy is not greater than 10");
}

//else-if statement : means i want to have a multiple conditional statement
let age = 18;
if (age < 18) {
    console.log('You are not old enough to vote');
} else if (age > 18) {
    console.log('You are old enough to vote');
} else{
    console.log('You are 18 years old and eligible to vote')
}

const password ='p@ss12';
if(password.length >= 12 && password.includes('@')){
    console.log('that password is mighty strong');
} else if(password.length >= 8 || password.includes('@') && password.length >= 5){
    console.log('that password is strong enough');
} else{
    console.log("password is not strong enough");
}

let kike = 21;
if (kike < 18) {
    console.log('You are not old enough to vote');
} else if (kike > 18) {
    console.log('You are old enough to vote');
} else{
    console.log('You are 18 years old and eligible to vote')
}

let age1 = 85;
if (age1 < 18) {
    console.log('You are not old enough to vote');
} else if (age1 > 18 > 75) {
    console.log('You are old enough to vote');
} else if (age1 >= 75){
    console.log('you are too old enough to vote and you are a senior citizen');
} else{
    console.log('You are 18 years old and eligible to vote')
}

//switch statement: this uses a strict equality
let oritza = 'tuwo';
switch(oritza){
    case "basmati":
        console.log(oritza + "is the best rice in the world");
        break;
    case "ofada":
        console.log(oritza + "is the best rice in the world");
        break;
    case "aroso":
        console.log(oritza + "is the best rice in the world");
        break;
    default:
        console.log(oritza + " I don't know what rice you are talking about");
}

let grade = "D";
switch(grade){
    case 'A':
      console.log('you got an A!');
      break;// break is to prevent the code from running continously
    case 'B':
     console.log('you got a B!');
     break;
    case 'C':
        console.log('you got a C!');
        break;
    case 'D':
        console.log('you got a D!');
        break;
    case 'E':
        console.log('you got an E!');
        break;
    default:
        console.log('not a valid grade');
}

//variable & block scope: area in which a variable is valuable
let  mike_age = 30; // global scope is when the variable is declared on the root of its element not inside any code block.
// this means it can be access anywhere in the file one want to use
if(true){
    let mike_age = 40;
    let name = 'Bolaji' // this variable will only work inside the code block because that is where it is declared.
    console.log('inside ist code block:', mike_age, name);

    if(true){
        console.log('inside 2nd code block:',mike_age) // this will take the mike_age inside the code block
    }
}
console.log('outside code block:', mike_age);

let yewande = " my name is nwanko";
// global variable
console.log(yewande)
function  add( j, t){
    let yejide = '' // local variable bcos its inside the fuction = 
}

//Ternary operator: ITS A LOGICAL WAY OF CONDITIONAL STATEMENT I.E A  CONDITION EXPRESSION
let wc = 11

let flush = (wc > 20) ? "Yes, wc is greater" : "No, wc is not greater";
console.log(flush);

// flush = variable
//wc > 20 = condition
// "yes" = true
// "No" = false

//function: is an action word. 
// different type of functions such as an arrow function, function declaration, function Expression and IIFE-iMMEDIATELY iNVOKE fUNCTION Expression.
//Function Declaration
greet();// hoisting is when the function is asked to perform b4 declaring it as variable & it works with function declaration but not with function expression.
function greet(){
    console.log("good day student");
}

// Function Expression : expression is when a variable is defined, 
let fade = function(){
    console.log("good evening")
}; // semi-colon should be at the end of every function expression
fade();

const speak = function(){
    console.log('how are you!');
};
speak();

//argument and parameters. parameters are functions that is going to take parameter
const greeting = function(name){// name is used to create a local variable used inside the code block
    console.log(`how are you ${name}`);
};
greeting('lekan');

const people = function(name = 'luigi', time = 'night'){
    console.log(`good ${time} by ${name}`);
}; people();
people('shaun', 'day');
people('david')

function add(j, t){
    return j + t ;
}
let sum = add(8, 2);

//rest parameter which is used when building E-commerce website
function jt (...numbers){
    return numbers.reduce()
}

//returning values
const calcarea = function (radius){
    let area = 3.14 * radius ** 2;
    return area;
};
const area = calcarea (5)
console.log(area);

// arrow function: is a shorter way to write function
const calvol = radius => 3.14 * radius **2;
const vol = calvol(3)
console.log('area is:', vol);

let goke =  () =>{
    console.log('good afternoon')
}

let yemi = (studentId, matricNo) =>{
    return {
        studentId,
        matricNo,
    };
};
let yemi2 = yemi(1, 235);
console.log(yemi2);

//callback & foreach . callback : are just normal function that we pass into another function or another method as an argument
let student = ['Mukrimah' ,'rukayah', 'yemi', 'zeenat','hayatullah'];
student.forEach(function(){
    console.log('something');
});

const logstudent = (student, index) =>{
    console.log(`${index} - hello ${student}`);
};
student.forEach(logstudent);

//IIFE- Immediately Invoke function expression
(function(){
    console.log("good morning")
})() // this is used when you do want button to be clicked multiple time b4 they respond

// function invocation


// get a reference to the 'ul' 