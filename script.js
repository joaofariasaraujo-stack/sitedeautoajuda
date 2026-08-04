const questions = [
    {
        question: "1. A vida te acerta um 'cruzado de esquerda' (um imprevisto pesado acontece). Qual é a sua reação?",
        options: [
            { text: "Fico reclamando no chão esperando alguém me salvar.", type: "vitima" },
            { text: "Saio batendo no ar feito maluco sem saber pra onde ir.", type: "desesperado" },
            { text: "Recuo um passo, ajusto a guarda e analiso o próximo passo.", type: "faixapreta" }
        ]
    },
    {
        question: "2. Como está a sua rotina de 'treino' (seus objetivos diários)?",
        options: [
            { text: "Assisto mil tutoriais/livros, mas não pratico nada.", type: "vitima" },
            { text: "Tento fazer tudo no primeiro dia, me esgoto e desisto na terça.", type: "desesperado" },
            { text: "Faço o básico bem-feito todo santo dia, sem mimimi.", type: "faixapreta" }
        ]
    },
    {
        question: "3. O que você faz quando percebe que é muito ruim em algo novo?",
        options: [
            { text: "Fico com vergonha e nunca mais tento.", type: "vitima" },
            { text: "Finjo que sei tudo para não parecer fraco.", type: "desesperado" },
            { text: "Aceito que sou faixa-branca e sigo treinando pra melhorar.", type: "faixapreta" }
        ]
    },
    {
        question: "4. Qual é a sua relação com a disciplina quando você 'não está com vontade'?",
        options: [
            { text: "Se não estou com vontade, simplesmente não faço nada.", type: "vitima" },
            { text: "Fico me culpando o dia todo, mas continuo sem fazer nada.", type: "desesperado" },
            { text: "Vou e faço o mínimo necessário. Treino é treino, independente do humor.", type: "faixapreta" }
        ]
    },
    {
        question: "5. Como você lida com críticas ou feedbacks duros na vida?",
        options: [
            { text: "Levo para o lado pessoal e me sinto o pior ser humano do mundo.", type: "vitima" },
            { text: "Devolvo a crítica na hora com ignorância para me defender.", type: "desesperado" },
            { text: "Filtro o que é útil para evoluir a minha técnica e discarto o resto.", type: "faixapreta" }
        ]
    },
    {
        question: "6. Qual é a sua meta principal para os próximos meses?",
        options: [
            { text: "Espero que as coisas melhorem de alguma forma.", type: "vitima" },
            { text: "Mudar minha vida inteira da noite para o dia.", type: "desesperado" },
            { text: "Aumentar 1% de consistência diária nos meus hábitos essenciais.", type: "faixapreta" }
        ]
    }
];

const profiles = {
    vitima: {
        title: "Perfil: O Saco de Pancadas Voluntário",
        icon: '<i class="fa-solid fa-user-injured"></i>',
        desc: "Sinceridade pura: você está se deixando vencer antes do round começar. Ficar se lamentando no tatame não faz a vida parar de bater. Pare de esperar por um milagre ou resgate. Levante a guarda, pare de dar desculpas e assuma o controle dos seus atos."
    },
    desesperado: {
        title: "Perfil: O Oponente Afobado",
        icon: '<i class="fa-solid fa-fire"></i>',
        desc: "Você gasta toda a sua energia no pânico do primeiro minuto. Quer resolver a vida inteira em 24 horas, mas não tem constância. Respire, pare de dar soco no vento e entenda: a vitória vem da técnica e da calma sob pressão, não do desespero."
    },
    faixapreta: {
        title: "Perfil: Mentalidade Faixa-Preta",
        icon: '<i class="fa-solid fa-award"></i>',
        desc: "Você entende que apanhar faz parte do processo, desde que aprenda a se defender. Mantém a postura, aceita os erros sem drama e sabe que a disciplina supera qualquer talento momentâneo. Siga executando o plano."
    }
};

const advices = [
    "Ninguém vai vir te salvar. O treino é seu, a vida é sua.",
    "Estar cansado é normal. Desistir é opção de quem se acomodou.",
    "Menos teoria no papel, mais repetição na prática.",
    "O ego é o adversário que mais vai te nocautear. Mantenha a humildade.",
    "Fazer o básico bem-feito todo dia é melhor do que dar um show uma vez no ano.",
    "Apanhou da rotina hoje? Limpe a poeira, ajuste a postura e volte amanhã.",
    "Se você só treina nos dias bons, você nunca será um faixa-preta.",
    "Não confunda pressa com velocidade. Pressa gera erros; técnica gera resultados."
];

let currentQuestion = 0;
let scores = { vitima: 0, desesperado: 0, faixapreta: 0 };
let currentProfileTitle = "";

function loadQuestion() {
    const q = questions[currentQuestion];
    
    const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;
    document.getElementById('progress-text').innerText = `Pergunta ${currentQuestion + 1} de ${questions.length}`;

    document.getElementById('question-text').innerText = q.question;
    const container = document.getElementById('options-container');
    container.innerHTML = '';

    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span>${opt.text}</span> <i class="fa-solid fa-chevron-right"></i>`;
        btn.onclick = () => selectOption(opt.type);
        container.appendChild(btn);
    });
}

function selectOption(type) {
    scores[type]++;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-section').style.display = 'none';
    const resultSection = document.getElementById('result-section');
    resultSection.style.display = 'block';

    let winner = 'vitima';
    if (scores.desesperado >= scores.vitima && scores.desesperado >= scores.faixapreta) {
        winner = 'desesperado';
    }
    if (scores.faixapreta >= scores.vitima && scores.faixapreta >= scores.desesperado) {
        winner = 'faixapreta';
    }

    currentProfileTitle = profiles[winner].title;

    document.getElementById('result-icon').innerHTML = profiles[winner].icon;
    document.getElementById('result-title').innerText = profiles[winner].title;
    document.getElementById('result-desc').innerText = profiles[winner].desc;

    // Salvar no LocalStorage (Salva o resultado no navegador)
    localStorage.setItem('dojo_last_profile', profiles[winner].title);
    checkHistory();
}

function shareResult() {
    const textToShare = `Fiz o teste no Dojo da Mente e meu perfil foi: ${currentProfileTitle}. Descubra a sua postura!`;
    navigator.clipboard.writeText(textToShare).then(() => {
        alert("Resultado copiado para a área de transferência!");
    }).catch(() => {
        alert("Não foi possível copiar automaticamente.");
    });
}

function checkHistory() {
    const lastResult = localStorage.getItem('dojo_last_profile');
    if (lastResult) {
        document.getElementById('history-box').style.display = 'block';
        document.getElementById('last-result-text').innerText = lastResult;
    }
}

function restartQuiz() {
    currentQuestion = 0;
    scores = { vitima: 0, desesperado: 0, faixapreta: 0 };
    document.getElementById('quiz-section').style.display = 'block';
    document.getElementById('result-section').style.display = 'none';
    loadQuestion();
}

function generateAdvice() {
    const randomIndex = Math.floor(Math.random() * advices.length);
    document.getElementById('advice-display').innerText = `"${advices[randomIndex]}"`;
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
    checkHistory();
});