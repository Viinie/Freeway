//imagens
let estrada;
let carro0;
let carro1;
let carro2;
let ator1;
let somFundo;
let somColisao;
let somPonto

function preload(){
    Estrada = loadImage ("imagem/estrada.png")
    carro0 = loadImage ("imagem/carro-1.png")
    carro1 = loadImage ("imagem/carro-2.png")
    carro2 = loadImage ("imagem/carro-3.png")
    ator1 = loadImage ("imagem/ator-1.png")
    carro = [carro0, carro1, carro2, carro0, carro2, carro1]
    somColisao = loadSound("som/colidiu.mp3")
    somFundo = loadSound("som/trilha.mp3")
    somPonto = loadSound("som/pontos.wav")

}