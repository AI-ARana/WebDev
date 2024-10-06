var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'anuragrana.anu@gmail.com',
        pass: 'pwog uaoq lqzc sfud'
    }
});

var mailOptions = {
    from: 'anuragrana.anu@gmail.com',
    to: 'anuragrana@shooliniuniversity.com',
    subject: 'Sending Email using Node.js',
    text: 'Hi! Anurag Rana',
    //html: '<h1>Welcome</h1><p>AI Scientist!</p>'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
