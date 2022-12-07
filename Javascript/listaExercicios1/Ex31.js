/*
Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/


vetor = [ 1, 2, 3, -4, -5, -6]

function checarNegativos(vetor) {

    let contador = 0
    for (let i = 0; i < vetor.length; i++) {
        if(Math.sign(vetor[i]) == -1){
            contador++
        }
    }
    console.log(contador)
}

checarNegativos(vetor)