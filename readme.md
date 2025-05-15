### Modelagem

!(.assets/task-api-mer.png)
### endpoints

#### POST /signup -> Criar conta

Fields: name, email and password.

- Verificar se o usuário já tem uma conta. Se sim retornar erro 400.
- A senha precisa ser armazenada no db com hash.

#### POST /session - Fazer login

- Autenticação será feita com email e password.
- Verificar se o email já tem uma conta, se não retornar um erro 400.
- Validar se a senha informada é valida com o hash salvo no banco
- Retornar 400 um erro se a senha estiver errada
- Gerar o token para o usuário logado
- Quando usuário logar retornar na rota: name, email, token

#### POST /tasks → Create new task

Fields: name, description.

- A description da task é opcional. 
- Uma nova task deve começar no status: "NOT_STARTED"
- Ao criar uma nova task a rota deve retornar: task name, description, status, author, author_id

#### GET /tasks → List my tasks

- Verificar se o usuário já tem tasks, se não retornar status code 200 informando que o usuário não criou nenhuma task.
- Retornar as tasks do usuário

#### Regra de negócio:
- Uma task deve conter identificador único, nome, descrição, status e qual usuário pertence.
- Somente o usuário autenticado pode listar as suas atividades
- Qualquer usuário pode criar uma conta
- As todas: /tasks (get and post), são privadas. Somente o usuário logada pode acessá-las.


### How to run the project:

```shell
npm run dev
```

### Docker commands:

Create container and volumes by dockerfile

```shell
docker compose up -d
```

Delete container and volumes
```shell
docker compose down -v
```