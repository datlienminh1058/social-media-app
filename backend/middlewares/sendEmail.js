const nodeMailer = require('nodemailer');

exports.sendEmail = async (options) => {

    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
          user: "datlienminh1051@gmail.com",
          pass: "dat123123"
        }
      });

    const mailOptions = {
        from: process.env.SMPT_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
    }
    await transporter.sendMail(mailOptions);
}