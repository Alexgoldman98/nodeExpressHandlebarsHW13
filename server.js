const express = require('express');
const handlebars = require('express-handlebars');
const routes = require('./controllers/burgersController');

//what is this
//const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3703;

const app = express();

app.use(express.static('./public/'));

//what is this
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.engine('handlebars', exhbs({
    defaultLayout: 'main',
}))

app.set("view engine", 'handlebars');

app.use(routes);

app.listen(PORT, function(){
    console.log(`App listening on ${PORT}`)
});