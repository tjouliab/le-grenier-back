import { IsNotEmpty } from 'class-validator';
import { AllergiesName, Allergy } from './allergy.dto';
import { ChefData, ChefName } from './chef.dto';

export class MealDto {
  @IsNotEmpty()
  imagePath: string;

  @IsNotEmpty()
  chefName: ChefName;

  @IsNotEmpty()
  mealTitle: string;

  @IsNotEmpty()
  type: MealTypes;

  @IsNotEmpty()
  price: MealPrices;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  allergiesName: AllergiesName[] = [];

  @IsNotEmpty()
  allergies?: Allergy[];

  @IsNotEmpty()
  imageUrl?: string;

  @IsNotEmpty()
  chefData?: ChefData;
}

export enum MealPrices {
  Cheap = '$',
  Normal = '$$',
  Expensive = '$$$',
}

export enum MealTypes {
  Entry = 1,
  Main = 2,
  Dessert = 3,
}
