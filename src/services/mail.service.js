const transporter = require("../config/mailer");

async function sendMail({ to, subject, text, html }) {
  return transporter.sendMail({
    from: `"Quân ❤️" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    html,
  });
}

module.exports = { sendMail };
