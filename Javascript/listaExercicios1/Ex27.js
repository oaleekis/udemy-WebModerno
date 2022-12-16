/*
Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida
 */



function compararCrianca(alturaC1, taxaC1, alturaC2, taxaC2) {
    
    if( alturaC1 == alturaC2){
        if(taxaC1 > taxaC2){
            console.log('A criança 1 irá ultrapassar a criança 2 em 1 ano')
        } else if(taxaC1 < taxaC2){
            console.log('A criança 2 irá ultrapassar a criança 1 em 1 ano')
        } else {
            console.log('As criançãs terão os tamanhos iguais')
        }
    } else if ( alturaC1 < alturaC2 && taxaC1 > taxaC2){
        console.log(`A criança 1 ira ultrapassar a criança 2 em ${calcularTaxa(alturaC1, taxaC1, alturaC2, taxaC2)} anos`);
    } else if ( alturaC1 < alturaC2 && taxaC1 < taxaC2){
        console.log('A criança 1 é menor que a criança 2, mas a criançã 1 não ultrapasara a criança 2')
    } else if (alturaC1 < alturaC2 && taxaC1 == taxaC2){
        console.log('A criança 1 é menor que a criança 2, mas a criançã 1 não ultrapasara a criança 2')
    } else if ( alturaC1 > alturaC2 && taxaC1 < taxaC2){
        console.log(`A criança 2 ira ultrapassar a criança 1 em ${calcularTaxa(alturaC2, taxaC2, alturaC1, taxaC1)} anos`);
    } else if ( alturaC1 > alturaC2 && taxaC1 > taxaC2){
        console.log('A criança 2 é menor que a criança 1, mas a criançã 2 não ultrapasara a criança 1')
    } else if (alturaC1 > alturaC2 && taxaC1 == taxaC2){
        console.log('A criança 2 é menor que a criança 1, mas a criançã 2 não ultrapasara a criança 1')
    }
}

function calcularTaxa(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior) {
    let anos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        anos++
    }
    return anos
}

compararCrianca(190, 0.2, 180, 0.2 )
compararCrianca(170, 0.2, 180, 0.2 )
compararCrianca(170, 0.3, 180, 0.2 )
compararCrianca(170, 0.3, 160, 0.4 )
compararCrianca(160, 0.3, 160, 0.4 )
compararCrianca(160, 0.5, 160, 0.4 )
compararCrianca(160, 0.5, 160, 0.5 )