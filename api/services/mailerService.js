const mailer = require("nodemailer")

const transporter = mailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'lynn25@ethereal.email',
        pass: 't2cex19NkJqmQbkm7a'
    }
})

transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Mailer is working");
    }
})

module.exports = transporter, class MailerService {
    async SendWelcomeEmail(email) {
        const data = {
            from: 'Test <lynn25@ethereal.email>',
            to: email,
            subject: 'Test',
            text: 'text'
        }
        return mailer.sendMail(data)
    }
}