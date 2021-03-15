const { handleApiError } = require('../utils/apiError');
const { ERROR_TYPE } = require('../utils/errorTypes');

async function allow_CreateGroupContact(req, res, next){
    const { contact_id, group_id } = req.body;
    if( !contact_id || !group_id  ){
        handleApiError(ERROR_TYPE.MISSING_ARGUMENT, res);
    }else{
        next()
    }
}

module.exports = { 
    allow_CreateGroupContact,
    allow_DeleteGroupContact: allow_CreateGroupContact,
}