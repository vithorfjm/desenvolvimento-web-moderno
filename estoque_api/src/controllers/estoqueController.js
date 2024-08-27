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
        res.send(true);
    }).catch((err) => {
        console.log(err);
        res.send(false);
    });
}

async function getProdutoById(req, res) {
    const produto = await Produto.findByPk(req.params.id);
    res.send(produto);
}

async function atualizarProduto(req, res) {
    await Produto.update(
        {quantidade: req.body.quantidade},
        {where: {
            id: req.body.id
        }}
    ).then(() => res.send(true))
    .catch((err) => {
        console.log(err);
        res.send(false)
    });
}

async function excluirProduto(req, res) {
    await Produto.destroy({
        where: {
            id: req.body.id
        }
    }).then(() => {
        res.send(true);
    }).catch((err) => {
        console.log(err);
        res.send(false);
    })
}

module.exports = {
    getProdutos,
    postCadastrarProduto,
    getProdutoById,
    atualizarProduto,
    excluirProduto
}