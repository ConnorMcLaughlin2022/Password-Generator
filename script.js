// Assignment Code

var specialChars= ["!","#","?"]
var numericChars= ["1","2","3","4","5","6","7","8","9"]
var lowercaseChars= ["a","b","c"]
var uppercaseChars= ["A","B","C"]
var length;
// var result "";
var availableChars;
var special = true
var number = true
var capitol = true
var lower = true
// // Global variables


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Own function
function generatePassword () {


// prompt for length of pw
length = prompt("how many characters do you want you r password to be (8-128)")
console.log(length)
// check if valid length, if wront prompt again



// ask for character types
special= confirm("Would you like to add special characters?") 
if (special) {
  availableChars = specialChars
}
console.log(availableChars)

number = confirm("would you like to add numbers?")
if (number) {
availableChars = availableChars.concat(numericChars)
}
console.log(availableChars)

capitol = confirm("would you like uppercase letters")
if (capitol){
  availableChars = availableChars.concat(uppercaseChars)
}
console.log(availableChars)
lower = confirm("would you like to add lowercase letters")
if (lower) {
  availableChars=availableChars.concat(lowercaseChars)
}
console.log(availableChars)
// 4 confirms for each type
// add to available characters
// availableChars = availableChars.concat(numericCharacters)
// validate they selected atleast one




// seperate function
// iterate length inn number of times
// select random character fropm available chars
// add to result

// return result

}
// generatePassword () 