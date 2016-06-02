jQuery(document).ready(function($) {
    
    var quiz = [{
        "question": 'Who wrote the novella The Strange Case of Dr. Jekyll and Mr. Hyde?',
        "answers": ['Robert Louis Stevenson', 'Bram Stoker', 'Stephen King', 'Mary Shelley'],
        "correct":'Robert Louis Stevenson'
    }, {
        "question": 'What was Dr. Jekylls alter egos first name?',
        "answers": ['Edwin', 'John', 'Edvard', 'Edward'],
        "correct": 'Edward'
    }, {
        "question": 'In what setting did Jekyll and Hyde take place?',
        "answers": ['Spain', 'Germany', 'England', 'Canada'],
        "correct": 'England'
    }, {
        "question": 'In the 1931 movie version of Jekyll and Hyde who portrayed the main character?',
        "answers": ['Bela Lugosi', 'Lon Chaney Jr.', 'Frederic March', 'Jason Flemyng'],
        "correct": 'Frederic March'
    }, {
        "question": 'Which famous rock star, starred in the 2001 musical version of Jekyll and Hyde?',
        "answers": ['David Hasselhoff', 'Ted Neeley', 'Dave Grohl', 'Axl Rose'],
        "correct": 'David Hasselhoff'
    }];
    
    // elements defined 
    
    var content = $('content');
        question = $('question');
        answers = $('answers');
        score = $('score');
        submitAnswer = $('submit');
        
    var currentQuestion = 0;
        score = 0;
        askQuestion = true;
        
    
    function playGame() {
        $('#content').style.display = 'block';
        $('#startGame').style.display = 'none';
    }
    
    function displayQuestion() {
        $('.questionHolder #submitAnswer').on("click", function() {
        var answers = quiz[currentQuestion].answers,
        answersHTML = '';
        
        for (var i = 0; i < answers.length; i++) {
            answersHTML += "< input type='radio' name='quiz" + currentQuestion + 
            "' id='answer" + (i + 1) +
            "' value='" + answers[i] + "'>" +
            " <label class='answer" + (i + 1) + "'>" + answers[i] + "</label";
        } 
        
        question.textContent = "Question " + (currentQuestion + 1) + ": " +
        quiz[currentQuestion].question; 
        
        answers.innerHTML = answersHTML;
        
         if (currentQuestion === 0) {
            score.textContent = '0 out of ' + 
            quiz.length + 'possible questions.';
            submitAnswer.textContent = "Submit Answer";
    }
    
    function calculateScore () {
        
        if (askQuestion) {
            submitAnswer.textContent = "Next Question";
            askQuestion = false;
        } 
        
        var userChoice,
            correctAnswer,
            radios = document.getElementsByName('quiz' + currentQuestion);
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                userChoice = radios[i].value;
            }
            
            if (radios[i].value == quiz[currentQuestion].correct) {
                correctAnswer = i;
            }
        }
    
        var labelStyle = document.getElementByTagName('label')[correctAnswer].style;
        labelStyle.fontWeight = 'bold';
        if (userChoice == quiz[currentQuestion].correct) {
            score++; 
            labelStyle.color = 'blue';
        } else {
            labelStyle.color = 'red';
        }
        
        score.textContent = score + '  correct out of ' + 
            quiz.length + '  possible questions.';
        }  else { 
        askQuestion = true;
        submitAnswer.textContent = 'Submit Answer';
        if (currentQuestion < quiz.length - 1) {
            currentQuestion++;
            askQuestion();
        } else {
            gameEnds();
        }
    }
    
    function gameEnds() {
        document.getElementById('Submit').style.display = 'none';
        document.getElementById('quiz').style.display = 'block';
    }
        
    function displayScore() { 
        document.getElementByID('end').style.display = 'block';
        content.innerHTML = '<h2>Thanks for talking the Jekyll and Hyde Quiz</h2>' + 
        '<h2>Here are the final results</h2>:' + 
        '<h2>' + score + ' out of ' + quiz.length + 'question, ' + 
        Math.round.(score / quiz.length * 100) + '%</h2>';
        
        
       
    }
    
    
    
    
    
    
    
    
    
    
    
    
} 