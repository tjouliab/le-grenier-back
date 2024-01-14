import { Controller, Get } from '@nestjs/common';
import { MealsService } from './meals.service';
import { MealDto } from './dto/meal.dto';

@Controller('meals')
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @Get()
  async findAll(): Promise<MealDto[]> {
    const mealsFound: MealDto[] = this.mealsService.findAll();
    if (mealsFound.length === 0) {
      return;
    }
    return this.mealsService.addUrlImageToPath(mealsFound);
  }
}
