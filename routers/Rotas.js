const { Router } = require("express");
const EmpreendimentoController = require("../controllers/EmpreendimentoController");
const ClienteController = require("../controllers/ClienteController");
const FuncionarioController = require("../controllers/FuncionarioController");

const router = Router();

// Rotas para Empreendimentos
// GET /empreendimentos - Lista todos os empreendimentos
router.get("/empreendimentos", EmpreendimentoController.buscar);

// POST /empreendimentos - Cadastra um novo empreendimento
router.post("/empreendimentos", EmpreendimentoController.criar);

// GET /empreendimentos/:id - Busca um empreendimento específico por ID
router.get("/empreendimentos/:id", EmpreendimentoController.buscarPorId);

// PUT /empreendimentos/:id - Atualiza os dados de um empreendimento específico
router.put("/empreendimentos/:id", EmpreendimentoController.atualizar);

// DELETE /empreendimentos/:id - Exclui um empreendimento específico
router.delete("/empreendimentos/:id", EmpreendimentoController.deletar);

// Rotas para Clientes
// GET /clientes - Lista todos os clientes
router.get("/clientes", ClienteController.buscar);

// POST /clientes - Cadastra um novo cliente
router.post("/clientes", ClienteController.criar);

// GET /clientes/:id - Busca um cliente específico por ID
router.get("/clientes/:id", ClienteController.buscarPorId);

// PUT /clientes/:id - Atualiza os dados de um cliente específico
router.put("/clientes/:id", ClienteController.atualizar);

// DELETE /clientes/:id - Exclui um cliente específico
router.delete("/clientes/:id", ClienteController.deletar);

// Rotas para Funcionários
// POST /funcionarios - Cadastra um novo funcionário
router.post("/funcionarios", FuncionarioController.criar);

// GET /funcionarios/:id - Busca um funcionário específico por ID
router.get("/funcionarios/:id", FuncionarioController.buscarPorId);

// PUT /funcionarios/:id - Atualiza os dados de um funcionário específico
router.put("/funcionarios/:id", FuncionarioController.atualizar);

// DELETE /funcionarios/:id - Exclui um funcionário específico
router.delete("/funcionarios/:id", FuncionarioController.deletar);

module.exports = router;
