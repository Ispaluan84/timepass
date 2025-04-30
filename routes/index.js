const express = require ('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <h1>Bienvenido</h1>
        <h3>${req.dateType}</h3>
        <button><a href="/end">Entrar</a></button>`)
})


module.exports = router;