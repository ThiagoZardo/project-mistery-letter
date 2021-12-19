let caixaTexto = document.getElementById('carta-texto');
let cartaGerada = document.getElementById('carta-gerada');
let btnCriarcarta = document.getElementById('criar-carta');
let spanDinamico = cartaGerada.childNodes;

btnCriarcarta.addEventListener('click',criarCarta);



function criarCarta(){

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
        
    }
    
    
}


//Verificação de preenchimento

