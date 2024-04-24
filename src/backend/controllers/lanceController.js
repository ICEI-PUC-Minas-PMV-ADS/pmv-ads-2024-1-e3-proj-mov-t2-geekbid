const Lance = require('../models/lanceModel');
const Leilao = require('../models/leilaoModel');

// Função para controlar erros
const handleErrors = (err) => {
    let errors = {};

    // Erros de validação
    if (err.name === 'SequelizeValidationError') {
        err.errors.forEach(error => {
            errors[error.path] = error.message;
        });
    }

    return errors;
}

// Métodos do controller
const lanceController = {
    // Dar lance em um leilão
    async cadastrarLance(req, res) {
        try {
            const { usuarioId } = req.params;
            const { leilaoId, valorLance } = req.body;
            const dataLance = new Date();

            // Checar se o usuário dando lance é o mesmo que criou o leilão
            const leilao = await Leilao.findByPk(leilaoId);
            if (leilao.usuarioId === usuarioId) {
                return res.status(403).json({ message: 'Você não pode dar lances em seus leilões' });
            }

            const lance = await Lance.create({ valorLance, dataLance, usuarioId, leilaoId });
            res.status(201).json(lance);
        } catch (err) {
            const errors = handleErrors(err);
            res.status(400).json({ errors });
        }
    },

    // Retornar todos os lances de um leilão
    async buscarLances(req, res) {
        try {
            const { leilaoId } = req.params;
            const lances = await Lance.findAll({ where: { leilaoId } });
            res.status(200).json(lances);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    },

    // Retornar os detalhes de um lance específico
    async buscarLance(req, res) {
        try {
            const { id } = req.params;
            const lance = await Lance.findByPk(id);

            if (!lance) {
                throw new Error('Bid not found');
            }

            res.status(200).json(lance);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    },

    // Excluir lance
    // async excluirLance(req, res) {
    //     try {
    //         const { id } = req.params;
    //         const linhaLanceExcluido = await Lance.destroy({ where: { id: id } });

    //         if (linhaLanceExcluido === 0) {
    //             throw new Error('Lance não encontrado');
    //         }

    //         res.status(204).json({ message: 'Lance excluído com sucesso' });
    //     } catch (err) {
    //         res.status(404).json({ message: err.message });
    //     }
    // }
};

module.exports = lanceController;
