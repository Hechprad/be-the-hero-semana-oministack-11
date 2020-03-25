const express = require("express");

const app = express();

// Converte o json do corpo da requisição em um objeto do javascript
app.use(express.json());

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

app.post("/users", (request, response) => {
  const params = request.body;

  console.log(params);

  return response.json({
    evento: "Semana Omnistack 11.0",
    aluno: "Jorge Hecherat"
  });
});

app.listen(3333);
