var express = require("express");
var app = express();

const TodoController = require("./controllers/NameController");
const port = 3000

app.get("/", TodoController.get);

app.listen(port, ()=> {
  console.log('Rodando na porta ' + port)
})
