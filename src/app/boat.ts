export class Boat {

  constructor(
    public id: number,
    public ownerType: string,
    public type: string,
    public length?: number,
    public width?: number,
    public draught?: number,
    public equipment?: boolean,
    public annex?: boolean,
    public foil?: boolean,
  ) {  }

}
