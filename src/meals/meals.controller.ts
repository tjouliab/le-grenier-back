import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { MealsService } from './meals.service';
import * as fs from 'fs';
import * as path from 'path';
import { MealDto } from './dto/meal.dto';

const MealPlaceholderFileName = 'meal-placeholder.png';

@Controller('meals')
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @Get()
  findAll(): Promise<MealDto[]> {
    const mealsToReturn: MealDto[] = this.mealsService.findAll();
    if (mealsToReturn.length === 0) {
      return;
    }
    const imagesDirectory: string = path.resolve(
      __dirname,
      '../../src/assets/images/meals',
    );
    fs.readdir(imagesDirectory, (err, files) => {
      if (err) {
        throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
      } else {
        return mealsToReturn.map((meal) => {
          const imagePath =
            files.find((file) => file === meal.imagePath) ||
            MealPlaceholderFileName;
          const fullImagePath = path.join(imagesDirectory, imagePath);
          const encodedImage = fs
            .readFileSync(fullImagePath)
            .toString('base64');
          meal.encodedImage = encodedImage;
          return meal;
        });
      }
    });
  }
}
