const empreendimentoModel = require("../models/EmpreendimentoModel");

class EmpreendimentoController {
  // GET /empreendimentos - Lista todos os empreendimentos
  buscar(req, res) {
    empreendimentoModel.listar()
      .then((empreendimentos) => res.status(200).json(empreendimentos))
      .catch((error) => res.status(400).json(error.message));
  }

  // POST /empreendimentos - Cadastra um novo empreendimento
  criar(req, res) {
    const novoEmpreendimento = req.body;
    empreendimentoModel.criar(novoEmpreendimento)
      .then((empreendimentoCriado) => res.status(201).json(empreendimentoCriado))
      .catch((error) => res.status(400).json(error.message));
  }

  // GET /empreendimentos/:id - Busca um empreendimento específico por ID
  buscarPorId(req, res) {
    const { id } = req.params;
    empreendimentoModel.buscarPorId(id)
      .then((empreendimento) => {
        if (empreendimento) res.status(200).json(empreendimento);
        else res.status(404).json({ message: "Empreendimento não encontrado" });
      })
      .catch((error) => res.status(400).json(error.message));
  }

  // PUT /empreendimentos/:id - Atualiza os dados de um empreendimento específico
  atualizar(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    empreendimentoModel.atualizar(id, dadosAtualizados)
      .then((empreendimentoAtualizado) => {
        if (empreendimentoAtualizado) res.status(200).json(empreendimentoAtualizado);
        else res.status(404).json({ message: "Empreendimento não encontrado" });
      })
      .catch((error) => res.status(400).json(error.message));
  }

  // DELETE /empreendimentos/:id - Exclui um empreendimento específico
  deletar(req, res) {
    const { id } = req.params;
    empreendimentoModel.deletar(id)
      .then((resultado) => res.status(200).json(resultado))
      .catch((error) => res.status(400).json(error.message));
  }
}

module.exports = new EmpreendimentoController();
