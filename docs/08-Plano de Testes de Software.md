
# Plano de Testes de Software 

## 1. Introdução

O Projeto Geek Bid visa desenvolver um aplicativo móvel de leilão para itens geek. O aplicativo permitirá que os usuários criem contas, listem itens para leilão, façam lances e acompanhem o status dos leilões.

## 2. Objetivos

O objetivo do plano de testes de software é garantir que o aplicativo Geek Bid funcione conforme esperado e atenda aos requisitos de qualidade estabelecidos. Isso inclui a verificação da funcionalidade, desempenho, segurança e compatibilidade do aplicativo.

## 3. Escopo

O escopo do plano de testes de software inclui:

## Teste do Banco de Dados

### Objetivo
Verificar a integridade dos dados armazenados e a correção das consultas SQL.

### Pré-requisitos
Banco de dados configurado e acessível.

### Passos
1. Executar consultas SQL de inserção, atualização, exclusão e seleção.
2. Verificar se os dados retornados estão corretos e completos.
3. Checar a integridade referencial e as restrições do banco de dados.

### Dados de Entrada
Dados de teste específicos para cada consulta SQL.

### Resultado Esperado
Todas as consultas são executadas com sucesso, e os dados retornados estão corretos.

## Teste Funcional

### Objetivo
Validar as funcionalidades do aplicativo conforme os requisitos especificados.

### Pré-requisitos
Aplicativo instalado e usuário logado.

### Passos
1. Executar cada funcionalidade do aplicativo (cadastro de usuário, listagem de itens, lances, etc.).
2. Verificar se o comportamento do aplicativo está de acordo com os requisitos.

### Dados de Entrada
Dados de teste relevantes para cada funcionalidade.

### Resultado Esperado
Todas as funcionalidades funcionam conforme esperado.

## Teste do Ciclo de Negócios

### Objetivo
Simular um ciclo completo de leilão para verificar o fluxo de negócios.

### Pré-requisitos
Usuário logado e itens disponíveis para leilão.

### Passos
1. Listar um item para leilão.
2. Fazer lances em itens.
3. Acompanhar o status do leilão até o fechamento.

### Dados de Entrada
Dados de teste para listagem de itens e lances.

### Resultado Esperado
O ciclo de leilão é completado com sucesso, e o status do leilão é atualizado corretamente.

## Teste da Interface do Usuário

### Objetivo
Avaliar a consistência visual, navegabilidade e responsividade da interface do usuário.

### Pré-requisitos
Aplicativo instalado em diferentes dispositivos e resoluções de tela.

### Passos
1. Navegar por todas as telas do aplicativo.
2. Verificar a consistência visual e a disposição dos elementos de interface.
3. Testar a responsividade em diferentes tamanhos de tela.

### Dados de Entrada
Nenhum.

### Resultado Esperado
A interface do usuário é consistente, fácil de navegar e responsiva.

## Perfil da Performance

### Objetivo
Monitorar o tempo de resposta das principais funcionalidades e analisar o uso de recursos do sistema.

### Pré-requisitos
Ferramentas de monitoramento de performance configuradas.

### Passos
1. Executar as principais funcionalidades do aplicativo.
2. Monitorar o tempo de resposta e o uso de recursos (CPU, memória, etc.).

### Dados de Entrada
Dados de teste relevantes para as funcionalidades monitoradas.

### Resultado Esperado
O aplicativo apresenta um bom desempenho, com tempos de resposta aceitáveis e uso eficiente dos recursos do sistema.

## Teste de Carga

### Objetivo
Simular um número elevado de usuários acessando o aplicativo simultaneamente para verificar a capacidade de carga.

### Pré-requisitos
Ferramentas de teste de carga configuradas.

### Passos
1. Simular um número elevado de usuários acessando o aplicativo.
2. Monitorar o comportamento do aplicativo e a estabilidade do sistema.

### Dados de Entrada
Número de usuários simulados e ações a serem realizadas.

### Resultado Esperado
O aplicativo mantém a estabilidade e o desempenho aceitáveis sob carga elevada.

## Teste de Stress

### Objetivo
Submeter o aplicativo a condições extremas de uso para identificar pontos de falha.

### Pré-requisitos
Ferramentas de teste de stress configuradas.

### Passos
1. Aumentar progressivamente a carga no aplicativo até que falhas ocorram.
2. Identificar os pontos de falha e as condições sob as quais ocorreram.

### Dados de Entrada
Carga progressivamente aumentada.

### Resultado Esperado
Os pontos de falha são identificados, e o aplicativo falha de maneira controlada sob condições extremas.

## Teste de Segurança e de Controle de Acesso

### Objetivo
Verificar a implementação de autenticação, autorização e a segurança geral do aplicativo.

### Pré-requisitos
Ferramentas de teste de segurança configuradas.

### Passos
1. Testar os mecanismos de autenticação e autorização.
2. Realizar testes de penetração para identificar vulnerabilidades.

### Dados de Entrada
Credenciais de acesso, dados para testes de penetração.

### Resultado Esperado
O aplicativo possui mecanismos de segurança robustos, sem vulnerabilidades críticas.

## Teste de Falha/Recuperação

### Objetivo
Avaliar a capacidade do aplicativo de se recuperar de falhas inesperadas.

### Pré-requisitos
Condições de falha simuladas.

### Passos
1. Simular falhas inesperadas no aplicativo (queda de servidor, falhas de rede, etc.).
2. Verificar a capacidade de recuperação e a preservação de dados.

### Dados de Entrada
Condições de falha simuladas.

### Resultado Esperado
O aplicativo se recupera de falhas de maneira adequada, sem perda de dados significativa.

## Teste de Instalação

### Objetivo
Testar o processo de instalação do aplicativo em diferentes dispositivos e sistemas operacionais.

### Pré-requisitos
Diferentes dispositivos e sistemas operacionais disponíveis para teste.

### Passos
1. Instalar o aplicativo em diferentes dispositivos e sistemas operacionais.
2. Verificar se o processo de instalação é bem-sucedido e se o aplicativo funciona corretamente após a instalação.

### Dados de Entrada
Pacote de instalação do aplicativo.

### Resultado Esperado
O aplicativo é instalado com sucesso em diferentes dispositivos e sistemas operacionais.

## Teste de Compatibilidade

### Objetivo
Verificar a compatibilidade do aplicativo em diferentes versões do sistema operacional e dispositivos.

### Pré-requisitos
Diferentes versões do sistema operacional e dispositivos disponíveis para teste.

### Passos
1. Instalar e executar o aplicativo em diferentes versões do sistema operacional e em diferentes dispositivos.
2. Verificar se o aplicativo funciona corretamente em todas as combinações testadas.

### Dados de Entrada
Diferentes versões do sistema operacional e dispositivos.

### Resultado Esperado
O aplicativo é compatível com diferentes versões do sistema operacional e funciona corretamente em diferentes dispositivos.

