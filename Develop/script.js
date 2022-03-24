
var generateBtn = document.querySelector("#generate");

var passwordItems = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var upperCaseLetters = passwordItems.slice(0,26);
var lowerCaseLetters = passwordItems.slice(26,52);
var numbers = passwordItems.slice(52,63);

var generatePassword = function() {
  // Ask user how long the password should be
  var passwordLength = prompt("Enter how many characters you want you password to be");

  // Generate a random string of upperCaseLetters, lowerCaseLetters, and Numbers
  for(i = 0; i < passwordLength; i++) {
    console.log(upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]);
    console.log(lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]);
    console.log(numbers[Math.floor(Math.random() * numbers.length)]);
  }
 

  // Prompt User with series of prompts for password criteria
  // Prompt user if they want to include uppercase letters
  // var includeUpperCase = window.prompt("Do you want uppercase letters? Enter YES to include, NO to exclude");
  // // If the user wants uppercase letters, include them in the password generator
  // includeUpperCase.toLowerCase();
  // if (includeUpperCase === "yes") {
  //   var randomUpperCase = upperCaseLetters[2];
  //   console.log(randomUpperCase);
  // }
  // // Prompt user if they want to include lowercase letters
  // window.prompt("Do you want lowercase letters? Enter YES to include, NO to exclude");
  // // Prompt users if they want to include numbers
  // window.prompt("Do you want numbers? Enter YES to include, NO to exclude");

}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// When the user clicks the generate password button, run the function
generateBtn.addEventListener("click", writePassword);