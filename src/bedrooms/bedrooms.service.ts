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

      {
        imagesPath: ['', ''],
        bedroomName: 'Grenier',
        numberPersonMax: 4,
        numberSurface: 50,
        price: RoomPrice.Expensive,
        bedType: BedType.DoubleTwoBed,
        shortDescription: "Idéal pour un couple en recherche d'intimité.",
        assets: [Asset.Cathedral, Asset.Swimmingpool, Asset.Vinsha],
      },

      {
        imagesPath: ['', ''],
        bedroomName: 'Tente à boule',
        numberPersonMax: 1,
        numberSurface: 2,
        price: RoomPrice.Expensive,
        bedType: BedType.SingleBed,
        shortDescription: 'Idéale pour une virée sous-marine.',
        assets: [Asset.Swimmingpool],
      },

      {
        imagesPath: ['', ''],
        bedroomName: "Chambre d'Hugo",
        numberPersonMax: 2,
        numberSurface: 30,
        price: RoomPrice.Expensive,
        bedType: BedType.DoubleBed,
        shortDescription: 'Idéale pour une ambiance studieuse.',
        assets: [Asset.Desk, Asset.Coffee, Asset.Sink],
      },

      {
        imagesPath: ['', ''],
        bedroomName: 'Chambre de Nathan',
        numberPersonMax: 2,
        numberSurface: 15,
        price: RoomPrice.Cheap,
        bedType: BedType.DoubleBed,
        shortDescription: 'Idéale pour les ambiaces fraîches et humides.',
        assets: [Asset.Bathroom],
      },

      {
        imagesPath: ['', ''],
        bedroomName: 'Chambre de Jo',
        numberPersonMax: 2,
        numberSurface: 20,
        price: RoomPrice.Normal,
        bedType: BedType.DoubleBed,
        shortDescription: 'Idéale pour les minimalistes.',
        assets: [],
      },
    ];
  }
}
