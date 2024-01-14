import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AllergiesName, MealDto, MealPrices, MealTypes } from './dto/meal.dto';
import * as fs from 'fs';
import * as path from 'path';

const MealPlaceholderFileName = 'meal-placeholder.png';

@Injectable()
export class MealsService {
  findAll(): MealDto[] {
    return [
      {
        imagePath: 'pates-pesto.png',
        chefName: 'Mattéo',
        mealTitle: 'Pâtes au pesto',
        type: MealTypes.Dessert,
        price: MealPrices.Cheap,
        description:
          "Délicieuses pâtes accompagnées d'un fromage dégoulinant miam miam",
        allergies: [AllergiesName.Gluten, AllergiesName.Milk],
      },
      {
        imagePath: 'meal-placeholder.png',
        chefName: 'Mattéo',
        mealTitle: 'Pâtes au pesto',
        type: MealTypes.Main,
        price: MealPrices.Cheap,
        description:
          "Délicieuses pâtes accompagnées d'un fromage dégoulinant miam miam",
        allergies: [AllergiesName.Egg],
      },
    ];
  }

  async addUrlImageToPath(meals: MealDto[]): Promise<MealDto[]> {
    const imagesDirectory: string = path.resolve(
      __dirname,
      '../../src/assets/images/meals',
    );
    try {
      const files = await fs.promises.readdir(imagesDirectory);
      meals.forEach((meal) => {
        const imagePath =
          files.find((file) => file === meal.imagePath) ||
          MealPlaceholderFileName;
        const fullImagePath = `${process.env.IMAGES_PATH_URL}meals/${imagePath}`;
        meal.imageUrl = fullImagePath;
      });
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return meals;
  }
}
