const express = require('express');
const app = express();
const PORT = 3000;

const indexRouter = require('./src/routers/indexRouter');
app.use('/', indexRouter);

app.listen(PORT, () => console.log(`App rodando na porta ${PORT}`));