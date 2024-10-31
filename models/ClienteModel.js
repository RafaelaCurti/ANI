const conexao = require('../config/database');

class ClienteModel {
  // Listar todos os clientes
  listar() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM clientes';
      conexao.query(sql, (error, resultados) => {
        if (error) {
          reject(error);
        } else {
          resolve(resultados);
        }
      });
    });
  }

  // Criar um novo cliente teste
  criar(cliente) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO clientes SET ?';
      conexao.query(sql, cliente, (error, resultados) => {
        if (error) {
          reject(error);
        } else {
          resolve({ id: resultados.insertId, ...cliente });
        }
      });
    });
  }

  // Buscar um cliente por ID
  buscarPorId(id) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM clientes WHERE id = ?';
      conexao.query(sql, [id], (error, resultados) => {
        if (error) {
          reject(error);
        } else {
          resolve(resultados[0] || null);
        }
      });
    });
  }

  // Atualizar os dados de um cliente
  atualizar(id, dadosAtualizados) {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE clientes SET ? WHERE id = ?';
      conexao.query(sql, [dadosAtualizados, id], (error, resultados) => {
        if (error) {
          reject(error);
        } else {
          resolve({ id, ...dadosAtualizados });
        }
      });
    });
  }

  // Deletar um cliente
  deletar(id) {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM clientes WHERE id = ?';
      conexao.query(sql, [id], (error, resultados) => {
        if (error) {
          reject(error);
        } else {
          resolve({ message: 'Cliente excluído com sucesso' });
        }
      });
    });
  }
}

module.exports = new ClienteModel();
