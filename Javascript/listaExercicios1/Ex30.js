/*
Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/


function percorrerVetor(vetor) {


   let maiorNumero = vetor[0]
   let menorNumero = vetor[0]

    for (let i = 0; i < vetor.length; i++) {
       if(vetor[i] > maiorNumero){
        maiorNumero = vetor[i]
       }else if(vetor[i] < menorNumero){
        menorNumero = vetor[i]
       }
    }

    console.log(`O maior número é ${maiorNumero} e o menor número é ${menorNumero}`)
}

percorrerVetor([50, 10, 20, 30, 40, 50, 60])