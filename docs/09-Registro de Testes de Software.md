## Registro de Testes de Software

### Testes para categoriaRoute.js

| ID do Teste | Descrição | Pré-requisitos | Passos | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status | Observações |
|-------------|-----------|----------------|--------|------------------|--------------------|------------------|--------|-------------|
| TS-001      | **Buscar Todas as Categorias:** Verificar se todas as categorias são retornadas corretamente. | Nenhum | 1. Enviar uma requisição GET para a rota `/categoria` | Nenhum | Retornar todas as categorias cadastradas | Sucesso | Passou | N/A |

### Testes para loginRoute.js

| ID do Teste | Descrição | Pré-requisitos | Passos | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status | Observações |
|-------------|-----------|----------------|--------|------------------|--------------------|------------------|--------|-------------|
| TS-002      | **Login com Sucesso:** Verificar se o login é realizado com sucesso com credenciais válidas. | Nenhum | 1. Enviar uma requisição POST para a rota `/login` com email e senha válidos | Email: user@example.com<br>Senha: Senha123 | Retornar token de autenticação | Sucesso | Passou | N/A |

### Testes para sessaoRoute.js

| ID do Teste | Descrição | Pré-requisitos | Passos | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status | Observações |
|-------------|-----------|----------------|--------|------------------|--------------------|------------------|--------|-------------|
| TS-003      | **Criar Sessão:** Verificar se a sessão é criada com sucesso. | Nenhum | 1. Enviar uma requisição POST para a rota `/sessao` com dados válidos | Dados da sessão | Sessão criada com sucesso | Sucesso | Passou | N/A |

### Testes para usuarioRoute.js

| ID do Teste | Descrição | Pré-requisitos | Passos | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status | Observações |
|-------------|-----------|----------------|--------|------------------|--------------------|------------------|--------|-------------|
| TS-004      | **Cadastrar Usuário:** Verificar se um usuário é cadastrado com sucesso. | Nenhum | 1. Enviar uma requisição POST para a rota `/usuario` com dados válidos | Dados do usuário | Usuário cadastrado com sucesso | Sucesso | Passou | N/A |
| TS-005      | **Atualizar Usuário:** Verificar se um usuário é atualizado com sucesso. | Nenhum | 1. Enviar uma requisição PUT para a rota `/usuario` com dados válidos | Dados do usuário | Usuário atualizado com sucesso | Sucesso | Passou | N/A |
| TS-006      | **Excluir Usuário:** Verificar se um usuário é excluído com sucesso. | Nenhum | 1. Enviar uma requisição DELETE para a rota `/usuario/:id` com ID válido | ID do usuário | Usuário excluído com sucesso | Sucesso | Passou | N/A |
| TS-007      | **Buscar Usuário:** Verificar se um usuário é retornado corretamente. | Nenhum | 1. Enviar uma requisição GET para a rota `/usuario/:id` com ID válido | ID do usuário | Dados do usuário retornados corretamente | Sucesso | Passou | N/A |

### Testes para produtoRoute.js

| ID do Teste | Descrição | Pré-requisitos | Passos | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status | Observações |
|-------------|-----------|----------------|--------|------------------|--------------------|------------------|--------|-------------|
| TS-008      | **Buscar Categorias:** Verificar se todas as categorias de produtos são retornadas corretamente. | Nenhum | 1. Enviar uma requisição GET para a rota `/produto/categoria` | Nenhum | Retornar todas as categorias cadastradas | Sucesso | Passou | N/A |
| TS-009      | **Cadastrar Produto:** Verificar se um produto é cadastrado com sucesso. | Nenhum | 1. Enviar uma requisição POST para a rota `/produto` com dados válidos | Dados do produto | Produto cadastrado com sucesso | Sucesso | Passou | N/A |
| TS-010      | **Buscar Produtos:** Verificar se todos os produtos são retornados corretamente. | Nenhum | 1. Enviar uma requisição GET para a rota `/produto` | Nenhum | Retornar todos os produtos cadastrados | Sucesso | Passou | N/A |
| TS-011      | **Buscar Produto por ID:** Verificar se um produto é retornado corretamente pelo ID. | Nenhum | 1. Enviar uma requisição GET para a rota `/produto/:id` com ID válido | ID do produto | Dados do produto retornados corretamente | Sucesso | Passou | N/A |
| TS-012      | **Excluir Produto:** Verificar se um produto é excluído com sucesso. | Nenhum | 1. Enviar uma requisição DELETE para a rota `/produto/:id` com ID válido | ID do produto | Produto excluído com sucesso | Sucesso | Passou | N/A |

### Testes para lanceRoute.js

