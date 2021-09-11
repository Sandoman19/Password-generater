// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const passwordText = document.querySelector("#password");
  generatePassword();

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// set variables
let confirmedItems = "";
let password = "";

//window prompting once "generate password is clicked"
function generatePassword() {

  confirmedItems = "";
  password = "";
  // prompt to see how long the password will be
  var passwordLength = Number(prompt("Pick a number between 8 and 128?"));
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = Number(prompt("You trying to be funny I see, You must choose between 8 and 128"));
  } 
  
  // prompt to see if upper case is wanted
  const confirmIfUpperCaseWanted = confirm("Lets start yelling and put some capital letters in?");
  if (confirmIfUpperCaseWanted) {
    confirmedItems = confirmedItems + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  // prompt to see if lower case is wanted
  const confirmIfLowerCaseWanted = confirm("Shift key to hard to hold, guess you need lowercase letters then?");
  if (confirmIfLowerCaseWanted) {
    confirmedItems = confirmedItems + "abcdefghijklmnopqrstuvwxyz";
  }

  // prompt to see if numbers are wanted
  const confirmIfNumberWanted = confirm("Numbers will make it random for sure?");
  if (confirmIfNumberWanted) {
    confirmedItems = confirmedItems + "0123456789";
  }

  // prompt to see if symbols are wanted
  const confirmIfSymbolsWanted = confirm("make it really hard, symbols 😃?");
  if (confirmIfSymbolsWanted) {
    confirmedItems = confirmedItems + "!@#$%^&*<>";
  }

  // need to return if nothing has been selected
  if (!confirmIfLowerCaseWanted && !confirmIfNumberWanted && !confirmIfSymbolsWanted && !confirmIfUpperCaseWanted) {
    restart = confirm("So you want nothing, thats a great password, let try again");
    return
  }

  // generate random characters as per confirmed items
  for (let index = 0; index < passwordLength; index++) {
    const itemsPicked = confirmedItems[Math.floor(Math.random() * confirmedItems.length)];
    password += itemsPicked;
  }
}

//copy the text with the password field
function copyPasswordToClipboard() {

  var copyPassword = document.getElementById("password");

  copyPassword.select();
  copyPassword.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyPassword.value);
  
  alert("Copied password to clipboard");
}