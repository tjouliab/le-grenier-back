import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MealTypes, MealPrices } from '../dto/meal.dto';
import { AllergiesName } from '../dto/allergy.dto';

@Entity()
export class MealEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('blob')
  image: Buffer;

  @Column()
  chefName: string;

  @Column()
  mealTitle: string;

  @Column()
  type: MealTypes;

  @Column()
  price: MealPrices;

  @Column()
  description: string;

  @Column('simple-array')
  allergies?: AllergiesName[];
}
