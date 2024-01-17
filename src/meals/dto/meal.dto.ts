import { IsNotEmpty, IsOptional } from 'class-validator';
import { AllergiesName, Allergy } from './allergy.dto';

export class MealDto {
  @IsNotEmpty()
  imagePath: string;

  @IsNotEmpty()
  chefName: string;

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

  @IsOptional()
  allergies?: Allergy[];

  @IsOptional()
  imageUrl?: string;
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
