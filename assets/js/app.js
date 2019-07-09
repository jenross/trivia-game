//practiced making functions and organizing game in previous jquery sandbox repo 
//after submitting ans for second q it is going back to first 
let qTemplate = '';
let intervalId;
let qTimer = 30;
let questionCount = 0;
let btwQTimer = 6; 
let score = 0;
let quiz = [
    {   
        question: 'Who was one of the co-creators of the show?',
        answers: ['Robert DeNiro', 'Snoop Dogg', 'Mike Schur', 'Robert Plant'],
        correctAnswer: 'Mike Schur',
        img: 'assets/images/mike-schur.gif'
    }, 
    {
        question: 'Which is NOT a complimentary phrase Leslie used to describe Ann?',
        answers: ['Beautiful, talented, brillant, powerful musk-ox', 'Beautiful, naive, sophisticated newborn baby', 'Cunning, pliable, chesnut-haired sunfish', 'Beautiful, brilliant, sleek cheetah-warrior'],
        correctAnswer: 'Beautiful, brilliant, sleek cheetah-warrior',
        img: 'assets/images/leslie-ann.gif'
    }, 
    {
        question: 'How did Jean Ralphio say he made money the old-fashioned way?(sing it)',
        answers: ['I married a woman with a truuussst fuunnnd', 'I got run over by a Lexxuuusss', 'I sued my doctor for medical malprraaactice', 'I spilled hot coffee in my laaappp'],
        correctAnswer: 'I got run over by a Lexxuuusss',
        img: 'assets/images/jean-ralphio-lexus.jpeg'
    },
    {
        question: 'How many times did Ben quit his job at the Tilton & Randomski Accounting firm?',
        answers: ['2', '3', '10', '5'],
        correctAnswer: '3',
        img: 'assets/images/ben-accounting.gif'
    },
    {
        question: 'Whose jersey was Andy wearing when he and April got married?',
        answers: ['Reggie Wayne', 'Brett Favre', 'Tom Brady', 'Peyton Manning'],
        correctAnswer: 'Reggie Wayne',
        img: 'assets/images/april-andy-wedding.gif'
    },
    {
        question: 'Who created “The Cones of Dunshire”?', 
        answers: ['Leslie', 'Ben', 'Donna', 'April'],
        correctAnswer: 'Ben',
        img: 'assets/images/ben-cones.gif'
    },
    {
        question: 'Which celebrity is Donna Meagle\'\s cousin?',
        answers: ['Ginuwine', '50 Cent', 'Drake', 'Future'],
        correctAnswer: 'Ginuwine',
        img: 'assets/images/ginuwine.gif'
    },
    {
        question: 'What is the name of the song Andy wrote for Lil Sebastian?',
        answers: ['10,000 Tiny Dancers', '500 Rocket Men', 'Bennie & the 6,000 Jets', '5,000 Candles in the Wind'],
        correctAnswer: '5,000 Candles in the Wind',
        img: 'assets/images/lil-sebastian.png'
    },
    {
        question: 'What is Jerry Gergich’s real name?',
        answers: ['Larry', 'Harry', 'Garry', 'Terry'],
        correctAnswer: 'Garry',
        img: 'assets/images/garry.gif'
    },
    {
        question: 'What is Tom\'\s nickname for forks?',
        answers: ['Dinglehopper', 'Quad-scraper', 'Food rakes', 'Mini-pitchfork'],
        correctAnswer: 'Food rakes',
        img: 'assets/images/food-rakes.gif'
    },
    {
        question: 'What drink causes Leslie and Ann to have their first major fight?',
        answers: ['Snake juice', 'Turtle tonic', 'Alligator ale', 'Parrot punch'],
        correctAnswer: 'Snake juice',
        img: 'assets/images/snakejuice.gif'
    },
    ];

function handleQandA() {
    if (questionCount < quiz.length) {
        qtemplate = `<div class='question-template'>
    
        <h2>${quiz[questionCount].question}</h2>
    
        <form class='mt-3'>
        <fieldset>
        
        <label class='answer-choices mt-2'>
        <input type='radio' name='answer-option' value='${quiz[questionCount].answers[0]}'>
        <span>${quiz[questionCount].answers[0]}</span>
        </label>
    
        <label class='answer-choices mt-2'>
        <input type='radio' name='answer-option' value='${quiz[questionCount].answers[1]}'>
        <span>${quiz[questionCount].answers[1]}</span>
        </label>
    
        <label class='answer-choices mt-2'>
        <input type='radio' name='answer-option' value='${quiz[questionCount].answers[2]}'>
        <span>${quiz[questionCount].answers[2]}</span>
        </label>
    
        <label class='answer-choices mt-2'>
        <input type='radio' name='answer-option' value='${quiz[questionCount].answers[3]}'>
        <span>${quiz[questionCount].answers[3]}</span>
        </label>
    
        <button type='submit' class='submit-btn mt-3'>Submit</button>
        
        </fieldset>
        </form>
        </div>`;
        
        $('.q-display').append(qtemplate);
        questionTimerRun();

    } else {
        dispResults();
    }
}

function questionTimerRun() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
     
function decrement() {
    qTimer--;
    $('.timer').text('Time remaining: ' + qTimer);
    if (qTimer === 0) {
        clearInterval(intervalId);
    }
}
//bug not due to img 
function timeToNextQ() {
    let imgDisplay = $('<img>').addClass('ans-img');
    imgDisplay.attr('src', quiz[questionCount].img);
    $('.response-feedback').append(imgDisplay);
    clearInterval(intervalId);
    intervalId = setInterval(decrementBtw, 1000);
}
    
function decrementBtw() {
    btwQTimer--;
    if (btwQTimer === 0) {
        console.log("on to the next");
        nextQuestion();
        handleQandA();
    }
}

function handleResponse()  {
    $('.submit-btn').on('click', function (event){
        event.preventDefault();
        let userAnswer = $('input:checked').val();
        console.log(userAnswer);
        let correctAnswer = `${quiz[questionCount].correctAnswer}`;
        console.log(correctAnswer);
        if (userAnswer === correctAnswer) {
            $('.q-display').empty();
            $('.timer').hide();
            $('.response-feedback').text('You got it correct!');
            score++;
            timeToNextQ();
        } else {
            $('.q-display').empty();
            $('.timer').hide();
            $('.response-feedback').text('You got it wrong. The answer was: ' + correctAnswer);
            timeToNextQ();
        } 
    });
}

function nextQuestion() {
    questionCount++;
    $('.timer').show(); 
    $('.response-feedback').hide(); 
}

function dispResults() {
    $('.q-display').empty();
    $('.timer').hide();
    $('.response-feedback').text('Congratulations! Your score was: ' + score);
    let endImg = $('<img>').addClass('end-img');
    endImg.attr('src', 'assets/images/tom-end.gif');
    $('.response-feedback').append(endImg);
    $('.reset-btn').show();
}

function startQuiz() {
    questionCount = 0;
    $('.reset-btn').hide();
    handleQandA();
    handleResponse();
}

startQuiz();

$('.reset-btn').on("click", function(){
    startQuiz();
});