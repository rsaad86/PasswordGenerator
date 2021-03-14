// Assignment code here

//variables for password prompt
var passwordLength;

var passwordButtonEl = document.getElementById("generate");

var availableCharacters;
var myFinalPassword = "";

//prompts for criteria
passwordButtonEl.addEventListener("click", () => {
  availableCharacters = "";
  passwordLength = prompt(
    "Please provide the length of the password (8 - 128)?",
    ""
  );
  if (passwordLength >= 8 && passwordLength <= 128) {
    if (confirm("Would you like to use Upper Case letters?")) {
      availableCharacters = "ABCDEFGHIJKLMOPQRSTUVXYZ";
    }
    if (confirm("Would you like to use Lower Case letters?")) {
      availableCharacters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (confirm("Would you like to use Random Numbers?")) {
      availableCharacters += "0123456789";
    }
    if (confirm("Would you like to use Special Characters?")) {
      availableCharacters += "!@#$%^&*()_+{}[]=<>/,.?'~`";
    }
  } else {
    passwordLength = 0;
    window.alert("You must select a password length between 8 to 128");
  }
});

//password generation
function generatePassword() {
  myFinalPassword = "";

  if (passwordLength === 0) {
    return myFinalPassword;
  }

  if (availableCharacters.length === 0) {
    alert("You did not select any option to generate the password");
  } else {
    for (i = 0; i < passwordLength; i++) {
      var r = Math.floor(Math.random() * availableCharacters.length);
      myFinalPassword += availableCharacters[r];
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
