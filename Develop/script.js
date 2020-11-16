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
  
  switch (characterConfirm) {
    case "true,false,false,false":
        for (var i = 0; i < length; i++) {

            var x = randomNumber(lower.length);
            var character = lower[x];
            password = password + character;
        }
        return password;
    
    case "true,true,false,false":
        for (var i = 0; i < length; i++) {
            var x = Math.floor((Math.random() * 2) + 1);
            
            if (x === 1) {
                var x = randomNumber(lower.length);
                var character = lower[x];
                password = password + character;
            }
            if (x === 2) {
                var x = randomNumber(upper.length);
                var character = upper[x];
                password = password + character;
            }
        }
        return password;

    case "true,true,true,false":
        for (var i = 0; i < length; i++) {
            var x = Math.floor((Math.random() * 3) + 1);
  
            if (x === 1) {
                var x = randomNumber(lower.length);
                var character = lower[x];
                password = password + character;
        }
            if (x === 2) {
                var x = randomNumber(upper.length);
                var character = upper[x];
                password = password + character;
            }
            if (x === 3) {
                var x = randomNumber(number.length);
                var character = number[x];
                password = password + character;
            }
        }
        return password;

    case "true,true,true,true":
        for (var i = 0; i < length; i++) {
            var x = Math.floor((Math.random() * 4) + 1);

            if (x === 1) {
                var x = randomNumber(lower.length);
                var character = lower[x];
                password = password + character;
            }
            if (x === 2) {
                var x = randomNumber(upper.length);
                var character = upper[x];
                password = password + character;
            }
            if (x === 3) {
                var x = randomNumber(number.length);
                var character = number[x];
                password = password + character;
            }
            if (x === 4) {
                var x = randomNumber(specials.length);
                var character = specials[x];
                password = password + character;
            }
        }
        return password;

    case "false,false,false,true":
        for (var i = 0; i < length; i++) {

            var x = randomNumber(specials.length);
            var character = specials[x];
            password = password + character;
        }
        return password;

    case "false,false,true,true":
        for (var i = 0; i < length; i++) {
            var x = Math.floor((Math.random() * 2) + 1);

            if (x === 1) {
                var x = randomNumber(number.length);
                var character = number[x];
                password = password + character;
            }
            if (x === 2) {
                var x = randomNumber(specials.length);
                var character = specials[x];
                password = password + character;
            }
        }
        return password;

    case "false,true,true,true":
        for (var i = 0; i < length; i++) {
            var x = Math.floor((Math.random() * 3) + 1);

            if (x === 1) {
                var x = randomNumber(upper.length);
                var character = upper[x];
                password = password + character;
            }
            if ( x === 2) {
                var x = randomNumber(number.length);
                var character = number[x];
                password = password + character;
            }
            if ( x === 3) {
                var x = randomNumber(specials.length);
                var character = specials[x];
                password = password + character;
            }
        }
        return password;

    case "true,false,true,false":
        for (var i = 0; i < length; i++) {
            var x = Math.floor((Math.random() * 2) + 1);

            if (x === 1) {
                var x = randomNumber(lower.length);
                var character = lower[x];
                password = password + character;
            }
            if (x === 2) {
                var x = randomNumber(number.length);
                var character = number[x];
                password = password + character;
            }
        }
        return password;

    case "false,true,false,true":
        for (var i = 0; i < length; i++) {
            var x = Math.floor((Math.random() * 2) + 1);

            if (x === 1) {
                var x = randomNumber(upper.length);
                var character = upper[x];
                password = password + character;
            }
            if (x === 2) {
                var x = randomNumber(specials.length);
                var character = specials[x];
                password = password + character;
            }
        }
        return password;

    case "true,false,false,true":
        for (var i = 0; i < length; i++) {
            var x = Math.floor((Math.random() * 2) + 1);

            if (x === 1) {
                var x = randomNumber(lower.length);
                var character = lower[x];
                password = password + character;
            }
            if (x === 2) {
                var x = randomNumber(specials.length);
                var character = specials[x];
                password = password + character;
            }
        }
        return password;

    case "false,true,false,false":
        for (var i = 0; i < length; i++) {

            var x = randomNumber(upper.length);
            var character = upper[x];
            password = password + character;
        }
        return password;

    case "false,false,true,false":
        for (var i = 0; i < length; i++) {

            var x = randomNumber(number.length);
            var character = number[x];
            password = password + character;
        }
        return password;

    default: 
        window.alert("Please select at least one of the character options.");
        charactersSelect();
  }
};






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
