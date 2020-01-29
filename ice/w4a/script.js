var userInput = prompt("Enter a word to have it reversed:").split('').reverse().join('');
alert("Your word reversed is: " + userInput);

do {
var secondInput = prompt("Guess a number between 1 and 100:");
if (secondInput <= 65) {
 alert("Your guess is too low!");
}
else if (secondInput > 66) {
    alert('Your guess is too high!');
}
else {
    alert('You got it right!');
}
}
while (secondInput != 66);
const Article = require("./Article.js");

let article = new Article(
  {
    title: "Thing Happened! Much important!",
    author: "John Murray",
    text: "This is the text!"
  }
);

console.log(article.render() );
