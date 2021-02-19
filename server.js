const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burgers_controllers.js')
const app = express();


app.use(express.static(__dirname + '/public/'));


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(routes);

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
    console.log(`listening on port: ${PORT}`);
});



