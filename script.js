// Assignment code here
var generateEl = document.getElementById("generate")
var passwordEl = document.getElementById("password")

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var symbols = "!@#$%^&*()"
 
// desired length answer stored as passwordLength
function getLength() {
  var passwordLength = window.prompt("How long do you want your password to be? (Choose a number between 8-128)");
  
  if (passwordLength >= 8 && passwordLength <= 128) {
    return passwordLength;
  }
  else {
    window.confirm("That is an invalid option");
    return getLength();
  }
}
 
// function for letters/symbols
function getUppercase() {
 return upperCase[Math.floor(Math.random() * upperCase.length)];
}
 
function getLowercase() {
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}
 
function getNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
 
function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}
 
function generatePassword() {
  var passwordNew = "";
  
  var length = getLength();

  var upperCheck = window.confirm("Would you like to include upper case letters in your password?");
  var lowerCheck = window.confirm("Would you like to include lower case letters in your password?");
  var numbersCheck = window.confirm("Would you like to include numbers in your password?");
  var symbolsCheck = window.confirm("Would you like to include symbols in your password?");
  
  // while and switch were used to continue randomizing the 4 different elements until the desired password length was reached
  while (passwordNew.length < length) {
    var randomize = Math.floor(Math.random() * 4);
    switch(randomize) {
      case(0): 
        if (upperCheck) {
          passwordNew += getUppercase();
        }
        break;
      case(1): 
        if (lowerCheck){
          passwordNew += getLowercase();
        }
        break;
      case(2): 
        if (numbersCheck) { 
          passwordNew += getNumbers();
        }
        break;
      case(3): 
        if (symbolsCheck) {
          passwordNew += getSymbols();
        }
        break;
    }
  }
  console.log(passwordNew);
  return passwordNew;
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