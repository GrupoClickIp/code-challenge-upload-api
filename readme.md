### Modelagem (MER)

![[assets/shortener-api-mer.png]]

### Objetivo
- O usuário deve criar uma nova conta e em seguida realizar o login. Após o usuário está logado, ele poderá encurtar uma URL.

### endpoints:

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

#### POST /shorten - Rota que irá gerar uma nova URL

- Gerar a nova URL encurtar e salvar no banco
- Retornar a nova URL

```js
'http://localhost:3333/abc1234' // new url
'http://localhost:3333/' // baseURL
'abc1234' // code generated
```

#### POST /:code - Rota que irá redirecionar para URL original

- Verificar se o código informado já existe, se não retornar um erro 400
- Cada acesso pela rota deverá ser contabilizado e salvo no banco
- A rota deve fazer o redirect para URL original

Ex: 
```js
'http://localhost:3333/abc1234' // new url
'https://meuecommerce.com.br/download/app' // original url
```

#### GET /links

- Retornar os links gerados pelo usuário que está logado
- O retorno deve conter: name, email, os links gerados e a quantidade que cada link teve.

#### Regras de negócio:
- Para gerar uma URL abreviado é necessário informar a URL original para onde será feito o redirecionamento.
- Para criar uma nova URL abreviada é necessário ter uma conta criada.
- A cada novo acesso a nova URL deverá ser contabilizado.
- Somente o usuário logado pode gerar URL
- a url deve ser salva no seguinte formato: `https://meusite.com.br`
- As rotas: /shorten, /:code, são privadas. Então somente o usuário logado pode acessar elas.### 

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
