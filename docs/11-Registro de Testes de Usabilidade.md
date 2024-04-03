## Registro de Testes de Software


| ID do Teste | Descrição                         | Pré-requisitos | Passos                      | Dados de Entrada        | Resultado Esperado       | Resultado Obtido | Status | Observações |
|-------------|-----------------------------------|----------------|-----------------------------|-------------------------|--------------------------|------------------|--------|-------------|
| TS-001      | **Teste de Cadastro de Usuário:** Verificar se o usuário pode se cadastrar com sucesso, fornecendo informações válidas. | Nenhum         | 1. Acessar tela de cadastro<br>2. Preencher as informações de cadastro<br>3. Submeter o formulário | Nome, email, senha | Cadastro bem-sucedido e redirecionamento para a tela de login | Sucesso          | Passou | N/A         |
| TS-002      | **Teste de Listagem de Itens:** Verificar se os itens para leilão são exibidos corretamente na tela de listagem. | Usuário logado | 1. Acessar tela de itens<br>2. Verificar a exibição dos itens | Nenhum                  | Lista de itens exibida corretamente | Sucesso          | Passou | N/A         |
| ...         | ...                               | ...            | ...                         | ...                     | ...                      | ...              | ...    | ...         |

---


## Registro de Testes de Usabilidade

| ID do Teste | Objetivo                                  | Método            | Participantes | Tarefas                        | Critérios de Sucesso       | Resultados    | Recomendações |
|-------------|-------------------------------------------|-------------------|---------------|--------------------------------|----------------------------|---------------|---------------|
| TU-001      | **Avaliar a facilidade de navegação:** Verificar se os usuários conseguem navegar facilmente até a tela de lances e realizar um lance. | Teste com usuário | 5 usuários    | 1. Navegar até a tela de lances<br>2. Realizar um lance em um item | Tarefa completada em menos de 2 minutos | Todos completaram | Ajustar layout se necessário |
| TU-002      | **Verificar a acessibilidade da tela de cadastro:** Avaliar se a tela de cadastro está de acordo com as diretrizes de acessibilidade. | Avaliação heurística | N/A         | N/A                            | Conformidade com as diretrizes WCAG | Falhas identificadas | Ajustar contraste, tamanhos de fonte e outros elementos conforme necessário |
| ...         | ...                                       | ...               | ...           | ...                            | ...                        | ...           | ...           |
