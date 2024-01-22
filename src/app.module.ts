import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmtpModule } from './smtp/smtp.module';
import { MealsModule } from './meals/meals.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MealEntity } from './meals/entities/meal.entity';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { BedroomsModule } from './bedrooms/bedrooms.module';

@Module({
  imports: [
    SmtpModule,
    MealsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', ''),
    }),
    BedroomsModule,
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
