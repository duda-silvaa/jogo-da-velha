//iniciar as variáveis 
let tabuleiro = ['','','','','','','','','']; // vai ter um array, com 9 quadrdaos, começam vazios mas pode ter um x  ou o 
let vezDojogador = 0;
let simbolos = ['o','x'];
let gameOver = false;

let tiposVitorias = [ 

  [0,1,2],
  [3,4,5],
  [6,7,8], // todas as posiçoes na horizontal 

  [0,3,6],
  [1,4,7],
  [2,5,8], // todas as posiçoes na vertical 

  [0,4,8],
  [2,4,6], // diagonais 

]

// ato de colocar o seu símbolo (movimento do jogador)

function movimento(position){

     if (gameOver){
        return;
    }
     if (tabuleiro[position] == ''){ 
        tabuleiro[position] = simbolos[vezDojogador]; //agora passar a vez para o próximo jogador 
     
     gameOver = vencedor();


     if (gameOver == false){
      vezDojogador = (vezDojogador == 0)?1:0;
     }
    // if(vezDojogador == 0){
     //  vezDojogador = 1;
     //}
     //else {
     //   vezDojogador = 0;
     //}
    //}
}
    return gameOver;
}

function vencedor(){ // temos 8 opçoes de vitoria (bariavel la em cima)
// temos um array e dentro dele mais outro array para cada estado de vitoria 
    

    for(let i = 0; i<tiposVitorias.length; i++){ // enquanot o indice for menor doq o array o i++ pra mostrar q ele via subir um de cada vez

        let seq = tiposVitorias[i];
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (tabuleiro[pos1] == tabuleiro[pos2] && 
            tabuleiro[pos1] == tabuleiro[pos3] &&
            tabuleiro[pos1] != '') {
              return true;
            }
    } 

    return false;

}