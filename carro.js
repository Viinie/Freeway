let xCarros = [1500, 1500, 1500, 1500, 1500, 1500]
let yCarros = [70, 170, 265, 375, 470, 570]
let vxCarros = [10, 16, 13, 17, 15, 10]
let cCarro = 90
let aCarro = 75

function mostraCarro(){
    for (let i = 0; i < carro.length; i += 1){
        image(carro[i], xCarros[i], yCarros[i], cCarro, aCarro)
    }
}

function movimentaCarro(){
    for (let i = 0; i < carro.length; i += 1){
        xCarros[i] -= vxCarros[i]
    }
}

function carroSempre(){
    for (let i = 0; i < carro.length; i += 1){
        if (verificaTela(xCarros[i])){
            xCarros[i] = 1500
        }
    } 
}

function verificaTela (xCarros){
    return xCarros < -150
}
