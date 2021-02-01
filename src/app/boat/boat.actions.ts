import {BoatModel} from '../models/boat.model';

// tslint:disable-next-line:no-namespace
export namespace BoatAction {
  export class AddBoat {
    public static readonly type = '[BoatModel] Add item';

      constructor(public boat: BoatModel) { }
  }

  export class FetchAllBoats {
    public static readonly type = '[BoatModel] Fetch All';
  }
}
