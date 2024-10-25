const mysql = require('mysql2');

// Configure a conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'sql10.freesqldatabase.com',        // Substitua pelo host do seu banco de dados
  user: 'sql10740676',     // Substitua pelo seu usuário
  password: 'ywvlNArD8c',   // Substitua pela sua senha
  database: 'sql10740676'    // Substitua pelo nome do seu banco de dados
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados!');
});