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
  
  var passwordLength = Number(prompt("Pick a number between 8 and 128?"));
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = Number(prompt("You trying to be funny I see, You must choose between 8 and 128"));
  } 

  const confirmIfUpperCaseWanted = confirm("Lets start yelling and put some capital letters in?");
  if (confirmIfUpperCaseWanted) {
    confirmedItems = confirmedItems + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  const confirmIfLowerCaseWanted = confirm("Shift key to hard to hold, guess you need lowercase letters then?");
  if (confirmIfLowerCaseWanted) {
    confirmedItems = confirmedItems + "abcdefghijklmnopqrstuvwxyz";
  }
  const confirmIfNumberWanted = confirm("Numbers will make it random for sure?");
  if (confirmIfNumberWanted) {
    confirmedItems = confirmedItems + "0123456789";
  }
  const confirmIfSymbolsWanted = confirm("make it really hard, symbols 😃?");
  if (confirmIfSymbolsWanted) {
    confirmedItems = confirmedItems + "!@#$%^&*<>";
  }

  if (!confirmIfLowerCaseWanted && !confirmIfNumberWanted && !confirmIfSymbolsWanted && !confirmIfUpperCaseWanted) {
    restart = confirm("So you want nothing, thats a great password, let try again");
    return
  }

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