const { sendMail } = require("../services/mail.service");

async function sendMailController(req, res) {
  try {
    const { to, subject, text, html } = req.body;
    const info = await sendMail({ to, subject, text, html });
    res.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
}

module.exports = { sendMailController };
