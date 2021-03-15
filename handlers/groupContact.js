const { createGroupContact, deleteGroupContact } = require('../repos/groupContact');
const { handleApiError } = require('../utils/apiError');
const { ERROR_TYPE } = require('../utils/errorTypes');
const { handleApiResponse } = require('../utils/apiResponse');
const { RESPONSE_TYPE } = require('../utils/responseTypes');

async function onApi_CreateGroupContact(req, res){
    const { contact_id, group_id } = req.body;

    try{
        await createGroupContact( group_id, contact_id )
        handleApiResponse(RESPONSE_TYPE.SUCCESS, res);
    }catch(err){
        handleApiError( ERROR_TYPE.GROUP_CONTACT_ALREADY_EXISTS, res);
    }
}

async function onApi_DeleteGroupContact(req, res){
    const { contact_id, group_id } = req.body;
    await deleteGroupContact(group_id, contact_id);

    handleApiResponse(RESPONSE_TYPE.SUCCESS, res)
}

module.exports = {
    onApi_DeleteGroupContact,
    onApi_CreateGroupContact,
}