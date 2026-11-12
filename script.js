
// Selecionando todas as caixas
const caixas = document.querySelectorAll(".caixa");

// Selecionando os botões
const botaoPrincipal = document.querySelector("#botaoPrincipal");
const botaoSecundario = document.querySelector("#botaoSecundario");

// Ao clicar em cada caixa, coloca a borda verde
caixas.forEach(function(caixa) {

    caixa.addEventListener("click", function() {

        caixa.classList.remove("borda-azul");
        caixa.classList.add("borda-verde");

    });

});

// Botão principal: todas as caixas ficam com borda azul
botaoPrincipal.addEventListener("click", function() {

    caixas.forEach(function(caixa) {

        caixa.classList.remove("borda-verde");
        caixa.classList.add("borda-azul");

    });

});

// Botão secundário: remove todas as bordas coloridas
botaoSecundario.addEventListener("click", function() {

    caixas.forEach(function(caixa) {

        caixa.classList.remove("borda-verde");
        caixa.classList.remove("borda-azul");

    });

});
