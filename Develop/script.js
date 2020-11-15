// Assignment code here
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['1', '2', '3', '4', '5', '6', '6', '7', '8', '9'];
var specials = ['!', '"', '#', '$', '%', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '],', '^', '_', '`', '{', '|', '}', '~'];

var lowerConfirm = "";
var upperConfirm = "";
var numberConfirm = "";
var specialsConfirm = "";

var password = ""

//get length
var getLength = function() {
  var passwordLength = window.prompt("How long would you like your password? Enter anything between 8 and 128.");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a valid length.");
    getLength();
  }
  else {
    return passwordLength;
  }
};

//get characters
var charactersSelect = function() {
  lowerConfirm = window.confirm("Would you like your password to contain lower case letters?");
  upperConfirm = window.confirm("Would you like your password to contain upper case letters?");
  numberConfirm = window.confirm("Would you like your password to contain numbers?");
  specialsConfirm = window.confirm("Would you like your password to contain special characters?");
  var characterConfirm = [lowerConfirm, upperConfirm, numberConfirm,specialsConfirm];
  
  return characterConfirm.toString();

  // finish function!
};

//random number
var randomNumber = function(x) {
  var x = Math.floor((Math.random() * x));
  return x;
};

var generatePassword = function() {
  var length = getLength();

  window.alert("Please selects the character types you would like to include from the next few windows.");

  var characterConfirm = charactersSelect();
  
  if (characterConfirm === "false,false,false,false") {
    window.alert("Please select at least one of the character options.");
    characterConfirm = charactersSelect();
  }

  if (characterConfirm === "true,false,false,false") {
    for (var i = 0; i < length; i++) {
      var x = randomNumber(lower.length);
      var character = lower[x];
      password = password + character;
    }
  }

  if (characterConfirm === "true,true,false,false") {
    for (var i = 0; i < length; i++) {
      
    }
  }

  if (characterConfirm === "true,true,true,false") {

  }

  if (characterConfirm === "true,true,true,true") {

  }

  if (characterConfirm === "false,false,false,true") {

  }
  
  if (characterConfirm === "false,false,true,true") {

  }

  if (characterConfirm === "false,true,true,true") {

  }

  if (characterConfirm === "true,false,true,false") {

  }

  if (characterConfirm === "false,true,false,true") {

  }

  if (characterConfirm === "true,false,false,true") {

  }

  if (characterConfirm === "false,true,false,true") {

  }


};


generatePassword();
console.log(password);



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
