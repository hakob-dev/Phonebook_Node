const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./sequelize');
const { Contact } = require('./contact');
const { Group } = require('./group');

class GroupContact extends Model { }
GroupContact.init({}, { sequelize, modelName: 'groupContact' });

Contact.belongsToMany(Group, {
    through: "groupContact",
    as: "group",
    foreignKey: "contact_id",
});
Group.belongsToMany(Contact, {
    through: "groupContact",
    as: "contact",
    foreignKey: "group_id",
});

(async function(){
    await sequelize.sync();
    await Contact.create({first_name:"contact_1", last_name: "1", phone_number:"123456"});
    await Contact.create({first_name:"contact_2", last_name: "2", phone_number:"34234"});
    await Contact.create({first_name:"contact_3", last_name: "3", phone_number:"423423"});
    await Contact.create({first_name:"contact_4", last_name: "4", phone_number:"3424232"});

    await Group.create({name:"group1"});
    await Group.create({name:"group2"});
    await Group.create({name:"group3"});
    // Group.addContact({group_id: 1,contact_id:1 });
    
await  GroupContact.create({group_id: 1,contact_id:1 });
await  GroupContact.create({group_id: 1,contact_id:2 });
await  GroupContact.create({group_id: 1,contact_id:4 });
await  GroupContact.create({group_id: 3,contact_id:3 });
await  GroupContact.create({group_id: 3,contact_id:2 });
await  GroupContact.create({group_id: 2,contact_id:2 });
// await  GroupContact.create({group_id: 2,contact_id:1 });
console.log(await GroupContact.findAll())
})()

module.exports = { GroupContact };