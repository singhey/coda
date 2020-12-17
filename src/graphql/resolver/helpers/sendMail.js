const sgMail = require('@sendgrid/mail');

export default function sendMail(to, body, html) {
  //console.log(process.env.SENDGRID_API_KEY)
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to,
    from: 'street17cafe@gmail.com',
    subject: 'Reset password',
    text: body,
    html: html,
  };
  return sgMail.send(msg);
}
