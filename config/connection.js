var mysql = require('mysql')

var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'chris',
    password: 'password',
    database: 'burgers_db'
})

connection.connect(function(err) {
    if (err) {
        console.log('Error connection: ' + err.stack)
        return
    }
    console.log('Connected as id ' + connection.threadId)
})

module.exports = connection