function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
  console.log("Setting " + text + ", " + answer);
}

Question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice;
}