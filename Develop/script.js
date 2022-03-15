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
  window.alert("Password must be at least 14 characters long");
  window.alert("Password must include at least one uppercase letter");
  window.alert("Password must include at least one lowercase letter");
  window.alert("Password must include at least one number");
  window.alert("Password must include at least one special character");

}

Yaya