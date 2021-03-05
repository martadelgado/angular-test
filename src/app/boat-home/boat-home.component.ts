import {Component, Input, OnInit} from '@angular/core';
import {Store, Select} from '@ngxs/store';
import {BoatAction} from '../boat/boat.actions';
import {BOATS} from '../../mock-boats';
import {BoatState} from '../boat/boat.state';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {BoatModel} from '../models/boat.model';

@Component({
  selector: 'app-boat-home',
  templateUrl: './boat-home.component.html',
  styleUrls: ['./boat-home.component.scss']
})
export class BoatHomeComponent implements OnInit {
  boats = BOATS;
  buttonText = 'Commencer';
  searchText = new FormControl();

  @Select(BoatState.getBoats) boats$!: Observable<BoatModel[]>;
  displayedBoats: BoatModel[] = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new BoatAction.FetchAllBoats());
    this.boats$.subscribe( boats =>
      this.displayedBoats = boats
    );
  }

  search(search: FormControl): void {
    const regEx = new RegExp('\\b' + search.value + '\\b', 'i');
    const boatsToDisplay = this.boats.filter(boat => regEx.test(boat.type));
    this.displayedBoats.push(boatsToDisplay);
    console.log(this.displayedBoats);
  }
}
