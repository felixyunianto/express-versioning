const mainRouter = require("express").Router();
const totoro = require('totoro-node');
const users = require('../controllers/userControllers');

mainRouter.use(
  "/api",
  totoro.rain({
    v1: {
      active: true,
      deprecated: false,
      
      endpoints: [
        {
          route: "/users",
          method: "GET",
          active: true,
          deprecated: false,
          implementation: users.load,
        },
      ],
    },
    v2: {
      active: true,
      deprecated: false,
      endpoints: [
        {
          route: "/users",
          method: "GET",
          active: true,
          deprecated: false,
          implementation: users.load,


        },
      ],
    },
  })
);

module.exports = mainRouter;