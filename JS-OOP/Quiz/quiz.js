function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.activeQuestionIndex = 0;
}

Quiz.prototype.guess = function(answer) {
  if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
    this.score ++;
  }
  this.activeQuestionIndex ++;
};

Quiz.prototype.getCurrentQuestion = function() {
  return this.questions[this.activeQuestionIndex];
};

Quiz.prototype.hasEnded = function() {
  return this.activeQuestionIndex >= this.questions.length;
};

