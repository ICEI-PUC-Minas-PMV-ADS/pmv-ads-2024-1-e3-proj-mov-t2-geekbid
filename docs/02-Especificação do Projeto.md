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

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional.

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN.

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores.

Usar o seguinte modelo:

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori.

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

| Id        | Identificação                    | Descrição                                                                                                                                                                                                                    | Classificação | Prioridade |
| --------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------- |
| RF-001.01 | Cadastro de Usuário              | Permitir que os usuários se cadastrem na plataforma, fornecendo informações básicas como nome completo, e-mail e senha.                                                                                                      | Essencial     | Alta       |
| RF-001.02 | Cadastro de Usuário              | Validar o cadastro do usuário, por meio do envio de e-mail ou código eletrônico pelo celular.                                                                                                                                | Importante    | Média      |
| RF-002.01 | Login de Usuário                 | Permitir que os usuários façam login na plataforma usando suas credenciais cadastradas.                                                                                                                                      | Essencial     | Alta       |
| RF-002.02 | Login de Usuário                 | Permitir que os usuários façam login na plataforma usando suas credenciais cadastradas.                                                                                                                                      | Essencial     | Alta       |
| RF-003    | Gerenciamento de Perfil          | Permitir que os usuários editem e atualizem suas informações de perfil, incluindo número do CPF, número do celular, imagem do usuário, endereço, data de nascimento, informações de pagamento e preferências de notificação. | Essencial     | Alta       |
| RF-004.01 | Navegação e Busca                | Exibir uma lista de produtos disponíveis para leilão, incluindo detalhes como nome do produto, descrição, imagens e preço inicial                                                                                            | Importante    | Alta       |
| RF-004.02 | Navegação e Busca                | Permitir que os usuários filtrem e pesquisem produtos por categoria, tipo, etc.                                                                                                                                              | Importante    | Alta       |
| RF-005.01 | Leilões                          | Permitir a criação de novos leilões por parte dos vendedores, incluindo a definição de preço inicial, tempo de duração do leilão, descrição e imagens do produto.                                                            | Essencial     | Alta       |
| RF-005.02 | Leilões                          | Permitir que os usuários façam lances em leilões ativos e acompanhem seu progresso.                                                                                                                                          | Essencial     | Alta       |
| RF-005.03 | Leilões                          | Notificar os usuários sobre o status dos leilões em que estão participando, incluindo avisos de novos lances e encerramento de leilões.                                                                                      | Importante    | Média      |
| RF-006.01 | Pagamentos e Transações          | Integrar sistemas de pagamento seguros para facilitar transações entre compradores e vendedores.                                                                                                                             | Desejável     | Baixa      |
| RF-006.02 | Pagamentos e Transações          | Garantir a segurança e a proteção dos dados financeiros dos usuários durante as transações.                                                                                                                                  | Desejável     | Baixa      |
| RF-007.01 | Gerenciamento de Pedidos         | Permitir que os usuários visualizem e gerenciem seus pedidos de produtos ganhos em leilões.                                                                                                                                  | Importante    | Média      |
| RF-007.02 | Gerenciamento de Pedidos         | Rastrear o status dos pedidos, desde o pagamento até a entrega, fornecendo atualizações regulares aos usuários.                                                                                                              | Desejável     | Baixa      |
| RF-008.01 | Sistema de Avaliações e Feedback | Permitir que os usuários deixem avaliações e feedback sobre os produtos adquiridos e a experiência geral de compra.                                                                                                          | Desejável     | Baixa      |
| RF-008.02 | Sistema de Avaliações e Feedback | Exibir avaliações e feedback publicamente para ajudar outros usuários a tomar decisões informadas.                                                                                                                           | Desejável     | Baixa      |
| RF-009.01 | Administração do Sistema         | Fornecer uma interface de administração para monitorar e gerenciar atividades de usuários, leilões, pagamentos e outras operações relacionadas ao sistema.                                                                   | Desejável     | Baixa      |
| RF-009.02 | Administração do Sistema         | Permitir a moderação de conteúdo e ações para garantir a integridade e segurança da plataforma.                                                                                                                              | Desejável     | Baixa      |

### Requisitos não Funcionais

| Id     | Identificação   | Descrição                                                                                                                                 | Classificação | Prioridade |
| ------ | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------- |
| RNF-01 | Segurança       | Garantir que todas as transações e dados dos usuários sejam protegidos por medidas de segurança                                           | Essencial     | Alta       |
| RNF-02 | Desempenho      | Assegurar que o aplicativo seja responsivo e de alto desempenho, mesmo durante períodos de tráfego intenso simultâneo                     | Importante    | Alta       |
| RNF-03 | Escalabilidade  | Projetar o aplicativo de forma que possa lidar com um aumento significativo no número de usuários e produtos sem comprometer o desempenho | Desejável     | Alta       |
| RNF-04 | Usabilidade     | Desenvolver uma interface intuitiva e amigável para o usuário, facilitando a navegação e a participação nos leilões                       | Importante    | Média      |
| RNF-05 | Compatibilidade | Garantir que o aplicativo seja compatível com uma variedade de dispositivos                                                               | Desejável     | Alta       |
| RNF-06 | Disponibilidade | Assegurar uma alta disponibilidade do sistema, minimizando o tempo de inatividade e garantindo que os leilões ocorram conforme programado | Importante    | Alta       |

## Restrições

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

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
>
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio.

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
>
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)

# Gerenciamento de Projeto

*Integração:*
- Desenvolvimento do plano de gerenciamento do projeto.
- Coordenação e integração de todos os processos e atividades do projeto.
- Realização de reuniões de acompanhamento e controle do projeto.

*Escopo:*
- Coleta de requisitos do aplicativo de leilão.
- Elaboração da Declaração do Escopo do Projeto (DEP).
- Desenvolvimento da Estrutura Analítica do Projeto (EAP) e do Dicionário da EAP.
- Controle de mudanças no escopo do projeto.

*Cronograma (Tempo):*
- Sequenciamento das atividades do projeto.
- Estimativa de duração das atividades.
- Desenvolvimento do cronograma do projeto.
- Controle do cronograma, identificando desvios e ajustando o plano conforme necessário.

*Custos:*
- Estimativa de custos do projeto, incluindo desenvolvimento do aplicativo, marketing, suporte, etc.
- Elaboração do orçamento do projeto.
- Controle de custos durante a execução do projeto.

*Qualidade:*
- Planejamento da qualidade do aplicativo de leilão.
- Realização de garantia da qualidade.
- Controle da qualidade, incluindo revisões de código, testes de aceitação do usuário, etc.

*Recursos:*
- Identificação e alocação de recursos necessários para o projeto, incluindo equipe, equipamentos e materiais.
- Desenvolvimento do plano de gerenciamento de recursos humanos.
- Gestão do desempenho da equipe.

*Comunicações:*
- Elaboração do plano de gerenciamento das comunicações.
- Estabelecimento de canais de comunicação eficazes.
- Distribuição de informações relevantes para todas as partes interessadas.
- Gerenciamento das expectativas das partes interessadas.

*Riscos:*
- Identificação de riscos potenciais relacionados ao desenvolvimento e implementação do aplicativo de leilão.
- Análise qualitativa e quantitativa de riscos.
- Desenvolvimento de estratégias de resposta aos riscos.
- Monitoramento e controle dos riscos ao longo do ciclo de vida do projeto.

*Aquisições:*
- Identificação de produtos ou serviços a serem adquiridos externamente para o projeto.
- Desenvolvimento do plano de aquisições.
- Seleção de fornecedores.
- Administração e encerramento dos contratos de aquisição.

*Partes Interessadas:*
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
