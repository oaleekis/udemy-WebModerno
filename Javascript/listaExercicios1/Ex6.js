/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */


function jurosSimples(capital, taxa, tempo){

    let juros = capital * taxa * tempo
     let montante = capital + juros
     return montante

}

function jurosComposto(capital, taxa, tempo){

     let juros = capital * ((1 + taxa) ** tempo)
     return juros

}

console.log(jurosSimples(1000, 0.1, 12))
console.log(jurosComposto(1000, 0.1, 0))

