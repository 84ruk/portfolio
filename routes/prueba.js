const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/valida-campos');

const { prueba } = require('../controllers/prueba.js');

const router = Router();



router.get("/prueba", prueba);




module.exports = router;