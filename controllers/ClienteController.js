const clienteModel = require("../models/ClienteModel");

class ClienteController {
  // GET /clientes - Lista todos os clientes
  buscar(req, res) {
    clienteModel.listar()
      .then((clientes) => res.status(200).json(clientes))
      .catch((error) => res.status(400).json(error.message));
  }

  // POST /clientes - Cadastra um novo cliente
  criar(req, res) {
    const novoCliente = req.body;
    clienteModel.criar(novoCliente)
      .then((clienteCriado) => res.status(201).json(clienteCriado))
      .catch((error) => res.status(400).json(error.message));
  }

  // GET /clientes/:id - Busca um cliente específico por ID
  buscarPorId(req, res) {
    const { id } = req.params;
    clienteModel.buscarPorId(id)
      .then((cliente) => {
        if (cliente) res.status(200).json(cliente);
        else res.status(404).json({ message: "Cliente não encontrado" });
      })
      .catch((error) => res.status(400).json(error.message));
  }

  // PUT /clientes/:id - Atualiza os dados de um cliente específico
  atualizar(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    clienteModel.atualizar(id, dadosAtualizados)
      .then((clienteAtualizado) => {
        if (clienteAtualizado) res.status(200).json(clienteAtualizado);
        else res.status(404).json({ message: "Cliente não encontrado" });
      })
      .catch((error) => res.status(400).json(error.message));
  }

  // DELETE /clientes/:id - Exclui um cliente específico
  deletar(req, res) {
    const { id } = req.params;
    clienteModel.deletar(id)
      .then((resultado) => res.status(200).json(resultado))
      .catch((error) => res.status(400).json(error.message));
  }
}

module.exports = new ClienteController();
