// Assignment code here
var getLength = function() {
  var passwordLength = window.prompt("How long would you like your password? Enter anything between 8 and 128.");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a valid length.");
    getLength();
  }
  else {
    console.log(passwordLength);
    return passwordLength;
  }
};

var charOptions = {
  lower: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upper: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  number: ['1', '2', '3', '4', '5', '6', '6', '7', '8', '9']
  specials: ['!', '"', '#', '$', '%', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '],', '^', '_', '`', '{', '|', '}', '~']
};

getLength();



/*// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);*/
