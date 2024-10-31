const funcionarioModel = require("../models/FuncionarioModel");

class FuncionarioController {
  // POST /funcionarios - Cria um novo funcionário
  criar(req, res) {
    const funcionarioData = req.body;
    funcionarioModel.create(funcionarioData)
      .then((funcionarioCriado) => res.status(201).json(funcionarioCriado))
      .catch((error) => res.status(400).json({ message: error.message }));
  }

  // GET /funcionarios/:id - Lê os dados de um funcionário específico
  ler(req, res) {
    const { id } = req.params;
    funcionarioModel.findById(id)
      .then((funcionario) => {
        if (funcionario) res.status(200).json(funcionario);
        else res.status(404).json({ message: "Funcionário não encontrado" });
      })
      .catch((error) => res.status(500).json({ message: error.message }));
  }

  // PUT /funcionarios/:id - Atualiza os dados de um funcionário específico
  atualizar(req, res) {
    const { id } = req.params;
    const updateData = req.body;
    funcionarioModel.findByIdAndUpdate(id, updateData, { new: true })
      .then((funcionarioAtualizado) => {
        if (funcionarioAtualizado) res.status(200).json(funcionarioAtualizado);
        else res.status(404).json({ message: "Funcionário não encontrado" });
      })
      .catch((error) => res.status(400).json({ message: error.message }));
  }

  // DELETE /funcionarios/:id - Exclui um funcionário específico
  deletar(req, res) {
    const { id } = req.params;
    funcionarioModel.findByIdAndDelete(id)
      .then((funcionarioExcluido) => {
        if (funcionarioExcluido) res.status(200).json({ message: "Funcionário excluído com sucesso" });
        else res.status(404).json({ message: "Funcionário não encontrado" });
      })
      .catch((error) => res.status(500).json({ message: error.message }));
  }

  // GET /funcionarios - Lê todos os funcionários
  listar(req, res) {
    funcionarioModel.find()
      .then((funcionarios) => res.status(200).json(funcionarios))
      .catch((error) => res.status(500).json({ message: error.message }));
  }
}

module.exports = new FuncionarioController();
