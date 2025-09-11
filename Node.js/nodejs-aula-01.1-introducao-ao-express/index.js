// Importando o Express (framework) 
const express = require("express")
// Iniciando o Express na variável "app"
const app = express()

// Criando a primeira rota do site (ROTA PRINCIPAL)
// REQ = trata a REQUISIÇÃO / RES = trata a RESPOSTA
app.get("/", (req, res) => {
    res.send("<h1>Hello world! Bem vindo ao meu primeiro site com Node.js e Express! =)</h1>");
});

// Configurando o EJS
app.set('view engine', 'ejs')

// ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
    res.send("<h1>Bem-vindo a página de Produtos!</h1>");
});

// ROTA DE LIENTES
app.get("/clientes", (req, res) => {
    res.send("<h1>Bem-vindo a página de Clientes!!</h1>")
})

// Iniciando o servidor HTTP 
// CRIANDO PORTA DE ACESSO PARA O SERVIDOR ACESSAR 
const port = 8080

app.listen(port, (error) => {
    if (error) {
        console.log(`Não foi possível iniciar o servidor. Ocorreu um erro!` + error)
    } else {
        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`)
    }
})