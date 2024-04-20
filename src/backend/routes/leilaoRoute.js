const express = require('express');
const router = express.Router();
const Leilao = require('../models/leilaoModel');
const Produto = require('../models/produtoModel');
const ProdutoCategoria = require('../models/produtoCategoriaModel');
const EstadoProduto = require('../models/estadoProdutoModel');

// Rota para cadastrar um novo leilão com produto e categoria
router.post('/', async (req, res) => {
  try {
    const { dataInicio, dataFim, precoInicial, imagem, nomeProduto, descricaoProduto, categoriaId, estadoId, statusLeilaoId } = req.body;

    // Criar um novo produto
    const novoProduto = await Produto.create({
      nomeProduto,
      descricaoProduto,
      categoriaId: categoriaId, // Associar o produto à categoria criada
      estadoProduto: estadoId,
      precoInicial,
      imagem
    });

    await ProdutoCategoria.create({ categoriaProdutoId: categoriaId, produtoId: novoProduto.id  });

    // Criar um novo leilão associado ao produto
    const novoLeilao = await Leilao.create({
      dataInicio,
      dataFim,
      
      produtoId: novoProduto.id,
      statusLeilaoId,
    });

    // Responder com o novo leilão e o novo produto criado
    res.status(201).json({ leilao: novoLeilao, produto: novoProduto });
  } catch (error) {
    console.error('Erro ao cadastrar o leilão:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para buscar todos os leilões
router.get('/', async (req, res) => {
  try {
    const leiloes = await Leilao.findAll();
    res.status(200).json({ leiloes });
  } catch (error) {
    console.error('Erro ao buscar leilões:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para buscar um leilão por ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const leilao = await Leilao.findByPk(id);
    if (!leilao) {
      return res.status(404).json({ error: 'Leilão não encontrado' });
    }
    res.status(200).json({ leilao });
  } catch (error) {
    console.error('Erro ao buscar o leilão:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para atualizar um leilão por ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { dataInicio, dataFim, precoAtual } = req.body;
    const leilao = await Leilao.findByPk(id);
    if (!leilao) {
      return res.status(404).json({ error: 'Leilão não encontrado' });
    }
    await leilao.update({ dataInicio, dataFim, precoAtual });
    res.status(200).json({ leilao });
  } catch (error) {
    console.error('Erro ao atualizar o leilão:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para excluir um leilão por ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const leilao = await Leilao.findByPk(id);
    if (!leilao) {
      return res.status(404).json({ error: 'Leilão não encontrado' });
    }
    await leilao.destroy();
    res.status(200).json({ message: 'Leilão excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir o leilão:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;
