class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    this.criarTabelaFuncionarios();
    this.criarTabelaClientes();
    this.criarTabelaEmpreendimentos();
  }

  criarTabelaFuncionarios() {
    const sql = `
      CREATE TABLE IF NOT EXISTS funcionarios (
          ID INT AUTO_INCREMENT PRIMARY KEY,
          Usuario VARCHAR(255) NOT NULL,
          Senha VARCHAR(255) NOT NULL
      );
    `;
    this.conexao.query(sql, (error) => {
      if (error) {
        console.log("Erro ao criar a tabela funcionarios");
        console.log(error.message);
        return;
      }
      console.log("Tabela funcionarios criada com sucesso!");
    });
  }

  criarTabelaClientes() {
    const sql = `
      CREATE TABLE IF NOT EXISTS clientes (
          ID INT AUTO_INCREMENT PRIMARY KEY,
          Usuario VARCHAR(255) NOT NULL,
          Senha VARCHAR(255) NOT NULL,
          Contato VARCHAR(255),
          Preferencias VARCHAR(255)
      );
    `;
    this.conexao.query(sql, (error) => {
      if (error) {
        console.log("Erro ao criar a tabela clientes");
        console.log(error.message);
        return;
      }
      console.log("Tabela clientes criada com sucesso!");
    });
  }

  criarTabelaEmpreendimentos() {
    const sql = `
      CREATE TABLE IF NOT EXISTS empreendimentos (
          ID INT AUTO_INCREMENT PRIMARY KEY,
          Titulo VARCHAR(255) NOT NULL,
          TipoEmpreendimento INT,
          Status INT,
          Rua VARCHAR(255),
          Bairro VARCHAR(255),
          Numero VARCHAR(50),
          Cidade VARCHAR(255),
          Estado VARCHAR(2),
          CEP VARCHAR(20),
          AreaTotal DECIMAL(10, 2),
          AreaPrivativa DECIMAL(10, 2),
          AreaComum DECIMAL(10, 2),
          AreaConstruida DECIMAL(10, 2),
          ValorVenda DECIMAL(15, 2),
          ValorLocacao DECIMAL(15, 2),
          IPTU DECIMAL(15, 2),
          Condominio DECIMAL(15, 2),
          Quartos INT,
          Banheiros INT,
          Suites INT,
          Salas INT,
          Garagens INT,
          Andares INT,
          Elevadores INT,
          Sacada BOOLEAN,
          Portaria BOOLEAN,
          Piscina BOOLEAN,
          Playground BOOLEAN,
          Churrasqueira BOOLEAN,
          Academia BOOLEAN,
          SalaoFestas BOOLEAN,
          Jardim BOOLEAN,
          StatusVenda VARCHAR(255)
      );
    `;
    this.conexao.query(sql, (error) => {
      if (error) {
        console.log("Erro ao criar a tabela empreendimentos");
        console.log(error.message);
        return;
      }
      console.log("Tabela empreendimentos criada com sucesso!");
    });
  }
}

module.exports = new Tabelas();
