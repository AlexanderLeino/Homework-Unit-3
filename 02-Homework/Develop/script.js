/* I need to create a password generator that generates a password 25 charactesr long.
When the user clicks the "generate-password button" get recieves a PROMPT asking if he would like to generate a password. 
Questions:
Would you like your password to have upperCaseLetters? 
Would you like your password to have lowerCaseLetters?
Would you like your */
// Assignment Code
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCaseLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specialCharacters = ["U+0020"] 

var generateBtn = document.querySelector("btn");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
