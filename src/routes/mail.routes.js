const express = require("express");
const { sendMailController } = require("../controllers/mail.controller");

const router = express.Router();

router.post("/send-mail", sendMailController);

module.exports = router;
