import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmtpModule } from './smtp/smtp.module';

@Module({
  imports: [SmtpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
