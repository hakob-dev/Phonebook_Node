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
    //createing test data
    await sequelize.sync();
    await Contact.create({first_name:"Jack", last_name: "Smith", phone_number:"+374-66-23-34"});
    await Contact.create({first_name:"John", last_name: "Smith", phone_number:"+374-46-13-33"});
    await Contact.create({first_name:"Micheal", last_name: "Adams", phone_number:"+372-66-23-12"});
    await Contact.create({first_name:"John", last_name: "Evans", phone_number:"+232-66-23-12"});

    await Group.create({name:"group_1"});
    await Group.create({name:"group_2"});
    await Group.create({name:"group_3"});
    
    await  GroupContact.create({group_id: 1,contact_id:1 });
    await  GroupContact.create({group_id: 1,contact_id:4 });
    await  GroupContact.create({group_id: 3,contact_id:3 });
    await  GroupContact.create({group_id: 3,contact_id:2 });
})()

module.exports = { GroupContact };