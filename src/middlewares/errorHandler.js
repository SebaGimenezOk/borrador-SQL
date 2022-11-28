const errorHandler = (err, _req, res, _next) => {
    console.error(err);
    return res.status(500).json({
        succes: false,
        message: err.message
    })
};

module.exports = errorHandler;
