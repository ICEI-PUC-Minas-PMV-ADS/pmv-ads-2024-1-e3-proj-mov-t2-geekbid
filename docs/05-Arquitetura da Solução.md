# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

Arquitetura de componentes e ambiente de hospedagem:

**Frontend Web:**

O frontend web será responsável por fornecer a interface de usuário para os clientes acessarem o aplicativo por meio de navegadores da web. Será desenvolvido utilizando tecnologias como HTML, CSS e JavaScript, possivelmente com o auxílio de frameworks como React.js ou Angular.

**Aplicativo Móvel:**

Além do frontend web, pode-se desenvolver um aplicativo móvel para dispositivos iOS e Android, proporcionando uma experiência otimizada para usuários que preferem acessar a plataforma por meio de smartphones e tablets. O aplicativo móvel será desenvolvido utilizando tecnologias como Swift (para iOS) e Kotlin (para Android).

**Backend:**

O backend será o cérebro do sistema, gerenciando toda a lógica de negócios, processamento de dados, gerenciamento de usuários e comunicação com o banco de dados. Pode ser desenvolvido usando uma arquitetura de microsserviços, onde cada função do sistema é separada em serviços independentes. Tecnologias como Node.js, Python (com frameworks como Flask ou Django) ou Java (com Spring Boot) podem ser utilizadas para desenvolver o backend.

**Banco de Dados:**

O banco de dados será responsável por armazenar todos os dados relacionados aos usuários, produtos, leilões, pedidos e outras informações essenciais do sistema. Um banco de dados relacional, como MySQL, PostgreSQL ou SQLite, pode ser utilizado para garantir integridade e consistência dos dados.

**Serviços de Terceiros:**

O sistema pode integrar serviços de terceiros para funcionalidades adicionais, como sistemas de pagamento (ex: PayPal, Stripe), serviços de autenticação (ex: Auth0, Firebase Authentication), e serviços de envio e logística (ex: Correios, FedEx).

**Hospedagem e Infraestrutura:**

O aplicativo e seus componentes podem ser hospedados em uma infraestrutura de nuvem, como Amazon Web Services (AWS), Google Cloud Platform (GCP) ou Microsoft Azure, para garantir escalabilidade, disponibilidade e segurança. Pode-se utilizar serviços como AWS Elastic Beanstalk, Google App Engine ou Azure App Service para implantar e gerenciar a aplicação de forma simplificada.
Monitoramento e Logging:

Implementar ferramentas de monitoramento e logging para acompanhar o desempenho, identificar possíveis problemas e garantir a estabilidade e disponibilidade do sistema. Ferramentas como AWS CloudWatch, Google Cloud Monitoring ou ELK Stack (Elasticsearch, Logstash, Kibana) podem ser utilizadas para essa finalidade.

Essa estrutura permite uma arquitetura escalável, modular e robusta para o aplicativo de leilão online, garantindo uma experiência confiável e satisfatória para os usuários, além de facilitar a manutenção e evolução contínua do sistema.

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

**Diagrama de Classes do Domínio:**

+-------------------------------------+
| Usuario |
+-------------------------------------+
| - id: int |
| - nome: string |
| - email: string |
| - senha: string |
| - idade: int |
| - genero: string |
| - endereco: Endereco |
| - formaDePagamento: FormaDePagamento|
| - leiloesParticipados: List<Leilao> |
| - pedidos: List<Pedido> |
+-------------------------------------+

+-------------------------------------+
| Endereco |
+-------------------------------------+
| - rua: string |
| - numero: string |
| - bairro: string |
| - cidade: string |
| - estado: string |
| - cep: string |
+-------------------------------------+

+-------------------------------------+
| FormaDePagamento |
+-------------------------------------+
| - tipo: string |
| - numero: string |
| - nomeTitular: string |
| - dataValidade: string |
| - cvv: string |
+-------------------------------------+

+-------------------------------------+
| Produto |
+-------------------------------------+
| - id: int |
| - nome: string |
| - descricao: string |
| - categoria: string |
| - estado: string |
| - precoInicial: double |
| - leilao: Leilao |
| - imagens: List<Imagem> |
+-------------------------------------+

+-------------------------------------+
| Leilao |
+-------------------------------------+
| - id: int |
| - dataInicio: Date |
| - dataFim: Date |
| - precoAtual: double |
| - status: string |
| - produto: Produto |
| - lances: List<Lance> |
+-------------------------------------+

+-------------------------------------+
| Lance |
+-------------------------------------+
| - id: int |
| - valor: double |
| - data: Date |
| - usuario: Usuario |
| - leilao: Leilao |
+-------------------------------------+

+-------------------------------------+
| Pedido |
+-------------------------------------+
| - id: int |
| - data: Date |
| - status: string |
| - usuario: Usuario |
| - produto: Produto |
+-------------------------------------+

+-------------------------------------+
| Imagem |
+-------------------------------------+
| - id: int |
| - nome: string |
| - url: string |
| - produto: Produto |
+-------------------------------------+

