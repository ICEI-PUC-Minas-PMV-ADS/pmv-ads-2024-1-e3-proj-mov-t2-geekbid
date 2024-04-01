# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="4-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/arquitetura_solucao.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![Diagrama de Classes](img/diagrama_classes.png)

## Modelo Entidade-Relacionamento

O Modelo Entidade-Relacionamento representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

![Modelo Entidade-Relacionamento](img/modelo_er.png)

## Esquema Relacional

![Esquema Relacional](img/esquema_relacional.png)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Arquitetura de componentes e ambiente de hospedagem:

**Aplicativo Móvel:**

O aplicativo móvel será desenvolvido em Reactive Native, pela facilidade de gerar elementos de inferface tanto para usuários de iOS quanto de Android.

**Backend:**

Para desenvolvimento do backend, será utilizado o Node.js será o cérebro do sistema, gerenciando toda a lógica de negócios, processamento de dados, gerenciamento de usuários e comunicação com o banco de dados. Pode ser desenvolvido usando uma arquitetura de microsserviços, onde cada função do sistema é separada em serviços independentes. Tecnologias como Node.js, Python (com frameworks como Flask ou Django) ou Java (com Spring Boot) podem ser utilizadas para desenvolver o backend.

**Banco de Dados:**

O banco de dados será responsável por armazenar todos os dados relacionados aos usuários, produtos, leilões, pedidos e outras informações essenciais do sistema. Um banco de dados relacional, como MySQL, PostgreSQL ou SQLite, pode ser utilizado para garantir integridade e consistência dos dados.

**Serviços de Terceiros:**

O sistema pode integrar serviços de terceiros para funcionalidades adicionais, como sistemas de pagamento (ex: PayPal, Stripe), serviços de autenticação (ex: Auth0, Firebase Authentication), e serviços de envio e logística (ex: Correios, FedEx).

## Hospedagem

O aplicativo e seus componentes podem ser hospedados em uma infraestrutura de nuvem, como Amazon Web Services (AWS), Google Cloud Platform (GCP) ou Microsoft Azure, para garantir escalabilidade, disponibilidade e segurança. Pode-se utilizar serviços como AWS Elastic Beanstalk, Google App Engine ou Azure App Service para implantar e gerenciar a aplicação de forma simplificada.
Monitoramento e Logging:

Implementar ferramentas de monitoramento e logging para acompanhar o desempenho, identificar possíveis problemas e garantir a estabilidade e disponibilidade do sistema. Ferramentas como AWS CloudWatch, Google Cloud Monitoring ou ELK Stack (Elasticsearch, Logstash, Kibana) podem ser utilizadas para essa finalidade.

Essa estrutura permite uma arquitetura escalável, modular e robusta para o aplicativo de leilão online, garantindo uma experiência confiável e satisfatória para os usuários, além de facilitar a manutenção e evolução contínua do sistema.

## Qualidade de Software

| Característica          | Requisito                                                                                                                                                            | Métricas                                                                                                                                                                                      |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Funcionalidade          | O sistema deve permitir que os usuários se cadastrem, façam login, participem de leilões, realizem lances, realizem pedidos e gerenciem suas contas de forma eficaz. | Taxa de sucesso do cadastro e login. <br> Número de lances feitos por leilão. <br> Taxa de sucesso dos pedidos realizados.                                                                    |
| Confiabilidade          | O sistema deve ser robusto e confiável, minimizando falhas e garantindo a disponibilidade do serviço.                                                                | Tempo médio entre falhas (MTBF). <br> Tempo médio de recuperação (MTTR). <br> Taxa de disponibilidade do sistema.                                                                             |
| Usabilidade             | O sistema deve ser fácil de usar, com uma interface intuitiva e amigável para os usuários.                                                                           | Taxa de conclusão de tarefas. <br> Tempo médio de aprendizado para realizar tarefas comuns. <br> Nível de satisfação do usuário através de pesquisas de satisfação.                           |
| Eficiência e Desempenho | O sistema deve responder rapidamente e ser eficiente em termos de uso de recursos.                                                                                   | Tempo de resposta das principais operações do sistema (cadastro, login, lances). <br> Utilização média da CPU e memória. Número máximo de usuários suportados simultaneamente.                |
| Manutenibilidade        | O sistema deve ser facilmente mantido e evoluído, com código bem estruturado e documentação adequada.                                                                | Taxa de correção de defeitos. <br> Tempo médio para implementar uma nova funcionalidade. <br> Cobertura de código por testes automatizados.                                                   |
| Portabilidade           | O sistema deve ser compatível com diferentes dispositivos e plataformas.                                                                                             | Número de plataformas suportadas (web, iOS, Android). <br> Tempo médio para adaptação do sistema a uma nova plataforma. <br> Facilidade de instalação e configuração em diferentes ambientes. |
