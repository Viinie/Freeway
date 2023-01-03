function setup(){
    createCanvas (1495, 715);
    somFundo.loop()
    somFundo.setVolume(0.3)
}

function draw(){
    background(Estrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
    carroSempre();
    verificaColisao ();
    contaPontos();
    somaPontos();
}

