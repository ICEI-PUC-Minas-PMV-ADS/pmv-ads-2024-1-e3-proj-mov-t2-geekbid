const Sequelize = require('sequelize');
const { Op } = Sequelize;

const Leilao = require('../models/leilaoModel');
const Produto = require('../models/produtoModel');
const Usuario = require('../models/usuarioModel');
const ProdutoCategoria = require('../models/produtoCategoriaModel');

const leilaoController = {
  // Cadastrar um novo leilão com produto e categoria
  async cadastrarLeilao(req, res) {
    try {
      const {
        dataInicio,
        dataFim,
        precoInicial,
        precoAtual,
        urlImagemProduto,
        nomeProduto,
        descricaoProduto,
        categoriaProduto,
        estadoProduto,
        statusLeilao,
      } = req.body;
      // Criar um novo produto
      const novoProduto = await Produto.create({
        nomeProduto,
        descricaoProduto,
        categoriaProduto,
        estadoProduto,
        precoInicial,
        urlImagemProduto,
      });

      // await ProdutoCategoria.create({ categoriaProdutoId: categoriaId, produtoId: novoProduto.id  });

      // Criar um novo leilão associado ao produto
      const { usuarioId } = req.body;
      console.log('Dados recebidos no backend:', req.body);

      const novoLeilao = await Leilao.create({
        dataInicio,
        dataFim,
        precoAtual,
        produtoId: novoProduto.id,
        statusLeilao,
        usuarioId: usuarioId,
      });

      // Responder com o novo leilão e o novo produto criado
      res.status(201).json({ leilao: novoLeilao, produto: novoProduto });
    } catch (error) {
      console.error('Erro ao cadastrar o leilão:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  // Buscar todos os leilões
  async listarLeiloes(req, res) {
    try {
      const leiloes = await Leilao.findAll();
      res.status(200).json({ leiloes });
    } catch (error) {
      console.error('Erro ao buscar leilões:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

      // Buscar todos os leilões para a meusLeiloes
      async listarMeusLeiloes(req, res) {
        try {
            const { usuarioId } = req.query;
            const meusLeiloes = await Leilao.findAll({
                where: {
                    usuarioId: usuarioId,
                },
                include: [
                    {model: Usuario, as: 'usuario'},
                    {model: Produto, as: 'produto'}
                ]
            })
            console.log(JSON.stringify(meusLeiloes, null, 2));
            res.status(200).json({ meusLeiloes });
        } catch (error) {
            console.error('Erro ao buscar leilões:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    },

  // Buscar um leilão por ID
  async listarLeilao(req, res) {
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
  },

  // Atualizar um leilão por ID
  async atualizarLeilao(req, res) {
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
  },

  // Rota para excluir um leilão por ID
  async excluirLeilao(req, res) {
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
  },
};

module.exports = leilaoController;