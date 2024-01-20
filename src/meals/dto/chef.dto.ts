import * as moment from 'moment';

export class ChefData {
  id: number;
  name: string;
  picturePath: string;
  status: string;
  arrivalDay: moment.Moment;
  highlight: string;
}

export enum ChefName {
  Matteo = 1,
  Hugo = 2,
  Elise = 3,
  Anthony = 4,
  Nathan = 5,
  Mathis = 6,
  Thelma = 7,
  Manon = 8,
  Timothe = 9,
}

export const MatteoChef: ChefData = {
  id: 1,
  name: 'Mattéo',
  picturePath: '',
  status: 'Membre éminent',
  arrivalDay: moment.utc().set({
    minute: 0,
    hour: 0,
    day: 1,
    month: 2,
    year: 2023,
  }),
  highlight: 'Fut Le Parrain de la Mafia',
};

export const ChefList = [MatteoChef];
