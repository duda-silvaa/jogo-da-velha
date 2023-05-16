// interação ao clicar, além disso, precisa garantir que o html ja foi carregado 

document.addEventListener ('DOMContentLoaded',() =>{
    let quadrados = document.querySelectorAll(".quadrado");
    quadrados.forEach((quadrado)=>{
    quadrado.addEventListener('click', clicando);
    })
})

function clicando(event){
   // console.log(event.target); // elemento q sofreu o evento, nesse caso, o quadrado
    let quadrado = event.target;
    let posicao = quadrado.id;

    if (movimento(posicao)){

        setTimeout(() =>{
          alert("O jogo acabou");
        }, 10);
        // disparar o alert depois de um temínho para o ultimo elemnto aparecer na tela 
    };
    quadradosAtualiz();

}

function quadradosAtualiz(){
    let quadrados = document.querySelectorAll(".quadrado");

    quadrados.forEach((quadrado) => {
       let posicao = quadrado.id;
       let simbolo = tabuleiro[posicao]; //pegar o simbolo
       if (simbolo != ""){
        quadrado.innerHTML = `<div class='${simbolo}'></div>`
       }
    })
}


