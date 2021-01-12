
// To create a password generator with safety standars
//Make sure password is more than 8 no mor tha 128
//Prompt to make sure the special caracters are ok in the generator
//Generate a random password with given structure 




// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

//Character Arrays//
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"]
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


//Variable Declaration
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase; 

//Prompts to confrim characters
function generatePassword() {
  var confirmLength = (prompt("How manny characters would you like your password to be?"));

 
// Loop answer to fit criteria
  while(confirmLength <= 8 || confirmLength >= 128){
      alert("Password must be between 8-128 characters. Try Again");
      var confirmLength = (prompt("How manny characters would you like your password to be?"));
  }

  alert(`Your password will have ${confirmLength} characters`);

  //Confirm Password Parameters
  var confirmSpecialCharacter = confirm("Would you like to include special characters?");
  var confirmNumericCharacter = confirm("Would you like to include numeric characters?");
  var confirmUpperCase = confirm("Would you like to include uppercase characters?");
  var confirmLowerCase = confirm("Would you like to include lowercase characters?");


// Loop answer to fit criteria
while(confirmSpecialCharacter === false && confirmNumericCharacter === false && confirmUpperCase === false && confirmLowerCase === false){


}


//Assign action to the password parameters
var passwordCharacters = []

if (confirmSpecialCharacter) {
  passwordCharacters = passwordCharacters.concat(specialChar)
}
if (confirmNumericCharacter) {
  passwordCharacters = passwordCharacters.concat(number)
}
if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(alphaUpper)
}
if (confirmLowerCase) {
  passwordCharacters = passwordCharacters.concat(alphaLower)
}

console.log(passwordCharacters)

//Loop selecting random items from convined arrays

var randomPassword = ""

for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



