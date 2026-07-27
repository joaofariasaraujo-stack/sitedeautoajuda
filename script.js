// =====================================
// ABRIR CONTEÚDOS DOS CARDS
// =====================================

function abrirConteudo(id) {

    const conteudos = document.querySelectorAll(".informacao");

    conteudos.forEach(function(item){

        item.style.display = "none";

    });


    const escolhido = document.getElementById(id);


    if(escolhido){

        escolhido.style.display = "block";

        escolhido.scrollIntoView({
            behavior:"smooth"
        });

    }

}



// =====================================
// MENSAGEM INICIAL
// =====================================

function abrirMensagem(){

    alert(
    "💙 Bem-vindo ao VivaMente!\n\n" +
    "Aqui você encontrará informações para cuidar da sua saúde mental, " +
    "desenvolver empatia e encontrar apoio."
    );

}





// =====================================
// PORTAL DE ESCUTA
// =====================================


function enviarDesabafo(){


    const texto =
    document.getElementById("desabafo").value;


    const resposta =
    document.getElementById("respostaEscuta");



    if(texto.trim() === ""){


        resposta.innerHTML =
        `
        <div class="erro">

        ⚠️ Escreva algo antes de enviar.

        </div>
        `;


        return;

    }



    resposta.innerHTML =

    `
    <div class="acolhimento">

    <h3>
    💙 Obrigado por compartilhar.
    </h3>


    <p>
    Seus sentimentos são importantes.
    Falar sobre o que sentimos é uma atitude de coragem.
    </p>


    <p>
    Se precisar, procure um professor,
    pedagogo, direção da escola,
    familiares ou outro adulto de confiança.
    </p>


    <strong>
    Você merece ser ouvido.
    </strong>


    </div>
    `;



    document.getElementById("desabafo").value="";


}








// =====================================
// SISTEMA DE HUMOR
// =====================================


function mostrarHumor(sentimento){


    const resultado =
    document.getElementById("resultadoHumor");


    resultado.innerHTML =

    `
    Hoje você informou que está:
    <strong>${sentimento}</strong>
    <br><br>

    Lembre-se:
    todos os sentimentos são importantes.
    Cuide de você. 💙

    `;

}







// =====================================
// QUIZ
// =====================================


let pontosQuiz = 0;

let respostasRespondidas = 0;



function quizResposta(correta){


    respostasRespondidas++;



    if(correta){

        pontosQuiz++;

    }



    if(respostasRespondidas === 3){


        const resultado =
        document.getElementById("resultadoQuiz");



        if(pontosQuiz === 3){


            resultado.innerHTML =
            "🏆 Excelente! Você demonstrou conhecimento sobre saúde mental.";


        }

        else if(pontosQuiz === 2){


            resultado.innerHTML =
            "😊 Muito bem! Continue aprendendo sobre cuidado e empatia.";


        }

        else{


            resultado.innerHTML =
            "📚 Continue estudando. Aprender sobre saúde mental ajuda a todos.";


        }



        pontosQuiz = 0;

        respostasRespondidas = 0;


    }


}








// =====================================
// MODO ESCURO
// =====================================


function modoEscuro(){


    document.body.classList.toggle("dark");


}







// =====================================
// ALTO CONTRASTE
// =====================================


function altoContraste(){


    document.body.classList.toggle("contraste");


}







// =====================================
// AUMENTAR FONTE
// =====================================


let fonteAtual = 100;


function aumentarFonte(){


    fonteAtual += 10;


    document.body.style.fontSize =
    fonteAtual + "%";


}








// =====================================
// VOLTAR AO TOPO
// =====================================


const botaoTopo =
document.getElementById("topo");



window.addEventListener("scroll",function(){


    if(window.scrollY > 400){


        botaoTopo.style.display="flex";


    }

    else{


        botaoTopo.style.display="none";


    }


});




botaoTopo.addEventListener("click",function(){


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});









// =====================================
// ANIMAÇÃO DE APARECER AO ROLAR
// =====================================


const secoes =
document.querySelectorAll("section");



function aparecer(){


    secoes.forEach(function(secao){


        const altura =
        secao.getBoundingClientRect().top;



        if(altura < window.innerHeight - 100){


            secao.classList.add("mostrar");


        }


    });


}



window.addEventListener(
"scroll",
aparecer
);



aparecer();








// =====================================
// FECHAR CONTEÚDOS AO CARREGAR
// =====================================


window.addEventListener("load",function(){


    const infos =
    document.querySelectorAll(".informacao");


    infos.forEach(function(info){

        info.style.display="none";

    });


});