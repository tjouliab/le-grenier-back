import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ContactFormMailDto } from '../dto/contactFormMailBody.dto';

@Controller('smtp')
export class SmtpController {
  @Post('sendMail')
  @UsePipes(new ValidationPipe())
  sendMailToUser(@Body() contactFormMailDto: ContactFormMailDto) {
    console.log('contactFormMailDto', contactFormMailDto);
    return;
  }
}
