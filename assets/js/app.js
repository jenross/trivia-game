//practiced making functions and organizing game in previous jquery sandbox repo 

let qTemplate = '';
let intervalId;
let qTimer = 30;
let questionCount = 0;
let btwQTimer = 5;//maybe too long? 
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
    ];

function handleQandA() {
    if (questionCount < quiz.length) {
        qtemplate = `<div class='question-template'>
    
        <h2>${quiz[questionCount].question}</h2>
    
        <form>
        <fieldset>
        
        <label class='answer-choices'>
        <input type='radio' name='answer-option' value='${quiz[questionCount].answers[0]}'>
        <span>${quiz[questionCount].answers[0]}</span>
        </label>
    
        <label class='answer-choices'>
        <input type='radio' name='answer-option' value='${quiz[questionCount].answers[1]}'>
        <span>${quiz[questionCount].answers[1]}</span>
        </label>
    
        <label class='answer-choices'>
        <input type='radio' name='answer-option' value='${quiz[questionCount].answers[2]}'>
        <span>${quiz[questionCount].answers[2]}</span>
        </label>
    
        <label class='answer-choices'>
        <input type='radio' name='answer-option' value='${quiz[questionCount].answers[3]}'>
        <span>${quiz[questionCount].answers[3]}</span>
        </label>
    
        <button type="submit" class="submit-btn">Submit</button>
        
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
    
function timeToNextQ() {
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
            //show img that correlates with answer
        } else {
            $('.q-display').empty();
            $('.timer').hide();
            $('.response-feedback').text('You got it wrong. The answer was: ' + correctAnswer);
            timeToNextQ();
            //show img 
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
    //display end-of-game img 
    $('.reset-btn').show();
}

function startQuiz() {
    questionCount = 0;
    $('.reset-btn').hide();
    handleQandA();
    handleResponse();
}

startQuiz();