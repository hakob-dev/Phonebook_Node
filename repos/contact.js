const { Op } = require('sequelize');
const { Contact } = require('../models/contact');
const { createGroupContact } = require('./groupContact');

async function createContact(contacts){
    const contact_rows = await Contact.bulkCreate(contacts);
    await Promise.all( contact_rows.map( (el,i) => {
        if(contacts[i].groups) return Promise.all(contacts[i].groups.map( gr => { if(gr) createGroupContact(gr,el.id) }))
    }) )
}

async function getContact( query = null ){
    if(query === null) return await Contact.findAll({});

    return await Contact.findAll({
        where: {
            ...( query.first_name ? { 
                    first_name: {
                        [Op.like]: '%' + query.first_name + '%'
                    }
                } : {}
            ), 
            
            ...( query.last_name ? { 
                    last_name: {
                        [Op.like]: '%' + query.last_name + '%'
                    }
                } : {}
            ), 

            ...( query.phone_number ? { 
                    phone_number: {
                        [Op.like]: '%' + query.phone_number + '%'
                    }
                } : {}
            ), 

        }
    });
}

async function updateContact(id, data){
    await Contact.update(
        data,
        { where: {id} }
    );
}

async function deleteContact(ids){
    await Contact.destroy({
        where:{
            id: ids
        }
    })
}

module.exports = { 
    createContact, 
    getContact,
    deleteContact,
    updateContact,
}