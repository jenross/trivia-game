//practiced making functions and organizing game in previous jquery sandbox repo 
//results not displaying between questions after clicking submit
//if user stays on a question, the countdown keeps going 

let intervalId;
let intervalId2; 
let qTimer = 30;
let questionCount = 0;   
let score = 0;
let imgDisplay = $('<img>').addClass('ans-img');
let qTimerRunning = false; 
let betweenQTimerRunning = false; 
// let betweenQTimer = 5; 
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
        resetQTimer(); 
        questionTimerRun();

        const qtemplate = `<div class='question-template'>
    
        <h2>${quiz[questionCount].question}</h2>
    
        <form class='mt-3'>
        <fieldset>
        
        <label class='answer-choices mt-3'>
        <input class= 'mr-2' type='radio' name='answer-option' value='${quiz[questionCount].answers[0]}'>
        <span>${quiz[questionCount].answers[0]}</span>
        </label>
    
        <label class='answer-choices mt-3'>
        <input class= 'mr-2' type='radio' name='answer-option' value='${quiz[questionCount].answers[1]}'>
        <span>${quiz[questionCount].answers[1]}</span>
        </label>
     
        <label class='answer-choices mt-3'>
        <input class= 'mr-2' type='radio' name='answer-option' value='${quiz[questionCount].answers[2]}'>
        <span>${quiz[questionCount].answers[2]}</span>
        </label>
    
        <label class='answer-choices mt-3'>
        <input class= 'mr-2' type='radio' name='answer-option' value='${quiz[questionCount].answers[3]}'>
        <span>${quiz[questionCount].answers[3]}</span>
        </label>
    
        <button type='submit' class='submit-btn mt-4'>Submit</button>
        
        </fieldset>
        </form>
        </div>`;
        
        $('.q-display').append(qtemplate);
        handleSubmit(); 
    } else {
        dispResults();
    }
}

//Timer functions 
function questionTimerRun() {
    if (!qTimerRunning) {
        intervalId = setInterval(decrement, 1000);
        qTimerRunning = true; 
    } 
}
     
function decrement() {
    qTimer--;
    $('.timer').text('Time remaining: ' + qTimer);
}

function stopQTimer() {
    clearInterval(intervalId);
    qTimerRunning = false;
}

function resetQTimer() {
    qTimer = 30;
    $('.timer').text('Time remaining: ' + qTimer);
}

// function betweenQTimerRun(answer) {
//     if (!betweenQTimerRunning) {
//         intervalId2 = setInterval(decrement2, 1000);
//         betweenQTimerRunning = true; 
//     } else if (betweenQTimer === 0) {
//         stopBetweenQTimer();
//     }
//     $('.response-feedback').text(answer);
// }

// function decrement2() {
//     betweenQTimer--;
// }

// function stopBetweenQTimer() {
//     clearInterval(intervalId2);
//     betweenQTimerRunning = false; 
// }

// function resetBetweenQTimer() {
//     betweenQTimer = 5; 
// }

function correctAns() {
    $('.q-display').empty();
    $('.timer').empty();
    $('.response-feedback').text('You got it correct!');
    imgDisplay.attr('src', quiz[questionCount].img);
    $('.img-container').append(imgDisplay);
    score++;
    // setTimeout(nextQuestion, 1000 * 5);
}

function incorrectAns() {
    $('.q-display').empty();
    $('.timer').empty();
    $('.response-feedback').text('Wrong! The answer was: ');
    imgDisplay.attr('src', quiz[questionCount].img);
    $('.img-container').append(imgDisplay);
    // setTimeout(nextQuestion, 1000 * 5);
}

function handleSubmit()  {
    $('.submit-btn').on('click', function (event){ 
        event.preventDefault();
        stopQTimer();
        // resetBetweenQTimer();
        let userAnswer = $('input:checked').val();
        console.log(userAnswer);
        let correctAnswer = `${quiz[questionCount].correctAnswer}`;
        console.log(correctAnswer);
        // let callback = userAnswer; 
        if (userAnswer === correctAnswer) {
            setTimeout(correctAns, 1000 * 5);
            // $('.q-display').empty();
            // $('.timer').empty();
            // $('.response-feedback').text('You got it correct!');
            // imgDisplay.attr('src', quiz[questionCount].img);
            // $('.img-container').append(imgDisplay);
            // score++;
            // betweenQTimerRun();
            // nextQuestion(); 
        } else {
            setTimeout(incorrectAns, 1000 * 5);
            // $('.q-display').empty();
            // $('.timer').empty();
            // $('.response-feedback').text('Wrong! The answer was: ' + correctAnswer);
            // imgDisplay.attr('src', quiz[questionCount].img);
            // $('.img-container').append(imgDisplay);
            // betweenQTimerRun();
            // nextQuestion(); 
        } 
        // betweenQTimerRun(callback);
        // nextQuestion(); 
    });
    // nextQuestion();
}

function nextQuestion() {
    clearTimeout();
    questionCount++;
    $('.response-feedback').empty(); 
    $('.img-container').empty();
    handleQandA(); 
}

function dispResults() {
    $('.q-display').empty();
    $('.timer').empty();
    $('.img-container').empty();
    $('.response-feedback').text('Congratulations! Your score was: ' + score);
    let endImg = $('<img>').addClass('end-img');
    endImg.attr('src', 'assets/images/tom-end.gif');
    $('.img-container').append(endImg);
    $('.reset-btn').show();
}

function startQuiz() {
    questionCount = 0;
    $('.reset-btn').hide();
    $('.img-container').empty(); 
    $('.response-feedback').empty(); 
    handleQandA();
}

startQuiz();

$('.reset-btn').on("click", function(){
    startQuiz();
});