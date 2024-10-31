const router = require("../routers");
const conexao = require("../infrastructure/Conexao");
const tabelas = require("../infrastructure/Tabelas");

module.exports = (app, express) => {
  router(app, express);
  tabelas.init(conexao);
};