/*
Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/



let vetor = [2, 3, 6, 8, 10]

function calcMediaArtimetica(vetor) {

    let soma = 0
    let contador = 0

    for (let i = 0; i < vetor.length; i++) {
        soma = soma + vetor[i]
        contador++
    }

    let mediaAritmetica = soma / contador

    console.log(`A média do vetor é ${mediaAritmetica}`)
    
}

calcMediaArtimetica(vetor)