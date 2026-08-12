// DADOS DO QUIZ (15 Perguntas com estilo de artes marciais)
const quizData = [
    {
        question: "1. O que você faz ao presenciar alguém sofrendo racismo na escola?",
        options: [
            "Ignoro para não me envolver no problema.",
            "Entro na discussão gritando e gerando mais confusão.",
            "Aplico a Base Forte do Jiu-Jitsu: Apoio a vítima, busco autoridade e não deixo o agressor impune."
        ],
        correct: 2,
        feedback: "🥊 BASE FORTE DO JIU-JITSU: Mantenha seus pés firmes. Ter base é apoiar quem precisa com serenidade e postura firme, sem ceder à provocação ou ficar inerte."
    },
    {
        question: "2. Como reagir a provocações verbais de bullying na sala de aula?",
        options: [
            "Fico com raiva e perco o controle me desequilibrando.",
            "Uso a Esquiva do Boxe: Não absorvo o golpe, mantenho a calma e me afasto do conflito.",
            "Aceito o que dizem e me isolo dos meus amigos."
        ],
        correct: 1,
        feedback: "🥊 ESQUIVA DO BOXE: Nem todo golpe precisa ser rebatido. Ao se esquivar emocionalmente, o agressor soca o ar e perde a energia."
    },
    {
        question: "3. Se alguém faz piadas racistas dizendo que é 'só brincadeira', como agir?",
        options: [
            "Dou risada para me encaixar e não ser excluído.",
            "Aplico o Jab de Parada: Imponho limites claros com voz firme, mostrando que racismo é crime.",
            "Fico em silêncio acumulando raiva por dentro."
        ],
        correct: 1,
        feedback: "🥊 JAB DE PARADA: O jab corta o avanço do adversário no momento certo. Colocar limites imediatos mostra que desrespeito não tem espaço."
    },
    {
        question: "4. Quando a raiva e a frustração da escola começam a se acumular, qual a atitude ideal?",
        options: [
            "Respiro fundo, busco o Mindset de Campeão e uso a razão antes de tomar qualquer atitude.",
            "Arrumo briga no pátio para descarregar o estresse.",
            "Guardo tudo sozinho até explodir."
        ],
        correct: 0,
        feedback: "🥋 MINDSET DE CAMPEÃO: Um verdadeiro atleta de combate domina as emoções. A compostura sob pressão é a marca dos grandes vencedores."
    },
    {
        question: "5. O que fazer quando o bullying começa a prejudicar sua auto-estima?",
        options: [
            "Começo a acreditar nas ofensas que os outros dizem.",
            "Entro no Roll de Apoio: Busco meus amigos leais, psicólogo escolar ou familiares.",
            "Me fecho totalmente e corto contato com todos."
        ],
        correct: 1,
        feedback: "🥋 ROLL DE APOIO: Ninguém treina jiu-jitsu sozinho! Contar com uma equipe de confiança fortalece sua blindagem emocional."
    },
    {
        question: "6. Um colega novo sofre preconceito e é excluído do grupo de esportes. Qual a sua ação?",
        options: [
            "Finjo que não vi, afinal não é comigo.",
            "Aplico o Fechamento de Guarda: Chamo o colega para a minha equipe e garanto o respeito a ele.",
            "Fico com medo de ajudar e virar o próximo alvo."
        ],
        correct: 1,
        feedback: "🥋 FECHAMENTO DE GUARDA: A guarda protege o praticante e acolhe a situação. Proteger o vulnerável é o dever moral de quem busca honra."
    },
    {
        question: "7. Como lidar com mentiras e ataques racistas em grupos digitais (Cyberbullying)?",
        options: [
            "Respondo com mais xingamentos em um ciclo violento.",
            "Aplico a Defesa Pessoal Tática: Tiro prints, bloqueio o agressor e levo às autoridades.",
            "Apago minhas redes e finjo que nada aconteceu."
        ],
        correct: 1,
        feedback: "🥊 DEFESA PESSOAL TÁTICA: Guardar evidências e usar as regras da escola/lei anula a ação do agressor com inteligência e estratégia."
    },
    {
        question: "8. O que significa cultivar o 'Respeito ao Tatame' no dia a dia da escola?",
        options: [
            "Respeitar apenas quem é mais forte que eu.",
            "Tratar todos os colegas, professores e colaboradores com máxima dignidade e igualdade.",
            "Exigir respeito dos outros sem demonstrar o mesmo por eles."
        ],
        correct: 1,
        feedback: "🥋 RESPEITO AO TATAME: O primeiro mandamento de qualquer arte marcial é a cortesia e a humildade com todos à sua volta."
    },
    {
        question: "9. Se a coordenação inicial não resolver um caso grave de racismo, o que fazer?",
        options: [
            "Desisto de buscar meus direitos.",
            "Faço uma Transição de Posição: Busco a Direção, Ouvidoria ou o Conselho Tutelar (Disque 100).",
            "Tento resolver usando violência física."
        ],
        correct: 1,
        feedback: "🥋 TRANSIÇÃO DE POSIÇÃO: Se uma posição não funciona no combate, você ajusta o golpe. Buscar instâncias superiores garante a solução correta."
    },
    {
        question: "10. Como transformar o sentimento de rejeição do bullying em algo produtivo?",
        options: [
            "Descontando minha raiva em colegas mais novos.",
            "Focando no Treino da Vida: Investindo nos meus estudos, hobbies, saúde e desenvolvimento.",
            "Guardando ressentimento para sempre."
        ],
        correct: 1,
        feedback: "🥊 TREINO DA VIDA: A melhor resposta à ignorância é o seu próprio sucesso e evolução pessoal irrefutável."
    },
    {
        question: "11. Ao ver 'memes' ofensivos e racistas circulando no WhatsApp da turma, como agir?",
        options: [
            "Acho engraçado e compartilho nos stories.",
            "Fico em silêncio absoluto.",
            "Aplico o Contra-Ataque Consciente: Repreendo o conteúdo no grupo e me recuso a pactuar."
        ],
        correct: 2,
        feedback: "🥊 CONTRA-ATAQUE CONSCIENTE: Romper o silêncio contra o preconceito desestrutura a aprovação social que o agressor procura."
    },
    {
        question: "12. Como reagir a 'microagressões' ou comentários preconceituosos velados?",
        options: [
            "Fazer o Xeque-Mate Intelectual: Perguntar calmamente 'Pode me explicar qual a graça disso?'.",
            "Entrar em pânico e chorar no banheiro.",
            "Sorrir de forma amarela para não criar clima chato."
        ],
        correct: 0,
        feedback: "🧠 XEQUE-MATE INTELECTUAL: Pedir para o agressor explicar uma piada racista expõe o preconceito e desarma a situação sem perder a classe."
    },
    {
        question: "13. Qual a chave para manter sua auto-imagem blindada contra apelidos pejorativos?",
        options: [
            "Entender a Blindagem Mental: O ataque reflete a limitação e o caráter do agressor, não o seu valor.",
            "Mudar meu jeito de ser para tentar agradar os outros.",
            "Ficar com raiva de todo mundo à minha volta."
        ],
        correct: 0,
        feedback: "🛡️ BLINDAGEM MENTAL: Quem sabe quem é não se abala com a opinião de quem nada construiu. Seu valor é inegociável."
    },
    {
        question: "14. Dois colegas estão prestes a brigar no corredor devido a provocações. Qual seu papel?",
        options: [
            "Incentivo a briga e começo a filmar.",
            "Saio de perto para ver de longe.",
            "Uso a Desescalada de Conflito: Chamo ajuda de inspetores/professores imediatamente."
        ],
        correct: 2,
        feedback: "🥊 DESESCALADA DE CONFLITO: Interromper a espiral de violência antes do dano físico é a marca do verdadeiro mestre das artes marciais."
    },
    {
        question: "15. Qual é o grande objetivo de combater o bullying e o racismo no colégio?",
        options: [
            "Ficar famoso na escola.",
            "Alcançar a Vitória por Finalização: Garantir um ambiente seguro, justo e de crescimento para todos.",
            "Se vingar de todas as pessoas que te fizeram mal."
        ],
        correct: 1,
        feedback: "🏆 VITÓRIA POR FINALIZAÇÃO: A verdadeira vitória não é vencer o outro, mas sim criar um ambiente onde todos possam evoluir em paz!"
    }
];

