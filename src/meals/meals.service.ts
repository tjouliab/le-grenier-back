import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MealDto, MealPrices, MealTypes } from './dto/meal.dto';
import * as fs from 'fs';
import * as path from 'path';
import { AllergiesList, AllergiesName } from './dto/allergy.dto';

const MealPlaceholderFileName = 'meal-placeholder.jpg';

@Injectable()
export class MealsService {
  findAll(): MealDto[] {
    return [
      // Les Entrées
      {
        imagePath: 'quiches.jpg',
        chefName: 'Élise',
        mealTitle: 'Quîches',
        type: MealTypes.Entry,
        price: MealPrices.Normal,
        description:
          'Fleuron de la gastronomie française, nos quîches vous feront voyager autour du monde.',
        allergiesName: [
          AllergiesName.Gluten,
          AllergiesName.Egg,
          AllergiesName.Milk,
        ],
      },
      // Les plats
      {
        imagePath: 'pates-pesto.jpg',
        chefName: 'Mattéo',
        mealTitle: 'Pâtes au pesto',
        type: MealTypes.Main,
        price: MealPrices.Cheap,
        description:
          "Délicieuses pâtes au pesto Barilla, le seul et l'unique. Accompagnées d'un fromage dégoulinant au choix.",
        allergiesName: [AllergiesName.Peanut],
      },
      {
        imagePath: 'starling.jpg',
        chefName: 'Anthony',
        mealTitle: 'Starling',
        type: MealTypes.Main,
        price: MealPrices.Normal,
        description: 'Des burgers frais et locaux, que demander de plus ?',
        allergiesName: [AllergiesName.Gluten],
      },
      {
        imagePath: 'outfry.jpg',
        chefName: 'Nathan',
        mealTitle: 'Out Fry',
        type: MealTypes.Main,
        price: MealPrices.Expensive,
        description:
          'Du poulet bien croustillant et leurs épices, à retrouver en bucket ou en burger !',
        allergiesName: [AllergiesName.Gluten],
      },
      {
        imagePath: 'pizzas.jpg',
        chefName: 'Mathis',
        mealTitle: 'Pizzas',
        type: MealTypes.Main,
        price: MealPrices.Cheap,
        description:
          'Fleuron de la gastronomie italienne, elles sont délicieuses.',
        allergiesName: [AllergiesName.Gluten, AllergiesName.Egg],
      },
      // Les desserts
      {
        imagePath: 'cookies.jpg',
        chefName: 'Mattéo',
        mealTitle: 'Cookies',
        type: MealTypes.Dessert,
        price: MealPrices.Normal,
        description:
          'Des cookies généreux et bien chocolatés, on ne lésine pas sur la quantité.',
        allergiesName: [
          AllergiesName.Gluten,
          AllergiesName.Egg,
          AllergiesName.Milk,
        ],
      },
      {
        imagePath: 'crepes.jpg',
        chefName: 'Thelma',
        mealTitle: 'Crêpes',
        type: MealTypes.Dessert,
        price: MealPrices.Cheap,
        description:
          "Parce qu'une envie de crêpes peut survenir à tout instant, les accompagnements sont en suppléments (confiture, Nutella, citron, sucre)",
        allergiesName: [
          AllergiesName.Gluten,
          AllergiesName.Egg,
          AllergiesName.Milk,
        ],
      },
    ];
  }

  async addUrlImageFromPath(meals: MealDto[]): Promise<MealDto[]> {
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

  addAllergiesFromAllergiesName(meals: MealDto[]): MealDto[] {
    meals.forEach((meal) => {
      if (meal.allergiesName) {
        meal.allergies = AllergiesList.filter((allergy) =>
          meal.allergiesName.includes(allergy.id),
        );
      } else {
        meal.allergies = [];
      }
    });
    return meals;
  }
}
