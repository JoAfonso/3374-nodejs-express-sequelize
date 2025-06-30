const {Router} = require("express");
const PessoaControle = require('../controllers/PessoaController.js');

const pessoaControler = new PessoaControle();
const router = Router();


router.get('/pessoas', (req,res)=>pessoaControler.pegaTodos(req, res));

module.exports = router;
