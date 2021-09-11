/* GIVEN I am taking a code quiz // landing page explaining the rules
WHEN I click the start button // start button - event listener - start timer too
THEN a timer starts and I am presented with a question // start a timer with question one
WHEN I answer a question // true or false as result
THEN I am presented with another question // reandomize and advance questions
WHEN I answer a question incorrectly
THEN time is subtracted from the clock // subtract from   timeInterval
WHEN all questions are answered or the timer reaches 0 // time 0 finished
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score // save in localStorage */

//Questions collected from : http://mcqspdfs.blogspot.com/2013/08/60-top-javascript-multiple-choice.html
//Only putting 10 questions atm

var questionsArray = [
  //1
  {
    id: 1,
    question: "Why JavaScript and Java have similar name?",
    options: [
      "JavaScript is a stripped-down version of Java",
      "JavaScript's syntax is loosely based on Java's",
      "They both originated on the island of Java",
      "None of the above",
    ],
    answer: "JavaScript's syntax is loosely based on Java's",
  },
  //2
  {
    id: 2,
    question:
      "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    options: [
      "The User's machine running a Web browser",
      "The Web server",
      "A central machine deep within Netscape's corporate offices",
      "None of the above",
    ],
    answer: "The User's machine running a Web browser",
  },
  //3
  {
    id: 3,
    question: "______ JavaScript is also called client-side JavaScript.",
    options: ["Microsoft", "Navigator", "LiveWire", "Native"],
    answer: "Navigator",
  },
  //4
  {
    id: 4,
    question: "__________ JavaScript is also called server-side JavaScript.",
    options: ["Microsoft", "Navigator", "LiveWire", "Native"],
    answer: "LiveWire",
  },
  //5
  {
    id: 5,
    question: "What are variables used for in JavaScript Programs?",
    options: [
      "Storing numbers, dates, or other values",
      "Varying randomly",
      "Causing high-school algebra flashbacks",
      "None of the above",
    ],
    answer: "Storing numbers, dates, or other values",
  },
  //6
  {
    id: 6,
    question:
      "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
    options: ["Client-side", "Server-side", "Local", "Native"],
    answer: "Client-side",
  },
  //7
  {
    id: 7,
    question:
      "Which of the following can't be done with client-side JavaScript?",
    options: [
      "Validating a form",
      "Sending a form's contents by email",
      "Storing the form's contents to a database file on the server",
      "None of the above",
    ],
    answer: "Storing the form's contents to a database file on the server",
  },
  //8
  {
    id: 8,
    question:
      "Which of the following are capabilities of functions in JavaScript?",
    options: [
      "Return a value",
      "Accept parameters and Return a value",
      "Accept parameters",
      "None of the above",
    ],
    answer: "Accept parameters",
  },
  //9
  {
    id: 9,
    question: "Which of the following is not a valid JavaScript variable name?",
    options: [
      "2names",
      "_first_and_last_names",
      "FirstAndLast",
      "None of the above",
    ],
    answer: "2names",
  },
  //10
  {
    d: 10,
    question:
      "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
    options: ["<SCRIPT>", "<BODY>", "<HEAD>", "<TITLE>"],
    answer: "<SCRIPT>",
  },
];

function pickAQuestion() {
  objQuestion =
    questionsArray[Math.floor(Math.random() * questionsArray.length)];
  return objQuestion;
}

function renderQuestion() {
  //object resulting from the execution of the pickAQuestion func
  var objQuestion = pickAQuestion();
  //get elements from the form to display question and options dinamically
  document.getElementById("question").innerHTML = objQuestion.question;
  document.getElementById("option1").innerHTML = objQuestion.options[0];
  document.getElementById("option2").innerHTML = objQuestion.options[1];
  document.getElementById("option3").innerHTML = objQuestion.options[2];
  document.getElementById("option4").innerHTML = objQuestion.options[3];
  //remove question from array to avoid repetition
  // questionsArray.splice(index, 1);
}

renderQuestion();
