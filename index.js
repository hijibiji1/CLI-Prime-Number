var read = require("readline-sync");
var chalk = require("chalk");

/**
 * Welcome message
*/

var userName = read.question("What is your name? ");
let name = userName.charAt(0).toUpperCase() + userName.slice(1);
console.log(chalk.blue("\nWelcome '" + name + "' lets check - is your birth day a prime number? \n"));


var userDOB = read.question(chalk.italic("Enter Your Date of Birth without year in DD/MM format: "));

var date = userDOB.split("/");

console.log(date)

var dd = parseInt(date[0]);
var mm = parseInt(date[1]);

function validation() {
  if (dd == NaN || mm == NaN) {
    console.log(chalk.red("Please enter a valid date"));
  }
  else if (dd < 0 || dd > 31 || mm < 0 || mm > 31) {
    console.log(chalk.red("Please enter a valid date"));
  }
  else {
    checkPrimeNumber(dd);
  }
}

function checkPrimeNumber(dd) {
  let flag = 0;
  for (let i = 2; i < dd / 2; i++) {
    if (dd % i == 0) {
      flag += 1;
      break;
    }
  }
  if (flag == 0) {
    console.log(chalk.green("\nPrime Number"));
  } else {
    console.log(chalk.magentaBright("\nNot Prime Number"));
  }
}

validation();
