const { response } = require("express");

const prueba = async (req, res = response) => {
    res.json({ mensaje: 'Esta es una respuesta de prueba desde la API.' });
  };

  
module.exports = {
    prueba
}