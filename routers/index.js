const routerFilme = require("./filmeRoute");
module.exports = (app) => {
  app.use(routerFilme);
};
