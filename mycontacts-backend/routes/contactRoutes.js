const express = require("express");
const {
  getContacts,
  createContact,
  updateContact,
  getContact,
  deleteContact,
} = require("../controllers/contactController");

const router = express.Router();

router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
