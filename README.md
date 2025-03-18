
# Stock App

Sistema desenvolvido com o intuito de ajudar donos e donas de comercios locais a armazenar e gerenciar seus produtos com um sistema intuitivo e fácil de utilizar, o stock app foi minha porta de entrada para aplicar os meus conhecimentos sendo um ótimo projeto para eu me desafiar!


## Funcionalidades

- Cadastro de produtos com nome, marca, quantidade e preço
- Controle completo de estoque de produtos


## Documentação da API (Usuário)

#### Cadastrar usuário

```http
  POST /registerUser
```

| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `username` | `string` | **Obrigatório**. Inserir o nome de usuário |
| `password` | `string` | **Obrigatório**. Inserir a senha do usuário |

#### Login (retorna o token)

```http
  POST /login
```

| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `username` | `string` | **Obrigatório**. Inserir o nome de usuário |
| `password` | `string` | **Obrigatório**. Inserir a senha do usuário |

#### Deletar usuário

```http
  DELETE /deleteUser
```

| Query   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id` | `string` | **Obrigatório**. Inserir o ID do usuário|


## Documentação da API (Produtos)

#### Cadastrar produto

```http
  POST /registerProduct
```

| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `userId` | `string` | _Vem da requisição_ |
| `name` | `string` | **Obrigatório**. Digitar o nome do produto |
| `brand` | `string` | **Obrigatório**. Digitar a marca do produto |
| `quantity` | `integer` | **Obrigatório**. Inserir a quantidade do produto |
| `price` | `integer` | **Obrigatório**. Inserir o preço do produto |

#### Listar todos os produtos do usuário

```http
  GET /products
```

| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `userId` | `string` | _Vem da requisição_ |

#### Listar produto do usuário por ID

```http
  GET /products
```

| Query  | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `userId` | `string` | _Vem da requisição_ |
| `id` | `string` | **Obrigatório**. Digitar o ID do produto |

#### Listar produto do usuário por nome

```http
  GET /productByName
```

| Query  | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `userId` | `string` | _Vem da requisição_ |
| `name` | `string` | **Obrigatório**. Digitar o nome do produto |

#### Listar produtos do usuário por marca

```http
  GET /productByBrand
```

| Query  | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `userId` | `string` | _Vem da requisição_ |
| `brand` | `string` | **Obrigatório**. Digitar a marca do produto |

#### Editar produto do usuário

```http
  PUT /updateProduct
```

| Query  | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `userId` | `string` | _Vem da requisição_ |
| `name` | `string` | **Obrigatório**. Digitar o nome do produto |
| `brand` | `string` | **Obrigatório**. Digitar a marca do produto |
| `quantity` | `integer` | **Obrigatório**. Inserir a quantidade do produto |
| `price` | `integer` | **Obrigatório**. Inserir o preço do produto |

#### Exluir produto do usuário

```http
  DELETE /deleteProduct
```

| Query  | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `userId` | `string` | _Vem da requisição_ |
| `id` | `string` | **Obrigatório**. Digitar o ID do produto |

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Gleison-dev/stock-backend.git
```

Entre no diretório do projeto

```bash
  cd stock-backend
```

Instale as dependências

```bash
  npm install ou yarn
```

```text
    Crie um arquivo .env e coloque as informações do seu banco de dados
```

Inicie o servidor

```bash
  npm run dev
```


## Stack utilizada

**Back-end:** Node, Express, Sequelize, Dotenv, Bcrypt, JWT e Postgres


## Autores

- [@Gleison-dev](https://github.com/Gleison-dev)


## Licença

[MIT](https://choosealicense.com/licenses/mit/)

