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
var solved = false;

if (weapon == "knife" && room == "dining room" && suspect == "Mr. Parkes") {
  solved = true; console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
} else if (weapon == "poison" && room == "ballroom" && suspect == "Mr. Kalehoff") {
  solved = true; console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
} else if (weapon == "trophy" && room == "gallery" && suspect == "Ms. Van Cleve") {
  solved = true; console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
} else(weapon == "pool stick" && room == "billiards room" && suspect == "Mrs. Sparr");
if (solved == false) {
  console.log("Suspect not founded");
}

/*EXCERSICE #12*/
/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = false;

// your code goes here
if (balance >= 0 && checkBalance === true) {isActive = true; console.log("Your balance is$ "+balance+".");
}else if (balance < 0 && checkBalance === true && isActive === false) {console.log("Your account is negative. Please contact the bank.");}
else {
  console.log("Thank you!, Have a nice day.");
}
