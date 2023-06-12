

    var num1 = generateRandomNumber(1, 10);
    var num2 = generateRandomNumber(1, 10);
    var operator = generateRandomNumber(1, 3); // 1: addition, 2: subtraction, 3: multiplication
  
    var question;
    var answer;


function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  
  function generateQuestion() {
    
  
    switch (operator) {
      case 1:
        question = num1 + " + " + num2;
        answer = num1 + num2;
        break;
      case 2:
        question = num1 + " - " + num2;
        answer = num1 - num2;
        break;
      case 3:
        question = num1 + " * " + num2;
        answer = num1 * num2;
        break;
    }
  
    return {
      question: question,
      answer: answer
    };
  }
  
 
  
    function updateQuestion() {
        var questionObj = generateQuestion();
        var questionElement = document.getElementById('question');
        questionElement.textContent = "Question: " + questionObj.question;
        return questionObj.answer;
      }
  
    
      function startGame() {
        var score = 0;
        var numQuestions = 50;
        var currentQuestion = updateQuestion();
  
        var answerElement = document.getElementById('answer');
        var submitButton = document.getElementById('submit');
        var resultElement = document.getElementById('result');
        var scoreElement = document.getElementById('score');
  
        
        function handleSubmit() {
          var userAnswer = parseInt(answerElement.value);
  
          if (userAnswer === currentQuestion) {
            score++;
            resultElement.textContent = "Correct!";
          } else {
            resultElement.textContent = "Wrong!";
          }
  
          if (score === numQuestions) {
            scoreElement.textContent = "Game Over! Your score: " + score + "/" + numQuestions;
            answerElement.disabled = true;
            submitButton.disabled = true;

          } else {
            currentQuestion = updateQuestion();
            answerElement.value = '';
            answerElement.focus();
          }
        }
  
        
        submitButton.addEventListener('click', handleSubmit);
      }
  
    
      startGame();