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
