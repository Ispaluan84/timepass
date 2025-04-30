const horaMiddleware = (req, res, next) => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
   
    const forHours = String(hours).padStart(2, '0');
    const forMinutes = String(minutes).padStart(2, '0');
    const formattedTime = `${forHours}:${forMinutes}`;
    req.dateType = `Son las ${formattedTime}`;
    next();
}




module.exports = horaMiddleware;
