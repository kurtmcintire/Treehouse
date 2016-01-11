var QuizUI = {
  displayNext: function() {
    if (quiz.hasEnded()) {
      this.displayScore();
    } else {
      this.displayQuestion();
      this.displayChoices();
      this.displayProgress();
    }
  },
  
  displayScore: function() {
    var gameOverHTML = "<h1>Game Over</h>";
    gameOverHTML += "<h2> Your score is: " + quiz.score + "</h2>";
    this.populateIdWithHTML("quiz", gameOverHTML);
  },
  
  displayQuestion: function() {
    this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
  },
  
  displayChoices: function() {
    
    var choices = quiz.getCurrentQuestion().choices;    
    for (var i = 0; i < choices.length; i++) {
      this.populateIdWithHTML("choice" + i, choices[i]);
      this.guessHandler("guess" + i, choices[i]);
    }
  },
    
  displayProgress: function() {
    var currentQuestionNumber = quiz.activeQuestionIndex + 1;
    this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
  },
  
  populateIdWithHTML: function(id, text) {
    var element = document.getElementById(id);
    element.innerHTML = text;
  },
  
  guessHandler: function(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
      console.log("Button Pressed");
      quiz.guess(guess);
      QuizUI.displayNext();
    }
  }
}