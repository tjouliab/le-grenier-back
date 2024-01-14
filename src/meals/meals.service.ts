import { Injectable } from '@nestjs/common';
import { AllergiesName, MealDto, MealPrices, MealTypes } from './dto/meal.dto';

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
}
