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
  Jo = 10,
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

export const HugoChef: ChefData = {
  id: 2,
  name: 'Hugo',
  picturePath: '',
  status: 'Membre honoraire',
  arrivalDay: moment.utc().set({
    minute: 0,
    hour: 0,
    day: 1,
    month: 6,
    year: 2021,
  }),
  highlight: 'Est notre grand-père à tous, Papi Hugo',
};

export const EliseChef: ChefData = {
  id: 3,
  name: 'Elise',
  picturePath: 'elise.jpg',
  status: 'Squatteuse à temps partiel',
  arrivalDay: moment.utc().set({
    minute: 0,
    hour: 0,
    day: 1,
    month: 2,
    year: 2022,
  }),
  highlight: 'Elise ça rime avec bêtises',
};

export const AnthonyChef: ChefData = {
  id: 4,
  name: 'Anthony',
  picturePath: '',
  status: 'Rapporté',
  arrivalDay: moment.utc().set({
    minute: 0,
    hour: 0,
    day: 1,
    month: 6,
    year: 2023,
  }),
  highlight: 'Aime TRES fort ses colocs',
};

export const NathanChef: ChefData = {
  id: 5,
  name: 'Nathan',
  picturePath: '',
  status: 'Membre honoraire',
  arrivalDay: moment.utc().set({
    minute: 0,
    hour: 0,
    day: 1,
    month: 6,
    year: 2021,
  }),
  highlight: 'Fut Le Parrain de la Mafia',
};

export const MathisChef: ChefData = {
  id: 6,
  name: 'Mathis',
  picturePath: '',
  status: 'Membre putatif',
  arrivalDay: moment.utc().set({
    minute: 0,
    hour: 0,
    day: 1,
    month: 6,
    year: 2023,
  }),
  highlight: 'Prénom Mac, Nom Faden',
};

export const ThelmaChef: ChefData = {
  id: 7,
  name: 'Thelma',
  picturePath: '',
  status: 'Membre éminent',
  arrivalDay: moment.utc().set({
    minute: 0,
    hour: 0,
    day: 1,
    month: 6,
    year: 2023,
  }),
  highlight: '',
};

export const ManonChef: ChefData = {
  id: 8,
  name: 'Manon',
  picturePath: '',
  status: 'Stagiaire honoraire',
  arrivalDay: moment.utc().set({
    minute: 0,
    hour: 0,
    day: 1,
    month: 10,
    year: 2021,
  }),
  highlight: '',
};

export const TimotheChef: ChefData = {
  id: 9,
  name: 'Timothé',
  picturePath: '',
  status: 'Stagiaire putatif honoraire',
  arrivalDay: moment.utc().set({
    minute: 0,
    hour: 0,
    day: 1,
    month: 3,
    year: 2022,
  }),
  highlight: '',
};

export const JoChef: ChefData = {
  id: 10,
  name: 'Jo',
  picturePath: '',
  status: 'Membre honoraire',
  arrivalDay: moment.utc().set({
    minute: 0,
    hour: 0,
    day: 1,
    month: 6,
    year: 2021,
  }),
  highlight: '',
};

export const ChefList = [
  MatteoChef,
  HugoChef,
  EliseChef,
  AnthonyChef,
  NathanChef,
  MathisChef,
  ThelmaChef,
  ManonChef,
  TimotheChef,
  JoChef,
];
