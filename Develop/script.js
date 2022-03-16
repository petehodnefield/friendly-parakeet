// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


document.getElementById('generate').onclick = function generatePassword() {

  window.alert("These are the password requirements:");
  var lowerCase = window.prompt(
    "Do you want your password to have at least 1 lowercase letter? enter 'yes' if you want this or 'no' if you don't"
    );

    lowerCase = lowerCase.toLocaleLowerCase();
    if (lowerCase === "yes") {
      window.alert("Here is one lowercase");
    }
 

}

Yaya