import { IsNotEmpty } from 'class-validator';

export class BedroomDto {
  @IsNotEmpty()
  imagesPath: string[];

  @IsNotEmpty()
  bedroomName: string;

  @IsNotEmpty()
  numberPersonMax: number;

  @IsNotEmpty()
  numberSurface: number;

  @IsNotEmpty()
  price: RoomPrice;

  @IsNotEmpty()
  bedType: BedType;

  @IsNotEmpty()
  shortDescription: string;

  @IsNotEmpty()
  assets: Asset[];
}

export enum BedType {
  SimpleBed = 'Lit simple',
  SimpleTwoBed = '2 Lits simples',
  DoubleBed = 'Lit double',
  Couch = 'Canapé',
  CouchTwo = '2 Canapés',
}

export enum Asset {
  Swimmingpool = 'Piscine à boule',
  Desk = 'Bureau',
  Sink = 'Evier',
  Bathroom = 'Salle de bain',
  Tele = 'Télévision',
  Consoles = 'PS5 et Nintendo Switch',
  Mirror = 'Mirror',
}

export enum RoomPrice {
  Cheap = '$',
  Normal = '$$',
  Expensive = '$$$',
}
