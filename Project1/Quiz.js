let scores = {
    Cyprian: 0,
    Irka: 0,
    Lucyna: 0,
    Piotr: 0,
    Urlyk: 0
};

const questions = [
    {
        question: "jakies pytanie",
        answers: [
            {
                text: "lorem ipsum cyprian",
                character: "Cyprian" 
            },
            {
                text: "lorem ipsum irka",
                character: "Irka" 
            },
            {
                text: "lorem ipsum lucyna",
                character: "Lucyna" 
            },
            {
                text: "lorem ipsum piotr",
                character: "Piotr" 
            },
            {
                text: "lorem ipsum urlyk",
                character: "Urlyk" 
            }
        ]
    },
    
    {
        question: "jakies pytanie 2",
        answers: [
            {
                text: "lorem ipsum a",
                character: "Cyprian" 
            },
            {
                text: "lorem ipsum b",
                character: "Irka" 
            },
            {
                text: "lorem ipsum c",
                character: "Lucyna" 
            },
            {
                text: "lorem ipsum d",
                character: "Piotr" 
            },
            {
                text: "lorem ipsum e",
                character: "Urlyk" 
            }
        ]
    },

];
const quizContainer = document.getElementById('quizContainer');
const questionContainer = document.getElementById('questionContainer');
const answerContainers = [
    document.getElementById('answer0'),
    document.getElementById('answer1'),
    document.getElementById('answer2'),
    document.getElementById('answer3'),
    document.getElementById('answer4')
];

let currentIdx = 0;

function loadQuestion() {
    if (currentIdx >= questions.length) {
        showResult();
        return;
    }

    const currentQuestion = questions[currentIdx];
    
    questionContainer.innerText = currentQuestion.question;
    
   currentQuestion.answers.forEach((answerObj, index) => {
        const button = answerContainers[index];
        if (button) {
            button.innerText = answerObj.text;
            button.onclick = function(){
                scores[answerObj.character]++;
                currentIdx++;
                loadQuestion();
            }
        }
    });
}
function showResult(){
    let bestCharacter='';
    let maxPoints=-1;
    for (let char in scores){
        if(scores[char]>maxPoints)
        {
            maxPoints = scores[char];
            bestCharacter = char;
        }
    }
    quizContainer.innerText=`Jesteś ${bestCharacter}!!!`;
}

loadQuestion();