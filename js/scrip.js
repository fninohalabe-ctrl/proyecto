const questions = [
    {
        question: "¿En qué año nació el Beato Enrique Canadell Quintana?",
        options: ["1904", "1890", "1913", "1907"],
        answer: 1
    },
    {
        question: "¿En qué ciudad nació?",
        options: ["Barcelona", "Lérida", "Olot", "Mataró"],
        answer: 2
    },
    {
        question: "¿En qué año fue ordenado sacerdote?",
        options: ["1913", "1907", "1936", "1890"],
        answer: 0
    },
    {
        question: "¿A qué orden religiosa pertenecía?",
        options: ["Franciscanos", "Escuelas Pías (Escolapios)", "Jesuitas", "Salesianos"],
        answer: 1
    },
    {
        question: "¿Qué cargo tenía en 1936 en el Colegio de las Escuelas Pías de Barcelona?",
        options: ["Vicerrector", "Bibliotecario", "Director de Catequesis", "Maestro de Novicios"],
        answer: 0
    },
    {
        question: "¿Por qué se fue de la casa de la familia amiga que lo refugió?",
        options: ["Porque lo echaron", "Para no ponerla en peligro", "Porque quería volver al colegio", "Porque se mudó a otro país"],
        answer: 1
    },
    {
        question: "¿Qué hizo cuando los milicianos le preguntaron dónde estaban otros sacerdotes?",
        options: ["Los delató", "Escapó", "Mintió diciendo que no era sacerdote", "No los traicionó"],
        answer: 3
    },
    {
        question: "¿En qué año fue beatificado por el Papa Juan Pablo II?",
        options: ["1985", "2000", "1995", "1990"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("quiz-question");
const optionsEl = document.getElementById("quiz-options");
const nextBtn = document.getElementById("btn-next");
const scoreEl = document.getElementById("quiz-score");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    scoreEl.textContent = "";

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.classList.add("option-btn");
        btn.textContent = opt;
        btn.onclick = () => selectOption(index, btn);
        optionsEl.appendChild(btn);
    });
}

function selectOption(selectedIndex, selectedBtn) {
    const correctIndex = questions[currentQuestion].answer;
    const buttons = optionsEl.querySelectorAll(".option-btn");

    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === correctIndex) btn.classList.add("correct");
    });

    if (selectedIndex === correctIndex) {
        score++;
    } else {
        selectedBtn.classList.add("wrong");
    }

    nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    nextBtn.style.display = "none";
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    questionEl.textContent = "¡Has completado la trivia!";
    optionsEl.innerHTML = "";
    scoreEl.innerHTML = `<strong>Tu puntaje: ${score} de ${questions.length} respuestas correctas.</strong>`;
}

loadQuestion();
