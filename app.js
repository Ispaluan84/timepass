const horaMiddleware = require('./middlewares/horaMiddleware');
const validarHora = require('./middlewares/validarHora');
const router = require('./routes/index');
const endRoutes = require('./routes/endroutes');
const express = require('express');

const app = express();
const PORT = 3000;


app.use(horaMiddleware)
app.use('/', router)
app.use('/end', validarHora, endRoutes)

app.use((req, res) => {
    res.status(404).send(`
        <h1>Página no encontrada</h1> 
        <h3>${req.dateType}</h3>
    `);
})


app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto http://localhost:${PORT}`)
})