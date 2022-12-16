/*
Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/

function imprimirImpares(inicio, fim) {

    let iniciador = inicio
    let finalizador = fim

    if (iniciador > finalizador) {
        iniciador = fim 
        finalizador = inicio     
    }
    
    for (let i = iniciador; i < finalizador; i++) {
        if( i % 2 != 0){
            console.log(i)
        }
    }
 
}
imprimirImpares(100, 0)
imprimirImpares(0, 100)