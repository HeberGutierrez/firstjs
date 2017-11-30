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

function laugh(){
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
     var ha='';
     for(var i=0;i<num;i=i+1) {
         ha+="ha";
         string=ha+"!";
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
     var ha='';
     for(var i=0;i<num;i=i+1) {
         ha+="ha";
         string=ha+"!";
     }
     return string;
 }
 console.log(laugh(3));


function laugh(num) {
     var ha='';
     for(var i=0;i<num;i=i+1) {
         ha+="ha";
         string=ha+"!";
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

function buildTriangle(num){
    var buildtriangle="";
    for (var i=1;i<=num;i++){
        var make=makeLine(i);
        buildtriangle += make;
    }
    return buildtriangle;
}
console.log(buildTriangle(10));


/*////////////////////////*///////////
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
     var ha='';
     for(var i=0;i<num;i=i+1) {
         ha+="ha";
         string=ha+"!";
     }
     return string;
 }

console.log(laugh(3));

/*
 * Programming Quiz: Cry (5-5)
 */

// your code goes here
var cry = function mkcry()
{
    var message = "boohoo!"
        return message;
}
console.log(cry());
