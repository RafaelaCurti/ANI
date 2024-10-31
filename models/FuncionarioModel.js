const conexao = require('../config/database');

class InscricaoModel {
  // Inscrever um aluno em um curso (relacionamento muitos-para-muitos)
  inscrever(aluno_id, curso_id) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO inscricoes (aluno_id, curso_id) VALUES (?, ?)';
      conexao.query(sql, [aluno_id, curso_id], (error, resultados) => {
        if (error) {
          reject(error);
        } else {
          resolve({ aluno_id, curso_id });
        }
      });
    });
  }
}

module.exports = new InscricaoModel();
