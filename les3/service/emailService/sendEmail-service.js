const mailer = require('nodemailer');

const {EMAIL, PASSWORD} = require('../../config/email_info');

module.exports = async email => {
    let transport = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL,
            pass: PASSWORD
        }
    });

    await transport.sendMail({
        to: email,
        from: EMAIL,
        html: 'HELLO FROM LUN!',
        subject: 'TEST MESSAGE'
    })
};