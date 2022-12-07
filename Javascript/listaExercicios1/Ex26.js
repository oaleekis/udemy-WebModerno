/*
Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

let contador = 1
let pares = []
while (contador <= 100) {
    if(contador % 2 == 0){
        pares.push(contador)
    }
    contador++
    
}

console.log(pares)