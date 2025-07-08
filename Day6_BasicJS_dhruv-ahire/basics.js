// Task 1: Variables and Data Types


var name = "Dhruv";
let age = 17;
const isStudent = true;


let hobbies = ["gym", "coding", "music"];
let profile = { name: "Dhruv", age: 17, course: "Web Dev" }; 


console.log(name);
console.log(age);
console.log(isStudent);
console.log(hobbies);
console.log(profile);


// Task 2: Simple Arithmetic Calculator

let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);




// Task 3: Grade Checker

let marks = parseInt(prompt("Enter your marks:"));
let grade;

if (marks >= 90) {
  grade = "A";
} else if (marks >= 80) {
  grade = "B";
} else if (marks >= 70) {
  grade = "C";
} else if (marks >= 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log("Your grade is:", grade);




// Task 4: Loops

// For loop: Print 1 to 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// While loop: Print even numbers from 2 to 10
let j = 2;
while (j <= 10) {
  console.log(j);
  j += 2;
}




// Task 5: Functions

// Function to greet user
function greetUser(name) {
  console.log("Welcome, " + name + "!");
}

greetUser("Dhruv");

// Function to calculate square
function square(num) {
  return num * num;
}

console.log("Square of 5 is:", square(5));
