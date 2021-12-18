let caixaTexto = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');
let btnCriarcarta = document.getElementById('criar-carta');

btnCriarcarta.addEventListener('click',criarCarta);

function criarCarta(){
    cartaGerada.innerText = caixaTexto.value;
}