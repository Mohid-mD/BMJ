var city = prompt("Enter your city");
if (city == "Karachi") {
  alert("Welcome to the city of light");
}

// Gender
var gender = prompt("Enter you gender Male/Female/Others");
if (gender == "male") {
  alert("Hello sir");
} else if (gender == "female") {
  alert("Hello Mam");
} else if (gender == "other") {
  alert("Hello Mohisn/Noman");
} else alert("cant you read ?")

// Colors
var color = prompt("Enter a color Red/Yellow/Green");
if (color == "red") {
  alert("Must Stop!");
} else if (color == "yellow") {
  alert("Ready to move");
} else if (color == "green") {
  alert("Move Now");
} else alert("Challan")

// Fuel
var fuel = prompt("how much fuel is left in ltr ?");
if (fuel <= 0.25){alert("Hurry! Refill your fuel")}
else alert("Fine for now")

// Record script
var a = 4;
if (++a == 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}

// Result
var totalMarks = 300;
var marksObtained = 219;
var percentage = (marksObtained/totalMarks*100);
var grade;
if (percentage < 60){grade="Fail"} else if (percentage < 70){grade="B"} else if (percentage < 80){grade="A"} else if (percentage <= 100){grade="A+"}
var remarks;
if (percentage < 60){remarks="Sorry"} else if (percentage < 70){remarks="You need to improve"} else if (percentage < 80){remarks="Good"} else if (percentage <= 100){remarks="Excellent"}
document.write(`
<h6>Mark Sheet<h6>
<p> Total Marks: ${totalMarks}<p>
<p> Marks Obtained: ${marksObtained}<p>
<p> Percentage: ${percentage}<p>
<p> Grade: ${grade}
<p> Remarks: ${remarks}
`)

// Guess game
var number = prompt("Guess a number");
if (number == 10) {
  alert("Bingo! Correct answer");
} else alert("Close enough to the correct answer");

// Divisble by 3
var number3 = prompt("Enter a number to see if its is divisible by 3.")
if (number3%3 === 0){alert("Yes it is")} else alert("Sorry")

// Even or ODD
var number2 = prompt("Enter a number to see if its even or odd.")
if (number2%2 === 0){alert("EVEN")} else alert("ODD")

// Temprature
var temp = prompt("Enter the temprature");
if (temp < 20) {
  alert("OMG! Today’s weather is so Cool.");
} else if (temp < 30) {
  alert("Today’s Weather is cool.");
} else if (temp < 40) {
  alert("The Weather today is Normal.");
} else if (temp < 50) {
  alert("it is too hot outside.");
}


// Calculator
var num1 = Number(prompt("Please select your 1st number"));
var num2 = Number(prompt("Please select your 2nd number"));
var operation = prompt("Please select operation from + - * / %");
if (operation == "+") {
  alert("Answer is " + (num1 + num2));
} else if (operation == "-") {
    alert("Answer is " + (num1 - num2));
} else if (operation == "*") {
    alert("Answer is " + (num1 * num2));
} else if (operation == "/") {
    alert("Answer is " + (num1 / num2));
} else if (operation == "%") {
    alert("Answer is " + (num1 % num2));
}
