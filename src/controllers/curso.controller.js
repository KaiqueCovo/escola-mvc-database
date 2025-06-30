function listar(request, response) {
  response.send("Função responsável pela listagem")
}

function cadastrar(request, response) {
  response.send("Função responsável por cadastrar um curso")
}

function deletar(request, response) {
  response.send("Função responsável por deletar um curso")
}

module.exports = {
  listar,
  cadastrar,
  deletar
}