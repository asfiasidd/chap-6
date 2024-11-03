// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
// document.write("<h1> Result </h1>");

// let num = 10;
// document.write("The value of a is: " + 10 + "<br>");
// document.write("--------------------------- <br>")
// document.write("The value of ++a is: " + ++num + "<br>");
// document.write("Now The value of a is: " + num + "<br>");
// document.write("<br>");
// document.write(" The value of a++ is: " + num++ + "<br>");
// document.write("Now The value of a is: " + num + "<br>");
// document.write("<br>");
// document.write(" The value of --a is: " + --num + "<br>");
// document.write("Now The value of a is: " + num + "<br>");
// document.write("<br>");
// document.write("The value of a-- is: " + num-- + "<br>");
// document.write("Now The value of a is: " + num + "<br>");


// 2. What will be the output in variables a, b & result after execution of the following script:
// let a = 2;
// let b = 1;
// let result = --a - --b + ++b + b--;
// document.write("a is =", a ,"<br>");
// document.write("b is =", b, "<br>");
// document.write("result is =", result);


// 3. Write a program that takes input a name from user & greet the user.
// let name = prompt("Enter your name:");
// document.write("Hello " + name + "!");



// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
// let number = prompt("Enter your number");
// if (number ==  "|| number == null "){
//     number = 5;
// }

//     for(let i = 1; i <= 10; i++){
//     document.write(number + "x" + i + "=" + number * i + "<p>" );
// }




// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
let subject1 = prompt("Enter your first subject name:");
let subject2 = prompt("Enter your second subject name:");
let subject3 = prompt("Enter your third subject name:");

let totalMarks = 100;

let marks1 = parseInt(prompt("Enter your marks for " + subject1 + ":"));
let marks2 = parseInt(prompt("Enter your marks for " + subject2 + ":"));
let marks3 = parseInt(prompt("Enter your marks for " + subject3 + ":"));

let totalObtainedMarks = marks1 + marks2 + marks3;
let overallTotalMarks = totalMarks * 3;
let overallPercentage = (totalObtainedMarks / overallTotalMarks) * 100;

let percentage1 = (marks1 / totalMarks) * 100;
let percentage2 = (marks2 / totalMarks) * 100;
let percentage3 = (marks3 / totalMarks) * 100;

document.write("<table border='1' ");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td><td>" + percentage1.toFixed(0) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td><td>" + percentage2.toFixed(0) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td><td>" + percentage3.toFixed(0) + "%</td></tr>");

document.write("<tr><th>Total</th><th>" + overallTotalMarks + "</th><th>" + totalObtainedMarks + "</th><th>" + overallPercentage.toFixed(0) + "%</th></tr>");
document.write("</table border='1'>");




//END



















