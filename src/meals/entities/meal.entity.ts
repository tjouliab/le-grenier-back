import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MealTypes, MealPrices, AllergiesName } from '../dto/meal.dto';

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
