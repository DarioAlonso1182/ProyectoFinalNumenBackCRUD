const logMiddlewares = (req, res, next) => { // este es el middleware a nivel aplicacion.

    const date = new Date()
    const log = `[${date.getDate()} - ${date.getMonth()+1}: ${date.getHours()}: ${date.getMinutes()}]: [${req.method}]:${req.ip}`
    console.log(log);
    next();
}

module.exports = logMiddlewares;