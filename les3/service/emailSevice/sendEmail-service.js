const mailer = require('nodemailer');

module.exports = async email => {
    let transport = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: '',
            pass: ''
        }
    });

    await transport.sendMail({
        to: email,
        from: '',
        html: 'HELLO FROM LUN!',
        subject: 'TEST MESSAGE'
    })
};