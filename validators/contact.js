const { handleApiError } = require('../utils/apiError');
const { ERROR_TYPE } = require('../utils/errorTypes');

async function allow_CreateContact(req, res, next){
    const { contacts } = req.body;
    if( !contacts || contacts.some( contact => [contact.first_name, contact.last_name, contact.phone_number].includes(undefined)) ){
        handleApiError(ERROR_TYPE.MISSING_ARGUMENT, res);
    }else{
        next()
    }
}

async function allow_UpdateContact(req, res, next){
    const { id, data } = req.body;
    if( !id || !data ){
        handleApiError(ERROR_TYPE.MISSING_ARGUMENT, res);
    }else{
        next()
    }
}

async function allow_DeleteContact(req, res, next){
    const { ids } = req.body;
    if( Array.isArray(ids) && ids.length > 0 ){
        next()
    }else{
        handleApiError(ERROR_TYPE.MISSING_ARGUMENT, res);
    }
}

module.exports = { 
    allow_CreateContact,
    allow_DeleteContact,
    allow_UpdateContact,
}