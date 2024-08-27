const express = require('express');
const router = express.Router();

const estoqueController = require('../controllers/estoqueController')

router.get("/api/produtos", estoqueController.getProdutos);
router.get("/api/produto/:id", estoqueController.getProdutoById);
router.post("/api/produto/cadastrar", estoqueController.postCadastrarProduto);
router.post("/api/produto/atualizar", estoqueController.atualizarProduto);
router.post("/api/produto/excluir", estoqueController.excluirProduto);

module.exports = router;