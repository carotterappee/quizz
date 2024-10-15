// Liste des questions et réponses
const questions = [
    { question: "Who is the most amazing person I know?", answer: "vladimir" },
    { question: "Who is my everyday hero?", answer: "vladimir" },
    { question: "Who deserves all the good things in life?", answer: "vladimir" },
    { question: "Who is the most charming man I know?", answer: "vladimir" },
    { question: "Who is the strongest?", answer: "vladimir" },
    { question: "Who has the most beautiful heart in the world?", answer: "vladimir" },
    { question: "Who is the person I want to make happy every day?", answer: "vladimir" }
];

let currentQuestionIndex = 0;

// Attendre 5 secondes pour afficher le bouton "Yes!"
setTimeout(function() {
    document.getElementById('yes-container').style.display = 'block';
}, 5000);

// Clic sur le bouton "Yes!"
document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('yes-container').style.display = 'none'; // Cache le bouton "Yes!"
    document.getElementById('character').style.left = '20px'; // Déplace le personnage en haut à gauche
    document.getElementById('quiz-container').style.display = 'block'; // Affiche la première question
    displayQuestion(); // Afficher la première question
});

// Affichage de la question actuelle
function displayQuestion() {
    document.getElementById('question-text').textContent = questions[currentQuestionIndex].question;
}

// Vérification de la réponse du quiz
document.getElementById('submit-answer').addEventListener('click', function() {
    var answer = document.getElementById('answer-input').value.toLowerCase();
    
    if (answer === questions[currentQuestionIndex].answer) {
        showHearts(); // Afficher des cœurs si la réponse est correcte
    } else {
        showPoop(); // Afficher des émoticônes "caca" si la réponse est incorrecte
    }
});

// Affichage des cœurs
function showHearts() {
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        document.body.appendChild(heart);
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';

        setTimeout(function() {
            heart.remove();
        }, 5000);
    }
    nextQuestion(); // Passer à la question suivante
}

// Affichage des émoticônes "caca"
function showPoop() {
    for (let i = 0; i < 10; i++) {
        let poop = document.createElement('div');
        poop.classList.add('poop');
        poop.innerHTML = '💩';
        document.body.appendChild(poop);
        poop.style.left = Math.random() * 100 + 'vw';
        poop.style.animationDuration = Math.random() * 2 + 3 + 's';

        setTimeout(function() {
            poop.remove();
        }, 5000);
    }
    nextQuestion(); // Passer à la question suivante
}

// Passer à la question suivante
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        document.getElementById('answer-input').value = ''; // Réinitialiser la zone de texte
        displayQuestion(); // Afficher la question suivante
    } else {
        showGift(); // Afficher le cadeau si toutes les questions sont terminées
    }
}

// Affichage du cadeau final
function showGift() {
    document.getElementById('quiz-container').style.display = 'none'; // Cache les questions
    document.getElementById('gift-box').style.display = 'block'; // Affiche le cadeau
}

// Clic sur le cadeau
document.getElementById('gift-box').addEventListener('click', function() {
    alert('You are the best, never doubt that and you are the strongest. God protects you my love.');
});
