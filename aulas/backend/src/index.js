const express = require("express");
const routes = require("./routes");
const app = express();

// Converte o json do corpo da requisição em um objeto do javascript
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 *
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 *
 * Query: Parâmetros nomeados enviados na rota após "?" (Filtros, páginação)
 *  acesso através de "request.query"
 *  ex: /users?nome=Jorge&ideade=30
 * Route Params: Parâmetros utilizados para identificar recursos
 *  acesso através de "request.params"
 *  ex: /users/:id => /users/1
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 *  acesso através de "request.body"
 *  ex: 
 *  método POST
 *  body = {
      "nome": "Jorge Hecherat",
      "idade": 30
    }
    header = Content-Type: application/json
 */

/**
 * Bancos do Dados
 * SQL (Relacionais): MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL (Não Ralacionais): MongoDB, CouchDB
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
