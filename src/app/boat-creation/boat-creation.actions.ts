import {BoatTypeModel} from '../models/boat-type.model';
import {BoatOwnerModel} from '../models/boat-owner.model';
import {BoatSettingsModel} from '../models/boat-settings.model';

// tslint:disable-next-line:no-namespace
export namespace BoatCreationAction {
  export class AddOwner {
    public static readonly type = '[BoatOwnerModel] Add item';
    constructor(public owner: BoatOwnerModel[]) { }
  }

  export class AddType {
    public static readonly type = '[BoatTypeModel] Add item';
    constructor(public boatType: BoatTypeModel[]) { }
  }

  export class AddSettings {
    public static readonly type = '[BoatSettingsModel] Add item';
    constructor(public settings: BoatSettingsModel[]) { }
  }
}
