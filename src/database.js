const mysql = require('mysql2');
const { promisify } = require('util');
const { database } = require('./keys');
const { log } = require('console');
const pool = mysql.createPool(database);

// pool.getConnection((err, connection) => {
//   if (err) {
//     if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//       console.log('DATABASE CONNECTION WAS CLOSE');
//     }
//     if (err.code === 'ER_CON_COUNT_ERROR') {
//       console.log('DATABASE HAS TO MANY CONECTIONS');
//     }
//     if (err.code === 'ECONNREFUSED') {
//       console.log('DATABASE CONNECTION WAS REFUSED');
//     }
//   }
//   if (connection) connection.release();
//   console.log('LA CONEXION A LA BASE DE DATOS FUE EXITOSA');
//   return;
// });

pool.getConnection((err, connection) => {
  if (err){
    console.log('db error ❌:', err.code);
  }
  if (connection){
    connection.release();
    console.log('DB Connected ✅');
  }
});

pool.query = promisify(pool.query);

module.exports = pool;