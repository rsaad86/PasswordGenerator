// Assignment code here

//variables for password prompt
var passwordLength;
var upperCase;
var lowerCase;
var randomNumber;
var specCharacters;

var passwordButtonEl = document.getElementById("generate");

var resultPasswordPossibilites;
var myFinalPassword = "";

//prompts for criteria

passwordButtonEl.addEventListener("click", () => {
  passwordLength = prompt(
    "Please provide the length of the password (8 - 128)?",
    ""
  );

  if (passwordLength >= 8 && passwordLength <= 128) {
    upperCase = confirm("Would you like to use Upper Case letters?");
    lowerCase = confirm("Would you like to use Lower Case letters?");
    randomNumber = confirm("Would you like to use Random Numbers?");
    specCharacters = confirm("Would you like to use Special Characters?");
  } else {
    window.alert("You must select a password length between 8 to 128");
  }
});

//password generation
function generatePassword() {
  resultPasswordPossibilites = "";
  if (upperCase === true) {
    resultPasswordPossibilites = "ABCDEFGHIJKLMOPQRSTUVXYZ";
  }

  if (lowerCase === true) {
    resultPasswordPossibilites =
      resultPasswordPossibilites + "abcdefghijklmnopqrstuvwxyz";
  }

  if (randomNumber === true) {
    resultPasswordPossibilites = resultPasswordPossibilites + "0123456789";
  }

  if (specCharacters === true) {
    resultPasswordPossibilites =
      resultPasswordPossibilites + "!@#$%^&*()_+{}[]=<>/,.?'~`";
  }

  myFinalPassword = "";

  for (i = 0; i < passwordLength; i++) {
    var r = Math.floor(Math.random() * resultPasswordPossibilites.length);
    if (r < resultPasswordPossibilites.length) {
      myFinalPassword = myFinalPassword + resultPasswordPossibilites[r];
    }
  }

  return myFinalPassword;
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

//ask for password criteria
