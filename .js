var characterLength = 8;
var choice = [];

var specialChar = ['!','@','#','$','%','^','&','*','(',')','|','?','<','>','-',];
var number = ['1','2','3','4','5','6','7','8','9','0'];
var lowerCase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Assignment code here


// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
// Write password to the #password input

function writePassword() {
  var correctPrompts = getPrompts(); // true or false 
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  }

}

//generates password based on the prompts
function generatePassword(){
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomLetter = Math.floor(Math.random() * choice.length);
    password = password + choice[randomLetter];
  }
  return password;
}

function getPrompts(){
  choice= [];

  characterLength = parseInt(prompt("How many characters would you like your password to be? (8-15 characters")); 
  //will prompt as a not a number if something other than number is typed in prompt

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 15){ //all false statements
    alert("Character length needs to be a number, 8-15 digits. Pleases try again.");
    return false;
  }
  if(confirm("Would you like lowercase letters in your passoword?")) {
    choice = choice.concat(lowerCase);
  }
  if(confirm("Would you like uppercase letters in your passoword?")) {
    choice = choice.concat(upperCase);
  }
  if(confirm("Would you like special characters in your passoword?")) {
    choice = choice.concat(specialChar);
  }
  if(confirm("Would you like numbers in your passoword?")) {
    choice = choice.concat(number);
  }
  return true;
}