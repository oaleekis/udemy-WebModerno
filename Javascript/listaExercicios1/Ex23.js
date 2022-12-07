/*
Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo
*/

function validarNota(codAluno, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    
    notas.sort(function(a,b){
        return b - a
    })
    
    let media = ((4 * notas[0]) + (3 * notas[1] ) + (3 * notas[2] )) / 10

    if(media >= 5){
        validacao = 'Aprovado'
    }else {
        validacao = 'Reprovado' 
    }

    console.log(`Codigo do aluno: ${codAluno}. as suas notas foram ${nota1}, ${nota2}, ${nota3} sua média foi ${media} você está ${validacao}`)

}

validarNota(123, 10, 6, 3.5)
