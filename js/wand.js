function checkPassword() {
  var password = document.getElementById("passwordBox");
  var errorEle = document.getElementById("error");
  var passArr = [
    "Comet",
    "Nimbus",
    "Cleansweep",
    "Oakshaft",
    "Moontrimmer",
    "Silver Arrow",
    "Tinderblast",
    "Shooting Star",
    "Swiftstick",
    "Twigger"
  ];
  var passwordText = password.value;
  if (passArr.indexOf(passwordText) != -1) {
    return true;
  } else {
    errorEle.innerHTML = "I don't think that's a brand. How about another one?";
    return false;
  }
}
