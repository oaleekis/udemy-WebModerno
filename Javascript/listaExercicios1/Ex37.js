/*
Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
*/


function progressaoAritmetica(n, a1, r) {

    let pa = []

    for (let i = 0; i < n; i++) {
        let termo = a1 + (i - 1) * r
        pa.push(termo)        
    }
    console.log(pa);
}

function progressaoGeometrica(n, a1, r) {
    
}

progressaoAritmetica(10, 10, 15)