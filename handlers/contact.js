const { createContact, getContact, deleteContact, updateContact } = require('../repos/contact');
const { handleApiError } = require('../utils/apiError');
const { ERROR_TYPE } = require('../utils/errorTypes');
const { handleApiResponse } = require('../utils/apiResponse');
const { RESPONSE_TYPE } = require('../utils/responseTypes');

async function onApi_CreateContact(req, res){
    const { contacts } = req.body;

    try{
        await createContact( contacts );
        handleApiResponse(RESPONSE_TYPE.CONTACT_ADDED, res);
    }catch(err){
        handleApiError( ERROR_TYPE.CONTACT_ALREADY_EXISTS, res);
    }
}

async function onApi_GetContact(req, res){
    const contacts = await getContact();

    handleApiResponse(RESPONSE_TYPE.SUCCESS, res, { contacts })
}

async function onApi_DeleteContact(req, res){
    const { ids } = req.body;
    await deleteContact(ids);

    handleApiResponse(RESPONSE_TYPE.SUCCESS, res)
}

async function onApi_UpdateContact(req, res){
    const { id, data } = req.body;

    await updateContact( id, data )
    handleApiResponse(RESPONSE_TYPE.SUCCESS, res);
}

async function onApi_SearchContact(req, res){
    const { first_name, last_name, phone_number } = req.query;
    const contacts = await getContact( { first_name, last_name, phone_number } );

    handleApiResponse(RESPONSE_TYPE.SUCCESS, res, { contacts })
}

module.exports = {
    onApi_CreateContact,
    onApi_GetContact,
    onApi_DeleteContact,
    onApi_SearchContact,
    onApi_UpdateContact,
}