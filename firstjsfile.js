var price 15.00;
var money 20.00;

if (money >= price) {
  console.log "buy the hammer"
} else {
  console.log "don't buy the hammer"
};

var price = 15.00;
var money = 10.00;

if (money >= price) {
  console.log("buy the hammer");
} else {
  console.log("don't buy the hammer");
}

/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

// change the value of `number` to test your if...else statement
var number = 2;

if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}


/* EXCERSICE #7*/
var musicians = 1;

if (musicians <= 0) {
  console.log("not a grup");
} else if (musicians == 1) {
  console.log("solo");
} else if (musicians == 2) {
  console.log("duet");
} else if (musicians == 3) {
  console.log("trio");
} else if (musicians == 4) {
  console.log("quartet");
} else {
  console.log("this is a large group");
}



/*EXCERSICE #8*/
var room = "dining room";
var suspect = "Mr. Parkes";
var weapon = "";
var solved = false;

if (room == "dining room" && suspect == "Mr. Parkes") {
  weapon = "knife";
  solved = true;
} else if (room == "ballroom" && suspect == "Mr. Kalehoff") {
  weapon = "poison";
  solved = true;
} else if (room == "gallery" && suspect == "Ms. Van Cleve") {
  weapon = "trophy"
  solved = true;
} else if (room == "billiards room" && suspect == "Mrs. Sparr") {
  weapon = "pool stick"
  solved = true;
} else {
  console.log("supect no founded");
}
if (solved) {
  console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}



/*EXCERSICE #12*/
/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = -325.00;
var checkBalance = true;
var isActive = false;

// your code goes here
if (balance >= 0 && checkBalance === true) {
  isActive = true;
  console.log("Your balance is$ " + balance.toFixed(2) + ".");
} else if (balance < 0 && checkBalance === true && isActive === false) {
  console.log("Your account is negative. Please contact the bank.");
} else {
  console.log("Thank you!, Have a nice day.");
}




/*EXCERSICE #13*/
/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 *
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 *
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators.
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "strawberry";
var vessel = "bowl";
var toppings = "sprinkles";
// Add your code here
if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")) {
  console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
} else console.log("thats mixed are not avalible");


/*EXCERSICE #14*/
/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

// your code goes here
if (shirtWidth === 18, shirtLength === 28 && shirtSleeve === 8.13) {
  console.log("Size 'S'");
} else if (shirtWidth === 20, shirtLength === 29 && shirtSleeve === 8.38) {
  console.log("Size 'M'");
} else if (shirtWidth === 22, shirtLength === 30 && shirtSleeve === 8.63) {
  console.log("Size 'L'");
} else if (shirtWidth === 24, shirtLength === 31 && shirtSleeve === 8.88) {
  console.log("Size 'XL'");
} else if (shirtWidth === 26, shirtLength === 33 && shirtSleeve === 9.63) {
  console.log("Size '2XL'");
} else if (shirtWidth === 28, shirtLength === 34 && shirtSleeve === 10.13) {
  console.log("Size '3XL'");
} else {
  console.log("N/A");
}


/* TERNARY OPERATOR*/

//normal operation
var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color);

//ternary operation
conditional ? (
  if condition is true) : (
  if condition is false)

var color = isGoing ? "green" : "red";

//other with ternary
var adult = true;
var preorder = true;

console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "the gate") + ".");

//multiple TERNARY
var condition1 = true,
  condition2 = false,
  access = condition1 ? (condition2 ? "true true" : "true false") : (condition2 ? "false true" : "false false");

console.log(access); // logs "true false"

//EXERCISE #18

/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

var category = eatsPlants ? eatsAnimals ? "omnivore" : "herbivore" : eatsAnimals ? "carnivore" : "Undefined";
console.log(category);



/*switch */

