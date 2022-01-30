/* Script para calcular quantia necessaria de carne e bebida por pessoa em um churrasco dependendo da duração. */


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calcChurras() {
    let qtdAdultos = inputAdultos.value;
    let qtdCriancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    
    let qtdCarne = qtdCarnePessoa(duracao) * qtdAdultos + (qtdCarnePessoa(duracao) / 2 * qtdCriancas);
    let qtdTotalCerveja = qtdCerveja(duracao) * qtdAdultos;
    let qtdTotalBebida = qtdBebida(duracao) * qtdAdultos + (qtdBebida(duracao) / 2 * qtdCriancas);
    
    resultado.innerHTML = `<p>${qtdCarne / 1000} Kg de Carne </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} L de Cerveja </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida/2000)} L de Bebida</p>`
}

function qtdCarnePessoa(duracao) {
    let carne = 400;
    if (duracao >= 6) {
        return 650;
    } else {
        return 400
    }
}

function qtdCerveja(duracao) {
    let cerveja = 1200;
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200
    }
}

function qtdBebida(duracao) {
    let bebida = 1000;
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}