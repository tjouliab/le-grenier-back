import { IsNotEmpty, IsOptional } from 'class-validator';

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

  @IsOptional()
  allergies?: AllergiesName[] = [];

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

export enum AllergiesName {
  Vegan = 1,
  Gluten = 2,
  Milk = 3,
  Crusaceans = 4,
  Egg = 5,
  Fish = 6,
  Peanut = 7,
}