| ID do Teste | Descrição | Pré-requisitos | Passos | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status | Observações |
|-------------|-----------|----------------|--------|------------------|--------------------|------------------|--------|-------------|
| TS-013      | **Buscar Últimos Lances:** Verificar se os últimos lances de um leilão são retornados corretamente. | Nenhum | 1. Enviar uma requisição GET para a rota `/lance/:leilaoId/ultimos` com ID válido | ID do leilão | Últimos lances retornados corretamente | Sucesso | Passou | N/A |
| TS-014      | **Cadastrar Lance:** Verificar se um lance é cadastrado com sucesso. | Nenhum | 1. Enviar uma requisição POST para a rota `/lance` com dados válidos | Dados do lance | Lance cadastrado com sucesso | Sucesso | Passou | N/A |
| TS-015      | **Buscar Lances:** Verificar se todos os lances de um leilão são retornados corretamente. | Nenhum | 1. Enviar uma requisição GET para a rota `/lance/:leilaoId` com ID válido | ID do leilão | Lances retornados corretamente | Sucesso | Passou | N/A |
| TS-016      | **Buscar Lances por Usuário:** Verificar se todos os lances de um usuário são retornados corretamente. | Nenhum | 1. Enviar uma requisição GET para a rota `/lance/user/:userId` com ID válido | ID do usuário | Lances retornados corretamente | Sucesso | Passou | N/A |
| TS-017      | **Buscar Lance por ID:** Verificar se um lance é retornado corretamente pelo ID. | Nenhum | 1. Enviar uma requisição GET para a rota `/lance/:id` com ID válido | ID do lance | Lance retornado corretamente | Sucesso | Passou | N/A |

### Testes para leilaoRoute.js

| ID do Teste | Descrição | Pré-requisitos | Passos | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status | Observações |
|-------------|-----------|----------------|--------|------------------|--------------------|------------------|--------|-------------|
| TS-018      | **Cadastrar Leilão:** Verificar se um leilão é cadastrado com sucesso. | Nenhum | 1. Enviar uma requisição POST para a rota `/leilao` com dados válidos | Dados do leilão | Leilão cadastrado com sucesso | Sucesso | Passou | N/A |
| TS-019      | **Listar Leilões:** Verificar se todos os leilões são retornados corretamente. | Nenhum | 1. Enviar uma requisição GET para a rota `/leilao` | Nenhum | Leilões retornados corretamente | Sucesso | Passou | N/A |
| TS-020      | **Listar Meus Leilões:** Verificar se os leilões do usuário são retornados corretamente. | Nenhum | 1. Enviar uma requisição GET para a rota `/leilao/meusleiloes` | Nenhum | Leilões do usuário retornados corretamente | Sucesso | Passou | N/A |
| TS-021      | **Buscar Leilão por ID:** Verificar se um leilão é retornado corretamente pelo ID. | Nenhum | 1. Enviar uma requisição GET para a rota `/leilao/:id` com ID válido | ID do leilão | Leilão retornado corretamente | Sucesso | Passou | N/A |
| TS-022      | **Atualizar Leilão:** Verificar se um leilão é atualizado com sucesso. | Nenhum | 1. Enviar uma requisição PUT para a rota `/leilao/:id` com dados válidos | Dados do leilão | Leilão atualizado com sucesso | Sucesso | Passou | N/A |
| TS-023      | **Excluir Leilão:** Verificar se um leilão é excluído com sucesso. | Nenhum | 1. Enviar uma requ

isição DELETE para a rota `/leilao/:id` com ID válido | ID do leilão | Leilão excluído com sucesso | Sucesso | Passou | N/A |

### Testes para Leilao.js

| ID do Teste | Descrição | Pré-requisitos | Passos | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status | Observações |
|-------------|-----------|----------------|--------|------------------|--------------------|------------------|--------|-------------|
| TS-024      | **Criar Novo Leilão:** Verificar se a tela de novo leilão é exibida corretamente ao pressionar o botão de novo leilão. | Nenhum | 1. Navegar para a tela de leilões<br>2. Pressionar o botão "Novo Leilão" | Nenhum | Navegar para a tela de criação de novo leilão | Sucesso | Passou | N/A |

### Testes para ConfirmarExclusaoLeilao.js

| ID do Teste | Descrição | Pré-requisitos | Passos | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status | Observações |
|-------------|-----------|----------------|--------|------------------|--------------------|------------------|--------|-------------|
| TS-025      | **Confirmar Exclusão do Leilão:** Verificar se a confirmação de exclusão do leilão é exibida corretamente. | Nenhum | 1. Navegar para a tela de exclusão de leilão<br>2. Pressionar o botão de confirmar exclusão | Nome do Produto: Exemplo<br>ID do Leilão: 1 | Exibir mensagem de confirmação de exclusão | Sucesso | Passou | N/A |

### Testes para Login.js

