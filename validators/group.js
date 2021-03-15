const { handleApiError } = require('../utils/apiError');
const { ERROR_TYPE } = require('../utils/errorTypes');

async function allow_CreateGroup(req, res, next){
    const { name } = req.body;
    if( !name ){
        handleApiError(ERROR_TYPE.MISSING_ARGUMENT, res);
    }else{
        next()
    }
}

async function allow_DeleteGroup(req, res, next){
    const { ids } = req.body;
    if( Array.isArray(ids) && ids.length > 0 ){
        next()
    }else{
        handleApiError(ERROR_TYPE.MISSING_ARGUMENT, res);
    }
}

module.exports = { 
    allow_CreateGroup,
    allow_DeleteGroup,
}