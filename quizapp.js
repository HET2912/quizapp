const questions = [
    {
        question: " Which gas is needed for photosynthesis ? ",
        answers: [
            { text: "oxygen", correct: false },
            { text: "nitrogen", correct: false },
            { text: "carbondioxide", correct: true },
            { text: "hydrogen", correct: false },
        ]
    },
    {
        question: "What type of energy is used for photosynthesis to happen ? ",
        answers: [
            { text: "Light", correct: true },
            { text: "Heat", correct: false },
            { text: "Electrical", correct: false },
            { text: "Wind", correct: false },
        ]
    },
    {
        question: " The substance that makes a leaf looks green is called ? ",
        answers: [
            { text: "Leaf", correct: false },
            { text: "Chlorophyle", correct: true },
            { text: "palisade", correct: false },
            { text: "Chloroplasts", correct: false },
        ]
    },
    {
        question: " The waste by product of photosynthesis is ? ",
        answers: [
            { text: "Carbon-dioxide", correct: false },
            { text: "Glucose", correct: false },
            { text: "Oxygen", correct: true },
            { text: "No by-product", correct: false },
        ]
    },
    {
        question: " What is flow of electric charges called ? ",
        answers: [
            { text: "Condactunce", correct: false },
            { text: "Voltage", correct: false },
            { text: "Current", correct: true },
            { text: "Power", correct: false },
        ]
    },
    {
        question: "What is the value of gravitational acceleraction ? ",
        answers: [
            { text: "8.18", correct: false },
            { text: "10.04", correct: false },
            { text: "9.18", correct: false },
            { text: "9.80", correct: true },
        ]
    }


];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("ansbtn");
const nextButton = document.getElementById("nextbtn");

let currentQustionIndex = 0;
let score = 0;
function startQuiz() {
    currentQustionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQustion = questions[currentQustionIndex];
    let questionNo = currentQustionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQustion.question;

    currentQustion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectanswer)
    });
}
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);

    }
}
function selectanswer(e) {
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct === "true"
    if (isCorrect) {
        selectedbtn.classList.add("correct");
        score++;
    } else {
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;

    }
    );
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = " you scored " + score + " out of " + questions.length;
    nextButton.innerHTML = "wanna try again";
    nextButton.style.display = "block";
}
function handleNextButton() {
    currentQustionIndex++;
    if (currentQustionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if (currentQustionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
startQuiz();
