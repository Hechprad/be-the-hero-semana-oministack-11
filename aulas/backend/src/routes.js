const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const SessionController = require("./controllers/SessionController");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);

routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.number()
        .required()
        .min(10)
        .max(11),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  OngController.create
);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);

routes.post(
  "/incidents",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.number().required()
    })
  }),
  IncidentController.create
);

routes.delete(
  "/incidents/:id",
  // celebrate({
  //   [Segments.PARAMS]: Joi.value()
  // }),
  IncidentController.delete
);

module.exports = routes;
