

---

## Registro de Testes de Software

| ID do Teste | Descrição                         | Pré-requisitos | Passos                      | Dados de Entrada        | Resultado Esperado       | Resultado Obtido | Status | Observações |
|-------------|-----------------------------------|----------------|-----------------------------|-------------------------|--------------------------|------------------|--------|-------------|
| TS-003      | **Teste de Cadastro com Sucesso:** Verificar se o usuário pode se cadastrar com sucesso fornecendo informações válidas. | Nenhum         | 1. Acessar tela de cadastro<br>2. Preencher nome, email, senha e confirmação de senha corretamente<br>3. Submeter o formulário | Nome: João<br>Email: joao@example.com<br>Senha: Senha123<br>Confirmar Senha: Senha123 | Cadastro bem-sucedido e exibição de mensagem de sucesso | Sucesso          | Passou | N/A         |
| TS-004      | **Teste de Cadastro com Campos Vazios:** Verificar a mensagem de erro quando o usuário não preenche todos os campos obrigatórios. | Nenhum         | 1. Acessar tela de cadastro<br>2. Não preencher algum dos campos obrigatórios (nome, email ou senha)<br>3. Submeter o formulário | Nome: João<br>Email: joao@example.com<br>Senha: <br>Confirmar Senha: | Exibição de mensagem de erro "Preencha todos os campos!" | Sucesso          | Passou | N/A         |
| TS-005      | **Teste de Cadastro com Senhas Diferentes:** Verificar a mensagem de erro quando o usuário preenche a senha e a confirmação da senha com valores diferentes. | Nenhum         | 1. Acessar tela de cadastro<br>2. Preencher nome, email, senha e confirmação de senha com valores diferentes<br>3. Submeter o formulário | Nome: João<br>Email: joao@example.com<br>Senha: Senha123<br>Confirmar Senha: Senha456 | Exibição de mensagem de erro "Senha diferente da digitada." | Sucesso          | Passou | N/A         |
| TS-006      | **Teste de Cadastro com Erro de API:** Verificar a mensagem de erro quando a API retorna um erro durante o cadastro do usuário. | Nenhum         | 1. Acessar tela de cadastro<br>2. Preencher nome, email, senha e confirmação de senha corretamente<br>3. Submeter o formulário e API retorna um erro | Nome: João<br>Email: joao@example.com<br>Senha: Senha123<br>Confirmar Senha: Senha123 | Exibição de mensagem de erro "Não foi possivel cadastrar." | Sucesso          | Passou | Simular erro na API para teste |

---
