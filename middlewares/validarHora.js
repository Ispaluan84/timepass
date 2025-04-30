const validarHora = (req, res, next) => {
    const date = new Date();
    const hours = date.getHours();

    if ( hours >= 12 && hours < 24) {
        return next();
    } else {
        res.status(403).send(`
            <h1>Bienvenido</h1>
            <h2>Acceso solo permitido de 12:00 a 24:00 hrs.</h2>
            <h3>${req.dateType}</h3>
            <button><a href="/end">Entrar</a>
        `)
    }

    res.redirect('/routes/endroutes')
};


module.exports = validarHora;