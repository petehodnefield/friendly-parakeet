
var generateBtn = document.querySelector("#generate");


var passwordItems = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var upperCaseLetters = passwordItems.slice(0,26);
var lowerCaseLetters = passwordItems.slice(26,52);
var numbers = passwordItems.slice(52,63);

var generatePassword = function() {
  // Ask user how long the password should be
  var passwordLength = prompt("Enter how many characters you want you password to be");

  // Generate a random sequence of uppercase, lowercase, and numbers that matches the passwordLength variable
  for(var i = 0; i < passwordLength; i++) {
    // randomly select from upperCase lowerCase, and numbers,
    passwordCharacters = upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    console.dir(passwordCharacters);
  }
  return passwordCharacters;
}
function writePassword() {
  var password = generatePassword();
  // console.dir(passwordText);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// When the user clicks the generate password button, run the function
generateBtn.addEventListener("click", writePassword);