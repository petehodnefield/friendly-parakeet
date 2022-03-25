
var generateBtn = document.querySelector("#generate");

var passwordItems = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperCaseLetters = passwordItems.slice(0,26);
var lowerCaseLetters = passwordItems.slice(26,52);
var numbers = passwordItems.slice(52,63);
var total = [upperCaseLetters, lowerCaseLetters, numbers];

var generatePassword = function() {
  // prompt the user for password criteria
  var userPasswordLength = window.prompt("How long do you want your password to be? It must be at least 8 characters long, and no more than 128");
  userPasswordLength = parseInt(userPasswordLength);


  if(userPasswordLength >= 8 && userPasswordLength <= 128) {
    var includeUpperCaseLetters = window.confirm("Click OK to include uppercase letters");
    var includeLowerCaseLetters = window.confirm("Click OK to include lowercase letters");
    var includeNumbers = window.confirm("Click OK to include numbers");
    var createdPassword = "";
    // Generate password based on criteria
    // If user selected everything to be in their password
    if (includeLowerCaseLetters === true && includeLowerCaseLetters === true && includeNumbers === true) {
      // include uppercase, lowercase, and numbers in the password
      for (var i = 0; i < userPasswordLength; i++) {
        // pull from uppercase
        createdPassword += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
        // pull from lowercase
        //pull from numbers
      }
    }
    if (includeUpperCaseLetters === true && includeLowerCaseLetters === false && includeNumbers === false) {
      // include uppercase, lowercase, and numbers in the password
      for (var i = 0; i < userPasswordLength; i++) {
        // pull from uppercase
        createdPassword += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
      }
    }
    if (includeUpperCaseLetters === false && includeLowerCaseLetters === true && includeNumbers === false) {
      // include only lowercase in the password
      for (var i = 0; i < userPasswordLength; i++) {
        // pull from lowercase
        createdPassword += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
      }
    }
    if (includeUpperCaseLetters === true && includeLowerCaseLetters === true && includeNumbers === false) {
      // include only lowercase in the password
      for (var i = 0; i < userPasswordLength / 2; i++) {
        // pull from lowercase
        createdPassword += (upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
        + lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]);
      }
    }
    return createdPassword;
  }
  else {
    window.alert("Please enter a value between 8 and 128!");
    generatePassword();
  }
}

function writePassword() {
  var password = generatePassword();
  // console.dir(passwordText);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// When the user clicks the generate password button, run the function
generateBtn.addEventListener("click", writePassword);




// var passwordCharacters = "";
//   // Generate a random sequence of uppercase, lowercase, and numbers that matches the passwordLength variable
//   for(var i = 0; i < passwordLength * .31; i++) {
//     // randomly select from upperCase lowerCase, and numbers,
//     passwordCharacters += (upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
//     + lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]
//     + numbers[Math.floor(Math.random() * numbers.length)])
//     ;
//     console.dir(passwordCharacters);
//   }