const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burgers_controllers.js')
const server = express();

server.use(express.static("public"));
server.use(express.json());
server.use(express.urlencoded({ extended: true}));
server.use(routes);

server.engine("handlebars", exphbs({ defaultLayout: "main"}));
server.set("view engine", "handlebars");

const PORT = process.env.PORT || 8080;

server.listen(PORT, function(){
    console.log(`listening on port: ${PORT}`);
});



