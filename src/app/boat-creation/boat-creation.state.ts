import {State, Action, Selector, StateContext, StateOperator} from '@ngxs/store';
import { BoatCreationAction } from './boat-creation.actions';
import {Injectable} from '@angular/core';

export interface BoatCreationStateModel {
  id?: number;
  ownerType?: string;
  type?: string;
  length?: number;
  width?: number;
  draught?: number;
  equipment?: boolean;
  annex?: boolean;
  foil?: boolean;
}

@State<BoatCreationStateModel>({
  name: 'boatCreation',
  defaults: {
    items: [],
  }
})
@Injectable()
export class BoatCreationState {

  constructor() {}

  @Selector()
  public static getState(state: BoatCreationStateModel) {
    return state;
  }

  @Selector()
  public static getCreatedBoat(state: BoatCreationStateModel) {
    return state;
  }

  @Selector()
  static getBoatType(state: BoatCreationStateModel) {
    return state.type;
  }

  @Action(BoatCreationAction.AddOwner)
  addOwner({ getState, patchState }: StateContext<BoatCreationStateModel>, {owner}: BoatCreationAction.AddOwner) {
    patchState(owner);
  }

  @Action(BoatCreationAction.AddType)
  addType({ getState, patchState }: StateContext<BoatCreationStateModel>, {boatType}: BoatCreationAction.AddType) {
    patchState(boatType);
  }

  @Action(BoatCreationAction.AddSettings)
  addSettings({ getState, patchState }: StateContext<BoatCreationStateModel>, {settings}: BoatCreationAction.AddSettings) {
    patchState(settings);
  }
}
