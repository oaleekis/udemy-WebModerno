const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (re, resp) =>{
    console.log(req.body)
    resp.send('Parabéns. Usuário Incluido!')
})

app.post('/usuarios/:id', (re, resp) =>{
    console.log(req.body)
    resp.send('Parabéns. Usuário Alterado!')
})

app.listen(3003)