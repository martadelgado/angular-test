import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { BoatCreationState, BoatStateModel } from './boat-creation.state';
import { BoatAction } from './boat-creation.actions';

describe('BoatModel store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([BoatCreationState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: BoatStateModel = {
      items: ['item-1']
    };
    store.dispatch(new BoatAction('item-1'));
    const actual = store.selectSnapshot(BoatCreationState.getState);
    expect(actual).toEqual(expected);
  });

});
