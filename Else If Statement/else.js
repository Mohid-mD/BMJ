// // QUESTION#01
var variable = prompt("Enter a letter");
var variableCharCode = variable.charCodeAt();

if (variableCharCode >= 65 && variableCharCode <= 90) {
  alert("Variable is uppercase");
} else {
  alert("Variable is lowercase");
}

// // QUESTION#02
var a = prompt("Enter a first number");
var b = prompt("Enter a second number");

if (a > b) {
  alert(a + " is greater.");
} else if (b > a) {
  alert(b + " is greater.");
} else {
  alert("both integers are equal");
}

// // QUESTION#03
var a = prompt("Enter a number");

if (a > 0) {
  alert("number is positive.");
} else if (a < 0) {
  alert("number is negative.");
} else {
  alert("number is zero.");
}

// // QUESTION#04
var value = prompt("Enter a character");

if (
  value === "a" ||
  value === "A" ||
  value === "e" ||
  value === "E" ||
  value === "i" ||
  value === "I" ||
  value === "o" ||
  value === "O" ||
  value === "u" ||
  value === "U"
) {
  alert("true");
} else {
  alert("false");
}

// // QUESTION#05
var correctPassword = "12345";
var enteredPassword = prompt("Enter your password", "");

if (enteredPassword == "") {
  alert("Please enter your password");
} else if (enteredPassword === correctPassword) {
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}

// // QUESTION#06
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// // QUESTION#07
var time = 1900;

if (time >= 0000 && time < 1200) {
  alert("good morning!");
} else if (time >= 1200 && time < 1700) {
  alert("good afternoon!");
} else if (time >= 1700 && time < 2100) {
  alert("good evening!");
} else if (time >= 2100 && time < 2359) {
  alert("good night!");
}
