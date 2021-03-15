const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models/sequelize');
const { 
    onApi_CreateContact,
    onApi_GetContact,
    onApi_DeleteContact,
    onApi_SearchContact,
    onApi_UpdateContact,
} = require('./handlers/contact');
const { 
    onApi_CreateGroup,
    onApi_DeleteGroup,
    onApi_GetGroup,
} = require('./handlers/group');
const { 
    onApi_CreateGroupContact,
    onApi_DeleteGroupContact,
} = require('./handlers/groupContact');
const { 
    allow_CreateContact,
    allow_DeleteContact,
    allow_UpdateContact,
} = require('./validators/contact');
const { 
    allow_CreateGroup,
    allow_DeleteGroup,
} = require('./validators/group');
const { 
    allow_CreateGroupContact,
    allow_DeleteGroupContact,
} = require('./validators/groupContact');
// const { Group } = require('./models/group');
const { GroupContact } = require('./models/groupContact');

(async function(){
    try{
        await sequelize.sync();
        console.log(`DB success`);
    }catch(e){
        console.log(`DB fail ${e.message}`);
    }
})();

const app = express();
app.use(bp());
app.use(cors());

app.get('/contact', async (req,res)=>{
    await onApi_GetContact(req, res);
})
app.post('/contact', allow_CreateContact, async (req,res)=>{
    await onApi_CreateContact(req, res);
});
app.patch('/contact', allow_UpdateContact, async (req,res)=>{
    await onApi_UpdateContact(req, res);
});
app.delete('/contact', allow_DeleteContact, async (req,res)=>{
    await onApi_DeleteContact(req, res);
});

app.get('/contact/search', async (req, res)=>{
    console.log(11)
    await onApi_SearchContact(req, res);
})


app.get('/group', async (req, res) => {
    await onApi_GetGroup(req, res);
})
app.post('/group', allow_CreateGroup, async (req, res) => {
    await onApi_CreateGroup(req, res);
})
app.delete('/group', allow_DeleteGroup, async (req, res) => {
    await onApi_DeleteGroup(req, res);
})

app.post('/group/contact', allow_CreateGroupContact, async (req, res) => {
    await onApi_CreateGroupContact(req, res);
})
app.delete('/group/contact', allow_DeleteGroupContact, async (req, res) => {
    await onApi_DeleteGroupContact(req, res);
})

app.listen(3000)

