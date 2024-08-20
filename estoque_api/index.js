const express = require('express');
const db = require('./src/db');
const estoqueRouter = require('./src/routers/estoqueRouter');

const app = express();

app.use(express.urlencoded({extended: true}));

app.use('/', estoqueRouter);

db.sync(() => {
    console.log('DB conectado');
})

const PORT = 8080;
app.listen(PORT, () => console.log(`App rodando na porta ${PORT}`));