// Password Generator Homework #3

//Variables for generator
let generateBtn = document.querySelector("#generate");
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const special = "~`!#$%^&*+=-[]\\',;/{}|\":<>?";
let characters = "";
let password = "";

//Functions for generator
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
  passwordLength = prompt("Choose your password length, between 8 and 128 characters");
  console.log(passwordLength !== null);
  if (passwordLength !== null) {
    while (!passwordLength || passwordLength < 8 || passwordLength > 128) {
      alert("Please, choose a number between 8 and 128!");
      passwordLength = parseInt(
        prompt("Choose your password length, between 8 and 128 characters")
      );
    }

    confirmLower = confirm("Do you want lowercase letters?");
    confirmUpper = confirm("Do you want UPPERCASE letters?");
    confirmNumber = confirm("Do you want numbers?");
    confirmSpecial = confirm("Do you want special characters?");
    
    while (!confirmLower && !confirmUpper && !confirmNumber
      && !confirmSpecial) {
      //If user does not confirm Lower, Upper, Number, or Special Character alert will be sent
      alert("You must choose at least one character type!");
      confirmLower = confirm("Do you want lowercase letters?");
      confirmUpper = confirm("Do you want UPPERCASE letters?");
      confirmNumber
        = confirm("Do you want numbers?");
      confirmSpecial = confirm("Do you want special characters?");
    }
  }
  let characters = "";
  if (confirmLower) {
    characters += lowercase;
  }
  if (confirmUpper) {
    characters += uppercase;
  }
  if (confirmNumber
  ) {
    characters += number;
  }
  if (confirmSpecial) {
    characters += special;
  }

  // Generates random password from string
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}

// Event listeners on generate button
generateBtn.addEventListener("click", writePassword);