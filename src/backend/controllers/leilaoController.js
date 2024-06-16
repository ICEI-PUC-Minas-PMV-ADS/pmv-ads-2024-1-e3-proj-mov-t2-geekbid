const Sequelize = require("sequelize");
const { Op } = Sequelize;
const sequelize = require("../utils/database");

const Leilao = require("../models/leilaoModel");
const Produto = require("../models/produtoModel");
const Usuario = require("../models/usuarioModel");

const leilaoController = {
  // Cadastrar um novo leilão com produto e categoria
  async cadastrarLeilao(req, res) {
    const t = await sequelize.transaction();
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
        duracaoDias,
        duracaoHoras,
        duracaoMinutos,
        usuarioId,
      } = req.body;

      // Criar um novo produto
      const novoProduto = await Produto.create(
        {
          nomeProduto,
          descricaoProduto,
          categoriaProduto,
          estadoProduto,
          precoInicial,
          urlImagemProduto,
          duracaoDias,
          duracaoHoras,
          duracaoMinutos,
        },
        { transaction: t }
      );

      // Criar um novo leilão associado ao produto
      const novoLeilao = await Leilao.create(
        {
          dataInicio,
          dataFim,
          precoAtual,
          produtoId: novoProduto.id,
          statusLeilao,
          usuarioId,
          duracaoDias,
          duracaoHoras,
          duracaoMinutos,
        },
        { transaction: t }
      );

      // Commit da transação
      await t.commit();

      // Responder com o novo leilão e o novo produto criado
      res.status(201).json({ leilao: novoLeilao, produto: novoProduto });
    } catch (error) {
      // Rollback da transação em caso de erro
      await t.rollback();
      console.error("Erro ao cadastrar o leilão:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  },

  // Buscar todos os leilões
  async listarLeiloes(req, res) {
    try {
      const leiloes = await Leilao.findAll({
        include: [
          { model: Usuario, as: "usuario" },
          { model: Produto, as: "produto" },
        ],
        order: [["dataInicio", "DESC"]],
      });
      res.status(200).json({ leiloes });
    } catch (error) {
      console.error("Erro ao buscar leilões:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
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
          { model: Usuario, as: "usuario" },
          { model: Produto, as: "produto" },
        ],
        order: [["dataInicio", "DESC"]],
      });
      console.log(JSON.stringify(meusLeiloes, null, 2));
      res.status(200).json({ meusLeiloes });
    } catch (error) {
      console.error("Erro ao buscar leilões:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  },

  // Buscar um leilão por ID
  async listarLeilao(req, res) {
    try {
      const { id } = req.params;
      const leilao = await Leilao.findByPk(id, {
        include: [
          { model: Produto, as: "produto" },
          { model: Usuario, as: "usuario" },
        ],
      });

      if (!leilao) {
        return res.status(404).json({ error: "Leilão não encontrado" });
      }
      res.status(200).json({ leilao });
    } catch (error) {
      console.error("Erro ao buscar o leilão:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  },

  // Atualizar um leilão por ID
  async atualizarLeilao(req, res) {
    const t = await sequelize.transaction();
    try {
      const { id } = req.params;
      const {
        nomeProduto,
        descricaoProduto,
        categoriaProduto,
        precoInicial,
        urlImagemProduto,
        dataInicio,
        dataFim,
        precoAtual,
        statusLeilao,
        duracaoDias,
        duracaoHoras,
        duracaoMinutos,
      } = req.body;

      console.log("Dados recebidos para atualização do leilão:", req.body);

      const leilao = await Leilao.findByPk(id);

      if (!leilao) {
        return res.status(404).json({ error: "Leilão não encontrado" });
      }

      // Atualizar o produto associado ao leilão
      const produto = await Produto.findByPk(leilao.produtoId);
      if (produto) {
        await produto.update(
          {
            nomeProduto,
            descricaoProduto,
            categoriaProduto,
            precoInicial,
            urlImagemProduto,
            duracaoDias,
            duracaoHoras,
            duracaoMinutos,
          },
          { transaction: t }
        );
      }

      // Atualizar os detalhes do leilão
      await leilao.update(
        {
          dataInicio,
          dataFim,
          precoAtual,
          statusLeilao,
          duracaoDias,
          duracaoHoras,
          duracaoMinutos,
        },
        { transaction: t }
      );

      await t.commit();

      console.log("Leilão atualizado com sucesso:", leilao);

      res.status(200).json({ leilao });
    } catch (error) {
      await t.rollback();
      console.error("Erro ao atualizar o leilão:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  },

  // Rota para excluir um leilão por ID
  async excluirLeilao(req, res) {
    try {
      const { id } = req.params;
      const leilao = await Leilao.findByPk(id);
      if (!leilao) {
        return res.status(404).json({ error: "Leilão não encontrado" });
      }
      await leilao.destroy();
      res.status(200).json({ message: "Leilão excluído com sucesso" });
    } catch (error) {
      console.error("Erro ao excluir o leilão:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  },

    // Pesquisar leilões na Home
    async pesquisarLeilaoHome(req, res) {
      const query = `%${req.query}`
      console.log("query: ", query);
      try {
          const leiloesPesquisa = await Leilao.findAll({
              raw: true,
              where: {
                  statusLeilao: ['ativo', 'publicado'],
              },
              include: [
                  {model: Usuario, as: "usuario"},
                  {model: Produto, as: "produto",
                      where: {
                          nomeProduto: { [Op.like] : query },
                      }
                  }
              ]
          })
          console.log("leiloesPesquisa: ", JSON.stringify(leiloesPesquisa, null, 2));
          res.status(200).json({ leiloesPesquisa });
      } catch (error) {
          console.error('Erro ao buscar leilões:', error);
          res.status(500).json({ error: 'Erro interno do servidor' });
      }
  },

  // Buscar todos os leilões para a home
  async listarLeiloesHome(req, res) {
      try {
          const leiloesHome = await Leilao.findAll({
              // raw: true,
              where: {
                  statusLeilao: ['ativo', 'publicado']
              },
              include: [
                  {model: Usuario, as: "usuario"},
                  {model: Produto, as: "produto"}
              ]
          })
          console.log(JSON.stringify(leiloesHome, null, 2));
          res.status(200).json({ leiloesHome });
      } catch (error) {
          console.error('Erro ao buscar leilões:', error);
          res.status(500).json({ error: 'Erro interno do servidor' });
      }
  },

};

module.exports = leilaoController;