| ID do Teste | Descrição | Pré-requisitos | Passos | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status | Observações |
|-------------|-----------|----------------|--------|------------------|--------------------|------------------|--------|-------------|
| TS-026      | **Login com Credenciais Inválidas:** Verificar a mensagem de erro ao tentar fazer login com credenciais inválidas. | Nenhum | 1. Navegar para a tela de login<br>2. Inserir email e senha inválidos<br>3. Pressionar o botão de login | Email: inválido<br>Senha: inválida | Exibir mensagem de erro "Erro ao fazer login" | Sucesso | Passou | N/A |

### Testes para Home.js

| ID do Teste | Descrição | Pré-requisitos | Passos | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status | Observações |
|-------------|-----------|----------------|--------|------------------|--------------------|------------------|--------|-------------|
| TS-027      | **Renderização Inicial da Tela Home:** Verificar se a tela Home é renderizada corretamente ao iniciar o aplicativo. | Nenhum | 1. Abrir o aplicativo<br>2. Verificar a renderização da tela inicial | Nenhum | Tela Home renderizada corretamente | Sucesso | Passou | N/A |
| TS-028      | **Navegação para Notificações:** Verificar se a tela de Notificações é exibida ao pressionar o ícone de Notificações. | Nenhum | 1. Abrir o aplicativo<br>2. Pressionar o ícone de Notificações | Nenhum | Tela de Notificações renderizada corretamente | Sucesso | Passou | N/A |
| TS-029      | **Navegação para Perfil:** Verificar se a tela de Perfil é exibida ao pressionar o ícone de Perfil. | Nenhum | 1. Abrir o aplicativo<br>2. Pressionar o ícone de Perfil | Nenhum | Tela de Perfil renderizada corretamente | Sucesso | Passou | N/A |

### Testes para MeusLeiloes.js

| ID do Teste | Descrição | Pré-requisitos | Passos | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status | Observações |
|-------------|-----------|----------------|--------|------------------|--------------------|------------------|--------|-------------|
| TS-030      | **Listar Meus Leilões:** Verificar se os leilões do usuário são retornados corretamente. | Nenhum | 1. Enviar uma requisição GET para a rota `/leilao/meusleiloes` com ID do usuário | ID do usuário | Leilões do usuário retornados corretamente | Sucesso | Passou | N/A |

### Testes para Lance.js

| ID do Teste | Descrição | Pré-requisitos | Passos | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status | Observações |
|-------------|-----------|----------------|--------|------------------|--------------------|------------------|--------|-------------|
| TS-031      | **Listar Lances:** Verificar se todos os lances de um leilão são retornados corretamente. | Nenhum | 1. Enviar uma requisição GET para a rota `/lance/:leilaoId` com ID do leilão | ID do leilão | Lances retornados corretamente | Sucesso | Passou | N/A |

### Testes para MeusLeiloesDetalhes.js

| ID do Teste | Descrição | Pré-requisitos | Passos | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status | Observações |
|-------------|-----------|----------------|--------|------------------|--------------------|------------------|--------|-------------|
| TS-032      | **Detalhes do Leilão:** Verificar se os detalhes do leilão são exibidos corretamente. | Nenhum | 1. Enviar uma requisição GET para a rota `/leilao/:id` com ID do leilão | ID do leilão | Detalhes do leilão retornados corretamente | Sucesso | Passou | N/A |

### Testes para MeusLances.js

| ID do Teste | Descrição | Pré-requisitos | Passos | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status | Observações |
|-------------|-----------|----------------|--------|------------------|--------------------|------------------|--------|-------------|
| TS-033      | **Listar Meus Lances:** Verificar se todos os lances do usuário são retornados corretamente. | Nenhum | 1. Enviar uma requisição GET para a rota `/lance/user/:userId` com ID do usuário | ID do usuário | Lances retornados corretamente | Sucesso | Passou | N/A |

### Testes para EditarLeilao.js

| ID do Teste | Descrição | Pré-requisitos | Passos | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status | Observações |
|-------------|-----------|----------------|--------|------------------|--------------------|------------------|--------|-------------|
| TS-034      | **Editar Leilão:** Verificar se as alterações de um leilão são salvas corretamente. | Nenhum | 1. Enviar uma requisição PUT para a rota `/leilao/:id` com dados válidos | Dados do leilão | Alterações do leilão salvas corretamente | Sucesso | Passou | N/A |

### Testes para EnviarLance.js

| ID do Teste | Descrição | Pré-requisitos | Passos | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status | Observações |
|-------------|-----------|----------------|--------|------------------|--------------------|------------------|--------|-------------|
| TS-035      | **Enviar Lance:** Verificar se um lance é enviado corretamente. | Nenhum | 1. Enviar uma requisição POST para a rota `/lance` com dados válidos | Dados do lance | Lance enviado corretamente | Sucesso | Passou | N/A |

### Testes para Pesquisa.js

