import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MealDto, MealPrices, MealTypes } from './dto/meal.dto';
import * as fs from 'fs';
import * as path from 'path';
import { AllergiesList, AllergiesName } from './dto/allergy.dto';
import { ChefList, ChefName, MatteoChef } from './dto/chef.dto';

const MealPlaceholderFileName = 'meal-placeholder.jpg';
const ChefPlaceholderFileName = 'person-placeholder.jpg';

@Injectable()
export class MealsService {
  findAll(): MealDto[] {
    return [
      // Les Entrées
      {
        imagePath: 'quiches.jpg',
        chefName: ChefName.Elise,
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
        chefName: ChefName.Matteo,
        mealTitle: 'Pâtes au pesto',
        type: MealTypes.Main,
        price: MealPrices.Cheap,
        description:
          "Délicieuses pâtes au pesto Barilla, le seul et l'unique. Accompagnées d'un fromage dégoulinant au choix.",
        allergiesName: [AllergiesName.Peanut],
      },
      {
        imagePath: 'starling.jpg',
        chefName: ChefName.Anthony,
        mealTitle: 'Starling',
        type: MealTypes.Main,
        price: MealPrices.Normal,
        description: 'Des burgers frais et locaux, que demander de plus ?',
        allergiesName: [AllergiesName.Gluten],
      },
      {
        imagePath: 'outfry.jpg',
        chefName: ChefName.Nathan,
        mealTitle: 'Out Fry',
        type: MealTypes.Main,
        price: MealPrices.Expensive,
        description:
          'Du poulet bien croustillant et leurs épices, à retrouver en bucket ou en burger !',
        allergiesName: [AllergiesName.Gluten],
      },
      {
        imagePath: 'pizzas.jpg',
        chefName: ChefName.Mathis,
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
        chefName: ChefName.Matteo,
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
        chefName: ChefName.Thelma,
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

  async addUrlMealImageFromPath(meals: MealDto[]): Promise<MealDto[]> {
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

  async addUrlChefImageFromPath(meals: MealDto[]): Promise<MealDto[]> {
    const imagesDirectory: string = path.resolve(
      __dirname,
      '../../src/assets/images/chefs',
    );
    try {
      const files = await fs.promises.readdir(imagesDirectory);
      meals.forEach((meal) => {
        const imagePath =
          files.find((file) => file === meal.chefData.picturePath) ||
          ChefPlaceholderFileName;
        const fullImagePath = `${process.env.IMAGES_PATH_URL}chefs/${imagePath}`;
        meal.chefData.picturePath = fullImagePath;
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

  addChefFromChefName(meals: MealDto[]): MealDto[] {
    meals.forEach((meal) => {
      if (meal.chefName) {
        const chefFound = ChefList.find((chef) => chef.id === meal.chefName);
        if (chefFound) {
          meal.chefData = chefFound;
        } else {
          meal.chefData = MatteoChef;
        }
      } else {
        meal.chefData = MatteoChef;
      }
    });
    return meals;
  }

  async addComplementaryData(meals: MealDto[]): Promise<MealDto[]> {
    meals = this.addAllergiesFromAllergiesName(meals);
    meals = this.addChefFromChefName(meals);
    meals = await this.addUrlMealImageFromPath(meals);
    meals = await this.addUrlChefImageFromPath(meals);
    return meals;
  }
}
