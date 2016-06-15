jQuery(document).ready(function($) {

    // quiz[0].question
    var quiz = [{
        "question": 'Who wrote the novella The Strange Case of Dr. Jekyll and Mr. Hyde?',
        "answers": ['Robert Louis Stevenson', 'Bram Stoker', 'Stephen King', 'Mary Shelley'],
        "correct": 'Robert Louis Stevenson'
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

    var content = $('#content'),
        question = $('#question'),
        answerDiv = $('.answers'),
        scoreDiv = $('#score'),
        submitAnswer = $('#submitAnswer');


    var currentQuestion = 0,
        score = 0,
        askQuestion = true;


    $('#startGame').on('click', function() {
        playGame();
    });

    function playGame() {

        $('.gameArea').show();
        $('#intro').hide();
        $('#submitAnswer').show();
        

        displayQuestion();

    }
    $('#submitAnswer').on('click', function() {

    });

    $('#answerHolder').submit(function(e) {
        e.preventDefault();
        //prevent user from skipping questions
     
          if ($('.answers').is(':not(:checked)')) { 
            alert('please select an answer');
                return;
          }
                
        checkAnswer();
        if (currentQuestion < 4){
        currentQuestion++;
        displayQuestion();
        } else {
            displayScore();
        }
    
        // move to next question
        //console.log(score);

    });
    
   
    function displayQuestion() {

        var answers = quiz[currentQuestion].answers,
            answersHTML = '';

        for (var i = 0; i < answers.length; i++) {
            answersHTML += "<li><input type='radio' name='quiz" + currentQuestion +
                "' id='answer" + (i + 1) +
                "' value='" + answers[i] + "'/>" +
                " <label class='answer" + (i + 1) + "'>" + answers[i] + "</label></li>";
        }
        // console.log(answersHTML); 

        question.text("Question " + (currentQuestion + 1) + ": " +
            quiz[currentQuestion].question);

        answerDiv.html(answersHTML);

        if (currentQuestion == 0) {
            scoreDiv.text('0');
            submitAnswer.textContent = "Submit Answer";
        }
    }
    
    function checkAnswer() {
        // compare user answer with answer in object
        // access quiz[n].correct
        // compare value of input with object value

        // $("input[name=quiz0]:checked").val();
        // quiz[0].correct;
        $.each(quiz, function(key, value) {

            console.log(key + ": " + value.correct);
            if ($("input[name=quiz" + key + "]:checked").val() == value.correct) {
                score++;
                // console.log(score)
        }
    });

        $('#score').text(score);
    }
    
     
       
       
    function displayScore() {

        $('#displayScore').show();
        $('#submitAnswer').hide();
        $('.gameArea').hide();
        $('#final').show();
    
    //    $('.results').html('<h2>Thanks for talking the Jekyll and Hyde Quiz</h2>' +
    //        '<h2>Here are the final results:</h2>' +
    //        '<h2>' + score + ' out of ' + quiz.length + ' questions, ' +
    //        Math.round(score / quiz.length * 100) + '%</h2>');
        $('#count').text(score);
        $('#total').text(quiz.length);
        $('#percentage').text(Math.round(score / quiz.length * 100) + '%');
    }
   
   $('#playAgain').on('click', function() {
        playAgain();
    });
    
    function playAgain() {

        $('#intro').show();
        $('#displayScore').hide();
        $('#final').hide();
        currentQuestion = 0;
        score = 0;
        console.log(score);
    }

});



