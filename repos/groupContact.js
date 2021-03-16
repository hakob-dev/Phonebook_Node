const { Group } = require('../models/group');
const { Contact } = require('../models/contact');
const { GroupContact } = require('../models/groupContact');

async function createGroupContact(group, contact_id){
    let group_id = typeof group === "number" ? group : (await Group.findOne({ where: {name: group}})).id;
    await GroupContact.create({group_id, contact_id });
}

async function deleteGroupContact(group_id, contact_id){
    await GroupContact.destroy({
        where:{ group_id, contact_id, }
    })
}

module.exports = { 
    deleteGroupContact,
    createGroupContact,
}