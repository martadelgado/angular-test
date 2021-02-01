import {State, Action, Selector, StateContext, StateOperator} from '@ngxs/store';
import { BoatCreationAction } from './boat-creation.actions';
import {patch, append, updateItem} from '@ngxs/store/operators';
import {BoatCreationModel} from '../models/boat-creation.model';
import {Injectable} from '@angular/core';
import {BoatService} from '../boat.service';

export interface BoatCreationStateModel {
  items: BoatCreationModel[];
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
    return state.items;
  }

  @Action(BoatCreationAction.AddOwner)
  addOwner(ctx: StateContext<BoatCreationStateModel>, { owner }: BoatCreationAction.AddOwner) {
    const state = ctx.getState();
    ctx.setState(
      patch({
        items: append([owner])
      })
    );
  }

  @Action(BoatCreationAction.AddType)
  addType(ctx: StateContext<BoatCreationStateModel>, { boatType }: BoatCreationAction.AddType) {
    const state = ctx.getState();
    ctx.setState(
      patch({
        items: append([boatType])
      })
    );
  }

  @Action(BoatCreationAction.AddSettings)
  addSettings(ctx: StateContext<BoatCreationStateModel>, { settings }: BoatCreationAction.AddSettings) {
    const state = ctx.getState();
    ctx.setState(
      patch({
        items: append([settings])
      })
    );
  }
}
