const results = {
    Cyprian:
    {
        description: "Cyprian was a young smuggler who lived in an old shipping container with his brother Kamil. He lost his arm trying to help Irka get out of her perilous journey to Selev. Recently, he set out to search for his brother, but never came back. Cyprian is best known for his bravery and tendency to leap into action for the ones he loves.",
        image: "QuizResults/Cyprian.png"
    },
    Irka:
    {
        description: "Irka is a 16-year old courier raised on the roofs of Bastion and the main character of Solaris. She is the granddaughter of Lucyna, who founded Lunula sanitary units. She is best known for her signature red hood and rebellious character. Irka is very courageous, especially for someone her age, and cares deeply about her family and friends.",
        image: "QuizResults/Irka.png"
    },
    Lucyna:
    {
        description: "Lucyna is the founder of Lunula sanitary units and the grandmother of Irka, Solaris's protagonist. She's always been a strong woman, and even in the face of illness, she remains caring, resilient and as Polish as they come. She is one of the few people in the city who remember it before the conflict between Selev and Bastion.",
        image: "QuizResults/Lucyna.png"
    },
    Piotr:
    {
        description: "Piotr is the acting leader of Lunula sanitary units during the founder's illness. He always keeps both his feet firmly on the ground and cares deeply for Bastion, doing everything in his power to find a cure for the mysterious disease.",
        image: "QuizResults/Piotr.png"
    },
    Urlyk:
    {
        description: "Urlyk is the exiled founder of Lunula sanitary units, who now resides in Selev and acts as the leader of the local community. On the brink of insanity and working on a cure for Solaris alone, he remains one of the city's greatest mysteries.",
        image: "QuizResults/Urlyk.png"
    },
}


let scores = {
    Cyprian: 0,
    Irka: 0,
    Lucyna: 0,
    Piotr: 0,
    Urlyk: 0
};

const questions = [
    {
        question: "(1/5) Your best friend is in trouble! What do you do?",
        answers: [
            {
                text: "I try to make sure they are safe in the first place. They need to know they are not alone in this",
                character: "Lucyna" 
            },
            {
                text: "I drop everything and rush to save them, no matter the risk",
                character: "Cyprian" 
            },
            {
                text: "I try to recognise the cause of the problem and find a sensible plan to help them",
                character: "Urlyk" 
            },
            {
                text: "I try to keep it cool and gather help. The most important thing is to act reasonably",
                character: "Piotr" 
            },
            {
                text: "I won't sit around and wait for a miracle. I'm going to do everything I can to save them, even if it means breaking a few rules",
                character: "Irka" 
            },
        ]
    },
    
    {
        question: "(2/5) How do you make difficult decisions?",
        answers: [
            {
                text: "I follow my heart and try to help others if possible",
                character: "Cyprian" 
            },
            {
                text: "I listen to my gut, even if it means taking a leap of faith",
                character: "Irka" 
            },
            {
                text: "I think about my loved ones and what can I do for them",
                character: "Lucyna" 
            },
            {
                text: "I choose the most practical and reasonable solution",
                character: "Piotr" 
            },
            {
                text: "I think throughoughly about all possible outcomes and choose the most optimal one",
                character: "Urlyk" 
            }
        ]
    },
    {
        question: "(3/5) How would you like to be remembered?",
        answers: [
            {
                text: "As someone who never turned their back on the ones they loved",
                character: "Cyprian" 
            },
            {
                text: "As someone others could always rely on",
                character: "Piotr" 
            },
            {
                text: "As someone who never followed anyone's expectations",
                character: "Irka" 
            },
            {
                text: "As someone who never betrayed their ideals",
                character: "Urlyk" 
            },
            {
                text: "As someone who helped to make the world a better place",
                character: "Lucyna" 
            }
            
        ]
    },
    {
        question: "(4/5) You have a chance to start all over again. What do you choose?",
        answers: [
            {
                text: "An opportunity to solve something that's been on my mind for a long time",
                character: "Urlyk" 
            },
            {
                text: "A place where I can be with the people I care about",
                character: "Lucyna" 
            },
            {
                text: "A chance to make sure my loved ones never have to face anything alone",
                character: "Cyprian" 
            },
            {
                text: "A life on my own terms, far from other people's judgement and rules",
                character: "Irka" 
            },
            {
                text: "An opportunity to ensure a better future for others",
                character: "Piotr" 
            }
            
        ]
    },
    {
        question: "(5/5) What is your biggest weakness?",
        answers: [
            {
                text: "I often put other people's well-being before my own",
                character: "Cyprian" 
            },
            {
                text: "I often feel responsible for things I have no control over",
                character: "Piotr" 
            },
            {
                text: "I have a difficulty to let other people see my weaknesses and take care of me",
                character: "Lucyna" 
            },
            {
                text: "I'm too impulsive and don't think about the consequences of my actions",
                character: "Irka" 
            },
            
            {
                text: "I hold grudges and am determined to prove people wrong",
                character: "Urlyk" 
            }
        ]
    }

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
    const imageLink = results[bestCharacter].image;
    const description = results[bestCharacter].description;
    

    quizContainer.innerHTML =`<h2>You are ${bestCharacter}!</h2>
    <img src="${imageLink}" width:200px>
    <div class="break">
    <p>${description}</p>
    `;
}

loadQuestion();