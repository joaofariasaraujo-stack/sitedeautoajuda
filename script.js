// ===============================
// PORTAL DE ESCUTA
// ===============================

const formulario = document.getElementById("formEscuta");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    const texto = document.getElementById("desabafo").value.trim();

    if (texto === "") {

        mensagem.innerHTML = `
        <p style="color:red;">
        Escreva um desabafo antes de enviar.
        </p>
        `;

        return;
    }

    mensagem.innerHTML = `
    <div class="mensagem-sucesso">
        <h3>💙 Obrigado por compartilhar.</h3>

        <p>
        Seus sentimentos são importantes.
        Lembre-se de que você não precisa enfrentar tudo sozinho.
        Sempre que precisar, converse com um professor,
        pedagogo, direção da escola, familiares
        ou outro adulto de confiança.
        </p>

        <p><strong>Você merece ser ouvido.</strong></p>
    </div>
    `;

    formulario.reset();

});


// ===============================
// QUIZ
// ===============================

function corrigirQuiz() {

    let pontos = 0;

    const respostas = [
        "q1",
        "q2",
        "q3",
        "q4",
        "q5"
    ];

    respostas.forEach(function (pergunta) {

        const resposta = document.querySelector(
            `input[name="${pergunta}"]:checked`
        );

        if (resposta) {

            pontos += Number(resposta.value);

        }

    });

    const resultado = document.getElementById("resultadoQuiz");

    if (pontos === 5) {

        resultado.innerHTML =
            "🏆 Parabéns! Você acertou todas as perguntas!";

    }

    else if (pontos >= 3) {

        resultado.innerHTML =
            `😊 Você fez ${pontos}/5 pontos. Muito bem!`;

    }

    else {

        resultado.innerHTML =
            `📚 Você fez ${pontos}/5 pontos. Continue aprendendo sobre saúde mental.`;

    }

}



// ===============================
// MODO ESCURO
// ===============================

function modoEscuro() {

    document.body.classList.toggle("dark");

}



// ===============================
// ALTO CONTRASTE
// ===============================

function altoContraste() {

    document.body.classList.toggle("contraste");

}



// ===============================
// AUMENTAR FONTE
// ===============================

let tamanhoFonte = 100;

function aumentarFonte() {

    tamanhoFonte += 10;

    document.body.style.fontSize = tamanhoFonte + "%";

}



// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================

const btnTopo = document.getElementById("topo");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        btnTopo.style.display = "flex";

    }

    else {

        btnTopo.style.display = "none";

    }

});

btnTopo.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



// ===============================
// CARROSSEL DE IMAGENS
// ===============================

const slides = document.querySelectorAll(".slide");

let slideAtual = 0;

function trocarSlide() {

    slides[slideAtual].classList.remove("active");

    slideAtual++;

    if (slideAtual >= slides.length) {

        slideAtual = 0;

    }

    slides[slideAtual].classList.add("active");

}

setInterval(trocarSlide, 3500);



// ===============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ===============================

const elementos = document.querySelectorAll("section");

function revelar() {

    elementos.forEach(function (elemento) {

        const posicao = elemento.getBoundingClientRect().top;

        const tela = window.innerHeight;

        if (posicao < tela - 100) {

            elemento.classList.add("mostrar");

        }

    });

}

window.addEventListener("scroll", revelar);

revelar();



// ===============================
// FRASES MOTIVACIONAIS AUTOMÁTICAS
// ===============================

const frases = [

    "🌻 Um dia de cada vez.",

    "💙 Você é importante.",

    "😊 Pedir ajuda é coragem.",

    "⭐ Você merece cuidado e respeito.",

    "🌈 Toda tempestade passa."

];

let indice = 0;

const lista = document.querySelector("#escuta ul");

setInterval(function () {

    if (lista) {

        lista.firstElementChild.innerHTML = frases[indice];

        indice++;

        if (indice >= frases.length) {

            indice = 0;

        }

    }

}, 4000);