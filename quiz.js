function checkAnswer() {
  const correctAnswer = "4"

  const selectedanswer = document.querySelector('input[name="quiz"]:checked');

  const feedback = document.getElementById('feedback') 

  //Get the value of the selected answer
  const userAnswer = selectedanswer.value;

//To compare the user answer with the correct answer
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done"
    feedback.style.color = "green"
  }
  else {
    feedback.textContent = "That is Incorrect! try again"
    feedback.style.color = "red"
  }
} 

document.getElementById('submit-answer').addEventListener('click', checkAnswer);