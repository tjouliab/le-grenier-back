import { Injectable } from '@nestjs/common';
import { Asset, BedType, BedroomDto, RoomPrice } from './dto/bedroom.dto';

@Injectable()
export class BedroomsService {
  findAll(): BedroomDto[] {
    return [
      {
        imagesPath: ['', ''],
        bedroomName: 'Salon',
        numberPersonMax: 6,
        numberSurface: 30,
        price: RoomPrice.Cheap,
        bedType: BedType.CouchTwo,
        shortDescription:
          'Idéal pour tous vos types de séjours, courts ou longs, en solo, en famille ou entre amis.',
        assets: [Asset.Tele, Asset.Consoles, Asset.Mirror],
      },
    ];
  }
}
