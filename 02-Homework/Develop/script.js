/* I need to create a password generator that generates a password 25 charactesr long.
When the user clicks the "generate-password button" get recieves a PROMPT asking if he would like to generate a password. 
Questions:
How many characters would you like your password to contain?
Click okay to CONFIRM incling special characters.
Numberic Characters?
Would you like your password to have upperCaseLetters? 
Would you like your password to have lowerCaseLetters?

Would you like your */

// Assignment Code
var numberOfCharacters
var password
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCaseLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var numbers = ['0','1,','2','3', '4', '5', '6', '7', '8', '9']  
var specialCharacters = ['!', '#', '$', '%', '&', '(', ')', ,'*', '+', ',' ,'-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '}','~']


// Write password to the #password input
function writePassword() {var numberOfCharacters = prompt ('How many characters would you like your password to be? MUST BE A NUMBER!!!')
console.log(numberOfCharacters)
//if (isNaN(numberOfCharacters)){console.log(alert('This is not a Valid Choice'))}
//else {
//  console.log("This is a valid choice");
//}
//}
var choiceUpperCaseLetters = confirm('Would you like your password to contain uppercase letters?')
if (choiceUpperCaseLetters === true){
  console.log('they want uppercase letters')}
  else {
    console.log('They dont want their password to container uppercase letters')
  }

var choiceLowerCaseLetters = confirm('Would you like your password to container lowercase letters?')
if (choiceLowerCaseLetters = true) {
  console.log('They want their password to container lowercase letters')}
  else {
    console.log('They dont want lowercase numbers with their password.')
  }

  var choiceSpecialCharacters = confirm('Would you like your password to container special characters?')
  if (choiceSpecialCharacters = true) {
    console.log('They want special characters their password')}
    else {
      console.log('They dont want special characters with their password.')
    

var generateBtn = document.querySelector("#generate"); //The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned. 

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; //The value property sets or returns the value of the value attribute of a text field

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword());
}
