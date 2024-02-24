const routerFilme = require("./filmeRoute");
const cors = require('cors');
module.exports = (app, express) => {
  app.use(express.json());
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(routerFilme);

};