// ESTADOS DO QUIZ
let currentQuestionIndex = 0;
let score = 0;

// ELEMENTOS DOM QUIZ
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackBox = document.getElementById('feedback-box');
const nextBtn = document.getElementById('next-btn');
const progressText = document.getElementById('quiz-progress');
const progressBar = document.getElementById('progress-bar');

const quizContainer = document.getElementById('quiz-container');
const resultBox = document.getElementById('result-box');
const resultScore = document.getElementById('result-score');
const resultRank = document.getElementById('result-rank');
const resultDesc = document.getElementById('result-desc');

// INICIALIZAR QUIZ
function loadQuestion() {
    const currentQ = quizData[currentQuestionIndex];
    
    // Atualizar Barra
    progressText.innerText = `Pergunta ${currentQuestionIndex + 1} de ${quizData.length}`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / quizData.length) * 100}%`;

    // Texto da pergunta
    questionText.innerText = currentQ.question;

    // Resetar estados
    optionsContainer.innerHTML = '';
    feedbackBox.classList.add('hidden');
    nextBtn.classList.add('hidden');

    // Renderizar Opções
    currentQ.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => selectOption(idx);
        optionsContainer.appendChild(btn);
    });
}

function selectOption(selectedIndex) {
    const currentQ = quizData[currentQuestionIndex];
    const buttons = optionsContainer.querySelectorAll('.option-btn');

    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === selectedIndex) {
            btn.classList.add('selected');
        }
    });

    if (selectedIndex === currentQ.correct) {
        score++;
    }

    // Mostrar feedback
    feedbackBox.innerHTML = `<span class="feedback-title">Tática Aplicada:</span> ${currentQ.feedback}`;
    feedbackBox.classList.remove('hidden');

    nextBtn.classList.remove('hidden');
}

nextBtn.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
};

function showResults() {
    quizContainer.classList.add('hidden');
    resultBox.classList.remove('hidden');

    resultScore.innerText = `Você acertou ${score} de ${quizData.length} táticas de combate mental!`;

    if (score >= 13) {
        resultRank.innerText = "FAIXA PRETA - MESTRE DA RESILIÊNCIA";
        resultDesc.innerText = "Excepcional! Você domina com maestria a esquiva, o respeito e a liderança necessária para combater o preconceito e proteger seu espaço.";
    } else if (score >= 8) {
        resultRank.innerText = "FAIXA AZUL - GUERREIRO EM EVOLUÇÃO";
        resultDesc.innerText = "Muito bom! Você possui ótimos reflexos mentais, mas ainda pode aprimorar suas táticas de liderança e controle emocional sob extrema pressão.";
    } else {
        resultRank.innerText = "FAIXA BRANCA - INÍCIO DA JORNADA";
        resultDesc.innerText = "O primeiro passo é reconhecer o aprendizado. Continue treinando sua mente, aprenda as táticas de esquiva e busque apoio sempre que precisar!";
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultBox.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    loadQuestion();
}

// ===================================
// MURO DE APOIO (FORUM INTERATIVO)
// ===================================

const initialPosts = [
    {
        author: "GuerreiroAfro99",
        category: "Desabafo",
        content: "Hoje passei por um momento chato no corredor sobre meu cabelo. Fiquei muito chateado no momento, mas lembrei da esquiva do boxe e decidi acionar a coordenação em vez de perder a cabeça.",
        likes: 12
    },
    {
        author: "FaixaAzulMental",
        category: "Apoio",
        content: "Para quem está passando por xingamentos ou exclusão: lembre-se que o problema tá na ignorância do agressor, não em você! Sua história e sua cor são motivo de orgulho!",
        likes: 24
    }
];

const forumFeed = document.getElementById('forum-feed');
const postForm = document.getElementById('post-form');

function renderPosts() {
    forumFeed.innerHTML = '';
    initialPosts.forEach((post, idx) => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <div class="post-header">
                <span class="post-author">🥋 ${post.author}</span>
                <span class="post-tag">${post.category}</span>
            </div>
            <p class="post-content">${post.content}</p>
            <div class="post-footer">
                <button class="like-btn" onclick="likePost(${idx})">
                    ❤️ <span>${post.likes}</span> Apoios
                </button>
            </div>
        `;
        forumFeed.appendChild(postCard);
    });
}

function likePost(idx) {
    initialPosts[idx].likes++;
    renderPosts();
}

postForm.onsubmit = (e) => {
    e.preventDefault();
    const author = document.getElementById('post-author').value;
    const category = document.getElementById('post-category').value;
    const content = document.getElementById('post-content').value;

    initialPosts.unshift({
        author: author,
        category: category,
        content: content,
        likes: 1
    });

    postForm.reset();
    renderPosts();
    alert("Sua mensagem foi publicada no Muro de Apoio!");
};

// ===================================
// FORMULARIO DE RECLAMAÇÃO / DENÚNCIA
// ===================================
const denunciaForm = document.getElementById('denuncia-form');

denunciaForm.onsubmit = (e) => {
    e.preventDefault();
    alert("Sua reclamação/relato foi registrado com sucesso e sigilo garantido. Caso necessite de intervenção imediata, utilize os telefones de emergência fornecidos ao lado.");
    denunciaForm.reset();
};

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
    renderPosts();
});