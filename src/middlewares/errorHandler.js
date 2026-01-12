const errorHandler = (err, _req, res, _next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Something went wrong!";

    res.status(err.statusCode).json({ statusCode: err.statusCode, message: err.message });
};

export default errorHandler;