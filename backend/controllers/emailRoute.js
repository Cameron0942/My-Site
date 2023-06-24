//? SENDINBLUE
let SibApiV3Sdk = require('sib-api-v3-sdk');
const apiKey = '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';
const sendinblue = new SibApiV3Sdk.TransactionalEmailsApi();
sendinblue.apiClient.authentications['api-key'].apiKey = apiKey;

//? EMAIL template
const emailSendTemplate = require('../email-templates/emailToMe');

// In Express, middleware functions are expected to either call the next function to pass control to the next middleware in the chain or
// send a response to the client using res.send(), res.json(), or similar methods.
const emailRoute = async (req, res, next) => {
    const currentDate = new Date();
    console.log('Current date:', currentDate.toDateString());
    console.log('Current time:', currentDate.toTimeString());


    const name = req.body.name || 'No name was given';
    const email = req.body.email;
    const message = req.body.message;

    try {
        const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
        sendSmtpEmail.subject = 'Direct contact from my portfolio site';
        sendSmtpEmail.htmlContent = (()=>{return emailSendTemplate(message, name, email)})();
        sendSmtpEmail.sender = { name: name, email: email };
        sendSmtpEmail.to = [{ email: 'cburnsdev@gmail.com' }];
      
        const response = await sendinblue.sendTransacEmail(sendSmtpEmail);
        
        
        console.log('\u001b[1;32mEmail sent successfully\u001b[33m');
        console.log(`${currentDate.toDateString()}`);
        console.log(`${currentDate.toTimeString()}`);
        console.log("Message ID: \u001b[0m", response.messageId);
      
        res.sendStatus(200);
      } catch (error) {
          console.error('\u001b[1;31mError sending email:\u001b[0m', error);
          console.error(`\u001b[33m${currentDate.toDateString()}`);
          console.error(`${currentDate.toTimeString()}\u001b[0m`);
        res.sendStatus(500);
      }
};

module.exports = emailRoute;