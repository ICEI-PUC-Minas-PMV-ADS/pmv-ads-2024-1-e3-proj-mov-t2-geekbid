# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação de possíveis usuários em um trabalho de consulta feito pelos membros da equipe. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

| **Persona**      | **Idade e Ocupação**             | **Aplicativos**                              | **Motivações**                                                 | **Frustrações**                                                                                     | **Hobbies/História**                              |
| ---------------- | -------------------------------- | -------------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| Lucas Monteiro   | 35 anos. Designer de Jogos       | Instagram, Steam, Mercado Livre, AliExpress  | Ter acesso à colecionáveis raros sem precisar pesquisar muito. | Não saber onde procurar seus artigos de interesse raros.                                            | Jogos eletrônicos, board games                    |
| Marta Freitas    | 21 anos. Estudante Universitária | Instagram, Pinterest                         | Comprar action figures de anime, artigos para cosplay          | Dificuldade em achar Action Figures e materiais para seus cosplays em lojas de sua região e online. | Cosplay                                           |
| Antônio Demétrio | 56 anos. Empresário              | Facebook. Whatsapp.                          | Entusiasta em RPG e jogos raros nostálgicos.                   | Dificuldade em achar RPGs, board games raros e action figures de sua juventude.                     | RPG, board games e artigos colecionáveis          |
| Stanley Oliveira | 42 anos. Empresário              | Facebook. Whatsapp. Mercado Livre. Instagram | Lojista e negociador de colecionáveis                          | Dificuldade em achar compradores para artigos raros e/ou caros no mercado físico                    | RPG, board games e artigos colecionáveis em geral |

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE`                            | PARA ... `MOTIVO/VALOR`                        |
| -------------------- | ------------------------------------------------------------- | ---------------------------------------------- |
| Lucas                | Comprar artigos de jogos online.                              | Ganhar vantagem e economizar tempo.            |
| Lucas                | Comprar jogos de tabuleiro.                                   | Receber amigos e socializar.                   |
| Lucas                | Encontrar de maneira objetiva seus artigos colecionáveis.     | Colecionar artigos geek                        |
| Marta                | Obter action figures de seus animes preferidos                | Decorar sua estante de colecionáveis           |
| Marta                | Achar peças de vestuário e acessórios para seus cosplays      | Conseguir fazer os cosplays desejados          |
| Antônio              | Encontrar RPG's raros e antigos                               | Colecionar os RPG's de sua juventude           |
| Antônio              | Comprar action figures e jogos de tabuleiro raros             | Obter e relembrar objetos e jogos nostálgicos  |
| Stanley              | Vender artigos colecionaveis, board games, rpgs raros/antigos | Ter um mercado maior para vender seus produtos |

## Modelagem do Processo de Negócio

### Análise da Situação Atual

O GeekBid permite que os usuários cadastrem-se, naveguem pelos itens disponíveis, participem de leilões fazendo lances, acompanhem o progresso dos leilões, concluam as compras, realizem os pagamentos e organizem a entrega dos itens. Após a conclusão, os usuários podem avaliar e fornecer feedback sobre a transação.

Os desafios para criar um aplicativo de leilão geek incluem competição intensa, garantia de autenticidade dos itens, oferta consistente de variedade e qualidade, construção de uma comunidade engajada, cumprimento de regulamentações legais, implementação de sistemas de pagamento seguros, gerenciamento de custos operacionais e priorização da experiência do usuário.

### Descrição Geral da Proposta

GeekBid é um aplicativo de leilões especialmente projetado para entusiastas da cultura geek, oferecendo uma plataforma interativa onde os usuários podem comprar e vender itens colecionáveis, raridades e memorabilia relacionados à cultura pop, jogos, quadrinhos, filmes, séries de TV e outros nichos afins.

### Processo 1 – Cadastro e Login

![Cadastro e Login](img/Processos-%20Login%20e%20Cadastro.png)

### Processo 2 – Leilão

![Leilão](img/Processos%20-%20Leilão.png)

## Indicadores de Desempenho

Os indicadores de desempenho representam elementos fundamentais no gerenciamento eficiente de qualquer processo, abaixo listamos alguns indicadores de desempenho juntamente com as metas relacionadas para o aplicativo.

| Indicador de Desempenho            | Descrição                                                           | Objetivo                                    | Fonte de Dados                   | Cálculo                               | Perspectiva/Meta                     |
| ---------------------------------- | ------------------------------------------------------------------- | ------------------------------------------- | -------------------------------- | ------------------------------------- | ------------------------------------ |
| Taxa de Registro de Novos Usuários | Percentual de novos usuários que se cadastram no app                | Aumentar a base de usuários registrados     | Banco de Dados do Aplicativo     | Média de novos usuários mensais       | Alcançar 100 registros novos por mês |
| Tempo Médio de Resposta do Sistema | Tempo médio que o sistema leva para responder às ações dos usuários | Melhorar a eficiência do sistema            | Logs de Servidor                 | Tempo Médio de Resposta do aplicativo | Manter abaixo de 1 segundo           |
| Taxa de Conversão de Leilões       | Percentual de leilões iniciados que são concluídos com sucesso      | Garantir a eficácia dos leilões             | Banco de Dados do Aplicativo     | Média dos leilões concluídos          | Alcançar 60% de conversão de leilões |
| Taxa de Participação dos Usuários  | Percentual de usuários ativos que participam de leilões             | Estimular a participação ativa dos usuários | Logs de Atividade do Usuário     | Média dos usuários ativos             | Aumentar em 20% nos próximos 6 meses |
| Avaliações do Aplicativo           | Média das avaliações dos usuários sobre o aplicativo                | Melhorar a percepção geral do aplicativo    | Sistema de Avaliação de Usuários | Média das Avaliações dos Usuários     | Manter uma média de 4.5/5            |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

| Id        | Título                           | Descrição                                                                                                                                                                                                                    | Classificação | Prioridade | Fonte                 | Versão | Status |
| --------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------- | --------------------- | ------ | ------ |
| RF-001.01 | Cadastro de Usuário              | Permitir que os usuários se cadastrem na plataforma, fornecendo informações básicas como nome completo, e-mail e senha.                                                                                                      | Essencial     | Alta       | Product Owner         |        |        |
| RF-001.02 | Cadastro de Usuário              | Validar o cadastro do usuário, por meio do envio de e-mail ou código eletrônico pelo celular.                                                                                                                                | Importante    | Média      | Product Owner         |        |        |
| RF-002.01 | Login de Usuário                 | Permitir que os usuários façam login na plataforma usando suas credenciais cadastradas.                                                                                                                                      | Essencial     | Alta       | Product Owner         |        |        |
| RF-002.02 | Login de Usuário                 | Permitir que os usuários façam login na plataforma usando suas credenciais cadastradas.                                                                                                                                      | Essencial     | Alta       | Product Owner         |        |        |
| RF-003    | Gerenciamento de Perfil          | Permitir que os usuários editem e atualizem suas informações de perfil, incluindo número do CPF, número do celular, imagem do usuário, endereço, data de nascimento, informações de pagamento e preferências de notificação. | Essencial     | Alta       | Product Owner         |        |        |
| RF-004.01 | Navegação e Busca                | Exibir uma lista de produtos disponíveis para leilão, incluindo detalhes como nome do produto, descrição, imagens e preço inicial                                                                                            | Importante    | Alta       | Histórias de usuários |        |        |
| RF-004.02 | Navegação e Busca                | Permitir que os usuários filtrem e pesquisem produtos por categoria, tipo, etc.                                                                                                                                              | Importante    | Alta       | Histórias de usuários |        |        |
| RF-005.01 | Leilões                          | Permitir a criação de novos leilões por parte dos vendedores, incluindo a definição de preço inicial, tempo de duração do leilão, descrição e imagens do produto.                                                            | Essencial     | Alta       | Histórias de usuários |        |        |
| RF-005.02 | Leilões                          | Permitir que os usuários façam lances em leilões ativos e acompanhem seu progresso.                                                                                                                                          | Essencial     | Alta       | Histórias de usuários |        |        |
| RF-005.03 | Leilões                          | Notificar os usuários sobre o status dos leilões em que estão participando, incluindo avisos de novos lances e encerramento de leilões.                                                                                      | Importante    | Média      | Histórias de usuários |        |        |
| RF-006.01 | Pagamentos e Transações          | Integrar sistemas de pagamento seguros para facilitar transações entre compradores e vendedores.                                                                                                                             | Desejável     | Baixa      | Product Owner         |        |        |
| RF-006.02 | Pagamentos e Transações          | Garantir a segurança e a proteção dos dados financeiros dos usuários durante as transações.                                                                                                                                  | Desejável     | Baixa      | Product Owner         |        |        |
| RF-007.01 | Gerenciamento de Pedidos         | Permitir que os usuários visualizem e gerenciem seus pedidos de produtos ganhos em leilões.                                                                                                                                  | Importante    | Média      | Histórias de usuários |        |        |
| RF-007.02 | Gerenciamento de Pedidos         | Rastrear o status dos pedidos, desde o pagamento até a entrega, fornecendo atualizações regulares aos usuários.                                                                                                              | Desejável     | Baixa      | Product Owner         |        |        |
| RF-008.01 | Sistema de Avaliações e Feedback | Permitir que os usuários deixem avaliações e feedback sobre os produtos adquiridos e a experiência geral de compra.                                                                                                          | Desejável     | Baixa      | Product Owner         |        |        |
| RF-008.02 | Sistema de Avaliações e Feedback | Exibir avaliações e feedback publicamente para ajudar outros usuários a tomar decisões informadas.                                                                                                                           | Desejável     | Baixa      | Product Owner         |        |        |
| RF-009.01 | Administração do Sistema         | Fornecer uma interface de administração para monitorar e gerenciar atividades de usuários, leilões, pagamentos e outras operações relacionadas ao sistema.                                                                   | Desejável     | Baixa      | Product Owner         |        |        |
| RF-009.02 | Administração do Sistema         | Permitir a moderação de conteúdo e ações para garantir a integridade e segurança da plataforma.                                                                                                                              | Desejável     | Baixa      | Product Owner         |        |        |

### Requisitos não Funcionais

| Id     | Título          | Descrição                                                                                                                                 | Classificação | Prioridade | Fonte         |
| ------ | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------- | ------------- |
| RNF-01 | Segurança       | Garantir que todas as transações e dados dos usuários sejam protegidos por medidas de segurança                                           | Essencial     | Alta       | Product Owner |
| RNF-02 | Desempenho      | Assegurar que o aplicativo seja responsivo e de alto desempenho, mesmo durante períodos de tráfego intenso simultâneo                     | Importante    | Alta       | Product Owner |
| RNF-03 | Escalabilidade  | Projetar o aplicativo de forma que possa lidar com um aumento significativo no número de usuários e produtos sem comprometer o desempenho | Desejável     | Alta       | Product Owner |
| RNF-04 | Usabilidade     | Desenvolver uma interface intuitiva e amigável para o usuário, facilitando a navegação e a participação nos leilões                       | Importante    | Média      | Product Owner |
| RNF-05 | Compatibilidade | Garantir que o aplicativo seja compatível com uma variedade de dispositivos                                                               | Desejável     | Alta       | Product Owner |
| RNF-06 | Disponibilidade | Assegurar uma alta disponibilidade do sistema, minimizando o tempo de inatividade e garantindo que os leilões ocorram conforme programado | Importante    | Alta       | Product Owner |

## Restrições (Requisitos de Domínio ou Regras de Negócio)

O projeto está restrito pelos itens apresentados na tabela a seguir.

| Id        | Identificação                      | Descrição                                                                                                                                                               |
| --------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RD-001.01 | Regras de criação de Leilões       | O leilão apenas estará disponível para lances após sua publicação pelo vendedor.                                                                                        |
| RD-001.02 | Regras de criação de Leilões       | O leilão publicado só poderá ser cancelado caso ainda não tenha recebido lances.                                                                                        |
| RD-001.03 | Regras de criação de Leilões       | O leilão publicado não poderá ser editado.                                                                                                                              |
| RD-002.01 | Regras de Participação em Leilões  | Os usuários devem ter idade mínima de 18 anos para participar de leilões.                                                                                               |
| RD-002.02 | Regras de Participação em Leilões  | Os lances feitos pelos usuários são vinculativos e não podem ser retirados após o término do leilão.                                                                    |
| RD-003.01 | Regras de Pagamento e Transações   | O pagamento total pelo produto vencedor do leilão deve ser feito dentro de um prazo especificado após o término do leilão.                                              |
| RD-003.02 | Regras de Pagamento e Transações   | O não pagamento no prazo especificado elimina o lance vencedor, sendo convocado o segundo colocado, após concordância do vendedor.                                      |
| RD-004    | Regras de Listagem de Produtos     | Os produtos listados devem estar em conformidade com as políticas de conteúdo e não podem infringir direitos autorais ou marcas registradas de terceiros.               |
| RD-005.01 | Regras de Cancelamento e Devolução | Os usuários têm o direito de cancelar seus lances em um leilão apenas em circunstâncias específicas, conforme estabelecido nas políticas de cancelamento da plataforma. |
| RD-005.02 | Regras de Cancelamento e Devolução | As devoluções de produtos ganhos em leilões só são permitidas em caso de defeito ou discrepância significativa em relação à descrição do produto.                       |
| RD-006.01 | Regras de Integridade do Sistema   | A plataforma deve ser monitorada regularmente para detectar e prevenir atividades fraudulentas, spam ou uso indevido.                                                   |
| RD-006.02 | Regras de Integridade do Sistema   | Qualquer violação das políticas da plataforma ou uso inadequado do sistema pode resultar em suspensão ou exclusão da conta do usuário.                                  |

## Diagrama de Casos de Uso

![Diagrama de caso de uso GEEKBID (3)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t2-geekbid/assets/101235591/cb014377-ef1e-4841-8059-8c95570b38ae)

# Matriz de Rastreabilidade

## Requisitos Funcionais ↔ Requisitos de Domínio (Regras de negócio)

|           | RD-001.01 | RD-001.02 | RD-001.03 | RD-002.01 | RD-002.02 | RD-003.01 | RD-003.02 | RD-004 | RD-005.01 | RD-005.02 | RD-006.01 | RD-006.02 |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- | ------ | --------- | --------- | --------- | --------- |
| RF-001.01 |           |           |           | x         |           |           |           |        |           |           |           |           |
| RF-001.02 |           |           |           | x         |           |           |           |        |           |           |           |           |
| RF-002.01 |           |           |           | x         |           |           |           |        |           |           |           |           |
| RF-002.02 |           |           |           | x         |           |           |           |        |           |           |           |           |
| RF-003    |           |           |           |           |           |           |           |        |           |           |           |           |
| RF-004.01 |           |           |           |           |           |           |           |        |           |           |           |           |
| RF-004.02 |           |           |           |           |           |           |           |        |           |           |           |           |
| RF-005.01 | x         |           | x         |           |           |           |           | x      |           |           |           |           |
| RF-005.02 |           | x         |           |           | x         |           |           |        |           |           |           |           |
| RF-005.03 |           |           |           |           |           |           |           |        |           |           |           |           |
| RF-006.01 |           |           |           |           |           | x         | x         |        |           |           |           |           |
| RF-006.02 |           |           |           |           |           | x         | x         |        |           |           |           |           |
| RF-007.01 |           |           |           |           |           |           |           |        |           |           |           |           |
| RF-007.02 |           |           |           |           |           |           |           |        |           |           |           |           |
| RF-008.01 |           |           |           |           |           |           |           |        |           |           | x         | x         |
| RF-008.02 |           |           |           |           |           |           |           |        |           |           | x         | x         |
| RF-009.01 |           |           |           |           |           |           |           |        | x         | x         | x         | x         |
| RF-009.02 |           |           |           |           |           |           |           |        | x         | x         | x         | x         |

## \* Este item será atualizado com a inclusão de novos artefatos no projeto (diagramas de classe, implementação, casos de teste, etc)

# Gerenciamento de Projeto

_Integração:_

- Desenvolvimento do plano de gerenciamento do projeto.
- Coordenação e integração de todos os processos e atividades do projeto.
- Realização de reuniões de acompanhamento e controle do projeto.

_Escopo:_

- Coleta de requisitos do aplicativo de leilão.
- Elaboração da Declaração do Escopo do Projeto (DEP).
- Desenvolvimento da Estrutura Analítica do Projeto (EAP) e do Dicionário da EAP.
- Controle de mudanças no escopo do projeto.

_Cronograma (Tempo):_

- Sequenciamento das atividades do projeto.
- Estimativa de duração das atividades.
- Desenvolvimento do cronograma do projeto.
- Controle do cronograma, identificando desvios e ajustando o plano conforme necessário.

_Custos:_

- Estimativa de custos do projeto, incluindo desenvolvimento do aplicativo, marketing, suporte, etc.
- Elaboração do orçamento do projeto.
- Controle de custos durante a execução do projeto.

_Qualidade:_

- Planejamento da qualidade do aplicativo de leilão.
- Realização de garantia da qualidade.
- Controle da qualidade, incluindo revisões de código, testes de aceitação do usuário, etc.

_Recursos:_

- Identificação e alocação de recursos necessários para o projeto, incluindo equipe, equipamentos e materiais.
- Desenvolvimento do plano de gerenciamento de recursos humanos.
- Gestão do desempenho da equipe.

_Comunicações:_

- Elaboração do plano de gerenciamento das comunicações.
- Estabelecimento de canais de comunicação eficazes.
- Distribuição de informações relevantes para todas as partes interessadas.
- Gerenciamento das expectativas das partes interessadas.

_Riscos:_

- Identificação de riscos potenciais relacionados ao desenvolvimento e implementação do aplicativo de leilão.
- Análise qualitativa e quantitativa de riscos.
- Desenvolvimento de estratégias de resposta aos riscos.
- Monitoramento e controle dos riscos ao longo do ciclo de vida do projeto.

_Aquisições:_

- Identificação de produtos ou serviços a serem adquiridos externamente para o projeto.
- Desenvolvimento do plano de aquisições.
- Seleção de fornecedores.
- Administração e encerramento dos contratos de aquisição.

_Partes Interessadas:_

- Identificação de todas as partes interessadas no projeto.
- Avaliação do impacto das partes interessadas no projeto.
- Desenvolvimento de estratégias de engajamento das partes interessadas.
- Gerenciamento das expectativas das partes interessadas ao longo do projeto.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados.

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
