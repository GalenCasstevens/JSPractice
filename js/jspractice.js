function getName() {
  return prompt("Please enter your name");
}

function printEvens() {
  for(i = 0; i <= 20; i++) {
    if(i % 2 == 0) {
      document.write(i + "<br>");
    }
  }

  document.write("<br>");
}

function genRandomNum(maxNum) {
   document.write(Math.floor((Math.random() * maxNum) + 1));
}
