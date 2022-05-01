const { read, create, Name, update, Delete } = require("./controller");
exports.routes = (app) => {
  app.get("/user", read);
  app.post("/user", create);
  app.put("/user/:id", update);
  app.delete("/user/:id", Delete);
  app.get("/user/:name", Name);
};
