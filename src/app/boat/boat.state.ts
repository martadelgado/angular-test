import { State, Action, Selector, StateContext } from '@ngxs/store';
import { BoatAction } from './boat.actions';
import {BoatService} from '../boat.service';
import {tap} from 'rxjs/operators';
import {BoatModel} from '../models/boat.model';
import {Injectable} from '@angular/core';

export interface BoatStateModel {
  items: BoatModel[];
}

@State<BoatStateModel>({
  name: 'boat',
  defaults: {
    items: [],
  }
})
@Injectable()
export class BoatState {

  constructor(private boatService: BoatService) {}

  @Selector()
  public static getState(state: BoatStateModel) {
    return state;
  }

  @Selector()
  public static getBoats(state: BoatStateModel) {
    return state.items;
  }

  @Action(BoatAction.FetchAllBoats)
  public fetchAll(ctx: StateContext<BoatStateModel>) {
    return this.boatService.getBoats().pipe(
      tap( boats => {
        ctx.patchState({items: boats});
      })
    );
  }

  @Action(BoatAction.AddBoat)
  public add(ctx: StateContext<BoatStateModel>, { boat }: BoatAction.AddBoat) {
    return this.boatService.add(boat).pipe(
      tap( result => {
        const stateModel = ctx.getState();
        stateModel.items = [...stateModel.items, boat];
        ctx.setState(stateModel);
      })
    );
  }
}
