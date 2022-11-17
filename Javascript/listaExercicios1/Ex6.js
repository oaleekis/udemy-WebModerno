/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */


function jurosSimples(capital, taxa, tempo){
    juros = capital * taxa * tempo
    return  capital + juros
    
     
}

function jurosComposto (capital, taxa, tempo){
    return  capital * (1 + taxa) ** tempo
   
}

console.log(jurosSimples(23000, 0.005, 12))
console.log(jurosComposto(23000, 0.005, 12))