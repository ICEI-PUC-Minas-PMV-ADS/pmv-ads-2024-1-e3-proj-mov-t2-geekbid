# Instruções de uso

Algumas orientações para usar:

1. No terminal, ir para a pasta `/src/backend` (`cd /src/backend` no Mac e Linux - ou windows, para quem tem o terminal integrado no VS Code);

2. No terminal, digitar `npm install` para instalar as dependências;

      Opcional:   
         quem quiser fazer instalação global do nodemon no Node (`nmp install -g nodemon`), ele é bem útil; reinicia automaticamente o servidor toda vez que é salva uma alteração nos arquivos;  
         quem fizer isso pode iniciar o node com o comando `npm start-server` (ou editar o arquivo /src/backend/package.json e substituir a chave "start": "node index.js", por "start": "nodemon index.js", para inciar o nodemon com o comando npm start);

3. Editar o arquivo` /src/backend/utils/database.js` para incluir o nome da tabela ("database_schema"), usuário ("user") e senha ("password") - os valores devem estar entre aspas;

4. Na primeira vez que for iniciado o backend, conforme instruções do item 2, o arquivo `/src/backend/index.js` deve estar da seguinte forma:

```
sequelize
  // .sync({ force: true }) // PARA CRIAR AS TABELAS E RELAÇÕES -- APAGA OS DADOS
  //  .sync({ alter: true }) // PARA ATUALIZAR AS TABELAS E RELAÇÕES -- NÃO APAGA OS DADOS
  .sync() // DESABILITAR QUANTO HABILITAR A LINHA DE CIMA
```

5. Se não houver erro na inicialização, as tabelas serão criadas e vários comandos SQL serão exibidos no terminal; também será logada a mensagem `Server is running at port 3000...`;

6. Para verificar se a criação das tabelas funcionou, basta atualizar a tabela pelo GUI SQL que estivem usando (pgAdmin, DBeaver, Beekeper, etc);

7. Se as tabelas foram criadas, alterar o arquivo `/src/backend/index.js` da seguinte forma (para evitar recriação das tabelas e duplicação de dados na tabela CategoriaProduto):

```
sequelize
  // .sync({ force: true }) // PARA CRIAR AS TABELAS E RELAÇÕES -- APAGA OS DADOS
  //  .sync({ alter: true }) // PARA ATUALIZAR AS TABELAS E RELAÇÕES -- NÃO APAGA OS DADOS
  .sync() // DESABILITAR QUANTO HABILITAR A LINHA DE CIMA
  // .then(result => {
  //   return CategoriaProduto.bulkCreate([
  //     { descricaoCategoriaProduto: 'Quadrinhos e Mangás' },
  //     { descricaoCategoriaProduto: 'Colecionáveis' },
  //     { descricaoCategoriaProduto: 'Jogos de Tabuleiro e Card Games' },
  //     { descricaoCategoriaProduto: 'Jogos Eletrônicos' },
  //     { descricaoCategoriaProduto: 'Livros e Literatura Fantástica' },
  //     { descricaoCategoriaProduto: 'Filmes e Séries' },
  //     { descricaoCategoriaProduto: 'Tecnologia e Gadgets' },
  //     { descricaoCategoriaProduto: 'Roupas e Acessórios' },
  //     { descricaoCategoriaProduto: 'Arte e Decoração' },
  //     { descricaoCategoriaProduto: 'Memorabilia' }
  //   ])
  // })
```