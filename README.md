# Avaliação Técnica de Engenharia de Software Nível Júnior

Rede D’or - Arquitetura e Engenharia de Software Corporativas

> Esse repositório é destinado a armazenar o código desenvolvido durante a avaliação.


## Início

*Pré-requisitos:*

Para rodar esse projeto em seu ambiente de desenvolvimento, certifique-se de ter o `node` e `npm` instalado em sua versão `lts`.


### Basta seguir os passos:

Clone o repositório para seu ambiente de desenvolvimento.

`git clone https://github.com/marc3gomes/avaliacao-rede-dor.git`

Entre na pasta em que foi clonado o projeto.

Você pode iniciar o projeto com:

```
npm run dev
# or
yarn dev

Utilizei o yarn em meu ambiente.
```

Depois, abra `http://localhost:3000` com seu navegador para ver o resultado.


## Comandos

- `dev`: Executa seu aplicativo utilizando o ts-node-dev `localhost:3000`.
- `build`: Cria a versão build de produção.
- `start`: Inicia um servidor simples com o código de produção da compilação.
- `lint`: Executa o `eslint` em todos os arquivos typescript.
- `test`: Executa o jest para fazer os testes unitários/integração.
- `test:watch`: Executa jest no modo watch.
- `yarn prisma migrate dev`: Cria um banco de dados com SQLite.
- `npx prisma studio`:  Sobe uma aplicação visual do banco de dados `http://localhost:5555/`.


## Banco de dados

Com o intuito de diminuir a barreira de execução do projeto em diferentes ambientes de desenvolvimento, `SQLite` através do `ORM Prisma`.

Adicionei os comandos para a utilização do `prisma` acima, mas caso não saiba o que esteja fazendo, não recomendo a utilização, para não ter risco de subscrever o banco de dados atual e quebrar os testes feitos com o `jest`.

- `yarn prisma migrate dev`: Cria um banco de dados com o arqusivo localizado na pasta prisma/`schema.prisma`.

---

## Testando as rotas

Para testar as rotas, recomendo utilizar alguma ferramenta que você conheça. Exemplo: `insomina`  ou `postman`

> Utilizei como ferramenta o `insomina`. Criei uma galeria com todas as minhas rotas e exportei no formato `.json`. O arquivo exportado está disponibilizado com os arquivos do projeto. `Insomnia_routes.json`.

Se você não souber como importar o `json` em sua ferramenta teste, recomendo que crie as rotas de forma manual com as instruções abaixo.

### Lista das Rotas:

- **Listar todos os usuários:** `GET` `http://localhost:3000/users`

- **Buscar o usuário:** `GET` `PUT` `http://localhost:3000/users/` `id`

- **Criar usuário:** `POST` `http://localhost:3000/users`

*Exemplo do json a ser passado no corpo da rota.*

```json
{
	"email": "you@demo.com",
	"name": "Name"
}

```

- **Atualizar usuário:** `PUT` `http://localhost:3000/users`

*Exemplo do json a ser passado no corpo da rota.*

```json
{
	"id": Int,
	"email": "you@demo.com",
	"name": "Name"
}

```

- **Apagar usuário:** `PUT` `http://localhost:3000/users/` `id`

---

## Gestão de Branchs

É necessário que a cada edição de código, ou seja: *inserção*, *refatoração*, *correção* ou *novas funcionalidades*, seja criada uma `branch` a partir da `develop`. 

> Antes de alterar o código, certifique-se de estar na branch `feature`.


Visando manter um `histórico de commits` sem sujeiras e sem possíveis dano temos um `hook pre-commit` realizando verificações automatizadas através do `eslint` e `jest` para possíveis erros de `Typescript, escrita do código e testes de integração`. 

Para continuar prezando pelo histórico, devemos seguir as práticas:

- Se for necessário puxar alterações da master, precisamos utilizar o `rebase`
- Após terminar as features ou correções, devemos utilizar o `merge` para enviá-la para a `develop`.
- Utilizar o `git reset` apenas em branches separadas da develop ou master
- Utilizar o `git revert` para a master se necessário

##### Branchs

(Fixa) **master:**
- Reflete a versão estável e de produção do código.
- Commits direcionados a esta branch devem ser feitos por meio de (PRs) utilizando a branch develop.
- 
(Fixa) **develop:**
- Reflete a última versão de desenvolvimento.
- Feature branches são mescladas aqui para testes antes de serem enviadas para a main.
- 
(Variável) **feature/nome-da-feature:**
- Cada nova feature é desenvolvida em uma branch separada.
- As branches de feature são mescladas na develop via pull request.
- 
(Variável) **hotfix/nome-do-hotfix:**
- Criada a partir da master para correção de bugs críticos em produção.
- Mesclada de volta na main e também na develop.

---

## Informações adicionais
- O projeto está em `typescript`, foi utilizado o `framework Express`.
- Para validação da escrita do código, está sendo utilizado `eslint` e `prettier`.
- Para garantir um padrão na indentação `editorconfig`.
- Para testes unitários e de integrações, usamos o `jest` e `supertest`
- O banco de dados utilizado foi o SQLite.
- Para interação com o banco de dados, foi utilizado o `ORM Prisma`

**Extensão do VSCode**
- Eslint
- Prettier
- Editorconfig

**Bibliotecas para consulta**
- [Express](https://expressjs.com/en/guide/routing.html)
- [Prisma](https://www.prisma.io/docs)
- [Jest](https://jestjs.io/pt-BR/docs/getting-started)
- [Supertest](https://github.com/ladjs/supertest)
- [Husky](https://typicode.github.io/husky/)
- [lint-staged](https://github.com/lint-staged/lint-staged)
- [Prettier](https://prettier.io/docs/en/integrating-with-linters.html)

**Dicas**:
Configure o autocorrect do git para facilitar seu trabalho.

`git config --global help.autocorret 1`