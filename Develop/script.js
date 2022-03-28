
var generateBtn = document.querySelector("#generate");
var passwordContainerEl = document.querySelector("#password");


var passwordItems = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperCaseLetters = passwordItems.slice(0,26);
var lowerCaseLetters = passwordItems.slice(26,52);
var numbers = passwordItems.slice(52,63);
var passwordLengthPrompt = 0;
var includeNumbersConfirm = "";
var generatedUpperCaseForPassword = "";
var generatedLowerCaseForPassword = "";
var generatedNumbersForPassword = ""
var finalUpperCaseForPassword = ""
var finalLowerCaseForPassword = ""
var finalNumbersForPassword = ""

var selectedPasswordLength = function() {
  passwordLengthPrompt = window.prompt("How many characters do you want your password to be? It must be at least 8 characters, and no longer than 128 characters.");
  if(passwordLengthPrompt === "" || passwordLengthPrompt === null || passwordLengthPrompt === false) {
    alert("You must select a valid option!")
  }
  else if(passwordLengthPrompt < 8 || passwordLengthPrompt > 128) {
    alert("Your password is not the correct length!");
    selectedPasswordLength();
  }
  else if(passwordLengthPrompt >= 8 && passwordLengthPrompt <= 128) {
    // console.log(passwordLengthPrompt);
    return passwordLengthPrompt;
  }
}

// Prompt to include upperCase
var includeUpperCase = function() {
  var includeUpperCaseConfirm = window.confirm("Do you want uppercase letters? OK = include uppercase, Cancel = don't include uppercase");
  
  if(includeUpperCaseConfirm) {
    for(var i = 0; i < passwordLengthPrompt; i++) {
      generatedUpperCaseForPassword += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
    }
    finalUpperCaseForPassword += generatedUpperCaseForPassword;
    console.log(finalUpperCaseForPassword);
    // Include uppercase array in the password
    // Reassign includeUpperCaseConfirm to = upperCaseLetters array
    includeUpperCaseConfirm = upperCaseLetters;
  }
  else {
    return;
  }
}
// Prompt to include lowerCase
var includeLowerCase = function() {
  var includeLowerCaseConfirm = window.confirm("Do you want lowercase letters? OK = include lowercase, Cancel = don't include lowercase");
  
  if(includeLowerCaseConfirm) {
    for(var i = 0; i < passwordLengthPrompt; i++) {
      generatedLowerCaseForPassword += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]
    }

    finalLowerCaseForPassword += generatedLowerCaseForPassword;
    console.log(finalLowerCaseForPassword);
    // Include lowercase array in the password
    // Reassign includeLowerCaseConfirm to = lowerCaseLetters array
    // includeLowerCaseConfirm = lowerCaseLetters;
  }
  else {
    return;
  }
}
// Prompt to include lowerCase
var includeNumbers = function() {
  includeNumbersConfirm = window.confirm("Do you want numbers? OK = include numbers, Cancel = don't include numbers");
  if(includeNumbersConfirm) {
    // Include lowercase array in the password
    // Reassign includeLowerCaseConfirm to = lowerCaseLetters array
    for(var i = 0; i < passwordLengthPrompt; i++) {
      generatedNumbersForPassword += numbers[Math.floor(Math.random() * numbers.length)]
      // console.log(generatedNumbersForPassword);
    }
    // store the generated numbers in the finalNumbersForPassword variable
    finalNumbersForPassword += generatedNumbersForPassword;
    console.log(finalNumbersForPassword);
    // includeNumbersConfirm = numbers;
  }
  else {
    return;
  }
}


var generatePassword = function(wantNumbers, Yaya1, Yaya2) {
  // randomly select 3 numbers from the generatedNumbersForPassword variable
  if(wantNumbers) {
    alert("Have a good one man")
  }
}

// master function
function writePassword() {
  // Get user's desired pw length
  selectedPasswordLength();
  // Ask if they want upperCase
  includeUpperCase();
  // Ask if they want lowerCase
  includeLowerCase();
  // Ask if they want numbers
  includeNumbers();
  // Combine user response into a password
  generatePassword(includeNumbersConfirm);
  // Display generated password to passwordContainer element
    
  passwordContainerEl.value = generatedNumbersForPassword;

}

// When the user clicks the generate password button, run the function
generateBtn.addEventListener("click", writePassword);



