module.exports = {
    ERROR_TYPE: {
        CONTACT_ALREADY_EXISTS: { statusCode: 409, message: 'contact with this phone number already exists'},
        GROUP_ALREADY_EXISTS: { statusCode: 409, message: 'group with this name already exists'},
        GROUP_CONTACT_ALREADY_EXISTS: { statusCode: 409, message: 'contact is already in the group'},
        MISSING_ARGUMENT: { statusCode: 400, message: 'missing an argument'},
    }
}