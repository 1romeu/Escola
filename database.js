//Importação o modulo mysql2
const mysql = require('mysql2');
//Conexão com o banco de dados 
const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'senai_db'
    }
);

//Connectar com o banco de dados
connection.connect(err => 
    err ? console.error(err) : console.log(`Conectado com banco de dados`)
)

module.exports = connection;