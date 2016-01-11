var questions = [
  new Question("How old is Kurt?", ["Twenty Eight", "Twenty Nine"], "Twenty Nine"),
  new Question("How old is Maureen?", ["Twenty Seven", "Twenty Eight"], "Twenty Seven")
];

var quiz = new Quiz(questions);

QuizUI.displayNext();