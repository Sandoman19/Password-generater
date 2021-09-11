// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const passwordText = document.querySelector("#password");
  var password = generatePassword();

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//starting variables
var start;
var confirmIfNumberWanted;
var confirmIfSymbolsWanted;
var confirmIfUpperCaseWanted;
var confirmIfLowerCaseWanted;

//window prompting once "generate password is clicked"
function generatePassword() {

  //set variables for the options
  var upperCase = LowToHigh(65, 90)
  var lowerCase = LowToHigh(97, 122)
  var number = LowToHigh(48, 57)
  var symbol = LowToHigh(35, 38).concat(40,43).concat(60,64)

  //find all the option with the CharCode chat
  function LowToHigh(low, high) {
    const array = []
    for (let l = low; l <= high; l++) {
      array.push(l)
    }
    return array
  }

  do {
    start = window.prompt("Pick a number between 8 and 128?");
    for (let index = 0; (start < 8 || start > 128); index++) {
      start = window.prompt("You trying to be funny I see, You must choose between 8 and 128");      
    }
    // ^--- will start the numbering part again if not within vaule ---^.
    if (start) {
      confirmIfNumberWanted = confirm("Numbers will make it random for sure?");
      confirmIfSymbolsWanted = confirm("make it really hard, symbols 😃?");
      confirmIfUpperCaseWanted = confirm("Lets start yelling and put some capital letters in?");
      confirmIfLowerCaseWanted = confirm("Shift key to hard to hold, guess you need lowercase letters then?");
    }
    if (!confirmIfLowerCaseWanted && !confirmIfNumberWanted && !confirmIfSymbolsWanted && !confirmIfUpperCaseWanted) {
      confirmedItems = confirm("So you want nothing, thats a great password, let try again");
    } else {
      //need to add vaule to make while statement start and finish
      confirmedItems = ""
    }
  } while (confirmedItems && !confirmIfLowerCaseWanted && !confirmIfNumberWanted && !confirmIfSymbolsWanted && !confirmIfUpperCaseWanted);  
  //^--- loop back back to START if no options are slected and CONFIRMEDITEMS is true/ok --^

  //all possiable outcomes listed below LC=lowerCase, UC=upperCase, S=symbol, N=number
  if (confirmIfLowerCaseWanted && confirmIfNumberWanted && confirmIfSymbolsWanted && confirmIfUpperCaseWanted) {
    confirmedItems = lowerCase.concat(upperCase, number, symbol);
    //LC,UC,S
  } else if (confirmIfLowerCaseWanted && confirmIfSymbolsWanted && confirmIfUpperCaseWanted) {
    confirmedItems = lowerCase.concat(upperCase, symbol);
    //lC,UC,N
  } else if (confirmIfLowerCaseWanted && confirmIfNumberWanted && confirmIfUpperCaseWanted) {
    confirmedItems = lowerCase.concat(upperCase, number);
    //LC,N,S
  } else if (confirmIfLowerCaseWanted && confirmIfNumberWanted && confirmIfSymbolsWanted) {
    confirmedItems = lowerCase.concat(number, symbol);  
    //N,S,UC
  } else if (confirmIfNumberWanted && confirmIfSymbolsWanted && confirmIfUpperCaseWanted) {
    confirmedItems = number.concat(upperCase, symbol);  
    //LC,UP
  } else if (confirmIfLowerCaseWanted && confirmIfUpperCaseWanted) {
    confirmedItems = lowerCase.concat(upperCase);
    //LC,S
  } else if (confirmIfLowerCaseWanted && confirmIfSymbolsWanted) {
    confirmedItems = lowerCase.concat(symbol);
    //LC,N
  } else if (confirmIfLowerCaseWanted && confirmIfNumberWanted) {
    confirmedItems = lowerCase.concat(number);
    //N,S
  } else if (confirmIfNumberWanted && confirmIfSymbolsWanted) {
    confirmedItems = number.concat(symbol);    
    //N,UC
  } else if (confirmIfNumberWanted && confirmIfUpperCaseWanted) {
    confirmedItems = number.concat(upperCase);
    //S,UC
  } else if (confirmIfSymbolsWanted && confirmIfUpperCaseWanted) {
    confirmedItems = symbol.concat(upperCase);
    //LC
  } else if (confirmIfLowerCaseWanted) {
    confirmedItems = lowerCase  
    //N
  } else if (confirmIfNumberWanted) {
    confirmedItems = number;
    //S
  } else if (confirmIfSymbolsWanted) {
    confirmedItems = symbol;
    //UC
  } else {
    confirmedItems = upperCase;
  }

  //starts the random generating of the password 
  var password = [];

  for (var i = 0; i < start; i++) {
    var itemsPicked = confirmedItems[Math.floor(Math.random() * confirmedItems.length)];
    password.push(String.fromCharCode(itemsPicked));
  }

  //links all the above into a string (without this I was getting undefined as a password)
  var ps = password.join("");
    UserInput(ps);
  return ps;
}

//this will put password into password field
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}

//copy the text with the password field
function copyPasswordToClipboard() {

  var copyPassword = document.getElementById("password");

  copyPassword.select();
  copyPassword.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyPassword.value);
  
  alert("Copied password to clipboard");
}