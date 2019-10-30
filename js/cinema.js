// captura dos elementos do html

var rbSucker = document.getElementById("rbSucker");
var rbShrek = document.getElementById("rbShrek");
var rbConto = document.getElementById("rbConto");
var rbNise = document.getElementById("rbNise");
var imgFilme = document.getElementById("imgFilme");
var outPreco = document.getElementById("outPreco");
var ckPipocaPq = document.getElementById("ckPipocaPq");
var ckPipocaMd = document.getElementById("ckPipocaMd");
var ckPipocaGd = document.getElementById("ckPipocaGd");
var ckRefri = document.getElementById("ckRefri");
var btComprar = document.getElementById("btComprar");

// definição do valor inicial
var preco = 8;


function trocarFoto() {
    // altera a imagem toda a vez que o item é selecionado
    if (rbSucker.checked) {
        imgFilme.src = "img/poster1.jpg";
        preco = 8
    } else if (rbShrek.checked) {
        imgFilme.src = "img/poster2.jpg";
        preco = 12
    } else if (rbConto.checked) {
        imgFilme.src = "img/poster3.jpg";
        preco = 8
    } else {
        imgFilme.src = "img/poster4.jpg";
        preco = 8
    }
    // desmarca todas as checkboxes a cada troca de elemento
    ckPipocaPq.checked = false;
    ckPipocaMd.checked = false;
    ckPipocaGd.checked = false;
    ckRefri.checked = false;

    exibirPreco();
}

function exibirPreco() {
    // define a moeda a ser utilizada
    outPreco.textContent = preco.toLocaleString("pt-br", { style: 'currency', currency: "BRL" });
}

// funções de soma de cada checkbox
function somarPipocaPq() {
    if (ckPipocaPq.checked) {
        preco += 5;
    } else {
        preco -= 5;
    }
    exibirPreco();
}

function somarPipocaMd() {
    if (ckPipocaMd.checked) {
        preco += 8;
    } else {
        preco -= 8;
    }
    exibirPreco();
}

function somarPipocaGd() {
    if (ckPipocaGd.checked) {
        preco += 12;
    } else {
        preco -= 12;
    }
    exibirPreco();
}


function somarRefri() {
    if (ckRefri.checked) {
        preco += 5;
    } else {
        preco -= 5;
    }
    exibirPreco();
}

function comprar() {
    // botão de compra
    alert("Site temporariamente fora do ar. Volte mais tarde.")
}

rbSucker.addEventListener("change", trocarFoto);
rbShrek.addEventListener("change", trocarFoto);
rbConto.addEventListener("change", trocarFoto);
rbNise.addEventListener("change", trocarFoto);

ckPipocaPq.addEventListener("change", somarPipocaPq);
ckPipocaMd.addEventListener("change", somarPipocaMd);
ckPipocaGd.addEventListener("change", somarPipocaGd);
ckRefri.addEventListener("change", somarRefri);

btComprar.addEventListener("click", comprar)