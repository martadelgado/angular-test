import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { BoatState, BoatStateModel } from './boat.state';
import { BoatAction } from './boat.actions';

describe('BoatModel store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([BoatState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: BoatStateModel = {
      items: ['item-1']
    };
    store.dispatch(new BoatAction('item-1'));
    const actual = store.selectSnapshot(BoatState.getState);
    expect(actual).toEqual(expected);
  });

});
