/*
 Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares
*/


let numeros = [10, 15, 20, 30, 31, 33, 35, 44, 50]

function parOuImpar(numeros) {

    let pares = []
    let impares = []
    let contadorPar = 0
    let contadorImpar = 0

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 == 0 ){
            pares.push(numeros[i])
            contadorPar++
        }else {
            impares.push(numeros[i])
            contadorImpar++
        }
    }

    console.log(`Os pares são ${pares} existem ${contadorPar} pare(s).\nE os impares são ${impares} existem ${contadorImpar} impar(es).`)
}

parOuImpar(numeros)