// array de perguntas, opções e pontuação do quiz
const questions = [
    {
        question: "1. A vida te acerta um 'cruzado de esquerda' (um imprevisto pesado acontece). Qual é a sua reação?",
        options: [
            { text: "Fico reclamando no chão esperando alguém me ajudar.", type: "vitima" },
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
        question: "3. O que você faz quando percebe que é muito ruim em alguma coisa nova?",
        options: [
            { text: "Fico com vergonha e nunca mais tento.", type: "vitima" },
            { text: "Finjo que sei tudo para não parecer fraco.", type: "desesperado" },
            { text: "Aceito que sou faixa-branca e sigo treinando pra melhorar.", type: "faixapreta" }
        ]
    }
];

// Perfis de resposta com sinceridade sem filtro
const profiles = {
    vitima: {
        title: "Perfil: O 'Saco de Pancadas' Voluntário",
        desc: "Sinceridade pura: você está se deixando vencer antes do round começar. Ficar reclamando no tatame não faz o adversário parar de bater. Pare de esperar um milagre, levante a guarda e assuma a responsabilidade pela sua vida."
    },
    desesperado: {
        title: "Perfil: O Reativo Sem Gás",
        desc: "Você gasta toda a sua energia no pânico do primeiro minuto. Quer resolver tudo pra ontem, mas não tem consistência. Respire, pare de dar soco no vento e foque em dar um passo de cada vez com técnica."
    },
    faixapreta: {
        title: "Perfil: Mentalidade Faixa-Preta",
        desc: "Você entende que apanhar faz parte do processo, desde que aprenda a se defender. Mantém a calma, aceita os erros sem drama e sabe que a constância supera qualquer talento natural. Siga o plano."
    }
};

// Lista de conselhos aleatórios estilo dojo
const advices = [
    "Ninguém vai vir te salvar. O treino é seu, a vida é sua.",
    "Estar cansado é normal. Desistir é opção de quem se acomodou.",
    "Menos teoria no papel, mais repetição na prática.",
    "O ego é o adversário que mais vai te nocautear. Mantenha a humildade.",
    "Fazer o básico bem-feito todo dia é melhor do que dar um show uma vez no ano.",
    "Apanhou da rotina hoje? Limpe a poeira, ajuste a postura e volte amanhã."
];

// Estado do quiz
let currentQuestion = 0;
let scores = { vitima: 0, desesperado: 0, faixapreta: 0 };

// Carrega a pergunta atual no HTML
function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question-text').innerText = q.question;
    const container = document.getElementById('options-container');
    container.innerHTML = '';

    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt.text;
        btn.onclick = () => selectOption(opt.type);
        container.appendChild(btn);
    });
}

// Processa a escolha do usuário
function selectOption(type) {
    scores[type]++;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Calcula e exibe o resultado
function showResult() {
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';

    let winner = 'vitima';
    if (scores.desesperado >= scores.vitima && scores.desesperado >= scores.faixapreta) {
        winner = 'desesperado';
    }
    if (scores.faixapreta >= scores.vitima && scores.faixapreta >= scores.desesperado) {
        winner = 'faixapreta';
    }

    document.getElementById('result-title').innerText = profiles[winner].title;
    document.getElementById('result-desc').innerText = profiles[winner].desc;
}

// Reinicia o quiz
function restartQuiz() {
    currentQuestion = 0;
    scores = { vitima: 0, desesperado: 0, faixapreta: 0 };
    document.getElementById('quiz-section').style.display = 'block';
    document.getElementById('result-section').style.display = 'none';
    loadQuestion();
}

// Gera um conselho aleatório
function generateAdvice() {
    const randomIndex = Math.floor(Math.random() * advices.length);
    document.getElementById('advice-display').innerText = `"${advices[randomIndex]}"`;
}

// Inicialização automática ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});