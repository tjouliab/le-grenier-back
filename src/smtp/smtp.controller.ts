import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ContactFormMailDto } from './dto/contactFormMailBody.dto';
import { SmtpService } from './smtp.service';

@Controller('smtp')
export class SmtpController {
  constructor(private readonly smtpService: SmtpService) {}

  @Post('sendMail')
  @UsePipes(new ValidationPipe())
  async sendMailToUser(@Body() contactFormMailDto: ContactFormMailDto) {
    try {
      await this.smtpService.sendMailToUser(contactFormMailDto);
      return { message: 'E-mails envoyés avec succès' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
