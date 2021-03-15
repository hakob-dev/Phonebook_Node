function handleApiError(err, res){
    res.status( err.statusCode );
    res.json({
        message: err.message,
        code: err.statusCode,
    });
}

module.exports = { handleApiError };