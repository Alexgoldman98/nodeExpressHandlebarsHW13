const express = require('express');
const handlebars = require('express-handlebars');
const routes = require('./controllers/burgersController');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.static('./public/'));

//what is this
app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.engine('handlebars', handlebars({
    defaultLayout: 'main',
}))

app.set("view engine", 'handlebars');

app.use(routes);

app.listen(PORT, function(){
    console.log(`App listening on ${PORT}`)
});