| ID do Teste | Descrição | Pré-requisitos | Passos | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status | Observações |
|-------------|-----------|----------------|--------|------------------|--------------------|------------------|--------|-------------|
| TS-036      | **Pesquisa de Produtos:** Verificar se a pesquisa de produtos funciona corretamente. | Nenhum | 1. Navegar para a tela de pesquisa<br>2. Inserir texto na barra de pesquisa | Texto de pesquisa | Exibir resultados da pesquisa | Sucesso | Passou | N/A |

### Testes para MinhasInformacoes.js

| ID do Teste | Descrição | Pré-requisitos | Passos | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status | Observações |
|-------------|-----------|----------------|--------|------------------|--------------------|------------------|--------|-------------|
| TS-037      | **Atualizar Informações:** Verificar se as informações do usuário são atualizadas corretamente. | Nenhum | 1. Navegar para a tela de Minhas Informações<br>2. Inserir novos dados nos campos de informações<br>3. Pressionar o botão de salvar alterações | Nome, Sobrenome, Email, Senha | Informações atualizadas corretamente | Sucesso | Passou | N/A |
| TS-038      | **Excluir Cadastro:** Verificar se a exclusão do cadastro do usuário funciona corretamente. | Nenhum | 1. Navegar para a tela de Minhas Informações<br>2. Pressionar o botão de excluir cadastro | Nenhum | Cadastro excluído corretamente | Sucesso | Passou | N/A |

### Testes para Register.js

| ID do Teste | Descrição | Pré-requisitos |

 Passos | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status | Observações |
|-------------|-----------|----------------|--------|------------------|--------------------|------------------|--------|-------------|
| TS-039      | **Cadastro de Usuário:** Verificar se o cadastro de usuário funciona corretamente. | Nenhum | 1. Navegar para a tela de cadastro<br>2. Preencher os campos de nome, email, senha e confirmação de senha<br>3. Pressionar o botão de cadastrar | Nome: João<br>Email: joao@example.com<br>Senha: Senha123<br>Confirmar Senha: Senha123 | Usuário cadastrado com sucesso | Sucesso | Passou | N/A |

### Testes para Perfil.js

| ID do Teste | Descrição | Pré-requisitos | Passos | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status | Observações |
|-------------|-----------|----------------|--------|------------------|--------------------|------------------|--------|-------------|
| TS-040      | **Navegar para Minhas Informações:** Verificar se a navegação para a tela de Minhas Informações funciona corretamente. | Nenhum | 1. Navegar para a tela de Perfil<br>2. Pressionar o botão de Minhas Informações | Nenhum | Navegar para a tela de Minhas Informações | Sucesso | Passou | N/A |
| TS-041      | **Navegar para Meus Leilões:** Verificar se a navegação para a tela de Meus Leilões funciona corretamente. | Nenhum | 1. Navegar para a tela de Perfil<br>2. Pressionar o botão de Meus Leilões | Nenhum | Navegar para a tela de Meus Leilões | Sucesso | Passou | N/A |
| TS-042      | **Navegar para Meus Lances:** Verificar se a navegação para a tela de Meus Lances funciona corretamente. | Nenhum | 1. Navegar para a tela de Perfil<br>2. Pressionar o botão de Meus Lances | Nenhum | Navegar para a tela de Meus Lances | Sucesso | Passou | N/A |
| TS-043      | **Navegar para Novo Leilão:** Verificar se a navegação para a tela de Novo Leilão funciona corretamente. | Nenhum | 1. Navegar para a tela de Perfil<br>2. Pressionar o botão de Novo Leilão | Nenhum | Navegar para a tela de Novo Leilão | Sucesso | Passou | N/A |

### Testes para Notificacao.js

| ID do Teste | Descrição | Pré-requisitos | Passos | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status | Observações |
|-------------|-----------|----------------|--------|------------------|--------------------|------------------|--------|-------------|
| TS-044      | **Listar Notificações:** Verificar se as notificações do usuário são retornadas corretamente. | Nenhum | 1. Enviar uma requisição GET para a rota `/notificacao` | ID do usuário | Notificações retornadas corretamente | Sucesso | Passou | N/A |

### Testes para NovoLeilao.js

| ID do Teste | Descrição | Pré-requisitos | Passos | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status | Observações |
|-------------|-----------|----------------|--------|------------------|--------------------|------------------|--------|-------------|
| TS-045      | **Cadastrar Novo Leilão:** Verificar se um novo leilão é cadastrado corretamente. | Nenhum | 1. Navegar para a tela de novo leilão<br>2. Preencher os campos de nome, descrição, categoria, preço inicial, duração e URL da imagem<br>3. Pressionar o botão de cadastrar leilão | Dados do leilão | Leilão cadastrado com sucesso | Sucesso | Passou | N/A |
