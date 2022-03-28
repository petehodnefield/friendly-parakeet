
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
var confirmedSelected = [];
var finalGuy = ""

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
var includeTheseInPassword = function(prompt1, prompt2, prompt3) {
  var includeUpperCaseConfirm = window.confirm("Do you want uppercase letters? OK = include uppercase, Cancel = don't include uppercase");
  var includeLowerCaseConfirm = window.confirm("Do you want lowercase letters? OK = include lowercase, Cancel = don't include lowercase");
  includeNumbersConfirm = window.confirm("Do you want numbers? OK = include numbers, Cancel = don't include numbers");

  
  if(includeUpperCaseConfirm) {
    for(var i = 0; i < passwordLengthPrompt; i++) {
      generatedUpperCaseForPassword += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
    }
    finalUpperCaseForPassword += generatedUpperCaseForPassword;
    confirmedSelected.push(finalUpperCaseForPassword);

    // Include uppercase array in the password
    // Reassign includeUpperCaseConfirm to = upperCaseLetters array
  }
  if(includeLowerCaseConfirm) {
        for(var i = 0; i < passwordLengthPrompt; i++) {
          generatedLowerCaseForPassword += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]
        }
    
        finalLowerCaseForPassword += generatedLowerCaseForPassword;
        confirmedSelected.push(finalLowerCaseForPassword);
        // Include lowercase array in the password
        // Reassign includeLowerCaseConfirm to = lowerCaseLetters array
        // includeLowerCaseConfirm = lowerCaseLetters;
      }
  if(includeNumbersConfirm) {
    // Include lowercase array in the password
    // Reassign includeLowerCaseConfirm to = lowerCaseLetters array
    for(var i = 0; i < passwordLengthPrompt; i++) {
      generatedNumbersForPassword += numbers[Math.floor(Math.random() * numbers.length)]
      // console.log(generatedNumbersForPassword);
    }
    // store the generated numbers in the finalNumbersForPassword variable
    finalNumbersForPassword += generatedNumbersForPassword;
    confirmedSelected.push(finalNumbersForPassword);
    // includeNumbersConfirm = numbers;
  }
  if(!includeUpperCaseConfirm && !includeLowerCaseConfirm && !includeNumbersConfirm) {
    alert("You must select at least one of these options!");
    includeTheseInPassword();
  }
  
  else {
    return;
  }
}




var generatePassword = function() {
  var combinedArray = confirmedSelected.join("")  
  console.log(combinedArray)

  for(i = 0; i < passwordLengthPrompt; i++) {
  finalGuy += combinedArray[Math.floor(Math.random() * combinedArray.length)];
  }
  console.log(finalGuy)
}

// master function
function writePassword() {
  // User selects how many characters long pw is
  selectedPasswordLength();
  // User selects which conditions password has
  includeTheseInPassword();
  // Assemble pw based off of the conditions
  generatePassword();    
  // Display pw in the passwordContainer
  passwordContainerEl.value = finalGuy;

}

// When the user clicks the generate password button, run the function
generateBtn.addEventListener("click", writePassword);



