// Importando o módulo do express
const express = require('express')

// Importação dos controllers
const cursoController = require('./controllers/curso.controller')

// Criando uma instância do express
const app = express()

// Criar uma rota
app.get('/cursos', cursoController.listar  )

// Iniciando o servidor na porta 3000
app.listen(3001, function() {
  console.log("Servidor rodando na porta 3000")
})