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

    const emailsToSend = JSON.parse(process.env.EMAIL_TO);

    return Promise.all(
      emailsToSend.map((email: string) => {
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
          <p style="white-space: pre-wrap;">Message :<br/>${contactFormMailDto.message}</p>
          </div></body>
          </html>`,
        };

        return new Promise((resolve, reject) => {
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              reject(error);
            } else {
              resolve(info);
            }
          });
        });
      }),
    )
      .then(() => {
        console.log('Tous les e-mails ont été envoyés avec succès.');
      })
      .catch((error) => {
        throw new Error(
          `Erreur lors de l'envoi de l'e-mail : ${error.message}`,
        );
      });
  }
}