**Diagrama de Classes do Sistema:**

+-------------------------------------+
| Autenticacao |
+-------------------------------------+
| + login(email: string, senha: string)|
| + logout() |
+-------------------------------------+

+-------------------------------------+
| Catalogo |
+-------------------------------------+
| + buscarProdutosPorCategoria(categoria: string): List<Produto>|
| + buscarProdutoPorId(id: int): Produto |
| + listarProdutosEmLeilao(): List<Produto> |
| + listarProdutosUsuarioLogado(): List<Produto> |
+-------------------------------------+

+-------------------------------------+
| GerenciadorLeilao |
+-------------------------------------+
| + criarLeilao(produto: Produto, precoInicial: double, dataFim: Date): Leilao |
| + fazerLance(leilaoId: int, valor: double): Lance |
+-------------------------------------+

+-------------------------------------+
| GerenciadorPedido |
+-------------------------------------+
| + fazerPedido(produtoId: int): Pedido |
| + listarPedidosUsuarioLogado(): List<Pedido> |
| + atualizarStatusPedido(pedidoId: int, novoStatus: string) |
+-------------------------------------+

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

Entidades:

Usuario

id (chave primária)
nome
email
senha
idade
genero
endereco_id (chave estrangeira referenciando Endereco)
formaDePagamento_id (chave estrangeira referenciando FormaDePagamento)
Endereco

id (chave primária)
rua
numero
bairro
cidade
estado
cep
FormaDePagamento

id (chave primária)
tipo
numero
nomeTitular
dataValidade
cvv
Produto

id (chave primária)
nome
descricao
categoria
estado
precoInicial
leilao_id (chave estrangeira referenciando Leilao)
Leilao

id (chave primária)
dataInicio
dataFim
precoAtual
status
produto_id (chave estrangeira referenciando Produto)
Lance

id (chave primária)
valor
data
usuario_id (chave estrangeira referenciando Usuario)
leilao_id (chave estrangeira referenciando Leilao)
Pedido

id (chave primária)
data
status
usuario_id (chave estrangeira referenciando Usuario)
produto_id (chave estrangeira referenciando Produto)
Imagem

id (chave primária)
nome
url
produto_id (chave estrangeira referenciando Produto)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.

As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

Relacionamentos:

Usuario (1) -> (0..1) Endereco
Usuario (1) -> (0..1) FormaDePagamento
Produto (1) -> (0..1) Leilao
Leilao (1) -> (0..n) Lance
Usuario (1) -> (0..n) Lance
Usuario (1) -> (0..n) Pedido
Produto (1) -> (0..n) Pedido
Produto (1) -> (0..n) Imagem

Este Modelo Entidade-Relacional reflete as relações entre as entidades do sistema de leilão online para produtos do segmento nerd, permitindo uma compreensão clara da estrutura de dados e das associações entre elas.

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

CREATE TABLE Endereco (
id SERIAL PRIMARY KEY,
rua VARCHAR(255),
numero VARCHAR(50),
bairro VARCHAR(100),
cidade VARCHAR(100),
estado VARCHAR(50),
cep VARCHAR(20)
);

CREATE TABLE FormaDePagamento (
id SERIAL PRIMARY KEY,
tipo VARCHAR(100),
numero VARCHAR(50),
nomeTitular VARCHAR(255),
dataValidade VARCHAR(10),
cvv VARCHAR(10)
);

CREATE TABLE Usuario (
id SERIAL PRIMARY KEY,
nome VARCHAR(255),
email VARCHAR(255) UNIQUE,
senha VARCHAR(255),
idade INTEGER,
genero VARCHAR(20),
endereco_id INTEGER REFERENCES Endereco(id),
formaDePagamento_id INTEGER REFERENCES FormaDePagamento(id)
);

CREATE TABLE Produto (
id SERIAL PRIMARY KEY,
nome VARCHAR(255),
descricao TEXT,
categoria VARCHAR(100),
estado VARCHAR(100),
precoInicial NUMERIC(10, 2),
leilao_id INTEGER REFERENCES Leilao(id)
);

CREATE TABLE Leilao (
id SERIAL PRIMARY KEY,
dataInicio TIMESTAMP,
dataFim TIMESTAMP,
precoAtual NUMERIC(10, 2),
status VARCHAR(50),
produto_id INTEGER REFERENCES Produto(id)
);

CREATE TABLE Lance (
id SERIAL PRIMARY KEY,
valor NUMERIC(10, 2),
data TIMESTAMP,
usuario_id INTEGER REFERENCES Usuario(id),
leilao_id INTEGER REFERENCES Leilao(id)
);

CREATE TABLE Pedido (
id SERIAL PRIMARY KEY,
data TIMESTAMP,
status VARCHAR(50),
usuario_id INTEGER REFERENCES Usuario(id),
produto_id INTEGER REFERENCES Produto(id)
);

CREATE TABLE Imagem (
id SERIAL PRIMARY KEY,
nome VARCHAR(255),
url TEXT,
produto_id INTEGER REFERENCES Produto(id)
);

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
