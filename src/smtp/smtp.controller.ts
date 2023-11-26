import { Body, Controller, Post } from '@nestjs/common';
import { ContactFormMailDto } from '../dto/contactFormMailBody.dto';

@Controller('smtp')
export class SmtpController {
  @Post('sendMail')
  sendMailToUser(@Body() contactFormMailDto: ContactFormMailDto) {
    console.log('contactFormMailDto', contactFormMailDto);
    return;
  }
}
