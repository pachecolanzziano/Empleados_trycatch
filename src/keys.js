module.exports = {
  database: {
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'desarrollo',
  },
};

// const dotenv = require('dotenv').config();

// module.exports = {
//   database: {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
//   },
// };

// CREATE TABLE `desarrollo`.`empleado` (`nombre` VARCHAR NULL , `apellido` VARCHAR NULL , `id_empleado` INT NULL , `fecha_nacimiento` DATE NULL , `direccion` VARCHAR NULL , `email` VARCHAR NULL , `telefono` VARCHAR NULL , `cargo` VARCHAR NULL , `departamento` VARCHAR NULL , `proyecto` VARCHAR NULL , `fecha_ingreso` DATE NULL , `sueldo` INT NULL , PRIMARY KEY (`id_empleado`)) ENGINE = InnoDB;