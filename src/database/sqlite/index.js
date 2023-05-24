/* versão do sqlite */
const sqlite3 = require("sqlite3")
/* e o sqlite é quem faz a conexão */
const sqlite = require("sqlite")

/* path serve para pegar o diretorio a partir da onde ele está
Em outros sistemas operacionais a " / " é ao contraria exemplo: " \ "
então é necessario usar o path */
const path = require("path");


async  function  sqliteConnection (){
    const database = await sqlite.open({
        filename: path.resolve(__dirname, "..", "database.db"),
        driver: sqlite3.Database
    });

    return database;
}

module.exports = sqliteConnection;