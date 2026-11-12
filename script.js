
let caixas = document.querySelectorAll(".caixa");

let botaoPrincipal = document.querySelector("#principal");
let botaoSecundario = document.querySelector("#secundario");

caixas.forEach(function(caixa) {

    caixa.addEventListener("click", function() {
        caixa.classList.remove("azul");
        caixa.classList.add("verde");
    });

});

botaoPrincipal.addEventListener("click", function() {

    caixas.forEach(function(caixa) {
        caixa.classList.remove("verde");
        caixa.classList.add("azul");
    });

});

botaoSecundario.addEventListener("click", function() {

    caixas.forEach(function(caixa) {
        caixa.classList.remove("verde");
        caixa.classList.remove("azul");
    });

});
