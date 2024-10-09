// let form = document.getElementById("form");
//let fullname = document.getElementById("fullname");
/* let errorMsg = document.getElementsByClassName("error");
let id = (id) => document.getElementById("id");
let classes = (classes) => document.getElementById("classes")

let fullname = id("fullname");
 email = id("email");
 phonenumber = id("phonenumber");
 course = id("course");
 form = document.getElementById("form");

let errorMsg = classes("error")

let formValidation = (id, serial, message) => {
 if ( id.value === " ") {
  errorMsg[serial].innerHTML = message
 } else {
  errorMsg[serial].innerHTML = ""
}
};

// event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();// anytime we have a form we must prevent default behavior
  errorMsg[0].innerHTML = "hey you";
  formValidation(fullname, 0, "fullname cant be empty");
  formValidation(phonenumber, 1, "phonenumber cant be empty");
  formValidation(email, 2, "input your email");
  formValidation(course, 3, "input preffered course");
  errorMsg[3].innerHTML = "input preffered course"
}); */

let form = document.getElementsByClassName("form");
form.style.backgroundColor = "red"