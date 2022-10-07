// Assignment code here
var generateBtn = document.querySelector("#generate");
var number = [0,1,2,3,4,5,6,7,8,9];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
"x", "y", "z"];
var uppercase = ["A",'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q',
'R','S','T','U','V','W','X','Y','Z'];
var special = [' ', "!", '"', "#", "$","%", "&", "'", "(", ")", "*", 
"+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\"", "]", "^", 
"_", "`", "{", "|", "}", "~"];
var length = 0;

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand =Math.random()
  return Math.floor(min*(1-rand)+rand*max)
}
// Math.random only returns numbers between 0 to 1;
// Math.floor rounds down and returns the largest integer less than or equal to a given number.

function getRandomItem(list) {
  return list[randomInt(0, list.length)]
}



function generatePassword() {

while(true) {
  var userInput = window.prompt("Choose a length of at least 8 characters and no more than 128 characters.")

  if(userInput === null) {
    return
  }

  var passwordlength = parseInt(userInput)
  // parseInt(), parses a string argument and returns an integer of the specified radix.
  // isNaN(), test wether a value is the number value NaN or not
  if (isNaN(passwordlength)) {
    window.alert('Choose a length of at least 8 characters and no more than 128 characters.')
  } else if (passwordlength < 8 || passwordlength > 128) {
    window.alert("Choose a length of at least 8 characters and no more than 128 characters.")
  } else {
    break
  }


  }
  



  var WantNumbers = window.confirm("Would you like to include Numbers?")
  var WantLowercase = window.confirm("Would you like to include lowercase letters?")
  var WantUppercase = window.confirm("Would you like to include uppercase letters?")
  var Wantspecial = window.confirm("Would you like to include special characters?")

  var optionsCart = []

  if (WantNumbers === true) {
    optionsCart.push(number)

  }

  if (WantLowercase === true) {
    optionsCart.push(lowercase)

  }

  if (WantUppercase === true) {
    optionsCart.push(uppercase)

  }

  if (Wantspecial === true) {
    optionsCart.push(special)

  }

  if (optionsCart === 0) {
    optionsCart.push(lowercase)
  }

  var generatePassword = ""

  for (var i = 0; i < passwordlength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    generatePassword += randomChar

  }

  return generatePassword

}




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
