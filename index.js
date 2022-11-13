// a c b c a
var myQuestions = [
    {
      question: "Question 1:    Who was the Minister for Finance in Singapore's first cabinet?",
      answers: {                //array to store options
        a: 'Goh Keng Swee',     //correct answer
        b: 'Ong Pang Boon',
        c: 'Toh Chin Chye'
      },
      correctAnswer: 'a'      //stores the correct answer
     
    },
    {
      question: "Question 2:    Who was the Minister for Home Affairs in Singapore's first cabinet?",
      answers: {                //array to store options
        a: 'Ahmad Ibrahim',
        b: 'Goh Keng Swee',
        c: 'Ong Pang Boon'          //correct answer
      },
      correctAnswer: 'c'      //stores the correct answer
    },
    {
        question: "Question 3:    Who was the Minister for Culture in Singapore's first cabinet?",
        answers: {                //array to store options
          a: 'Ahmad Ibrahim',
          b: 'Sinnathamby Rajaratnam',      //correct answer
          c: 'Toh Chin Chye'
        },
        correctAnswer: 'b'      //stores the correct answer
      },
      {
        question: "Question 4:    Who was the Deputy Prime Minister in Singapore's first cabinet?",
        answers: {                //array to store options
          a: 'Sinnathamby Rajaratnam',
          b: 'Goh Keng Swee',      
          c: 'Toh Chin Chye'        //correct answer
        },
        correctAnswer: 'c'      //stores the correct answer
      },
      {
        question: "Question 5:    Who was the Minister for Health in Singapore's first cabinet?",
        answers: {                //array to store options
          a: 'Ahmad Ibrahim',       //correct answer
          b: 'Toh Chin Chye',      
          c: 'Goh Keng Swee'
        },
        correctAnswer: 'a'      //stores the correct answer
      },
      
      {
        question: "Question 6:    Who was the Prime Minister in Singapore's first cabinet?",
        answers:{
          a: 'Yusof Ishak',
          b: 'Lee Kuan Yew',     //correct answer
          c: 'Tony Tan Keng Yam',
        },
        correctAnswer: 'b'      //stores the correct answer
      }
  ];
  
 
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  var timingContainer = document.getElementById('timer');

  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton, timingContainer);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton, timingContainer){

    function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      var output = [];
      var answers;
  
      // for each question...
      for(var i=0; i<questions.length; i++){
        
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in questions[i].answers){
  
          // ...add an html radio button
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
            
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      // for each question...
      for(var i=0; i<questions.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }

    function countDown(timingContainer){
      setTimeout(300000)           //count 30 seconds
      document.getElementById("demo").innerHTML = "30 seconds is up!";
    }

  }
  