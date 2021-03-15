const { createGroup, deleteGroup, getGroup } = require('../repos/group');
const { handleApiError } = require('../utils/apiError');
const { ERROR_TYPE } = require('../utils/errorTypes');
const { handleApiResponse } = require('../utils/apiResponse');
const { RESPONSE_TYPE } = require('../utils/responseTypes');

async function onApi_CreateGroup(req, res){
    const { name } = req.body;

    try{
        await createGroup( name )
        handleApiResponse(RESPONSE_TYPE.GROUP_ADDED, res);
    }catch(err){
        handleApiError( ERROR_TYPE.GROUP_ALREADY_EXISTS, res);
    }
}

async function onApi_DeleteGroup(req, res){
    const { ids } = req.body;
    await deleteGroup(ids);

    handleApiResponse(RESPONSE_TYPE.SUCCESS, res)
}

async function onApi_GetGroup(req, res){
    const groups = await getGroup();

    handleApiResponse(RESPONSE_TYPE.SUCCESS, res, {groups})
}

module.exports = {
    onApi_CreateGroup,
    onApi_DeleteGroup,
    onApi_GetGroup,
}