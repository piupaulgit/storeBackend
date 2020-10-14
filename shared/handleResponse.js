module.exports.sendResponseToFrontend = (res, statusCode, data, errorFlag, message ) => {
    return res.status(statusCode).json({
        data: data,
        error: errorFlag,
        message: message
    })
}