/* Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 20 R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */


function sacarDinheiro(valor) {

    let notasDeCem = 0
    let notasDeCinquenta = 0
    let notasDeVinte = 0
    let notasDeDez = 0
    let notasDeCinco = 0
    let moedasDeUm = 0


    contador = valor
while(contador > 0){
    if(contador >= 100){
        notasDeCem++
        contador = contador - 100
    }else if(contador >= 50){
        notasDeCinquenta++
        contador = contador - 50
    }else if(contador >= 20){
        notasDeVinte++
        contador = contador - 20
    }else if(contador >= 10){
        notasDeDez++
        contador = contador - 10
    }else if( contador >= 5){
        notasDeCinco++
        contador = contador - 5
    }else {
        moedasDeUm++
        contador = contador - 1
    }
    }
    return `seu saque de R$ ${valor} foi feito com ${notasDeCem} nota(s) de R$ 100. ${notasDeCinquenta} nota(s) de R$ 50.  ${notasDeVinte} nota(s) de R$ 20. ${notasDeDez} nota(s) de R$ 10. ${notasDeCinco} nota(s) de R$ 5. ${moedasDeUm} moedas(s) de R$ 1. `
}

console.log(sacarDinheiro(153))
