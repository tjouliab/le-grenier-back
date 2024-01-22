import { Controller, Get } from '@nestjs/common';
import { BedroomsService } from './bedrooms.service';
import { BedroomDto } from './dto/bedroom.dto';

@Controller('bedrooms')
export class BedroomsController {
  constructor(private readonly bedroomsService: BedroomsService) {}

  @Get()
  async findAll(): Promise<BedroomDto[]> {
    const bedroomsFound: BedroomDto[] = this.bedroomsService.findAll();
    if (bedroomsFound.length === 0) {
      return;
    }
    return this.bedroomsService.findAll();
  }
}
