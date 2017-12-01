//LESSON 5 UDACITY
// declares the sayHello function
function sayHello() {
  var message = "Hello!"
  return message; // returns value instead of printing it
}

// function returns "Hello!" and console.log prints the return value
console.log(sayHello());



//parameters and fuctions
// x and y are parameters in this function declaration
function add(x, y) {
  // function body
  var sum = x + y;
  return sum; // return statement
}

// 1 and 2 are passed into the function as arguments
var sum = add(1, 2);
console.log(sum);

/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

// your code goes here

function laugh() {
  var message = "hahahahahahahahahaha!"
  return message;
}
console.log(laugh());


/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 */

function laugh(num) {
  var ha = '';
  for (var i = 0; i < num; i = i + 1) {
    ha += "ha";
    string = ha + "!";
  }
  return string;
}
console.log(laugh(3))


/***********************************************/

function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);


function laugh(num) {
  var ha = '';
  for (var i = 0; i < num; i = i + 1) {
    ha += "ha";
    string = ha + "!";
  }
  return string;
}
console.log(laugh(3));


function laugh(num) {
  var ha = '';
  for (var i = 0; i < num; i = i + 1) {
    ha += "ha";
    string = ha + "!";
  }
  return string;
}
console.log(laugh(5));



function test() {
  return 1;
  return 2;
}

test();


/*************/


// returns the sum of two numbers
function add(x, y) {
  return x + y;
}


// returns the value of a number divided by 2
function divideByTwo(num) {
  return num / 2;
}


var sum = add(5, 7); // call the "add" function and store the returned value in the "sum" variable
var average = divideByTwo(sum); // call the "divideByTwo" function and store the returned value in the "average" variable



/******,MAKE A LINE******/
function makeLine(length) {
  var line = "";
  for (var a = 1; a <= length; a++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(num) {
  var buildtriangle = "";
  for (var i = 1; i <= num; i++) {
    var make = makeLine(i);
    buildtriangle += make;
  }
  return buildtriangle;
}
console.log(buildTriangle(10));


/*////////////////////////*/ //////////
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);


/******************************/
/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num) {
  var ha = '';
  for (var i = 0; i < num; i = i + 1) {
    ha += "ha";
    string = ha + "!";
  }
  return string;
}

console.log(laugh(3));

/*
 * Programming Quiz: Cry (5-5)
 */

// your code goes here
var cry = function mkcry() {
  var message = "boohoo!"
  return message;
}
console.log(cry());




/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
  console.log("I am " + myString + " , " + myFunc());
}


function myString() {
  return "Happy";
}
var laugh = function(num) {
  var ha = '';
  for (var i = 0; i < num; i = i + 1) {
    ha += "ha";
    string = ha + "!";
  }
  return string;
}

console.log(laugh(3));

function myFunc(callbackFunc) {
  return "Happy" + callbackFunc(3);
}


/*
 * Programming Quiz: UdaciFamily (6-1)
 */

// your code goes here
var udaciFamily = ["Julia", "James", "Heber"];
console.log(udaciFamily);


/*
 * Programming Quiz: Building the Crew (6-2)
 */

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

// your code goes here
var crew = [captain, second, pilot, companion, mercenary, mechanic];
console.log(crew);


/*
 * Programming Quiz: The Price is Right (6-3)
 */

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

// your code goes here
prices[1] = 50.00;
prices[3] = 9.50;
prices[7] = 70.00;

console.log(prices);


/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 */

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

// your code goes here
rainbow.splice(2, 1, 'Yellow', 'Green');
rainbow.push('Purple');
console.log(rainbow);


/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

// your code goes here

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));

function hasEnoughPlayers(team) {
  if (team.length >= 7) {
    return true;
  } else {
    return false;
  }
}



/*
 * Programming Quiz: Joining the Crew (6-6)
 */

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

// your code goes here
crew.push(doctor, sister, shepherd);
console.log(crew);


 /****DOTNUTS EXAMPLE*///

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}
