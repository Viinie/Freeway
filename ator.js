// Movimento Ator
let xAtor = 500
let yAtor = 665
let colisao = false
let meusPontos = 0

function mostraAtor(){
    image(ator1, xAtor, yAtor, 45, 45)
}

function movimentaAtor(){
    if (keyIsDown(87)){
        yAtor -= 3.5;
    }
    if (keyIsDown(83)){
        if(yAtor < 660){
            yAtor += 3.5;
        }
    }
}

function verificaColisao(){
    for (let i = 0; i < carro.length; i++){
        colisao = collideRectCircle(xCarros[i], yCarros[i], cCarro, aCarro, xAtor, yAtor, 15)
        if (colisao){
            colidiu();
        }
    }
}
  
function colidiu(){
    yAtor = 660;
    somColisao.play()
    if (meusPontos > 0){
        meusPontos -= 1
    }
}

function contaPontos(){
    textSize(40)
    fill(color(123,104,238))
    text(meusPontos, width / 2, 45)
}

function voltaAtorParaPosicaoInicial(){
    yAtor = 670;
  }

function somaPontos(){
    if (yAtor < 20){
        meusPontos += 1
        somPonto.play()
        voltaAtorParaPosicaoInicial()
    }
}
