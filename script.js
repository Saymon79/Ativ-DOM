
let caixas = document.querySelectorAll(".caixa");

let botaoPrincipal = document.querySelector("#principal");
let botaoSecundario = document.querySelector("#secundario");

// Clicar na caixa e deixar a borda verde
caixas.forEach(function(caixa) {

    caixa.addEventListener("click", function() {
        caixa.classList.remove("azul");
        caixa.classList.add("verde");
    });

});

// Botão principal deixa todas as bordas azuis
botaoPrincipal.addEventListener("click", function() {

    caixas.forEach(function(caixa) {
        caixa.classList.remove("verde");
        caixa.classList.add("azul");
    });

});

// Botão secundário tira as bordas
botaoSecundario.addEventListener("click", function() {

    caixas.forEach(function(caixa) {
        caixa.classList.remove("verde");
        caixa.classList.remove("azul");
    });

});
