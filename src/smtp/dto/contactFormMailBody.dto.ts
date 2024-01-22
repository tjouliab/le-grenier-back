import moment from 'moment';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class ContactFormMailDto {
  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  @IsEmail()
  userMail: string;

  @IsNotEmpty()
  subject: string;

  @IsNotEmpty()
  message: string;

  @IsOptional()
  sentDate: moment.Moment;
}
