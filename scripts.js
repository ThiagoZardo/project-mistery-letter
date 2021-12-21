let caixaTexto = document.getElementById('carta-texto');
let cartaGerada = document.getElementById('carta-gerada');
let btnCriarcarta = document.getElementById('criar-carta');
let spanDinamico = cartaGerada.childNodes; //adcionado variavel apenas para remoção

btnCriarcarta.addEventListener('click',criarCarta);

let estilo = ['newspaper', 'magazine1', 'magazine2'];
let tamanho = ['medium', 'reallybig', 'big'];
let rotacao = ['rotateleft', 'rotateright'];
let inclinacao = ['skewleft', 'skewright'];

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

         //Seleciona classes aleatóriamente
         window.onload = function (min, max){
            return Math.floor(Math.random() * (max - min));
        }
        
        //Cria novos span colocando uma letra em cada
        for(let i = 0; i < caixaTexto.value.split(" ").length; i+=1){
            let span = document.createElement("span");
            span.addEventListener('click',alterarClasse);
            cartaGerada.appendChild(span)[i];
            span.innerHTML = caixaTexto.value.split(" ")[i];
            //Nomes aleatórios de classes
            for(let j = 0; j < 1; j+=1){ 
                span.classList.add(estilo[onload(j, estilo.length)]) 
                span.classList.add(tamanho[onload(j, tamanho.length)]) 
                span.classList.add(rotacao[onload(j, rotacao.length)]) 
                span.classList.add(inclinacao[onload(j, inclinacao.length)]) 
            }
        }  let contador = document.getElementById('carta-contador');
        contador.innerText = caixaTexto.value.split(" ").length;
    };

};


function alterarClasse(event){   
    //Remove todos os span 
    event.target.className = "";
       
     //Seleciona classes aleatóriamente
     window.onload = function (min, max){
        return Math.floor(Math.random() * (max - min));
    }

        //Nomes aleatórios de classes
        for(let j = 0; j < 1; j+=1){ 
            event.target.classList.add(estilo[onload(j, estilo.length)]) 
            event.target.classList.add(tamanho[onload(j, tamanho.length)]) 
            event.target.classList.add(rotacao[onload(j, rotacao.length)]) 
            event.target.classList.add(inclinacao[onload(j, inclinacao.length)])  
        }
}



