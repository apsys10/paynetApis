

var pgp = require('pg-promise')();


const db = pgp({
  database: 'users',
  port: 5432,
  user: 'postgres', 
  password: 'server.123'
}
)



export default db;






