CREATE TABLE StatusUsuario (
idStatusUsuario SERIAL PRIMARY KEY,
descricaoStatusUsuario VARCHAR(50)
);

INSERT INTO StatusUsuario (descricaoStatusUsuario) VALUES 
('cadastrado'), 
('validado');

CREATE TABLE Usuario (
idUsuario SERIAL PRIMARY KEY,
nome VARCHAR(255),
email VARCHAR(255) UNIQUE,
senha VARCHAR(30),
dataNascimento TIMESTAMP,
genero VARCHAR(20),
FOREIGN KEY idStatusUsuario INTEGER REFERENCES StatusUsuario(idStatusUsuario)
);

CREATE TABLE Endereco (
idEndereco SERIAL PRIMARY KEY,
rua VARCHAR(100),
numero VARCHAR(10),
complemento VARCHAR(50),
bairro VARCHAR(100),
cidade VARCHAR(100),
estado VARCHAR(2),
cep VARCHAR(9)
FOREIGN KEY idUsuario INTEGER REFERENCES Usuario(idUsuario)
);

CREATE TABLE ImagemProduto (
idImagemProduto SERIAL PRIMARY KEY,
url TEXT
);

CREATE TABLE CategoriaProduto (
idCategoriaProduto SERIAL PRIMARY KEY,
descricaoCategoriaProduto TEXT
);

INSERT INTO CategoriaProduto (descricaoCategoriaProduto) VALUES 
('Quadrinhos e Mangás'), 
-- HQs (Histórias em Quadrinhos) de diversas editoras e séries; 
-- Mangás japoneses de diferentes gêneros e autores.
('Colecionáveis'), 
-- Figuras de ação de personagens de filmes, séries, jogos e quadrinhos.
-- Estatuetas e estátuas de personagens icônicos.
-- Bonecos Funko Pop! de diversas franquias.
('Jogos de Tabuleiro e Card Games'), 
-- Jogos de tabuleiro temáticos de universos ficcionais.
-- Cards colecionáveis de jogos como Magic: The Gathering e Pokémon.
('Jogos Eletrônicos'), 
-- Consoles de videogame vintage e modernos.
-- Jogos de videogame em mídia física ou digital.
-- Acessórios para jogos, como controles especiais e headsets.
('Livros e Literatura Fantástica'), 
-- Livros de ficção científica, fantasia e terror.
-- Edições especiais e colecionáveis de séries literárias.
('Filmes e Séries'), 
-- DVDs, Blu-rays e box sets de filmes e séries nerds/geeks.
-- Edições especiais e limitadas de colecionadores.
('Tecnologia e Gadgets'), 
-- Dispositivos eletrônicos relacionados a hobbies nerds, como drones e robôs.
-- Acessórios de computador temáticos, como teclados e mousepads.
('Roupas e Acessórios'), 
-- Camisetas, bonés e mochilas com estampas de personagens e logos de franquias.
-- Joias e acessórios inspirados em universos nerds/geeks.
('Arte e Decoração'), 
-- Pôsteres, quadros e impressões de artistas independentes e obras oficiais.
-- Réplicas de objetos de cena de filmes e séries famosas.
('Memorabilia');
-- Itens de colecionador autenticados, como peças de figurino e adereços de filmes.
-- Artefatos raros e únicos relacionados a cultura nerd/geek.

CREATE TABLE EstadoProduto (
idEstadoProduto SERIAL PRIMARY KEY,
descricaoEstadoProduto TEXT
);

INSERT INTO EstadoProduto (descricaoEstadoProduto) VALUES 
('novo'), 
('usado');

CREATE TABLE Produto (
idProduto SERIAL PRIMARY KEY,
nomeProduto VARCHAR(255),
descricaoProduto TEXT,
precoInicial NUMERIC(10, 2),
FOREIGN KEY idCategoriaProduto INTEGER REFERENCES CategoriaProduto(idCategoriaProduto),
FOREIGN KEY idEstadoProduto INTEGER REFERENCES EstadoProduto(idEstadoProduto),
FOREIGN KEY idImagemProduto INTEGER REFERENCES ImagemProduto(idImagemProduto),
);

CREATE TABLE StatusLeilao (
idStatusLeilao SERIAL PRIMARY KEY,
descricaoStatusLeilao TEXT
);

INSERT INTO StatusLeilao (descricaoStatusLeilao) VALUES 
('cadastrado'), 
('publicado'),
('ativo'),
('encerrado'),
('cancelado');

CREATE TABLE Leilao (
idLeilao SERIAL PRIMARY KEY,
dataInicio TIMESTAMP CURRENT_TIMESTAMP,
dataFim TIMESTAMP,
precoAtual NUMERIC(10, 2),
FOREIGN KEY idStatusLeilao INTEGER REFERENCES StatusProduto(idStatusProduto),
FOREIGN KEY IdProduto INTEGER REFERENCES Produto(IdProduto),
FOREIGN KEY IdVendedor INTEGER REFERENCES Usuario(idUsuario),
);

CREATE TABLE Lance (
idLance SERIAL PRIMARY KEY,
valorLance NUMERIC(10, 2),
dataLance TIMESTAMP CURRENT_TIMESTAMP,
FOREIGN KEY IdComprador INTEGER REFERENCES Usuario(idUsuario),
FOREIGN KEY idLeilao INTEGER REFERENCES Leilao(idLeilao)
);

CREATE TABLE Mensagem (
idMensagem SERIAL PRIMARY KEY,
tipoMensagem VARCHAR(255),
descricaoMensagem TEXT
);

CREATE TABLE StatusMensagem (
idStatusMensagem SERIAL PRIMARY KEY,
descricaoStatusMensagem VARCHAR(100)
);

INSERT INTO CategoriaProduto (descricaoCategoriaProduto) VALUES 
('enviada'), 
('excluida'), 
('lida');

CREATE TABLE HistoricoMensagem (
idHistoricoMensagem SERIAL PRIMARY KEY,
dataMensagem TIMESTAMP CURRENT_TIMESTAMP,
FOREIGN KEY idLance INTEGER REFERENCES Lance(idLance),
FOREIGN KEY idMensagem INTEGER REFERENCES Mensagem(idMensagem),
FOREIGN KEY idStatusMensagem INTEGER REFERENCES StatusMensagem(idStatusMensagem),
);