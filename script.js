// Assignment code here 
var SpecialCharacters = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  " \ ",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~"
];

var numericCharacters = [ 
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9"
];

var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z"
];
  
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
function getPasswordOptions () {
  var length = parseInt(
    prompt("Choose the length of your password, password has to be more than 8 cahacters and less than 129 characters")
  );
  if (Number.isNaN(length)) {
    alert("password length must be provided as a number");
    return null;
  }

  if (length < 8) {
    alert ("password must be at least 8 characters");
    return null;
  }
  if (length > 128) {
    alert ("password must be less than 129 characters");
    return null;
  }
  var hasSpecialCharacters = confirm ("Do you want to include special characters in your password ?" )

  var hasNumericCharacters = confirm ("Do you want to add numeric characters to your password ?");

  var hasLowerCasedCharacters = confirm("Do you want to include lowercase characters in your password ?");

  var hasUpperCasedCharacters = confirm("Do you want to include uppercase characters in your password?");

  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) 
  {
    alert(" you must select at least one character type");
    return null;
  }

  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };
  return passwordOptions;

}


function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement
}

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters =  [];

  if (!options) return null;

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(SpecialCharacters);
    guaranteedCharacters.push(getRandom(SpecialCharacters));

  }
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
    
  }
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
    
  }
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  for ( var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
  result.push(possibleCharacter)
  }

  for ( var i = 0; i < guaranteedCharacters.length; i++) {
    
  result[i] = guaranteedCharacters [i];
  }
  
  return result.join("");

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
generateBtn.addEventListener("click", writePassword)
