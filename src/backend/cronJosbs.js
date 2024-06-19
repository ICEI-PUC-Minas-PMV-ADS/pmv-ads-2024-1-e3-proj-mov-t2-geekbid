const cron = require('node-cron');
const leilaoController = require('../backend/controllers/leilaoController');

// Agendar a tarefa para executar a cada hora
cron.schedule('* * * * *', async () => {
  try {
    await leilaoController.atualizarStatusLeiloes({ body: {} }, {
      status: () => ({ json: () => {} })
    });
    console.log('Tarefa de atualização de status de leilões executada com sucesso.');
  } catch (error) {
    console.error('Erro ao executar tarefa de atualização de status de leilões:', error);
  }
});