let caixaTexto = document.getElementById('carta-texto');
let cartaGerada = document.getElementById('carta-gerada');
let btnCriarcarta = document.getElementById('criar-carta');
let spanDinamico = cartaGerada.childNodes;

btnCriarcarta.addEventListener('click',criarCarta);


//Classes
let newspaper = document.getElementsByClassName('newspaper')
let magazine1 = document.getElementsByClassName('magazine1')
let magazine2 = document.getElementsByClassName('magazine2')
let medium = document.getElementsByClassName('medium')
let reallybig = document.getElementsByClassName('reallybig')
let big = document.getElementsByClassName('big')
let rotateleft = document.getElementsByClassName('rotateleft')
let rotateright = document.getElementsByClassName('rotateright')
let skewleft = document.getElementsByClassName('skewleft')
let skewright = document.getElementsByClassName('skewright')

let arrayClasses = ['newspaper', 'magazine1', 'magazine2', 'medium', 'reallybig', 'big', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];


function criarCarta(){
    
    //Verificação de preenchimento
    if((caixaTexto.value === '') || (caixaTexto.value == " ")){
        console.log('vazio')
        cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.'
    }else{

        //Remove todos os span 
        for(let p = spanDinamico.length-1; p >= 0; p-=1){
            spanDinamico[p].remove();
        }
        
        //Cria novos span colocando uma letra em cada
        for(let i = 0; i < caixaTexto.value.split(" ").length; i+=1){
            let span = document.createElement("span");
            cartaGerada.appendChild(span)[i];
            span.innerHTML = caixaTexto.value.split(" ")[i];
        }  

        //Seleciona classes aleatóriamente
        window.onload = function (min, max){
            return Math.floor(Math.random() * (max - min));
        }
        
        for(let i = 0; i < 4; i+=1){
            spanDinamico.className = arrayClasses[onload(0, arrayClasses.length)];
            
        }
        
        
        
    };
    
};









