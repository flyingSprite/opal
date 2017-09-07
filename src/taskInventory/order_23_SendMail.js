import nodemailer from 'nodemailer';

import {
  EMAIL_SERVICE,
  EMAIL_USERNAME,
  EMAIL_AUTHORIZATION_CODE
} from '../consts/config';

/**
 * Order 23: Send email by 126 mial.
 *
 */


class Sendmail {

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: EMAIL_SERVICE,
      auth: {
        user: EMAIL_USERNAME,
        pass: EMAIL_AUTHORIZATION_CODE
      }
    });
  }

  sendText(to, subject, content) {
    const mailOptions = {
      from: EMAIL_USERNAME,
      to: to,
      subject: subject,
      text: content
    };
    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
}

export default Sendmail;
