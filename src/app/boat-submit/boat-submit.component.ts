import { Component, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {BoatCreationState} from '../boat-creation/boat-creation.state';
import {BOATS} from '../../mock-boats';
import {BoatAction} from '../boat/boat.actions';
import {BoatModel} from '../models/boat.model';
import {Boat} from '../boat';

@Component({
  selector: 'app-boat-submit',
  templateUrl: './boat-submit.component.html',
  styleUrls: ['./boat-submit.component.scss']
})
export class BoatSubmitComponent implements OnInit {
  boats = BOATS;
  buttonText = 'Sauvegarder';

  @Select(BoatCreationState.getCreatedBoat)
  boatItems$!: Observable<Boat[]>;
  boatItems!: Boat[];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.boatItems$
      .subscribe(boatItems => {
        this.boatItems = boatItems;
      });
  }

  addBoat(): void {
    this.store.dispatch(new BoatAction.AddBoat(this.boatItems));
  }
}
