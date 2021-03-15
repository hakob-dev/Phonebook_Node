function handleApiResponse(resDetails, res, data = null){
    res.status( resDetails.statusCode );
    res.json({
        message: resDetails.message,
        code: resDetails.statusCode,
        data,
    });
}

module.exports = { handleApiResponse };