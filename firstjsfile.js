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
var weapon = "knife";
var solved = true;

if (weapon == "knife" && room == "dining room" && suspect == "Mr. Parkes") {
  solved = true; console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
} else if (weapon == "poison" && room == "ballroom" && suspect == "Mr. Kalehoff") {
  solved = true; console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
} else if (weapon == "trophy" && room == "gallery" && suspect == "Ms. Van Cleve") {
  solved = true; console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
} else if (weapon == "pool stick" && room == "billiards room" && suspect == "Mrs. Sparr");{
solved = true; console.log(suspect + " did it in the " + room + " with the " + weapon + "!");}
else {
  console.log("supect no founded");
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
if (balance >= 0 && checkBalance === true) {isActive = true; console.log("Your balance is$ "+balance.toFixed(2)+".");
}else if (balance < 0 && checkBalance === true && isActive === false) {console.log("Your account is negative. Please contact the bank.");}
else {
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
if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")){console.log("I'd like two scoops of "+flavor+" ice cream in a "+vessel+" with "+toppings+".");}
else console.log("thats mixed are not avalible");


/*EXCERSICE #14*/
/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

// your code goes here
if (shirtWidth === 18, shirtLength === 28 && shirtSleeve === 8.13) {console.log("Size 'S'");}
else if (shirtWidth === 20, shirtLength === 29 && shirtSleeve === 8.38) {console.log("Size 'M'");}
else if (shirtWidth === 22, shirtLength === 30 && shirtSleeve === 8.63) {console.log("Size 'L'");}
else if (shirtWidth === 24, shirtLength === 31 && shirtSleeve === 8.88) {console.log("Size 'XL'");}
else if (shirtWidth === 26, shirtLength === 33 && shirtSleeve === 9.63) {console.log("Size '2XL'");}
else if (shirtWidth === 28, shirtLength === 34 && shirtSleeve === 10.13) {console.log("Size '3XL'");}
else {
  console.log("N/A");
}


/* TERNARY OPERATOR*/

//normal operation
var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color);

//ternary operation
conditional ? (if condition is true) : (if condition is false)

var color = isGoing ? "green" : "red";

//other with ternary
var adult = true;
var preorder = true;

console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "the gate") + ".");

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

var category =  eatsAnimals ? (eatsPlants ? "omnivore" : "herbivore") : eatAnimals ? "carnivore" : " ";
console.log(category);
