const Controller = require('./Controler.js');
const PessoaServices = require('../services/PessoaServices.js')


const pessoaServices = new PessoaServices();

class PessoaControle extends Controller{
    constructor() {
        super(pessoaServices);
    }
}


module.exports = PessoaControle;

