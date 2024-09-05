const express = require("express");
const router = express.Router();
const controllerFns = require('../controllers/contactController');
const validateToken = require("../middleware/validateTokenHandler");


router.use(validateToken);

router.route("/")
     .get(controllerFns.getContacts)
     .post(controllerFns.createContact);

router.route("/:id")
     .get(controllerFns.getContact)
     .put(controllerFns.updateContact)
     .delete(controllerFns.deleteContact);

module.exports = router;
