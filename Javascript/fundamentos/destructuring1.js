// novo recurso do ES2015

const pessoa = {
    nome: 'Alex',
    idade: 5,
    endereco: {
        logradouro: 'Rua 1',
        numero: 1000
    }

}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(nome, idade)

const { sobrenome, bemHumorado = true } = pessoa
console.log(sobrenome, bemHumorado)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

// const { conta: { ag, num } } = pessoa
