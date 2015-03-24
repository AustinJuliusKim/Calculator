var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var input = document.getElementById("input");
var divide = document.getElementById("divide");
var multiply = document.getElementById("multiply");
var subtract = document.getElementById("subtract");
var dec = document.getElementById("dec");
var ans = document.getElementById("ans");
var add = document.getElementById("add");
var clear = document.getElementById("clear");
// Variable that store buttons

// var input = document.getElementById("input");
// 	var answer = input.value;
// 	var answerArray = answer.split(" ");
// 	answer Array

clear.addEventListener("click", function() {
	input.value = "";
});
// Clears the input field

zero.addEventListener("click", function() {
	input.value += "0";
});
one.addEventListener("click", function() {
	input.value += "1";
});
two.addEventListener("click", function() {
	input.value += "2";
});
three.addEventListener("click", function() {
	input.value += "3";
});
four.addEventListener("click", function() {
	input.value += "4";
});
five.addEventListener("click", function() {
	input.value += "5";
});
six.addEventListener("click", function() {
	input.value += "6";
});
seven.addEventListener("click", function() {
	input.value += "7";
});
eight.addEventListener("click", function() {
	input.value += "8";
});
nine.addEventListener("click", function() {
	input.value += "9";
});
// When button is clicked will append corresponding number

divide.addEventListener("click", function() {
	input.value += " / ";
});
multiply.addEventListener("click", function() {
	input.value += " * ";
});
subtract.addEventListener("click", function() {
	input.value += " - ";
});
dec.addEventListener("click", function() {
	input.value += ".";
});
add.addEventListener("click", function() {
	input.value +=  " + " ;
});
// When button is clicked will append corresponding operator
ans.addEventListener("click", function() {
	input = document.getElementById("input");
	var answer = input.value;
	var answerArray = answer.split(" ");
	if (answerArray[1] === "+") {
		input.value = addition(answerArray[0],answerArray[2]);
	}
	else if (answerArray[1] === "-") {
		input.value = subtraction(answerArray[0],answerArray[2]);	
	}
	else if (answerArray[1] === "*") {
		input.value = multiplication(answerArray[0],answerArray[2]);
	}
	else if (answerArray[1] === "/") {
		input.value = division(answerArray[0],answerArray[2]);
	}
});
// When button is clicked will evaluate function called based on array[1]


var addition = function(x,y) {
	return (+x) + (+y);
	// changes string into number
}
var subtraction = function(x,y) {
	return x - y;
}
var multiplication = function(x,y) {
	return x * y;
}
var division = function(x,y) {
	return x / y;
}





