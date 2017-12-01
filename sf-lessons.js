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
/***DONUTS LOOP ****/

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});


/**foreach example*/

words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});

/*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here
test.forEach(function(value, index) {
   if(value % 3 === 0 ) {
       value += 100;
       test.splice(index, 1,value);
  }
});
console.log(test);

/*
 * Programming Quiz: I Got Bills (6-9)
 */

var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90,
29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

// your code goes here
var totals = bills.map(function(bill) {
  bill += 0.15;
  bill = bill.toFixed(2);
  bill = Number(bill);
  return bill;
});
console.log(totals);

/*other way*/
var totals = bills.map(function(bill) {
  bill = bill * 0.15 + bill;
  return Number(bill.toFixed(2)); //--> toFixed() need toFixed(2) to show how many decimal.
});
console.log(totals);


/*
 * Programming Quiz: Nested Numbers (6-10)
 *
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here
for (var row = 0; row < numbers.length; row++) {
  for (var column = 0; column < numbers[row].length; column++) {
  	numbers[row][column] = numbers[row][column] % 2 === 0 ? "even" : "odd";
  	console.log(numbers[row][column]);
  }
}


/*
 * Programming Quiz: Umbrella (7-1)
 */

/* .....OBJECTS.........*/


var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    // your code goes here
      close: function() {
        if (umbrella.isOpen === false) {
            return "The umbrella is already closed!";
        } else {
            umbrella.isOpen = false;
            return "Julia closed the umbrella!";
        }
    }
};

// EXAMPLE

var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return "Sarah paints!"; }
};

sister.paintPicture();


/*
 * Programming Quiz: Menu Items (7-2)
 */

// your code goes here
var breakfast = {
    name: "The Lumberjack",
    price: "$"+ 9.95,
    ingredents: [ 'eggs', 'sausage', 'toast', 'hashbrowns', 'pancakes']
};

/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary() {
        return("Welcome!\nYour balance is currently $"+savingsAccount.balance+" and your interest rate is "+ savingsAccount.interestRatePercent+"%.");
        },
    };

console.log(savingsAccount.printAccountSummary());

/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
	name: "HEBER",
	friends: 3,
	messages: ["First message", "Second message",  "Third message"],
  postMessage: function postMessage(message) {
    facebookProfile.messages.push("Fourth message");
  },
  deleteMessage: function deleteMessage(index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function addFriend() {
    facebookProfile.friends += 1;
  },
  removeFriend: function removeFriend() {
    facebookProfile.friends -= 1;
  }

};

console.log(facebookProfile.deleteMessage(1));
console.log(facebookProfile.messages);

/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

// your code goes here

donuts.forEach(function(donut) {
  console.log(donut.type +" donuts cost $"+ donut.cost + " each");
});
