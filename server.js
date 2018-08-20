//Node and express requirements
var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3001;
const nodemailer = require('nodemailer');

//Static file serving for images in public/img
app.use('/static', express.static(path.join(__dirname, 'app/public')));

//Routing access for api link
// require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Server connection confirmation in node
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

// nodemailer.createTestAccount((err, account) => {
//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//         host: 'smtp.ethereal.email',
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//             user: 'smbneqkpsaluckmk@ethereal.email',
//         pass: 'sfnWV85ddphea2Vhc2'
//         }
//     });

//     // setup email data with unicode symbols
//     let mailOptions = {
//         from: '"Fred Foo 👻" <foo@example.com>', // sender address
//         to: 'bar@example.com, baz@example.com', // list of receivers
//         subject: 'Hello ✔', // Subject line
//         text: 'Hello world?', // plain text body
//         html: '<b>Hello world?</b>' // html body
//     };

//     // send mail with defined transport object
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('Message sent: %s', info.messageId);
//         // Preview only available when sending through an Ethereal account
//         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
//     });
// });