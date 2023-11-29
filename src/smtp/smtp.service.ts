import { Injectable } from '@nestjs/common';
import { ContactFormMailDto } from '../dto/contactFormMailBody.dto';
// import * as fs from 'fs';

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

    // const logoPath = 'src/assets/images/logo-grenier-compressed.png';
    // const logoAsBase64 = fs.readFileSync(logoPath, 'base64');

    JSON.parse(process.env.EMAIL_TO).forEach((email: string) => {
      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: `Le Grenier: ${contactFormMailDto.subject}`,
        html: `
          <!DOCTYPE html>
          <html>
          <body><div>
          <p>Message de : ${contactFormMailDto.userName}</p>
          <p>Au sujet de : ${contactFormMailDto.subject}</p>
          <p>Mail : ${contactFormMailDto.userMail}</p>
          <p>Message :\n${contactFormMailDto.message}</p>
          </div></body>
          </html>`,
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
