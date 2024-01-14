import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmtpModule } from './smtp/smtp.module';
import { MealsModule } from './meals/meals.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MealEntity } from './meals/entities/meal.entity';

@Module({
  imports: [
    SmtpModule,
    MealsModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'Le_Grenier_DB',
    //   entities: [MealEntity],
    //   synchronize: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
