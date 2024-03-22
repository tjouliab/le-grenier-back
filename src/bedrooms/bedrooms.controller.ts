import { Controller, Get } from '@nestjs/common';
import { BedroomsService } from './bedrooms.service';
import { BedroomDto } from './dto/bedroom.dto';

@Controller('bedrooms')
export class BedroomsController {
  constructor(private readonly bedroomsService: BedroomsService) {}

  @Get()
  async findAll(): Promise<BedroomDto[]> {
    return this.bedroomsService.findAll();
  }
}
