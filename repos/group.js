const { Group } = require('../models/group');
const { Contact } = require('../models/contact');
const { GroupContact } = require('../models/groupContact');

async function createGroup(name){
    await Group.create({ name, });
}

async function deleteGroup(ids){
    await Group.destroy({
        where:{
            id: ids
        }
    })
}

async function getGroup(){
    return await Group.findAll({
        include: {
            model: Contact,
            as: 'contact',
            // attributes: [['name']]
        }
    })
}

module.exports = { 
    createGroup,
    deleteGroup,
    getGroup,
}