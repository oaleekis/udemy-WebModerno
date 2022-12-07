/*
Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/


function valorPlano(idade){
    let valorPlano = 100
    if(idade <= 0 ){
        valorPlano = 0
    }
    else if(idade >= 1 && idade <= 10){
        valorPlano = valorPlano + 80
    }else if(idade <= 30){
        valorPlano = valorPlano + 50
    }else if(idade <= 60){
        valorPlano = valorPlano + 95
    } else {
        valorPlano = valorPlano + 130
    }

    return `o valor a ser pago com ${idade} anos é de R$ ${valorPlano.toFixed(2)}`
}

console.log(valorPlano(0))
console.log(valorPlano(1))
console.log(valorPlano(9))
console.log(valorPlano(10))
console.log(valorPlano(11))
console.log(valorPlano(29))
console.log(valorPlano(30))
console.log(valorPlano(31))
console.log(valorPlano(60))
console.log(valorPlano(61))