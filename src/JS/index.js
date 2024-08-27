// as barrsa duplas servem para comentar
// nome index é padrao e serve pra ser o primeiro arquivo a ser carregado
/* 
OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    -passo 1 - dar um jeito de pegar o elemento HTML dos botões
    -passo 2 - dar um jeito de identificar o clique do usuário no botão
    -passo 3 - desmarcar o botão selecionado anterior
    -passo 4 - marcar o botão clicado como se estivesse selecionado
    -passo 5 - esconder a imagem anteriormente selecionada
    -passo 6 - fazer aparecer a imagem do botão selecionado
    -passo 7 - esconder as informações da página nao anteriomente selecionada
    -passo 8 - aparecer as informações da página atualmente selecionada
*/
//-passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes")

//-passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        //-passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        //-passo 4 - marcar o botão clicado como se estivesse selecionado
        botao.classList.add("selecionado");

        //-passo 5 - esconder a imagem anteriormente selecionada
        esconderImagemFundo();

        //-passo 6 - fazer aparecer a imagem do botão selecionado
        MostrarImagemFundo(indice);

        //-passo 7 - esconder as informações da página nao anteriomente selecionada
        EsconderInformacoesAtiva();

        //-passo 8 - aparecer as informações da página atualmente selecionada
        MostrarInformacoesdoPokemon(indice);
    });
})

function MostrarInformacoesdoPokemon(indice) {
    informacoes[indice].classList.add("ativa");
}

function EsconderInformacoesAtiva() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function MostrarImagemFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemFundo() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
