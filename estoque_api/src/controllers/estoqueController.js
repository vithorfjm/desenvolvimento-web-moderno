const Produto = require('../models/produto')

async function getProdutos(req, res) {
    let produtos = await Produto.findAll();
    res.send(produtos);
}

function postCadastrarProduto(req, res) {
    let produto = {
        nome: req.body.nome,
        quantidade: req.body.quantidade
    }
    Produto.create(produto).then(() => {
        res.send(produto);
    }).catch((err) => {
        console.log(err);
        res.send(false);
    });
    
}

module.exports = {
    getProdutos,
    postCadastrarProduto
}