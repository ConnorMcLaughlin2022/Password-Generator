// Assignment Code
var generateBtn = document.querySelector("#generate");


var numericChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChars = ['!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z']
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var addUpper;
var addLower;
var addSpecial;
var addNumber;
var length = '';
var availableChars;
var result = '';


var special = true
var number = true
var capitol = true
var lower = true
// // Global variables

// Write password to the #password input
function writePassword() {
  generatePassword();
  passwordCombine();
  var password = result;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
  generateBtn.addEventListener("click", writePassword);

// Add event listener to generate button
// Generate function
function generatePassword() {
  // prompt for length of pw
  length = prompt("how many characters do you want your password to be (8-128)");
  console.log(length)
  // check if valid length, if wront prompt again
  if ((length < 8) || (length > 128)) {
    prompt("Enter a valid number");
    if (!length) {
      alert("sorry try again!");
      return;
    }
  }
    result = '';

    // ask for character types

    // 4 confirms for each type

    addSpecial = confirm("Special characters?");
    if (addSpecial) {
      availableChars = specialChars;
    }
    console.log(availableChars);

    addNumber = confirm("Numbers?");
    if (addNumber) {
      availableChars = numericChars.concat(availableChars)
    }
    console.log(availableChars)
    addUpper = confirm("Upper Case?");
    if (addUpper) {
      availableChars = upperCase.concat(availableChars);
    }
    console.log(availableChars);
    addLower = confirm("Lower Case?");
    if (addLower) {
      availableChars = lowerCase.concat(availableChars);
    }
    console.log(availableChars);
    if (!addSpecial) {
      availableChars.pop();
    }
    // make sure one atleast in selected
    if ((!addSpecial) && (!addUpper) && (!addNumber) && (!addLower)) {
      alert("You must choose a type of character")
    }
    return;
  }
    function passwordCombine() {
      for (i = 0; i<length; i++){
        result += availableChars[Math.floor(Math.random()*availableChars.length)]
      }
      return;
    }