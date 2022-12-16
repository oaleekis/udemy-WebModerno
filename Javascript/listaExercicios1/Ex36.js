/*
Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/



function multiplicar(vetorNumericos, numeroInteiro) {
    let resultado = []

    for (let i = 0; i < vetorNumericos.length; i++) {
        resultado.push(vetorNumericos[i] * numeroInteiro)
    }
    console.log(resultado)
}

function multiplicarSeMaiorQueCinco(vetorNumericos, numeroInteiro) {
    let resultado = []

    for (let i = 0; i < vetorNumericos.length; i++) {
        if (vetorNumericos[i] > 5) {
            resultado.push(vetorNumericos[i] * numeroInteiro)
        }
    }
    console.log(resultado)
}

multiplicar([1, 2, 3, 4, 5, 6], 2)
multiplicarSeMaiorQueCinco([1, 2, 3, 4, 5, 6, 7, 8], 2)