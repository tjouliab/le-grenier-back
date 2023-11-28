import { Injectable } from '@nestjs/common';
import { ContactFormMailDto } from '../dto/contactFormMailBody.dto';

@Injectable()
export class SmtpService {
  nodemailer = require('nodemailer');

  public sendMailToUser(contactFormMailDto: ContactFormMailDto) {
    const transporter = this.nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.APP_PASSWORD,
      },
    });

    JSON.parse(process.env.EMAIL_TO).forEach((email) => {
      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: contactFormMailDto.subject,
        text: `Message de : ${contactFormMailDto.userName}\n
          Mail : ${contactFormMailDto.userMail}\n
          Message :\n${contactFormMailDto.message}`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email envoyé : ' + info.response);
        }
      });
    });

    return;
  }
}