switch (expression) {
  case value1:
    //Statements executed when the
    //result of expression matches value1
    [
      break;
    ]
  case value2:
    //Statements executed when the
    //result of expression matches value2
    [
      break;
    ]
    ...
  case valueN:
    //Statements executed when the
    //result of expression matches valueN
    [
      break;
    ]
    [
      default:
      //Statements executed when none of
      //the values match the value of the expression
      [
        break;
      ]
    ]
}
//another example
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

console.log("Is there anything else you'd like?");

/*OTRHER CASE*/

if (option === 1) {
  console.log("You selected option 1.");
} else if (option === 2) {
  console.log("You selected option 2.");
} else if (option === 3) {
  console.log("You selected option 3.");
} else if (option === 4) {
  console.log("You selected option 4.");
} else if (option === 5) {
  console.log("You selected option 5.");
} else if (option === 6) {
  console.log("You selected option 6.");
}
var option = 3;

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break; // technically, not needed
}


/*EXCERSICE 21 */
/*
 * Programming Quiz: Back to School (3-9)
 */

// change the value of `education` to test your code
var education = "no high school diploma";

// set the value of this based on a person's education
var salary;

// your code goes here
switch (education) {
  case "no high school diploma":
    salary = 25636, console.log("In 2015, a person with " + education + " earned an average of " + salary + "/year.");
    break;
  case "a high school diploma":
    salary = 35256, console.log("In 2015, a person with " + education + " earned an average of " + salary + "/year.");
    break;
  case "an Associate's degree":
    salary = 41496, console.log("In 2015, a person with " + education + " earned an average of " + salary + "/year.");
    break;
  case "a Bachelor's degree":
    salary = 59124, console.log("In 2015, a person with " + education + " earned an average of " + salary + "/year.");
    break;
  case "a Master's degree":
    salary = 69732, console.log("In 2015, a person with " + education + " earned an average of " + salary + "/year.");
    break;
  case "a Professional degree":
    salary = 89960, console.log("In 2015, a person with " + education + " earned an average of " + salary + "/year.");
    break;
  case "a Doctoral degree":
    salary = 89960, console.log("In 2015, a person with " + education + " earned an average of " + salary + "/year.");
    break;
}


/*LOOPS*/

//while loop
var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
}

}

/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x <= 20) {
  if (x % 3 === 0 && x % 5 === 0) {console.log("JuliaJames");}
  else if (x % 5 === 0) {console.log("James");}
  else if (x % 3 === 0) {console.log("Julia");}
  else {console.log(x);}
  x++;
  }


/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

 var num = 99;

 while (num<=num && num>=1) {
   if (num != 1) {
     console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... "+ num + " bottles of juice on the wall!" );
     num--;
   }else {
     console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... "+ num + " bottle of juice on the wall!" );
     num--;
   }
  }


  /*
   * Programming Quiz: Countdown, Liftoff! (4-3)
   *
   * Using a while loop, print out the countdown output above.
   */

  // your code goes here

  var countdown = 60;

   while (countdown >= 0){
      if (countdown === 50) {
        console.log("T-50 Orbiter transfers from ground to internal power");
      } else if (countdown === 31) {
        console.log("T-31 Ground launch sequencer is go for auto sequence start");
      } else if (countdown === 16) {
        console.log("T-16 Activate launch pad sound suppression system");
      } else if (countdown === 10) {
        console.log("T-10 Activate main engine hydrogen burnoff system");
      } else if (countdown === 6) {
        console.log("T-6 Main engine start");
      } else if (countdown === 0) {
        console.log("T-0 Solid rocket booster ignition and liftoff!");
      } else {
        console.log("T-" + countdown + " seconds");
      }
      countdown--;
    }

//FOR
//FACTORIALS
/*
 * Programming Quiz: Factorials (4-7)
 */

// your code goes here
var num = 12;
var solution = 1;

for (var x = num; x > 0; x--) {
    solution *= x;
}
console.log(solution);

/*other*/

var x = 9;
for (x >= 1; x >= 0; x--) {console.log("hello " + x);}

//last excerise

for (var x = 0; x < 26; x = x + 1) {  for (var y = 0; y < 100; y = y + 1) {console.log(x + "," + y); }}
