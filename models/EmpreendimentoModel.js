const conexao = require('../config/database');

class EmpreendimentoModel {
  // Listar todos os empreendimentos
  listar() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM empreendimentos';
      conexao.query(sql, (error, resultados) => {
        if (error) {
          reject(error);
        } else {
          resolve(resultados);
        }
      });
    });
  }

  // Criar um novo empreendimento
  criar(empreendimento) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO empreendimentos SET ?';
      conexao.query(sql, empreendimento, (error, resultados) => {
        if (error) {
          reject(error);
        } else {
          resolve({ id: resultados.insertId, ...empreendimento });
        }
      });
    });
  }

  // Buscar um empreendimento por ID
  buscarPorId(id) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM empreendimentos WHERE id = ?';
      conexao.query(sql, [id], (error, resultados) => {
        if (error) {
          reject(error);
        } else {
          resolve(resultados[0] || null);
        }
      });
    });
  }

  // Atualizar um empreendimento
  atualizar(id, dadosAtualizados) {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE empreendimentos SET ? WHERE id = ?';
      conexao.query(sql, [dadosAtualizados, id], (error, resultados) => {
        if (error) {
          reject(error);
        } else {
          resolve({ id, ...dadosAtualizados });
        }
      });
    });
  }

  // Deletar um empreendimento
  deletar(id) {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM empreendimentos WHERE id = ?';
      conexao.query(sql, [id], (error, resultados) => {
        if (error) {
          reject(error);
        } else {
          resolve({ message: 'Empreendimento excluído com sucesso' });
        }
      });
    });
  }
}

module.exports = new EmpreendimentoModel();
