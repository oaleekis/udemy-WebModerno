// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Alex',
    idade: 24,
    peso: 110,
    endereco: {
        logradouro: "Rua 2",
        numero: 177
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)