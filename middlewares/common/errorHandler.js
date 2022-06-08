const createError = require('http-errors');
//404 not found
function notFoundHandler(req,res,next){
    next(createError(404, "Your requested error was not found"));
}


//Default error handler

function errorHandler(error,req,res,next){
    res.render("error", {
        title: "Error Page",
        error: "Not found",
    })
}

module.exports = {
    notFoundHandler,
    errorHandler
}