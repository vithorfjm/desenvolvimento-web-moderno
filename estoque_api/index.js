const express = require('express');
const db = require('./src/db');
const estoqueRouter = require('./src/routers/estoqueRouter');
const estoqueViewRouter = require('./src/routers/estoqueViewRouter');
const mustacheExpress = require('mustache-express');

const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views',__dirname + '/src/views');

app.use(express.urlencoded({extended: true}));

app.use('/', estoqueRouter);
app.use('/', estoqueViewRouter);

db.sync(() => {
    console.log('DB conectado');
})

const PORT = 8080;
app.listen(PORT, () => console.log(`App rodando na porta ${PORT}`));