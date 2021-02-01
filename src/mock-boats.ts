import {BoatModel} from './app/models/boat.model';

export const BOATS: BoatModel[] = [
  {
    id: 1,
    ownerType: 'Particular',
    type: 'Catamaran',
    length: 12.35,
    width: 3.96,
    foil: false,
    draught: 2,
    equipment: true,
    annex: true,
  },
  {
    id: 2,
    ownerType: 'Particular',
    type: 'Sailing Boat',
    length: 44,
    width: 12,
    foil: false,
    draught: 41,
    equipment: true,
    annex: true,
  },
  {
    id: 3,
    ownerType: 'Particular',
    type: 'Jet-ski',
  },
  {
    id: 4,
    ownerType: 'Particular',
    type: 'Jet-ski',
  },
];
