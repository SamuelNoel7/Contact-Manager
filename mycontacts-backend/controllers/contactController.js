const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel");
//@desc Get All Contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async(req, res) => {
  const contacts = await Contact.find();
  if(!contacts){
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contacts);
});
//@desc Create new Contact
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async(req, res) => {
    console.log(req.body);
    const {name,email,phone} = req.body;
    if(!name||!email||!phone){
        res.status(400);
        throw new Error("All Fields are mandatory");
    }
    const contact = await Contact.create({name,email,phone});

  res.status(201).json(contact);
});

//@desc Get All Contacts
//@route FET /api/contacts
//@access public

const getContact = asyncHandler(async(req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

//@desc Update a Contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async(req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact not found");
  }
  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  );
  res.status(200).json(updateContact);
});

//@desc Delete a Contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async(req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact not found");
  }
  await Contact.deleteOne(contact);
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  createContact,
  updateContact,
  getContact,
  deleteContact,
};
