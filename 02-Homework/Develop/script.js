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
var newArray = []
var randomNumber
var numberOfCharacters
var choiceLowerCaseLetters
var choiceSpecialCharacters
var choiceUpperCaseLetters
var choiceNumbers
var generateBtn =  document.querySelector("#generate");
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var numbers = ['0','1,','2','3', '4', '5', '6', '7', '8', '9']  
var specialCharacters = ['!', '#', '$', '%', '&', '(', ')', ,'*', '+', ',' ,'-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '}','~']


function generatePassword() {
for (i = 0; i < numberOfCharacters; i++){
randomNumber = Math.floor(Math.random()* numberOfCharacters)
}
console.log(randomNumber)
console.log(newArray[randomNumber])
return password;
}


// Write password to the #password input
function writePassword() {
  numberOfCharacters = prompt ('Pick a number between 8-128 and that will represent how the password you will generate will be.')
  choiceUpperCaseLetters = confirm('Would you like your password to contain uppercase letters?')
  choiceLowerCaseLetters = confirm('Would you like your password to contain lowercase letters?')
  choiceSpecialCharacters = confirm('Would you like your password to contain special characters?')
  choiceNumbers = confirm('Would you like your password to containe numbers?')
  
  if(choiceUpperCaseLetters) {
    newArray.push(upperCaseLetters)
  }
  if(choiceLowerCaseLetters){
  {newArray.push(lowerCaseLetters)
  }
  
  if(choiceNumbers) {
    newArray.push(numbers)
  }
  if(choiceSpecialCharacters){
    newArray.push(specialCharacters)
  }
}
var password = generatePassword()
var passwordText = document.querySelector("#password");
passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword());