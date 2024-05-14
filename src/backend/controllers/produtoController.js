const Produto = require('../models/produtoModel');

const produtoController = {

    // Cadastrar um novo produto
    async cadastrarProduto(req, res) {
        try {
            // Extrair os dados do corpo da requisição
            const { nomeProduto, descricaoProduto, precoInicial, categoriaProduto } = req.body;
        
            // Criar o produto no banco de dados
            const novoProduto = await Produto.create({
                nomeProduto,
                descricaoProduto,
                precoInicial,
                categoriaProduto
        });
    
            // Responder com o novo produto criado
            res.status(201).json({ produto: novoProduto });
        } catch (error) {
            console.error('Erro ao cadastrar o produto:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    },
  
    // Buscar todos os produtos
    async buscarProdutos(req, res) {
        try {
            // Buscar todos os produtos no banco de dados
            const produtos = await Produto.findAll();
        
            // Responder com os produtos encontrados
            res.status(200).json({ produtos });
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    },
  
    // Excluir produto
    async excluirProduto(req, res) {
        try {
            const { id } = req.params;
        
            // Verificar se o produto existe
            const produto = await Produto.findByPk(id);
            if (!produto) {
                return res.status(404).json({ error: 'Produto não encontrado' });
            }
        
            // Excluir o produto
            await produto.destroy();
        
            // Responder com uma mensagem de sucesso
            res.status(200).json({ message: 'Produto excluído com sucesso' });
        } catch (error) {
            console.error('Erro ao excluir o produto:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    },

    // Rota para buscar todas as categorias
    async buscarCategorias(req, res) {
    
        
        try {
            // Buscar todas as categorias no banco de dados
            index = Array(10).fill().map((e, index) => index + 1);
            categorias_vec = Produto.rawAttributes.categoriaProduto.values;

            categorias = [];

            for (var i = 0; i < index.length; i++) {
                categorias.push({
                    "id": index[i],
                    "categoriaProduto": categorias_vec[i]
                });
            }

            // Responder com as categorias encontradas
            res.status(200).json({ categorias });
        } catch (error) {
            console.error('Erro ao buscar categorias:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }   
}

module.exports = produtoController;