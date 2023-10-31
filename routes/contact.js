const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/valida-campos');

const { contact } = require('../controllers/contact');

const router = Router();



router.post("/", contact);




module.exports = router;