export interface BoatCreationModel {
  id: number;
  ownerType: string;
  type: string;
  length?: number;
  width?: number;
  draught?: number;
  equipment?: boolean;
  annex?: boolean;
  foil?: boolean;
}
