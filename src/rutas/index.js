const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/', (req, res) => {
  res.send('hello world ');
});

router.get('/login', (req, res) =>{
  res.render('empleados/login')
});

module.exports = router;
