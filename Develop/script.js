
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
    // if user selected just uppercase to be in their password
    if (includeUpperCaseLetters === true && includeLowerCaseLetters === false && includeNumbers === false) {
      // include uppercase in the password
      for (var i = 0; i < userPasswordLength; i++) {
        // pull from uppercase
        createdPassword += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
      }
    }
    // if user selected just lowercase to be in the password
    if (includeUpperCaseLetters === false && includeLowerCaseLetters === true && includeNumbers === false) {
      // include only lowercase in the password
      for (var i = 0; i < userPasswordLength; i++) {
        // pull from lowercase
        createdPassword += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
      }
    }
    // if user selected just numbers to be in the password
    if (includeUpperCaseLetters === false && includeLowerCaseLetters === false && includeNumbers === true) {
      // include only numbers in the password
      for (var i = 0; i < userPasswordLength; i++) {
        // pull from umbers
        createdPassword += numbers[Math.floor(Math.random() * numbers.length)];
      }
    }
    // if user selected both lowercase and uppercase to be in the password
    if (includeUpperCaseLetters === true && includeLowerCaseLetters === true && includeNumbers === false) {
      // include upper and lowercase in the password
      for (var i = 0; i < userPasswordLength / 2; i++) {
        // pull from lowercase and uppercase
        createdPassword += (upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
        + lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]);
      }
    }
   
    // if user selected both lowercase and numbers to be in the password
    if (includeUpperCaseLetters === false && includeLowerCaseLetters === true && includeNumbers === true) {
      // include numbers and lowercase in the password
      for (var i = 0; i < userPasswordLength / 2; i++) {
        // pull from lowercase and numbers
        createdPassword += (numbers[Math.floor(Math.random() * numbers.length)]
        + lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]);
      }
    }
    // if user selected both uppercase and numbers to be in the password
    if (includeUpperCaseLetters === true && includeLowerCaseLetters === false && includeNumbers === true) {
      // include numbers and lowercase in the password
      for (var i = 0; i < userPasswordLength / 2; i++) {
        // pull from uppercase and numbers
        createdPassword += (numbers[Math.floor(Math.random() * numbers.length)]
        + upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]);
      }
    }
    // if user selected uppercase, lowercase and numbers to be in the password
    if (includeUpperCaseLetters === true && includeLowerCaseLetters === true && includeNumbers === true) {
      // include numbers and lowercase in the password
      for (var i = 0; i < userPasswordLength / 3; i++) {
        // pull from uppercase and numbers
        createdPassword += (numbers[Math.floor(Math.random() * numbers.length)]
        + upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
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
  var passwordText = document.querySelector("#password");  
  passwordText.value = password;
}

// When the user clicks the generate password button, run the function
generateBtn.addEventListener("click", writePassword);


