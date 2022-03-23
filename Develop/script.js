// Assignment code here

// uppercase letters array
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// user defines the character count

// define generatePassword()
var generatePassword = function() {
  var passwordLength = window.prompt("Enter how many numbers long your password should be");
  var includeUpperCase = prompt("Do you want your password to include uppercase letters? Enter 'Yes' to include and 'No' to not include them.");
  
    includeUpperCase.toLowerCase();
    if(includeUpperCase === "yes") {
      for (var i = 0; i < passwordLength; i++) {
        console.log(upperCaseLetters[Math.floor(Math.random() * passwordLength)])
      }
    }
    else if(includeUpperCase === "no") {
      alert("You don't want upper case");
    }
    else {
      alert("Please enter yes or no!");
      return;
    }
    // randomly select fron the upperCaseLetters array
    

    for (var i = 0; i < lowerCaseLetters.length; i++) {
      console.log(lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)])

    }
    for (var i = 0; i < numbers.length; i++) {
      console.log(numbers[Math.floor(Math.random() * numbers.length)])

    }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);