import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ContactFormMailDto } from '../dto/contactFormMailBody.dto';
import { SmtpService } from './smtp.service';

@Controller('smtp')
export class SmtpController {
  constructor(private readonly smtpService: SmtpService) {}

  @Post('sendMail')
  @UsePipes(new ValidationPipe())
  sendMailToUser(@Body() contactFormMailDto: ContactFormMailDto) {
    return this.smtpService.sendMailToUser(contactFormMailDto);
  }
}
