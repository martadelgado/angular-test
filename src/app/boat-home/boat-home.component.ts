import {Component, Input, OnInit} from '@angular/core';
import {Store, Select} from '@ngxs/store';
import {BoatAction} from '../boat/boat.actions';
import {BOATS} from '../../mock-boats';
import {BoatState} from '../boat/boat.state';
import {Observable} from 'rxjs';
import {Boat} from '../boat';
import {BoatModel} from '../models/boat.model';

@Component({
  selector: 'app-boat-home',
  templateUrl: './boat-home.component.html',
  styleUrls: ['./boat-home.component.scss']
})
export class BoatHomeComponent implements OnInit {
  boats = BOATS;
  buttonText = 'Commencer';
  showBoat = true;
  searchText!: string;

  @Select(BoatState.getBoats) boats$!: Observable<any>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new BoatAction.FetchAllBoats());
  }

  search(search: string): void {
    for (const boat of this.boats) {
      const regEx = new RegExp('\\b' + search + '\\b', 'i');
      if (regEx.test(boat.type) && search !== '') {
        this.showBoat = true;
      }
    }
  }
}
